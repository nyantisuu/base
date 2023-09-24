import { botClient } from "@DiscordSettings/bot"
import { GuildBasedChannel } from "discord.js"

export default class ServerSelector{
    private servers = botClient.guilds.cache

    getServerList(resumed:boolean = true){
        if(resumed){
            return this.servers.map(server =>{
                return {name: server.name, id: server.id}
            })
        }
        else{
            return this.servers
        }
    }

    getServerByName(name:string){
        return this.servers.find(server => server.name === name)
    }
    
    getServerById(id:string){
        return this.servers.find(server => server.id === id)
    }

    getAllChannelsInServer(serverId:string, channelType?:ChannelType):GuildBasedChannel[]{
        const arr:GuildBasedChannel[] = []
        const server = this.servers.get(serverId)
        server.channels.cache.forEach(channel => {
            selectChannelType(channel, channelType, arr)
        })
        return arr
    }

    getAllChannelsNamed(name:string , channelType?:ChannelType):GuildBasedChannel[] {
        let arr:GuildBasedChannel[] = []
        this.servers.forEach((server) => {
            const channels = server.channels.cache.filter(channel => (channel.name === name))
            channels.forEach(channel => {
                selectChannelType(channel, channelType, arr)
            })})
        return arr
    }
}

type ChannelType = "textAll"| "textOnly" | "voice" | "dm" | "thread";

function selectChannelType(channel:GuildBasedChannel, channelType:ChannelType, arr: GuildBasedChannel[]){
    if(channelType){
        if(channel.isTextBased() && channelType === "textAll")return arr.push(channel)
        if(channel.isTextBased() && !channel.isVoiceBased() && channelType === "textOnly")return arr.push(channel)
        if(channel.isVoiceBased() && channelType === "voice")return arr.push(channel)
        if(channel.isDMBased() && channelType === "dm")return arr.push(channel)
        if(channel.isThread() && channelType === "thread")return arr.push(channel)
        if(channel.isThread() && channelType === "thread")return arr.push(channel)
    } else {arr.push(channel)}
}