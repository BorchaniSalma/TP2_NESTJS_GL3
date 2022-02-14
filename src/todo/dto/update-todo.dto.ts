/* eslint-disable prettier/prettier */

import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';
import {TodoStatusEnum} from 'src/todo/enums/todo-status.enum'

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
    status: TodoStatusEnum;
}

