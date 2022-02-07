import { TodoStatusEnum } from "../enums/todo-status.enum";

export class Todo {
  constructor(
    public id = 0,
    public name: string = '',
    public description: string = '',
    public createdAt = new Date(),
    public status: TodoStatusEnum = TodoStatusEnum.waiting
  ) {}
}
