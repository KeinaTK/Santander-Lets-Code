import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material/material.module';

import { TodoListComponent } from './todo-list/todo-list.component';
import { CreateComponent } from './create/create.component';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';
import { ColorDirective } from './color.directive';


@NgModule({
  declarations: [
    TodoListComponent,
    CreateComponent,
    LoginComponent,
    UpdateComponent,
    ColorDirective,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TodoListComponent,
    CreateComponent,
    MaterialModule,
    FormsModule,
    LoginComponent,
    UpdateComponent
  ],
})
export class PagesModule { }
