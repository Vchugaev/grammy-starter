import { Bot } from "grammy";
import { MyContext } from "@/types/context";
import Catch from "@/handlers/catch";

export default function handlers(bot: Bot<MyContext>) {
  Catch(bot);
}
