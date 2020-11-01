import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/users/user.service';
import { IUser } from '../../shared/interfaces/users';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  userModelRequest: IUser;
  userEditForm: FormGroup;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userEditForm = this.fb.group({
      username: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]],
      password: [null, Validators.required],
      first_name: [null, Validators.required],
      last_name: [null, Validators.required]
    });

    this.getUserDetails();
  }

  updateEditForm(user: IUser): void {
    this.userEditForm.patchValue({
      username: user.username,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name
    });
  }

  getUserDetails(): void {
    this.userService.getUserDetails().subscribe(
      (user: IUser) => {
        this.updateEditForm(user);
      }
    );
  }

  updateUserDetails(): void {
    this.userService.updateUserDetails(this.userEditForm.value).subscribe(
      data => {
        console.log(data);
      }
    );
  }

  deleteUser(): void {
    this.userService.deleteUser().subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/login']);
      }
    );
  }
}
