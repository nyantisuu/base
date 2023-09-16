import figlet from "figlet";

export function titleCLI(text:string){
    console.log(figlet.textSync(
	text,
	{
	  font: "Pagga",
	  horizontalLayout: "default",
	  verticalLayout: "default",
	  whitespaceBreak: true,
	},
))
}