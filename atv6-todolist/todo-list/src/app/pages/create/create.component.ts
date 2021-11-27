import { Component, OnInit } from '@angular/core';

import { PagesService } from '../pages.service';

@Component({
  selector: 'pages-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  task = {
    name: "",
    description: "",
    dueDate: "",
    done: false
  }
  newTask;

  constructor(private pagesService: PagesService) { }

  ngOnInit() {
    console.log(this.pagesService.taskList);
    this.newTask = this.pagesService.taskList;
  }

  add() {
    this.newTask.push(
      {
        name: this.task.name,
        description: this.task.description,
        dueDate: this.task.dueDate,
        done: this.task.done
      }
    )
  }

}
