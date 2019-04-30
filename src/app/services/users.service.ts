import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  API_URI = 'http://localhost:3000/sistema/api/users';

  constructor( private http: HttpClient ) {}

  getUsers() {
    return this.http.get(this.API_URI);
  }

  getUser(id: number) {
    return this.http.get(`${this.API_URI}/${id}`);
  }

  postUser(user: User) {
    return this.http.post(`${this.API_URI}/`, user);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.API_URI}/${id}`);
  }

  updateUser(id: number, user: User) {
    return this.http.put(`${this.API_URI}/${id}`, user);
  }

  getPagos(id: number) {
    return this.http.get(`${this.API_URI}/pagos/${id}`);
  }

  getUsersList() {
    return this.http.get(`${this.API_URI}/list`);
  }

}
