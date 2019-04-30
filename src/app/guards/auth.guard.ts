import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor( private authService: AuthService, private router: Router ) {}

  canActivate() {
    if ( this.authService.getCurrentUser() === true ) {
      return true;
    } else {
      this.router.navigate(['/sistema/auth']);
    }
  }

}
