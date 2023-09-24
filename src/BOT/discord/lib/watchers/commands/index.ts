import HelperBuilder from "@DiscordBuilders/functions/helperBuilder";
import { botClient } from "@DiscordSettings/bot";
import { Message } from "discord.js";

//Main
export function loadCommands(){
    const COMMAND = process.env.COMMAND
    botClient.on("messageCreate", async (message:Message)=>{
        const data = extractCommandData(message, COMMAND);
        if(!data)return;

        //Commands -->
        // if(data.cmd === "example")return audioCommand(data);

        helper(data.message);
    });
};


//Functions, Types and Exports
export type CmdData = {
    cmd: string,
    message: Message,
    lastCmds: string[]
}

function extractCommandData(message:Message, command: string){
    if(message.content.startsWith(command+" ")){
        const cmds = message.content.replace(command+" ", "").split(" ");
        const cmd = cmds.shift();
        const data:CmdData = {
            cmd,
            message,
            lastCmds: cmds
        };
        return data;
    };
};

function helper(message:Message){
    new HelperBuilder(
        process.env.COMMAND)
        .addNote("Para ver os subcomandos de um comando digite !n [comando] help")
        .addExample("para reprodução de sons", "[audio] (subcomandos)")
        .send(message, 30_000);
};
