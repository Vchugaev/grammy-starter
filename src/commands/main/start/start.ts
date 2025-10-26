import { CommandGroup } from "@grammyjs/commands";
import { MyContext } from "@/types/context";
import { groupChats, privateChats } from "@/commands/scopes";

export default function Start(Command: CommandGroup<MyContext>) {
  const cmd = Command.command("start", "Начало");

  const handler = async (ctx: MyContext) => {
    console.log("🎯 Start command received from:", ctx.from?.id);
    try {
      await ctx.conversation.enter("hello");
      console.log("✅ Conversation entered successfully");
    } catch (error) {
      console.error("❌ Conversation error:", error);
      await ctx.reply("Произошла ошибка при запуске диалога");
    }
  };

  cmd.addToScope(privateChats, handler);
  cmd.addToScope(groupChats, handler);
}