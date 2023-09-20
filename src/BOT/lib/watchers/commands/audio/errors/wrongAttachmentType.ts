import answer from "@BOT/lib/actions/answer"
import { Message } from "discord.js"

export function wrongAttachmentType(message:Message){
    const content = `**Conflito no tipo de arquivo enviado, no momento aceito apenas .mp3**`
    answer(message, content, 8_000)
}