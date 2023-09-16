import answer from "@BOT/discord/actions/answer"
import { Message } from "discord.js"

export function wrongAttachmentNumber(message:Message, number:number){
    const content = `**Quantidade de Anexos errada, o comando funciona apenas com 1 anexo;**\n*Quantidade que você forneceu:* ${number}`
    answer(message, content, 8_000)
}