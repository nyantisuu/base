import { ActionRowBuilder, ButtonBuilder } from "discord.js";
import { linkBtn } from "./linkButton";

export function actionRowMaker(
    btnArr: ButtonBuilder[] | [[string, string]],
    type:"string"|"builder"){
        const row = new ActionRowBuilder
        
        if(type === "string"){
            btnArr.forEach(info => {
                const btn = linkBtn(info[0], info[1])
                row.addComponents(btn)
            })
        }
        else{
            btnArr.forEach(btn => row.addComponents(btn))
        }
        return row
}
