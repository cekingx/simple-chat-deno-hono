import { Hono, type Context } from "hono";
import { Index as Chat } from "../view/chat/index.tsx";
import { ChatItem } from "../view/chat/chat-item.tsx";

const chatHandler = new Hono();

const chat = {
  rooms: ["Default Room"],
  chats: [
    {
      date: (new Date()).toISOString(),
      user: "user-1",
      message: "Happy new year guys!"
    },
    {
      date: (new Date()).toISOString(),
      user: "user-2",
      message: "Happy new year too!"
    }
  ]
}

chatHandler.get('/', (c: Context) => {
  return c.render(<Chat {...chat} />)
})

chatHandler.post('/', async (c: Context) => {
  const body = await c.req.parseBody();
  const newChat = {
    date: (new Date()).toISOString(),
    user: body.username as string || "",
    message: body.chat as string || ""
  }
  chat.chats.push(newChat)

  return c.render(<ChatItem {...newChat} />)
})

export default chatHandler;
