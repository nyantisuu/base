import { CmdData } from "..";
import { nonExistentSong } from "./errors";
import { deleteFile } from "@BOT/settings/googleDrive";
import comment from "@BOT/lib/actions/comment";
import { PrismaService } from "@API/utils/prisma/prisma.service";
import { AudioRepository } from "@API/audios/audios.repository";

export default async function removeAudio(data:CmdData){
    const audioRepository = new AudioRepository(new PrismaService)
    const cmdExist = await audioRepository.getSound(data.lastCmds[0])
    if (!cmdExist) return nonExistentSong(data.message)

    const cmdDeleted = await audioRepository.deleteSound(data.lastCmds[0])
    deleteFile(cmdDeleted.id)
    
    let content = `**Audio deletado por ${data.message.author}:** ${cmdDeleted.command}`

    comment(data.message, content, 0, -1)
}