import { Global, Module } from "@nestjs/common"
import { PrismaModule } from "@API/utils/prisma/prisma.module";
import { AudioRepository } from "./audios.repository";

@Global() // opcional
@Module({
  imports: [PrismaModule],
  controllers: [],
  providers: [AudioRepository],
  exports: [AudioRepository]
})
export class AudioModule {

}