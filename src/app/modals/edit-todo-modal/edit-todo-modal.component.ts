import {Component, OnDestroy, OnInit} from '@angular/core';
import {ITodo} from '../../interfaces/to-do';
import {TodoService} from '../../services/to-do.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {AnonymousSubscription} from 'rxjs/Subscription';
import {CATEGORY_TYPES, PRIORITY_TYPES} from '../../constants';

@Component({
  selector: 'app-edit-todo-modal',
  templateUrl: './edit-todo-modal.component.html',
  styleUrls: ['./edit-todo-modal.component.scss']
})
export class EditTodoModalComponent implements OnInit, OnDestroy {
  modalTitle: string;
  todos: ITodo[];
  todo: ITodo;
  categoryTypes = CATEGORY_TYPES;
  priorityTypes = PRIORITY_TYPES;

  formGroup: FormGroup;
  private _todoSub: AnonymousSubscription;

  constructor(private _todoService: TodoService, private _formBuilder: FormBuilder, public _modal: NgbActiveModal) {
    this.formGroup = _formBuilder.group({
      'id': '',
      'subject': '',
      'description': '',
      'priority': '',
      'category': '',
      'due': '',
      'done': ''
    })}

  ngOnInit() {
    this._todoSub = this._todoService.todo.subscribe((res) => {
      this.todos = res;
    });

    if(this.todo){
      this.formGroup.setValue(this.todo);
    }
  }

  saveTodo(todo: ITodo) {
    if (todo.id) {
      this._todoService.updateTodo(todo);
      this._modal.close();
    } else {
      let idArray = this.todos.map(x => x.id);
      todo.id = Math.max.apply(null, idArray);
      this._todoService.addTodo(todo);
      this._modal.close();
    }
  }

  ngOnDestroy() {
    this._todoSub.unsubscribe();
  }
}
