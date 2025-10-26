import { conversations, createConversation } from "@grammyjs/conversations";
import "dotenv/config";
import { Bot, session } from "grammy";
import GroupCommands from "@/commands/group";
import hello from "@/conversations/hello";
import connectDB from "@/db/db";
import handlers from "@/handlers/group";
import GroupMiddlewares from "@/middlewares/group";
import type { MyContext } from "@/types/context";

const bot = new Bot<MyContext>(process.env.BOT_TOKEN!);

async function bootstrap() {
  console.log("🚀 Starting bot...");

  await connectDB();

  bot.use(
    session({
      initial: () => ({}),
    })
  );

  bot.use(conversations());
  bot.use(createConversation(hello));

  handlers(bot);
  GroupMiddlewares(bot);
  GroupCommands(bot);

  console.log("🤖 Bot is running...");
  await bot.start();
}

bootstrap().catch((error) => {
  console.error("❌ Failed to bootstrap bot:", error);
  process.exit(1);
});
