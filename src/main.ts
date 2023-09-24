import { NestFactory } from '@nestjs/core';
import { AppModule } from '@API/app.module';
import discordStart from '@DiscordSettings/bot';
import load from './SANDBOX/run';


async function bootstrap() {
  await load()
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  discordStart()
}
bootstrap();
