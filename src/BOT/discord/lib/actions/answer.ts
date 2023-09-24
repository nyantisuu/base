import { Message } from "discord.js";

export default async function answer(message:Message, content:string, timeout:number){
    const {channel} = message
    const answer = await channel.send({
        content,
        reply:{
            messageReference: message,
            failIfNotExists: false
        }
    })

    if(timeout >= 0)setTimeout(()=>{
        message.delete().catch(error =>{if(error.code !== 10008)console.error(error)})
        answer.delete().catch(error =>{if(error.code !== 10008)console.error(error)})
    }, timeout)
}