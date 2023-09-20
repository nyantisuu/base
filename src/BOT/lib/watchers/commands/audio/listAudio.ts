import { MyData } from "../mainCommand";
import answer from "@BOT/lib/actions/answer";
import { AudioRepository } from "@API/audios/audios.repository";
import { PrismaService } from "@API/utils/prisma/prisma.service";

export async function listAudio(data:MyData){
    const audioRepository = new AudioRepository(new PrismaService)
    const cmdList = await (audioRepository.listSound())
    
    let content = "**Lista de audios:**\n\n"
    cmdList.forEach((cmd)=>{
        content += `**${cmd.command}** - ${cmd.description}\n`
    })

    answer(data.message, content, 20_000)
}