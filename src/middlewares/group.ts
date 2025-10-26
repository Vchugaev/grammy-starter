import { Bot } from 'grammy';
import Logger from '@/middlewares/logger';
import { MyContext } from '@/types/context';

export default function GroupMiddlewares(bot: Bot<MyContext>) {
  bot.use(Logger);
}
