import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BlissYogaUsersURL } from 'environment';
import { User, UserLogin } from '../users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url: string = BlissYogaUsersURL;

  headers: any = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  options = { headers: this.headers };

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  createUser(users: User) {
    return this.http.post(`${this.url}/api/users`, users, this.options);
  }

  signIn(userLogin: UserLogin) {
    return this.http.post<any>(`${this.url}/api/sign`, userLogin, this.options);
  }
}
