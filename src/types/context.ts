import { Context, SessionFlavor } from 'grammy';
import { ConversationFlavor } from '@grammyjs/conversations';

interface SessionData {}

type BaseContext = Context & SessionFlavor<SessionData>;

export type MyContext = BaseContext & ConversationFlavor<BaseContext>;
