import type { FC } from "hono/jsx";

export type ChatItemProps = {
  date: string;
  user: string;
  message: string;
}

export const ChatItem: FC<ChatItemProps> = (props: ChatItemProps) => {
  return (
    <div className="p-2 mb-1 border border-black chat-item">
      <div className="flex flex-row justify-between">
        <p className="text-xs">{props.user}</p>
        <p className="text-gray-600 text-xs">{props.date}</p>
      </div>
      <div>
        <p>{props.message}</p>
      </div>
    </div>
  )
}