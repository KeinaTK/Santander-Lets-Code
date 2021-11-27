import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { AuthGuards } from './guards/auth.guards';
import { CreateComponent } from './pages/create/create.component';
import { LoginComponent } from './pages/login/login.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { UpdateComponent } from './pages/update/update.component';

const routes: Routes = [
  {path:'', component: TodoListComponent, canActivate: [AuthGuards]},
  {path:'create', component: CreateComponent, canActivate: [AuthGuards]},
  {path:'all', component: TodoListComponent, canActivate: [AuthGuards]},
  {path:'update', component: UpdateComponent, canActivate: [AuthGuards]},
  {path:'login', component: LoginComponent},
  {path:'**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
