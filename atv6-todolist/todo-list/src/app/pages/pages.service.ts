import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  taskList = [
    {
      "name": "Do laundry",
      "description": "Wash all clothes",
      "done": false,
      "dueDate": "12-12-2021",
    },
    {
      "name": "Homework",
      "description": "IHC homework for tomorrow",
      "done": false,
      "dueDate": "12-12-2021",
    }
  ]

  getTaskList() {
    return this.taskList
  }

  constructor() { }
}
