import { Inject, Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import * as bcrypt from 'bcrypt';

// em service, mais de um atributo no argumento passa como um objeto
// service são injetados no controller, e são os que fazem a comunicação com o banco de dados

@Injectable()
export class UserService {
  @Inject()
  private readonly prisma: PrismaService;
  // * constructor(private prisma: PrismaService) {}

  // create
  async createUser(data: Prisma.UserCreateInput) {
    const hashPassword = await bcrypt.hash(data.password, 10);
    return this.prisma.user.create({
      data: { ...data, password: hashPassword },
    });
  }

  //read
  // 1 usuario
  async user(
    where: Prisma.UserWhereUniqueInput, // Prisma cria automaticamente os argumentos
  ): Promise<User | null> {
    // promessa de retorno
    return this.prisma.user.findUnique({
      //entra na tabela user e busca algo unico aplicando um where de sql, onde busca o dado passado no argumento
      where,
    });
  }

  // N usuarios
  async users(params: {
    skip?: number; // opcional
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
  // update
  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }
  // delete
  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }
}
