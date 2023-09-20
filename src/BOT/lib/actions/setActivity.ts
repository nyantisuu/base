import { ActivityType } from "discord.js";
import { botClient } from "@BOT/settings/bot";

export function setActivity(activity:string, type:ActivityType){
    botClient.user.setActivity(activity, { type: Number(type) });
}

