/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ToDoController } from './todo.controller';
import { SkillsControllerController } from '../skills/skills-controller/skills-controller.controller';
//import { Todo.ServicesService } from './todo.services/todo.services.service';
//import { ServicesService } from './services/services.service';

@Module({
  controllers: [ToDoController, SkillsControllerController],
  providers: []
})
//providers: [Todo.ServicesService, ServicesService],
export class TodoModule {}
