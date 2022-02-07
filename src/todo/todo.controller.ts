import { Controller, Get, Req } from "@nestjs/common";
import { Todo } from './Model/todo.model';
import { Request } from "express";

@Controller('todo')
export class TodoController {
  constructor() {
    this.todos = [new Todo('1', 'Sport', 'Faire du sport')];
  }
  todos: Todo[] = [];
  @Get()
  getTodos(@Req() request: Request): Todo[] {
    // console.log(request);
    return this.todos;
  }
}
