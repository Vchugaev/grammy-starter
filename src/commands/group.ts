import { CommandGroup } from '@grammyjs/commands';
import { Bot } from 'grammy';
import Help from '@/commands/main/help/help';
import HelpCallbacks from '@/commands/main/help/callback';
import Start from '@/commands/main/start/start';
import { MyContext } from '@/types/context';

export default function GroupCommands(bot: Bot<MyContext>) {
  const mainCommands = new CommandGroup();

  Help(mainCommands);
  Start(mainCommands);
  HelpCallbacks(bot);

  bot.use(mainCommands);
}
