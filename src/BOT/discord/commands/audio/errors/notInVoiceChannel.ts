import answer from "@BOT/discord/actions/answer"
import { Message } from "discord.js"

export function notInVoiceChannel(message:Message){
    const content = `Você não está num canal de voz, entre em um por favor 😭`
    answer(message, content, 5_000)
}