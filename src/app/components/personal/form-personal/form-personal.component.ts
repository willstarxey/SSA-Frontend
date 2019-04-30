import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-personal',
  templateUrl: './form-personal.component.html',
  styleUrls: ['./form-personal.component.css']
})
export class FormPersonalComponent implements OnInit {

  user: User = {
    id: 0,
    nombre: '',
    app: '',
    apm: '',
    direccion: '',
    rol: '',
    password: '',
    puesto: '',
    fotografia: null,
    created_at: new Date()
  };

  edit = false;

  constructor(private userService: UsersService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.userService.getUser(params.id).subscribe(
        res => {
          console.log(res);
          this.user = res[0];
          this.edit = true;
        },
        err => console.log(err)
      );
    }
  }

  saveUser() {
    delete this.user.id;
    delete this.user.created_at;
    delete this.user.fotografia;
    this.userService.postUser(this.user).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/sistema/personal']);
      },
      err => console.log(err)
    );
  }

  updateUser() {
    delete this.user.created_at;
    delete this.user.fotografia;
    this.userService.updateUser(this.user.id, this.user).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/sistema/personal']);
      },
      err => console.log(err)
    );
    console.log();
  }

}
