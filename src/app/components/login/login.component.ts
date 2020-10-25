import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IUserLoginRequest } from 'src/app/shared/interfaces/users';
import { UserService } from '../../services/users/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  userLoginRequest: IUserLoginRequest;

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  onLogin(): void {
    this.userLoginRequest = this.loginForm.value;

    this.userService.login(this.loginForm.value).subscribe(
      (data) => {
        console.log('success: ',  data);
      },
      (error) => {
        console.log('error: ', error);
      }
    );
  }

}
