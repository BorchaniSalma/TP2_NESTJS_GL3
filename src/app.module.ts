/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { PremierModule } from './premier/premier.module';
import { TodoModule } from './todo/todo.module';
import { FirstMiddleware } from './middleware/first.middleware';
import { logger } from './middleware/logger.middleware';
import { APP_FILTER } from '@nestjs/core';
import { CustomFilter } from './Filters/exceptionFilter';

@Module({
  imports: [PremierModule, TodoModule],
  controllers: [AppController],
  providers: [{
    provide: APP_FILTER,
    useClass: CustomFilter,
  } ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any{
    consumer.apply(FirstMiddleware).forRoutes("/")
      .apply(logger).forRoutes('')
  }
}
