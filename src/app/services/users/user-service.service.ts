import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService{

  private get_users: any;

  constructor(
    private http: HttpClient
  ) {
    const user_url = environment.users.url
    this.get_users = user_url + environment.users.routes.get_user
  }

  getUsers() {
    return this.http.get(this.get_users);
  }

}
