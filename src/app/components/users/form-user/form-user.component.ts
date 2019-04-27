import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UsersService } from '../../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {

  user: User = {
    id: 0,
    nombre: '',
    app: '',
    apm: '',
    direccion: '',
    rol: '',
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
    delete this.user.puesto;
    this.userService.postUser(this.user).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/sistema/users']);
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
        this.router.navigate(['/sistema/users']);
      },
      err => console.log(err)
    );
    console.log();
  }

}
