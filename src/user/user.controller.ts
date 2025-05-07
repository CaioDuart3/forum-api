import { Body, Controller, Get, Post } from '@nestjs/common';
import { Prisma, User as UserModel } from '@prisma/client';
import { UserService } from './user.service';

// controller são onde será o controlador das suas rotas-
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('signup') // recebe por POST os parametros para criar um usuario de acordo com a definição do prisma
  async signupUser(
    @Body() userData: Prisma.UserCreateInput,
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }
  @Get('hello')
  getHello(): string {
    return 'Hello World';
  }
}
