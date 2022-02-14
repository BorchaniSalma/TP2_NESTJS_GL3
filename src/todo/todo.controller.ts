/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */

import { Controller, Get, Param,Delete, Patch,Query,Body, HttpStatus, NotFoundException, HttpException } from '@nestjs/common';
import { retry } from 'rxjs';
import { UpdateTodoDto } from 'src/todo/dto/update-todo.dto';
import { Todo } from 'src/todo/Model/todo.model';
import {todoService} from 'src/todo/services/todo.services'

@Controller('to-do')
export class ToDoController {
    private todoService = new todoService()


    @Get()
    getToDos() : Todo[] {
      return this.todoService.getToDos();
    }
    @Get('/:id')
    getToDoId(@Param('id') id ):any {
      return this.todoService.getToDoId(id);

    } 
    @Delete('/:id')
    DeleteToDoId(@Param('id') id ):any {
      return this.todoService.DeleteToDoId(id);

    } 
    @Patch("/:id?")
    UpdateToDoId(@Body() updateToDodto: UpdateTodoDto ):any {
      //TODO remove this
      console.log(updateToDodto)

      if (updateToDodto.id == undefined) return new HttpException("aucun id n'a ete fourni", 404);

      return this.todoService.UpdateToDoId(updateToDodto);
  } 
}
