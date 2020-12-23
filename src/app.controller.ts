import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('hello controller');
    return this.appService.getHello();
  }

  @Post()
  test(): string {
    return this.appService.httpTest();
  }
}
