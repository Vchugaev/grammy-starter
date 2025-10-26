import { Bot } from 'grammy';
import { MyContext } from '@/types/context';

export default function Catch(bot: Bot<MyContext>) {
  bot.catch(async err => {
    console.log('Error!', err);
  });
}
