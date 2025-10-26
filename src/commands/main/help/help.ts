import { CommandGroup } from "@grammyjs/commands";
import { Context, InlineKeyboard } from "grammy";
import { groupChats, privateChats } from "@/commands/scopes";

export default function Help(Command: CommandGroup<Context>) {
  const cmd = Command.command("help", "Получить помощь");

  const handler = (ctx: Context) => {
    const keyboard = new InlineKeyboard()
      .text("Команды", "help_commands")
      .text("О боте", "help_about");

    ctx.reply("Выберите раздел помощи:", { reply_markup: keyboard });
  };

  cmd.addToScope(privateChats, handler);
  cmd.addToScope(groupChats, handler);
}