import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../../shared/interfaces/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl: string;
  getUserDetailsUrl: string;
  updateUserDetailsUrl: string;
  deleteUserUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.userUrl = environment.users.url + environment.users.routes.user;
    this.getUserDetailsUrl = environment.users.url + environment.users.routes.details;
    this.updateUserDetailsUrl = environment.users.url + environment.users.routes.updateDetails;
    this.deleteUserUrl = environment.users.url + environment.users.routes.deleteUser;
  }

  registerNewUser(user: IUser): Observable<object> {
    return this.http.post(this.userUrl, user);
  }

  getUserDetails(): Observable<object>{
    return this.http.get(this.getUserDetailsUrl);
  }

  updateUserDetails(user: IUser): Observable<object>{
    return this.http.put(this.updateUserDetailsUrl, user);
  }

  deleteUser(): Observable<object>{
    return this.http.delete(this.deleteUserUrl);
  }

}
