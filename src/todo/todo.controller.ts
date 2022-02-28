/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */

import {
  Controller,
  Get,
  Param,
  Delete,
  Patch,
  Query,
  Body,
  HttpStatus,
  NotFoundException,
  HttpException,
  Post, UseInterceptors,
} from '@nestjs/common';
import { retry } from 'rxjs';
import { UpdateTodoDto } from 'src/todo/dto/update-todo.dto';
import { Todo } from 'src/todo/Model/todo.model';
import {todoService} from 'src/todo/services/todo.services'
import { StringifierPipe } from '../skills/StringifierPipe';
import { DelayInterceptor } from '../interceptors/delay.interceptor';

@UseInterceptors(DelayInterceptor)
@Controller('to-do')
export class ToDoController {
    private todoService = new todoService()


    @Get()
    getToDos() : Todo[] {
      return this.todoService.getToDos();
    }
    @Get('/:id')
    getToDoId(@Param('id') id : number ):Todo {
      return this.todoService.getToDoId(id);

    } 
    @Delete('/:id')
    DeleteToDoId(@Param('id') id : number ):string  {
      return this.todoService.DeleteToDoId(id);

    } 
    @Patch("/:id?")
    UpdateToDoId(@Param('id') id: number ,@Body() updateToDodto: UpdateTodoDto ):Todo  {
      return this.todoService.UpdateToDoId(id, updateToDodto);
  }

}
