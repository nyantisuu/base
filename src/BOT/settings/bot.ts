import { LoadLoop, wait } from "@BOT/assets/scripts/loading";
import { Client, GatewayIntentBits } from "discord.js";
import { config } from "dotenv";
import { loadNyaCommands } from "../lib/watchers/commands/mainCommand";
import { run } from "@BOT/run";

config()

export const TOKEN = process.env.TOKEN;
export const CLIENT_ID = process.env.CLIENT_ID;

export const botClient = new Client({ intents: [
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent,
	GatewayIntentBits.GuildVoiceStates,
]});



export async function botLogin(){
	let isLogged = false;
	
	botClient.on('ready', async ()=>{
		isLogged = true
		await wait(1000)
		process.stdout.write("                     \r")
		console.log(`OMG! Finaaally i'm in! ✅ - 🔥🥵\n`)
		run()
	})
	
	loadNyaCommands()
	botClient.login(TOKEN)
	while (!isLogged){await LoadLoop(isLogged)}
}
