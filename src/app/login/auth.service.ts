import { Router } from '@angular/router';
import { User } from './user';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userAuth = false;

  userAuthenticatedEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  getUserAuth() {
    return this.userAuth;
  }

  login(user: User) {

    if (user.login === 'teste@teste.com'
        && user.password === '123456') {
      this.userAuth = true;
      this.userAuthenticatedEmitter.emit(this.userAuth);
      this.router.navigate(['/']);
      return;
    }

    this.userAuthenticatedEmitter.emit(this.userAuth);
  }
}
