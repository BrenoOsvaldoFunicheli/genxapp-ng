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
  getUserDetailsUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.userUrl = environment.users.url + environment.users.routes.user;
    this.getUserDetailsUrl = environment.users.url + environment.users.routes.details;
  }

  // getAllUsers(): Observable<object> {
  //   return this.http.get(this.userUrl);
  // }

  registerNewUser(user: IUserPostRequest): Observable<object> {
    return this.http.post(this.userUrl, user);
  }

  getUserDetails(): Observable<object>{
    return this.http.get(this.getUserDetailsUrl);
  }

  putUpdateDetails(user: IUserPostRequest): Observable<object>{
    return this.http.put(this.userUrl, user);
  }

  // deleteUser(user: IUserPostRequest): Observable<object>{
  //   return this.http.delete(this.userUrl, user);
  // }

}
