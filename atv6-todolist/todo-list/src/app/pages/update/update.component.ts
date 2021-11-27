import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: number = 0;
  task: object;

  constructor(private pagesServices: PagesService) { }

  ngOnInit(): void {
    this.task = this.pagesServices.taskList;
  }
}
