import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  show: boolean = false;

  constructor(private LoginService: LoginService) { }

  ngOnInit(): void {
    this.LoginService.auth.subscribe(auth => this.show = auth);
  }

}
