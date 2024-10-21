import type { FC } from "hono/jsx";
import { ChatItem } from "./chat-item.tsx";

export type ChatRoomProps = {
  rooms: string[]
  chats: {
    date: string;
    user: string;
    message: string;
  }[]
}

export const Chat: FC<ChatRoomProps> = (props: ChatRoomProps) => {
  return (
    <div className="flex flex-1 flex-row">
      <div className="flex flex-none flex-col w-48 p-2 border border-black">
        {props.rooms.map((room, index) => <div key={index}>{room}</div>)}
      </div>
      <div className="flex flex-1 flex-col p-2 border border-black" id="chat-list">
        {props.chats.map((chat, index) => <ChatItem key={index} {...chat} />)}
      </div>
    </div>
  )
}