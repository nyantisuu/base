import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class SignInUpDto {
  @IsString()
  @IsNotEmpty()
  registerCode: string;
}
