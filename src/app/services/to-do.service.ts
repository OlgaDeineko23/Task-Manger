import { Injectable } from '@angular/core';

import { ITodo } from '../interfaces/to-do';
import { TODO_ITEMS } from '../../api/to-do-data';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class TodoService {
  pItems: ITodo[] = TODO_ITEMS;
  private _todo: BehaviorSubject<ITodo[]>;

  constructor() {
    this._todo = new BehaviorSubject([]);
  }

  get todo(): BehaviorSubject<ITodo[]> {
    return this._todo
  }

  getTodosFromData() {
    this._todo.next(this.pItems);
  }
  addTodo(todo: ITodo) {
    this.pItems.push(todo);
    this.getTodosFromData();
  }
  updateTodo(todo: ITodo) {
    const index = this.pItems.map(x => x.id).indexOf(todo.id);
    this.pItems[index] = todo;
    this.getTodosFromData();
  }
  deleteTodo(todo: ITodo) {
    const index = this.pItems.map(x => x.id).indexOf(todo.id);
    this.pItems.splice(index, 1);
    this.getTodosFromData();
  }
}
