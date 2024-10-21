import { type Context, Hono } from "hono";
import { serveStatic } from "hono/deno";
import { jsxRenderer } from "hono/jsx-renderer";
import { logger } from "hono/logger";
import chat from "./src/route/chat.route.tsx";

const app = new Hono();

app.use(
  "/public/*",
  serveStatic({
    root: "./",
  }),
);
app.use(
  "*",
  jsxRenderer(({ children }) => {
    return (
      <html>
        {children}
      </html>
    );
  }),
);
app.use(logger());

app.get("/", (c: Context) => {
  return c.text("Hello Hono!");
});
app.route("/chat", chat);

const port = Number(Deno.env.get("APP_PORT")) || 3000;
Deno.serve({ port }, app.fetch);
