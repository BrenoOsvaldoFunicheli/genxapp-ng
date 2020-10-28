import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILoginResponse, IUserLoginRequest } from 'src/app/shared/interfaces/account';
import { AccountService } from '../../services/account/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  userLoginRequest: IUserLoginRequest;
  authToken: string;

  constructor(
    private fb: FormBuilder,
    private userService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  onLogin(): void {
    this.userLoginRequest = this.loginForm.value;

    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value).subscribe(
        (data: ILoginResponse) => {
          window.localStorage.setItem('token', data.access);

          this.router.navigate(['']);
        }
      );
    }
  }

}
