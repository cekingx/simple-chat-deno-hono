import { type Context, Hono } from "hono";
import { Index as Chat } from "../view/chat/index.tsx";
import { ChatItem } from "../view/chat/chat-item.tsx";
import { upgradeWebSocket } from "hono/deno";
import { html } from "hono/html";

const chatHandler = new Hono();

const chat = {
  room: "My Room",
  available_rooms: ["Default Room", "My Room"],
  chats: [
    {
      date: (new Date()).toISOString(),
      user: "user-1",
      message: "Happy new year guys!",
    },
    {
      date: (new Date()).toISOString(),
      user: "user-2",
      message: "Happy new year too!",
    },
  ],
};

const wsConnections: any[] = [];

chatHandler.get("/", (c: Context) => {
  return c.render(<Chat {...chat} />);
});

chatHandler.post("/", async (c: Context) => {
  const body = await c.req.parseBody();
  const newChat = {
    date: (new Date()).toISOString(),
    user: body.username as string || "",
    message: body.chat as string || "",
  };

  chat.chats.push(newChat);
  for (const ws of wsConnections) {
    if(ws.target.readyState != 1) {
      continue;
    }
    ws.target.send(html`
      <div class="flex flex-1 flex-col p-2 border border-black" id="chat-list" hx-swap-oob="beforeend">
        <div class="p-2 mb-1 border border-black chat-item">
            <div class="flex flex-row justify-between">
                <p class="text-xs">${newChat.user}</p>
                <p class="text-gray-600 text-xs">${newChat.date}</p>
            </div>
            <div><p>${newChat.message}</p></div>
        </div>
      </div>
    `);
  }

  return c.text("OK");
});

chatHandler.get("/ws", upgradeWebSocket((_c) => {
  return {
    onOpen: (ws) => {
      console.log("WebSocket opened");
      wsConnections.push(ws);
    },
    onMessage: (event, ws) => {
      console.log('ws', ws)
      console.log('message', event.data);
      ws.send('received');
    },
    onClose: () => {
      console.log("WebSocket closed");
    },
  }
}));

export default chatHandler;
