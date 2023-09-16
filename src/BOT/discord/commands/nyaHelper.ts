import { Message } from "discord.js"
import answer from "../actions/answer"

export function nyaHelper(message:Message){
    const cmd = process.env.COMMAND
    const audio = wrapCss(cmd+" audio [comando]")
    const content = `**!n help**
*lista de comandos nya!*

**para reprodução de sons:**${audio}
`
    answer(message, content, 60_000)
}

export function wrapCss(text:string){
    return "```CSS\n"+text+"\n```"
}