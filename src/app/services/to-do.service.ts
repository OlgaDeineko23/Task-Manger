import { Injectable } from '@angular/core';

import { ITodo } from '../interfaces/to-do';
import { TODO_ITEMS } from '../../api/to-do-data';

@Injectable()
export class TodoService {
  pItems: ITodo[] = TODO_ITEMS;

  constructor() { }

  getTodosFromData(): ITodo[] {
    return this.pItems;
  }
  addTodo(todo: ITodo) {
    this.pItems.push(todo);
  }
  updateTodo(todo: ITodo) {
    const index = this.pItems.map(x => x.id).indexOf(todo.id);
    this.pItems[index] = todo;
  }
  deleteTodo(todo: ITodo) {
    this.pItems.splice(this.pItems.indexOf(todo), 1);
  }
}
