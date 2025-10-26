import { Bot } from 'grammy';
import { MyContext } from '@/types/context';

export default function HelpCallbacks(bot: Bot<MyContext>) {
  bot.on('callback_query:data', async ctx => {
    if (ctx.callbackQuery.data === 'help_commands') {
      await ctx.answerCallbackQuery();
      await ctx.editMessageText('📋 Доступные команды:\n/start\n/help\n/info');
    }

    if (ctx.callbackQuery.data === 'help_about') {
      await ctx.answerCallbackQuery();
      await ctx.editMessageText('🤖 Это стартовый бот на Grammy JS');
    }
  });
}
