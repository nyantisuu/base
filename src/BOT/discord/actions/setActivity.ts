import { ActivityType } from "discord.js";
import { botClient } from "@BOT/settings/botConnection.js";

export function setActivity(activity:string, type:ActivityType){
    botClient.user.setActivity(activity, { type: Number(type) });
}

