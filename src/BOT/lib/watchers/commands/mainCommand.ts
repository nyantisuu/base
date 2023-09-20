import { botClient } from "@BOT/settings/bot";
import audioCommand from "./audio";
import { Message } from "discord.js";
import { nyaHelper } from "./mainHelper";

export function loadNyaCommands(){
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

            nyaHelper(msg)
        }
    })
}

export type MyData = {
    message: Message,
    lastCmds: string[]
}