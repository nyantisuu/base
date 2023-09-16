import { isLogged } from "@BOT/settings/botConnection"

export async function LoadLoop() {
  const points = 5
  const character = "."
  
    for (let i = 0; i <= points; i++) {
      if (isLogged) continue
      const repeats = character.repeat(i)
      const left = points - i
      const empty = " ".repeat(left)
  
      process.stdout.write(`\r[${repeats}${empty}] Trying Connection`)
      await wait(180)
    }
  }
  
export function wait(ms:number) {
    return new Promise(res => setTimeout(res, ms))
  }