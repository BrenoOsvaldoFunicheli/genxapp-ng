import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/users/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    private userService: UserServiceService
  ) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
