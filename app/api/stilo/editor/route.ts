import { readFileSync } from "node:fs";
import { join } from "node:path";

export function GET(): Response {
  const path = join(process.cwd(), "node_modules/@stilodev/editor/dist/editor-v1.js");
  const body = readFileSync(path, "utf-8");
  return new Response(body, {
    headers: { "content-type": "application/javascript; charset=utf-8" },
  });
}
