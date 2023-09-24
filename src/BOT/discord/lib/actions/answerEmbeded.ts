import { Message } from "discord.js";

export default async function answer(message:Message, content:string){
    const {channel} = message
    channel.send({
        content,
        reply:{
            messageReference: message,
            failIfNotExists: false
        }
    })
}