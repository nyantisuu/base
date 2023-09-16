import { LoadLoop, wait } from "@BOT/assets/scripts/loading";
import { Client, GatewayIntentBits } from "discord.js";
import { config } from "dotenv";
import { loadNyaCommands } from "../discord/commands/nyaCommand";
import { main } from "@BOT/bot";

config()

export const TOKEN = process.env.TOKEN;
export const CLIENT_ID = process.env.CLIENT_ID;

export const botClient = new Client({ intents: [
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent,
	GatewayIntentBits.GuildVoiceStates,
]});

export let isLogged = false;

export async function botLogin(){
	botClient.on('ready', async ()=>{
		isLogged = true
		process.stdout.write("                     \r")
		console.log(`OMG! Finaaally i'm in! ✅ - 🔥🥵\n`)
		main()
	})
	
	loadNyaCommands()
	botClient.login(TOKEN)
	while (!isLogged){
		await LoadLoop()
		await wait(500)
	}
}
