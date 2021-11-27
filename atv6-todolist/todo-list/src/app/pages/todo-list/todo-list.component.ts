import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages.service';


@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{

  tasks: any;
  show: boolean = true;
  tasksList$;
  taskList;


  constructor(private pagesServices: PagesService) {
    this.taskList = this.pagesServices.getTaskList();
  }

  delete(i: number) {
    this.taskList.splice(i, 1)
  }

  getNewTask(task) {
    this.taskList.push(task)
    console.log('Foi emitido o evento e chegou no pai >>>> ', task);
  }

  changeCheck(i: number) {
    this.taskList[i].done = !this.taskList[i].done;
    console.log(this.taskList)
  }

  ngOnInit(): void {
    // this.tasksList$ = this.todoListService.getTasks();

    this.tasksList$?.subscribe({
      next: () => console.log("Acessei o dado!"),
      error: (error) => console.log(error),
      complete: () => console.log("Acesso finalizado!")
    }, );
  }
}
