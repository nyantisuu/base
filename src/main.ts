import { NestFactory } from '@nestjs/core';
import { AppModule } from '@API/app.module';
import { connectDb, prisma } from '@DB/prisma';
import { botLogin } from '@BOT/settings/bot';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3000);
  connectDb()
  botLogin()
}
bootstrap();
