import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aviso } from '../models/Aviso';

@Injectable({
  providedIn: 'root'
})

export class AvisosService {

  API_URI = 'http://localhost:3000/sistema/api/avisos';

  constructor( private http: HttpClient ) { }

  getAvisos() {
    return this.http.get(this.API_URI);
  }

  getAviso(id: number) {
    return this.http.get(`${this.API_URI}/${id}`);
  }

  postAviso(aviso: Aviso) {
    return this.http.post(`${this.API_URI}/`, aviso);
  }

  deleteAviso(id: number) {
    return this.http.delete(`${this.API_URI}/${id}`);
  }

  updateAviso(id: number, aviso: Aviso) {
    return this.http.put(`${this.API_URI}/${id}`, aviso);
  }

}
