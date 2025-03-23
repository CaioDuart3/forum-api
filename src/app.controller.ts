import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//Aqui fica o controlador
//Dentro do decorador vai a rota, no exemplo: start/hello
@Controller('start')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
