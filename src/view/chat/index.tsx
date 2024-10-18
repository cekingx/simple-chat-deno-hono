import type { FC } from "hono/jsx";
import { Layout } from "../index.tsx";

export const Chat: FC = () => {
  return (
    <Layout title="Chat">
      <div className="flex flex-row justify-center">
        <div className="flex flex-col w-full max-w-screen-md h-dvh py-2">
          <div className="flex flex-row">
            <div className="flex flex-none w-64 p-2 border border-black">Room</div>
            <div className="flex flex-1 p-2 border border-black">Room Name</div>
          </div>
          <div className="flex flex-1 flex-row">
            <div className="flex flex-none w-64 p-2 border border-black">Room</div>
            <div className="flex flex-1 flex-col p-2 border border-black">
              <div className="flex flex-row">
                <p>2024-01-01 00:00:01</p>
                <p>cekingx</p>
                <p>Happy new year guys</p>
              </div>
              <p>Message 2</p>
            </div>
          </div>
          <div className="flex flex-0 justify-self-end py-3 px-2 border border-black">Type your text</div>
        </div>
      </div>
    </Layout>
  )
}