import { ButtonBuilder, ButtonStyle } from "discord.js";

export function linkBtn(label:string, url:string){
    const button = new ButtonBuilder()
        .setStyle(ButtonStyle.Link)
        .setLabel(label)
        .setURL(url);
    return button
}
