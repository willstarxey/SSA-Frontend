import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private authService: AuthService, private router: Router) { }

  public error = false;
  public eForm = false;

  ngOnInit() {
  }

  onLogin(form): void {
    if (form.valid) {
      this.eForm = false;
      this.authService.login(form.value).subscribe(
        res => {
          if ( res.userData.rol === 'Usuario') {
            this.router.navigateByUrl('/sistema/user');
            this.error = false;
          } else {
           this.router.navigateByUrl('/sistema');
           this.error = false;
          }
        },
        err => {
          this.error = true;
          setTimeout (() => {
            this.error = false;
          }, 4000);
        }
      );
    } else {
      this.eForm = true;
      setTimeout (() => {
        this.eForm = false;
      }, 4000);
      console.log('Formulario no válido');
    }
  }
}
