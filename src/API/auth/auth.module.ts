import { Global, Module } from "@nestjs/common"
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from './auth.controller';
import { AuthService } from "./auth.service";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { UsersRepository } from "./users.repository";
import { PrismaModule } from "@API/utils/prisma/prisma.module";

@Global() // opcional
@Module({
  imports: [JwtModule.register({
    secret: process.env.JWT_SECRET
  }), PrismaModule],
  controllers: [AuthController, UsersController],
  providers: [AuthService, UsersService, UsersRepository],
  exports: [AuthService, UsersService]
})
export class AuthModule {

}