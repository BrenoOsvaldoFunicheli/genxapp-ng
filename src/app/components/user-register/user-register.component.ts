import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/users/user.service';
import { IUser } from '../../shared/interfaces/users';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: [null, Validators.required],
      email: [null, Validators.required, Validators.email],
      password: [null, Validators.required],
      first_name: [null, Validators.required],
      last_name: [null, Validators.required]
    });
  }

  registerNewUser(): void {
    this.userService.registerNewUser(this.userForm.value).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }
}
