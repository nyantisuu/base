import { NestFactory } from '@nestjs/core';
import { AppModule } from '@API/app.module';
import discordStart, { botClient } from '@DiscordSettings/bot';
import load from './SANDBOX/run';


async function bootstrap() {
  await load()
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  discordStart()
}
bootstrap();

// class MessageBuilder{};
// const message = new MessageBuilder;

// message("Oi!")
//   // Para um canal com ID especifico
//   .toChannelWithId(ID)
//   // Ou para multiplos servidores, em canais com nomes identicos:
//   .toAllChannelsNamed("geral")
//   // Ou apenas no servidor principal, se você tiver definido nas configurações
//   .toMainServerOnChannel("geral");


// // Para um canal com ID especifico
// const idchannel = botClient.channels.cache.get(ID);
// if(idchannel.isTextBased()){idchannel.send("Oi!")};
// // Ou para multiplos servidores, em canais com nomes identicos:
// botClient.guilds.cache.forEach(server => {
//   const channel = server.channels.cache.find(channel => channel.name === "geral");
//   if(channel.isTextBased()){channel.send("Oi!")}
// })
// // Ou apenas no servidor principal, se você tiver definido nas configurações
// const server = botClient.guilds.cache.get(DISCORD_GUILD_ID);
// const mainChannel = server.channels.cache.find(channel => channel.name === "geral")
// if(mainChannel.isTextBased()){mainChannel.send("Oi!")}