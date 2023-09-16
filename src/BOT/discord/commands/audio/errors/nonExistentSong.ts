import { wrapCss } from "../../nyaHelper" 
import { Message } from "discord.js"
import answer from "@BOT/discord/actions/answer"

export function nonExistentSong(message:Message){
    const tip = wrapCss(process.env.COMMAND+" audio list")
    const content = `Esse som não existe! para ver a lista de sons use: ${tip}`
    answer(message, content, 8_000)
}