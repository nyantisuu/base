import { botClient } from "@BOT/settings/botConnection"
import { MyMessage } from "@BOT/protocols/fromDiscord"

async function messsageChannelsNamed(channelName:string, content:MyMessage, debug?:boolean){
    const server_list = botClient.guilds.cache
	server_list.forEach(server => {
	    try {
            const machannel = server.channels.cache.find(channel => channel.name === channelName) as any
            machannel.send(content)
            console.log(`Message sent to ${machannel.name} on: ${server.name}\n`)
        } catch (error) {
            if(debug) return console.log(error)
            console.log(`Error while sending to ${server.name}\nfor more details, run function with [true] as last parameter\n`)
        }
    })
}
const allServers = {
    messsageChannelsNamed
}
export default allServers