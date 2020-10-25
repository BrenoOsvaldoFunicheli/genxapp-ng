import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/users/user.service';
import { IUserPostRequest } from '../../shared/interfaces/users';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  userModelRequest: IUserPostRequest;
  userEditForm: FormGroup;

  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.userEditForm = this.fb.group({
      username: [null, Validators.required],
      email: [null, Validators.email],
      password: [null, Validators.required],
      firs_name: [null, Validators.required],
      last_name: [null, Validators.required]
    });
  }

  getUserInformation(): void {
    this.userService.getUserDetails(this.userModelRequest).subscribe(
      (data) => {
        username: [];
        email: [];
        password: [];
        firs_name: [];
        last_name: [];
      },
      (error) => {

      }
    );
  }

  putUpdateDetails(): void {
    this.userModelRequest = this.userEditForm.value;
    /* this.isAlertOpenSuccess = true; */
    this.userService.registerNewUser(this.userModelRequest).subscribe(
      (data) => {

      },
      (error) => {

      }
    );
  }

  deleteUser(): void {
    this.userModelRequest = this.userEditForm.value;
    /* this.isAlertOpenSuccess = true; */
    this.userService.deleteUser(this.userModelRequest).subscribe(
      (data) => {
        /* Retornar tela inicial */
      },
      (error) => {

      }
    );
  }

}