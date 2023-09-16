import { Command } from "commander";

export function loadCommander(){
  const program = new Command

  program
  .version("1.0.0")
  .description("An example CLI for managing a directory")
  .option("-ms, --mineserver <value>", "Muda o Status do Servidor: on/off")
  .option("-m, --mkdir <value>", "Create a directory")
  .option("-t, --touch <value>", "Create a file")
  .parseAsync(process.argv);


  if (!process.argv.slice(2).length) {
    program.outputHelp();
  }
  return program.opts();
}