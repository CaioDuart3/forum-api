import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { Prisma, User as UserModel } from '@prisma/client';
import { UserService } from './user.service';

// o controller é o que recebe a requisição por métodos HTTP e passa pro service

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('signup') // recebe por POST os parametros para criar um usuario de acordo com a definição do prisma na rota signup
  async signupUser(
    @Body() userData: Prisma.UserCreateInput, //recebe da body
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }
  @Get(':id') // dois pontos significa que é um parametro dinâmico
  async getUserById(@Param('id') id: string): Promise<UserModel | null> {
    // Param é um decorator que indica que o id é um parametro
    return this.userService.user({ id: Number(id) });
  }

  @Put(':id')
  async updateUserById(
    @Param('id') id: string, //recebe o parametro na url que é dinamico
    @Body() userData: Prisma.UserUpdateInput, // é o corpo da requisição
  ): Promise<UserModel> {
    return this.userService.updateUser({
      where: { id: Number(id) }, //como no service tem dois parametros, o where e o data, aqui estamos passando o where com o id que recebemos na rota
      data: userData, // e o data com o que recebemos no body, que é um JSON
    });
  }

  @Delete(':id')
  async deleteUserById(@Param('id') id: string): Promise<UserModel | null> {
    return this.userService.deleteUser({ id: Number(id) });
  }

  @Get('teste/hello')
  getHello(): string {
    return 'Hello World';
  }
}
