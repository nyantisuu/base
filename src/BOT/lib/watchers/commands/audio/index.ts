import saveAudio from "./saveAudio";
import playAudio from "./playAudio";
import listAudio from "./listAudio";
import removeAudio from "./removeAudio";
import HelperBuilder from "@BOT/lib/builders/functions/helperBuilder";
import { Message } from "discord.js";
import { CmdData } from "..";

export default async function audioCommand(data:CmdData){
    const cmd = data.lastCmds.shift()

    if(cmd === "save")return saveAudio(data)
    
    if(cmd === "play")return playAudio(data)

    if(cmd === "list")return listAudio(data)

    if(cmd === "remove")return removeAudio(data)

    helper(data.message)    
}


export function helper(message:Message){
    const cmd = process.env.COMMAND+" audio"
    new HelperBuilder(cmd)
        .addNote("Para mais detalhes digite o subcomando e adicione 'ex' ao final: !n audio save ex")
        .addExample("para reproduzir som do banco de dados","[play] (nome_do_som)")
        .addExample("para salvar som no banco de dados (com apenas 1 arquivo de som anexado)","[save] (nome_do_som) (descrição opcional)")
        .addExample("para listar todos os sons no banco de dados","[list]")
        .send(message, 40_000)
}