import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserLoginRequest, IUserLoginResponse } from 'src/app/shared/interfaces/account';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  loginUrl: string;
  refreshUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.loginUrl = this.buildUrls('login');
    this.refreshUrl = this.buildUrls('refresh');
  }

  buildUrls(route: string): string {
    const result = environment.account.url + environment.account.routes[route];
    return result;
  }

  login(user: IUserLoginRequest): Observable<IUserLoginResponse> {
    return this.http.post<IUserLoginResponse>(this.loginUrl, user);
  }

  refresh(refreshToken: string): Observable<object> {
    return this.http.post(this.refreshUrl, { refresh: refreshToken});
  }

  getAuthorizationToken(): string {
    return window.localStorage.getItem('token');
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = JSON.parse(atob(token.split('.')[1]));

    if (!decoded.exp) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);

    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (!date) {
      return false;
    }

    return !(date.valueOf() > new Date().valueOf());
  }

  isUserLoggedIn(): boolean {
    const token = this.getAuthorizationToken();
    if (!token) {
      return false;
    } else if (this.isTokenExpired(token)) {
      return false;
    }

    return true;
  }
}
