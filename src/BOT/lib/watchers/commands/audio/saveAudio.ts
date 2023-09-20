import { uploadFile } from "@BOT/settings/googleDrive";
import axios from "axios";
import { MyData } from "../mainCommand";
import { Sound } from "@prisma/client";
import { wrongAttachmentNumber, wrongAttachmentType, existentSong } from "./errors";
import comment from "@BOT/lib/actions/comment";
import { AudioRepository } from "@API/audios/audios.repository";
import { PrismaService } from "@API/utils/prisma/prisma.service";

export async function saveAudio(data:MyData){
    const {attachments:attach} = data.message
    const cmd = data.lastCmds.shift();
    const description = data.lastCmds.join(" ")
    const audioRepository = new AudioRepository(new PrismaService)

    
    //Check if command already exist
    const cmdExist = await audioRepository.getSound(cmd)
    if (cmdExist) return existentSong(data.message)

    //Check if there is only one attachment
    if (attach.size > 1) return wrongAttachmentNumber(data.message, attach.size)
    if (attach.size === 0) return wrongAttachmentNumber(data.message, attach.size)

    //Get attachment info
    let fileUrl:string
    let filename:string
    attach.forEach(file => {
        fileUrl = file.proxyURL
        filename = file.name
    })

    //Check file extension
    if(!checkExt(filename, audioExt))return wrongAttachmentType(data.message)

    //Download File Attachment from discord server
    const response = await axios.get(fileUrl, {responseType: "stream"})

    //Save file on Google Drive
    const id = await uploadFile(response.data, filename)

    //Save command sound Info
    const body:Sound = {
        command:cmd,
        id,
        link: "https://drive.google.com/uc?id=" + id,
        filename,
        description: description
    }
    await audioRepository.createSound(body)

    comment(data.message, `**Audio criado por ${data.message.author}:** ${cmd}`, 0, -1)
}

function checkExt(filename: string, extensions:string[]){
    let haspassed = false
    extensions.forEach(ext =>{
        if(filename.includes(ext)) haspassed = true;
    })
    return haspassed
}

const audioExt = [
    ".mp3",
]