import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILoginResponse } from 'src/app/shared/interfaces/account';
import { AccountService } from '../../services/account/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  stayLogged: boolean;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.stayLogged = false;

    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      this.accountService.login(this.loginForm.value).subscribe(
        (data: ILoginResponse) => {
          if (this.stayLogged) {
            this.onStayLogged(data.refresh);
          } else {
            window.localStorage.setItem('token', data.access);
          }
          this.router.navigate(['']);
        }
      );
    }
  }

  onStayLogged(refreshToken: string): void {
    this.accountService.refresh(refreshToken).subscribe(
      (data: ILoginResponse) => {
        window.localStorage.setItem('token', data.access);
        this.router.navigate(['']);
      }
    );
  }

}
