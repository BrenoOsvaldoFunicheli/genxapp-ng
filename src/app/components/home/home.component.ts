import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/interfaces/users';
import { UserService } from '../../services/users/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userName: string;

  constructor(
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

  logout(): void {
    window.localStorage.clear();
    this.router.navigate(['/login']);
  }

  getUserDetails(): void {
    this.userService.getUserDetails().subscribe(
      (user: IUser) => {
        this.userName = user.first_name;
      },
      error => {
        this.toastr.error('', error);
      }
    );
  }
}
