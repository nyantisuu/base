import { Message } from "discord.js";

export default async function comment(message:Message, content:string , tOutMsg:number, tOutAns:number){
    const {channel} = message
    const thisAns = await channel.send({
        content,
    })

    if(tOutMsg >= 0)setTimeout(()=>message.delete().catch(error =>{if(error.code !== 10008)console.error(error)}), tOutMsg)
    if(tOutAns >= 0)setTimeout(()=>thisAns.delete().catch(error =>{if(error.code !== 10008)console.error(error)}), tOutAns);
}