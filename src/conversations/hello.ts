// conversations/signup.conversation.ts
import { MyContext } from "@/types/context";


export default async function hello(conversation: any, ctx: MyContext) {
  await ctx.reply("Как тебя зовут?");
  const { message } = await conversation.wait();
  const name = message?.text;
  await ctx.reply("Сколько тебе лет?");
  const { message: ageMessage } = await conversation.wait();
  const age = ageMessage?.text;

  await ctx.reply(`Приятно познакомиться, ${name} (${age} лет)!`);
}