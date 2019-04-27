import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { JWT } from '../models/Jwt';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {

  API_URI = 'http://localhost:3000/sistema/api/users';
  authSubject = new BehaviorSubject(false);
  private token: string;

  constructor(private http: HttpClient ) { }

  login(user: User): Observable<JWT> {
    return this.http.post<JWT>(`${this.API_URI}/login`, user).pipe(tap(
      (res: JWT) => {
        if (res) {
          this.saveToken(res.userData.accessToken, res.userData.expiresIn);
        }
      }
    ));
  }

  logout(): void {
    this.token = '';
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('EXPIRES_IN');
  }

  private saveToken(token: string, expiresIn: string): void {
    localStorage.setItem('ACCESS_TOKEN', token);
    localStorage.setItem('EXPIRES_IN', expiresIn);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('ACCESS_TOKEN');
    }
    return this.token;
  }

}
