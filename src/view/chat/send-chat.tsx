import type { FC } from "hono/jsx";

export const SendChat: FC = () => {
  return (
    <div className="flex flex-col">
      <form>
        <div className="flex flex-row border border-black">
          <input type="text" name="username" value="user-1" className="flex-1 p-2" />
        </div>
        <div className="flex flex-row border border-black">
          <input type="text" name="chat" placeholder="Type your text" className="p-2 flex-1" />
          <button
            hx-post="/chat"
            hx-target="#chat-list"
            hx-swap="beforeend"
            className="button bg-black text-white py-2 px-3"
          >Send</button>
        </div>
      </form>
    </div>
  )
}