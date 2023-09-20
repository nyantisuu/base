import { createAudioPlayer, createAudioResource, joinVoiceChannel } from "@discordjs/voice";
import axios from "axios";
import { nonExistentSong, notInVoiceChannel } from "./errors";
import { MyData } from "../mainCommand";
import comment from "@BOT/lib/actions/comment";
import { AudioRepository } from "@API/audios/audios.repository";
import { PrismaService } from "@API/utils/prisma/prisma.service";

export async function reproduceAudio(data:MyData){
    const voiceChannel = data.message.member.voice.channel
    if(!voiceChannel) return notInVoiceChannel(data.message)
    
    const audioRepository = new AudioRepository(new PrismaService)

    const info = await audioRepository.getSound(data.lastCmds[0])
    if (!info) return nonExistentSong(data.message)

    const voiceConnection = joinVoiceChannel({
        channelId: voiceChannel.id,
        adapterCreator: data.message.guild.voiceAdapterCreator,
        guildId: data.message.guildId
    })

    const request = await axios.get(info.link, {
        responseType: 'stream',
      });
    
    const audio = createAudioResource(request.data)
    const player = createAudioPlayer()
    
    const subscription = voiceConnection.subscribe(player)

    player.play(audio)

    if (subscription) player.play(audio)

    comment(data.message, `**Som pedida por: ${data.message.author}**:*${data.lastCmds[0]}*`, 0, 12_000)
}
