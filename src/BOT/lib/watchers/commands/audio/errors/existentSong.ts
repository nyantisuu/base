import { Message } from "discord.js"
import answer from "@BOT/lib/actions/answer"
import { wrapCss } from "@BOT/lib/builders/functions/helperBuilder"

export function existentSong(message:Message){
    const tip = wrapCss(process.env.COMMAND+" audio list")
    const content = `Esse som já existe! para ver a lista de sons use: ${tip}`
    answer(message, content, 8_000)
}