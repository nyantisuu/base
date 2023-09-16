import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Link } from '@prisma/client';
import { UsersService } from './users.service';
import { SignInUpDto } from './dto/sign-in-up.dto';

@Injectable()
export class AuthService {

  private EXPIRATION_TIME = "30m";
  private ISSUER = "Driven";
  private AUDIENCE = "users";

  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService) { }

  async signUp(signUpDto: SignInUpDto) {
    return await this.usersService.create(signUpDto);
  }

  async signIn(signInDto: SignInUpDto) {
  }

  private async createToken(link: Link) {
    const { serverId, userId } = link;

    const token = await this.jwtService.signAsync({ serverId, userId }, {
      expiresIn: this.EXPIRATION_TIME,
      subject: String(userId),
      issuer: this.ISSUER,
      audience: this.AUDIENCE
    });

    return { token }
  }

  checkToken(token: string) {
    try {
      const data = this.jwtService.verify(token, {
        audience: this.AUDIENCE,
        issuer: this.ISSUER
      });

      return data;
    } catch (error) {
      const JwtError = String(error).split("\n")[0]
      throw new UnauthorizedException(JwtError);
    }
  }
}