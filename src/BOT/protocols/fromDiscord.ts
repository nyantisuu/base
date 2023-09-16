import { Message } from "discord.js";

type T = Pick<Message, 
    'content'    | 'attachments' | 
    'components' | 'embeds' >;

export type MyMessage = Partial<T>