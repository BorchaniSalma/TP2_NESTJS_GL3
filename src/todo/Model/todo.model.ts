/* eslint-disable prettier/prettier */
import { TodoStatusEnum } from '../enums/todo-status.enum';

export class Todo {
  constructor(
    public id: number = 0,
    public name: string = '',
    public description: string = '',
    public createdAt: Date = new Date(),
    public state : TodoStatusEnum = TodoStatusEnum.waiting
  ) { }
}
