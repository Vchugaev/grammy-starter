import { Context, NextFunction } from "grammy";

export default async function Logger(ctx: Context, next: NextFunction) {
  const before = Date.now();
  await next();
  const after = Date.now();
  console.log(`Response time: ${after - before} ms`);
}
