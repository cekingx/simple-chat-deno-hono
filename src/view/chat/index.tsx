import type { FC } from "hono/jsx";
import { Layout } from "../index.tsx";
import { Chat } from "./chat.tsx";
import { SendChat } from "./send-chat.tsx";

export type ChatProps = {
  rooms: string[]
  chats: {
    date: string;
    user: string;
    message: string;
  }[]
}

export const Index: FC<ChatProps> = (props: ChatProps) => {
  return (
    <Layout title="Chat">
      <div className="flex flex-row justify-center">
        <div className="flex flex-col w-full max-w-screen-md h-dvh py-2">
          <div className="flex flex-row">
            <div className="flex flex-none w-48 p-2 border border-black">Room</div>
            <div className="flex flex-1 p-2 border border-black">Default Room</div>
          </div>
          <Chat {...props} />
          <SendChat />
        </div>
      </div>
    </Layout>
  )
}