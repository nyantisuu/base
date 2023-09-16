import { Controller, Body, Delete, HttpStatus, HttpCode, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './decorators/user.decorator';
import { AuthGuard, UserBody } from './guards/auth.guard';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

}
