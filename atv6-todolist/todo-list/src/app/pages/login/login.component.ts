import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'pages-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  login: FormGroup;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.login = new FormGroup({
      'user': new FormControl(null),
      'password': new FormControl(null),
    });
  }

  onSubmit() {
    let user = this.login.controls['user'].value; 
    let password = this.login.controls['password'].value; 

    this.loginService.login(user, password);
  }

}
