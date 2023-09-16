const gtts = require('@killovsky/gtts');  


export default async function gttsJS(lang, text, download, path){
    const data = await gtts.create(lang, text, download, path);
    return data
}