import {Component, OnDestroy, OnInit} from '@angular/core';
import {TodoService} from '../services/to-do.service';
import {ITodo} from '../interfaces/to-do';
import {DatePipe} from '@angular/common';
import {ORDER_LIST} from '../constants';
import {IOrderList} from '../interfaces/i-order-list';
import {AnonymousSubscription} from 'rxjs/Subscription';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EditTodoModalComponent} from '../modals/edit-todo-modal/edit-todo-modal.component';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit, OnDestroy {

  todos: ITodo[];
  headerText: string;
  orderList = ORDER_LIST;
  order: IOrderList;

  private _todoSub: AnonymousSubscription;

  constructor(private _todoService: TodoService, public _modal: NgbModal) {
  }

  ngOnInit() {
    this._todoService.getTodosFromData();
    this.order = this.orderList[0];

    this._todoSub = this._todoService.todo.subscribe((res) => {
      this.todos = res;
    });

  }

  removeToDo(todo: ITodo) {
    this._todoService.deleteTodo(todo);
  }

  showEditModal(todo: ITodo) {
    if (!todo) {
      return;
    }
    this.headerText = 'Edit To-Do';
    const editedTodo = Object.assign({}, todo, {due: this.applyLocale(todo.due)});
    let editTodoModal = this._modal.open(EditTodoModalComponent, {
      size: 'lg'
    });
    editTodoModal.componentInstance.todo = editedTodo;
    editTodoModal.componentInstance.modalTitle = this.headerText;
  }

  showCreateModal() {
    this.headerText = 'New To-Do';
    let createTodoModal = this._modal.open(EditTodoModalComponent, {
      size: 'lg'
    });
    createTodoModal.componentInstance.modalTitle = this.headerText;
  }

  applyLocale(due) {
    return new DatePipe(navigator.language).transform(due, 'y-MM-dd');
  }

  changeOrder(item) {
    this.order = item;
  }

  ngOnDestroy() {
    this._todoSub.unsubscribe();
  }

}
