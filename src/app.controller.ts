// noinspection TypeScriptValidateTypes

import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): any {
    return {
      message: 'Hello',
      to: 'GL3',
    };
  }
  @Get('test')
  testGet(): string {
    return 'TEST OK';
  }
}
