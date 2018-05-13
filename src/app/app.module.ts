import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';

import { TodoService } from './services/to-do.service';
import { FontsService } from '../fonts/fonts.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderByPipe } from './pipes/order-by.pipe';
import { EditTodoModalComponent } from './modals/edit-todo-modal/edit-todo-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    OrderByPipe,
    EditTodoModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
  ],
  providers: [TodoService, FontsService],
  entryComponents:[EditTodoModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
