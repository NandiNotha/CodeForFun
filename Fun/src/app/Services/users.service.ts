import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BlissYogaUsersURL } from 'environment';

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

  // createUser(users: Users) {
  //   return this.http.post('http://localhost:3000/api/users', users);
  // }

  // signIn(userLogin: UserLogin) {

  //   return this.http.post<any>(`${this.url}/sign`, userLogin, this.options)
  //  }

  
}
