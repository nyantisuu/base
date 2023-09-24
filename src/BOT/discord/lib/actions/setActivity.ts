import { botClient } from "@DiscordSettings/bot";
import { ActivityType } from "discord.js";

export function setActivity(activity:string, type:ActivityType){
    botClient.user.setActivity(activity, { type: Number(type) });
}

