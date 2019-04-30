import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-index-personal',
  templateUrl: './index-personal.component.html',
  styleUrls: ['./index-personal.component.css']
})
export class IndexPersonalComponent implements OnInit {

  users: User | any = [];

  constructor(private usersService: UsersService, private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 800);
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe(
      res => {
        this.users = res[1];
      },
      err => console.log(err)
    );
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id).subscribe(
      res => {
        console.log(res);
        this.getUsers();
      },
      err => console.log(err)
    );
  }
}

