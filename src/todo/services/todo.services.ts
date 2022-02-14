/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from '../Model/todo.model';
import { UpdateTodoDto } from '../dto/update-todo.dto';
import { CreateTodoDto } from '../dto/create-todo.dto';

@Injectable()
export class todoService {
    private t = new Todo(1,"youssef");
    private t1 = new Todo(2,"emna");
    private t2 = new Todo(3,"ali");

    private todos :Todo[]=[this.t,this.t1, this.t2];
    constructor(){
        console.log("service cree.")
      }
    getToDos() : Todo[] {
      return this.todos;
    }
    getToDoId(id ):any {
      let obj=this.todos.find(x=> x.id==id);
      if (!obj) throw new NotFoundException('todo introuvable');
        return  obj;

    } 
    DeleteToDoId(id ):any {
        let arr = this.todos.filter(x=> x.id!=id);
        if (arr.length!=this.todos.length) 
        {this.todos=arr;
        return arr;}
        else throw new NotFoundException('Le todo a supprimer n existe pas');

    } 
    UpdateToDoId(updateToDodto:UpdateTodoDto ):any {
        //console.log(updateToDodto.id)
      let obj= this.todos.find(x=> updateToDodto.id==x.id)
      if (!obj) throw new NotFoundException('todo introuvable');
      obj.name= updateToDodto.name;
      obj.description=updateToDodto.description;
      return this.todos;
  } 
}