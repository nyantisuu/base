import { botClient } from "@BOT/settings/bot";
import audioCommand from "./audio";
import { Message } from "discord.js";
import HelperBuilder from "@BOT/lib/builders/functions/helperBuilder";

export function loadCommands(){
    const COMMAND = process.env.COMMAND
    botClient.on("messageCreate", async (msg)=>{
        if(msg.content.startsWith(COMMAND+" ")){
            const cmds = msg.content.replace(COMMAND+" ", "").split(" ")
            const cmd = cmds.shift()
            const data:MyData = {
                message:msg,
                lastCmds: cmds
            }

            if(cmd === "audio")return audioCommand(data)

            helper(msg)
        }
    })
}

export type MyData = {
    message: Message,
    lastCmds: string[]
}


function helper(message:Message){
    new HelperBuilder(
        process.env.COMMAND)
        .addNote("Para ver os subcomandos de um comando digite !n [comando] help")
        .addExample("para reprodução de sons", "[audio] (subcomandos)")
        .send(message, 20_000);
}
