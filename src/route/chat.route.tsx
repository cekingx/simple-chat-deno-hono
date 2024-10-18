import { Hono, type Context } from "hono";
import { Chat } from "../view/chat/index.tsx";

const chat = new Hono();

chat.get('/', (c: Context) => {
  return c.render(<Chat />)
})

export default chat;
