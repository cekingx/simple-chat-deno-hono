import { FC } from "hono/jsx";

export const Layout: FC<{ title?: string; children?: any }> = (props: {
  title?: string;
  children?: any;
}) => {
  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{props.title ?? "Document"}</title>
        <link rel="stylesheet" href="public/style.css" />
        <script src="public/htmx.min.js"></script>
        <script src="public/htmx-ext-ws.js"></script>
      </head>
      <body>
        {props.children}
      </body>
    </>
  );
};
