import { NestFactory } from '@nestjs/core';
import { AppModule } from '@API/app.module';
import discordStart from '@DiscordSettings/bot';


async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3000);
  discordStart()
}
bootstrap();
