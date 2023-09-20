import answer from "@BOT/lib/actions/answer";
import { Message } from "discord.js";

export function wrapCss(text:string){
    return "```CSS\n"+text+"\n```";
}

export default class HelperBuilder {
    readonly cmd:string;
    private _content: string = "";
    private examples: string = "";
    private notes: string = "";

    constructor(cmd: string){
        this.cmd = cmd;

        this._content = `> **${this.cmd} help**\n`;
        this._content += `> lista de comandos ${this.cmd}\n`;
    }

    addExample(to: string, ex: string):this{
        const cmd = process.env.COMMAND;
        const box = wrapCss(cmd+" "+ex);
        const example = `**${to}:**${box}\n`;
        this.examples += example;
        return this
    }

    addNote(note: string):this{
        this.notes += `*"${note}"*\n`;
        return this
    }

    get content():string{
        this._content += this.notes+"\n";
        this._content += this.examples;
        return this._content;
    }
    send(message:Message, timeout:number){
        answer(message, this.content, timeout)
    }
    
}