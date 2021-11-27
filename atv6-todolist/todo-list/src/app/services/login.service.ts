import { Injectable, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authenticated: boolean = false;
  @Output() auth = new EventEmitter(); 

  constructor(private router: Router) { }

  login(user: string, password: string) {
    this.authenticated = (user === 'keina' && password === 'keina');
    
    this.auth.emit(this.authenticated);

    if (this.authenticated) this.router.navigate(['']);
  }

  userAuth() {
    return this.authenticated;
  }
}
