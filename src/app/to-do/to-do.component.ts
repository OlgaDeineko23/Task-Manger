import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TodoService} from '../services/to-do.service';
import {ITodo} from '../interfaces/to-do';
import {DatePipe} from '@angular/common';
import {SaveMode} from '../enums/save-mode.enum';
import { CATEGORY_TYPES, PRIORITY_TYPES, ORDER_LIST } from '../constants';
import {IOrderList} from '../interfaces/i-order-list';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  formGroup: FormGroup;
  todos: ITodo[];
  saveMode: SaveMode = SaveMode.None;
  headerText: string;
  orderList = ORDER_LIST;
  order: IOrderList;
  categoryTypes = CATEGORY_TYPES;
  priorityTypes = PRIORITY_TYPES;
  constructor(private _todoService: TodoService, private _formBuilder: FormBuilder) {
    this.formGroup = _formBuilder.group({
      'id': '',
      'subject': '',
      'description': '',
      'priority': '',
      'category': '',
      'due': '',
      'done': ''});
  }

  ngOnInit() {
    this.getTodos();
    this.order = this.orderList[0];
  }

  getTodos() {
    this.todos = this._todoService.getTodosFromData();
  }

  saveTodo(todo: ITodo) {
    if (todo.id) {
      this._todoService.updateTodo(todo);
    } else {
      this._todoService.addTodo(todo);
    }
    this.saveMode = SaveMode.None;
  }

  removeToDo(todo: ITodo) {
    this._todoService.deleteTodo(todo);
  }

  cancelEditTodo() {
    this.formGroup.reset();
    this.saveMode = SaveMode.None;
  }

  showEditForm(todo: ITodo) {
    if (!todo) {
      return;
    }
    this.saveMode = SaveMode.Edit;
    this.headerText = 'Edit To-Do';
    const editedTodo = Object.assign({}, todo, { due: this.applyLocale(todo.due) });
    this.formGroup.setValue(editedTodo);
  }

  showNewForm() {
    this.formGroup.reset();
    this.saveMode = SaveMode.New;
    this.headerText = 'New To-Do';
  }

  showForm() {
    return this.saveMode !== SaveMode.None;
  }

  applyLocale(due) {
    return new DatePipe(navigator.language).transform(due, 'y-MM-dd');
  }

  changeOrder(item){
    this.order = item;
  }

}
