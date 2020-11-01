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
  tarbaseUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.userUrl = this.buildUrls('user');
    this.getUserDetailsUrl = this.buildUrls('details');
    this.updateUserDetailsUrl = this.buildUrls('delete');
    this.deleteUserUrl = this.buildUrls('delete');
    this.tarbaseUrl = this.buildUrls('tarbase');
  }

  buildUrls(route: string): string {
    const result = environment.users.url + environment.users.routes[route];
    return result;
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

  tarbase(): Observable<object>{
    return this.http.get(this.tarbaseUrl);
  }

}
