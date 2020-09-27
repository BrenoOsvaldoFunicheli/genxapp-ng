import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IUserPostRequest } from '../../shared/interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private get_users: any;
  private post_newUser: any;

  constructor(
    private http: HttpClient
  ) {
    const user_url = environment.users.url;
    this.get_users = user_url + environment.users.routes.get_user;
    this.post_newUser = user_url + environment.cadastroUser.routes.post_newUser;
  }

  getUsers() {
    return this.http.get(this.get_users);
  }

  registerNewUser(user: IUserPostRequest) {
    return this.http.post(this.post_newUser, user);
  }
}
