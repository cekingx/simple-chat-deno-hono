import type { FC } from "hono/jsx";
import { ChatItem } from "./chat-item.tsx";

export type ChatRoomProps = {
  available_rooms: string[];
  chats: {
    date: string;
    user: string;
    message: string;
  }[];
};

export const Chat: FC<ChatRoomProps> = (props: ChatRoomProps) => {
  return (
    <div className="flex flex-1 flex-row">
      <div className="flex flex-none flex-col w-48 border border-black scrollable">
        {props.available_rooms.map((room, index) => (
          <div key={index} className="p-2 mb-1 border border-black">{room}</div>
        ))}
      </div>
      <div
        className="flex flex-1 flex-col p-2 border border-black scrollable"
        id="chat-list"
        hx-ext="ws"
        ws-connect="/chat/ws"
      >
        {props.chats.map((chat, index) => <ChatItem key={index} {...chat} />)}
      </div>
    </div>
  );
};
