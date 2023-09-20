import { wrapCss } from "../../mainHelper" 
import { Message } from "discord.js"
import answer from "@BOT/lib/actions/answer"

export function audioHelper(message:Message){
    const cmd = process.env.COMMAND
    const play = wrapCss(cmd+" audio play [nome_do_som]")
    const random = wrapCss(cmd+" audio random")
    const save = wrapCss(cmd+" audio save [nome_do_som] (descrição opcional)")
    const list = wrapCss(cmd+" audio list")
    const content = `**!n audio help**
*lista de comandos de audio, (Play e Random precisam de conexão num canal de voz).*

**para reproduzir som do banco de dados:**${play}
**para uma mensagem carinhosa minha:**${random}
**para salvar som no banco de dados (mensagem com apenas o anexo do som):**${save}
**para listar todos os sons no banco de dados:**${list}
`
    answer(message, content, 60_000)
}