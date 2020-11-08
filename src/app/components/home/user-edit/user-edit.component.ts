import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/users/user.service';
import { IUser } from '../../../shared/interfaces/users';
import { ToastrService } from 'ngx-toastr';

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
    private router: Router,
    private toastr: ToastrService
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
      },
      error => {
        this.toastr.error('', error);
      }
    );
  }

  updateUserDetails(): void {
    this.userService.updateUserDetails(this.userEditForm.value).subscribe(
      data => {
        this.router.navigate(['']);
        this.toastr.success('', 'Usuário editado com sucesso!');
      },
      error => {
        this.toastr.error('', error);
      }
    );
  }

  deleteUser(): void {
    this.userService.deleteUser().subscribe(
      (data) => {
        window.localStorage.clear();
        this.router.navigate(['/login']);
        this.toastr.success('', 'Usuário deletado com sucesso!');
      },
      error => {
        this.toastr.error('', error);
      }
    );
  }
}
