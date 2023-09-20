import { reproduceAudio } from "./reproduceAudio";
import { saveAudio } from "./saveAudio";
import { MyData } from "../mainCommand";
import { audioHelper } from "./errors";
import { listAudio } from "./listAudio";
import { removeAudio } from "./removeAudio";

export default async function audioCommand(data:MyData){
    const cmd = data.lastCmds.shift()

    if(cmd === "save")return saveAudio(data)
    
    if(cmd === "play")return reproduceAudio(data)

    if(cmd === "list")return listAudio(data)

    if(cmd === "remove")return removeAudio(data)

    audioHelper(data.message)    
}