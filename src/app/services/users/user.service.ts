import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IUserPostRequest } from '../../shared/interfaces/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl: string;
  loginUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.userUrl = environment.users.url + environment.users.routes.user;
    this.loginUrl = environment.users.url + environment.users.routes.login;
  }

  getAllUsers(): Observable<object> {
    return this.http.get(this.userUrl);
  }

  registerNewUser(user: IUserPostRequest): Observable<object> {
    return this.http.post(this.userUrl, user);
  }

  // login(): Observable<object> {
  //   return this.http.post(this.loginUrl)
  // }
}
