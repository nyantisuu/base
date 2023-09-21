// import mineServer from "./discord/channels/mine-info";
// import { loadCommander } from "./settings/commander";
import { titleCLI } from "@CLI/titleCLI";
import { botLogin } from "@BOT/settings/bot";
import ServerSelector from "./lib/selectors/servers";
import { GuildTextBasedChannel, TextBasedChannel } from "discord.js";

// export const botJson = jsonSettings.loadBot()
// titleCLI(botJson.name)
// const options = loadCommander()
// console.log(options)


export async function run(){
	try {
		const selector = new ServerSelector
		console.log(selector.getServerList())

	} catch (error) {
		console.log(error);
	}
}