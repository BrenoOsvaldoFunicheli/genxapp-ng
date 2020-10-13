import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../services/users/user.service';
import { IUserPostRequest } from '../../shared/interfaces/users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userModelRequest: IUserPostRequest;
  userForm: FormGroup;
  msgreturn: string;

  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: [null],
      email: [null],
      password: [null]
    });
  }

  registerNewUser(): void {
    this.userModelRequest = this.userForm.value;
    this.userService.registerNewUser(this.userModelRequest).subscribe(
      (data) => console.log(data),
      (error) => {
        this.msgreturn = error.message;
      }
    );
  }
}
