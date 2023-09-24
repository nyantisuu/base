import { Client, GatewayIntentBits } from "discord.js";
import { run } from "../run";
import { loadCommands } from "@DiscordWatchers/commands";
import { LoadLoop, wait } from "assets/scripts/loading";
import { config } from "dotenv";

config()
const BOT_TOKEN = process.env.BOT_TOKEN;

export const botClient = new Client({ intents: [
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent,
	GatewayIntentBits.GuildVoiceStates,
]});



export default async function discordStart(){
	let isLogged = false;
	
	botClient.on('ready', async ()=>{
		isLogged = true
		await wait(1000)
		console.log(`Discord has connected  ✅\n`)
		run()
	})
	
	loadCommands()
	botClient.login(BOT_TOKEN)
}