import { Injectable } from '@nestjs/common';

// Aqui fica a regra de negócio
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
