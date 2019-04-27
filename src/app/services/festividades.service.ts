import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Festividad } from '../models/Festividad';

@Injectable({
  providedIn: 'root'
})
export class FestividadesService {

  API_URI = 'http://localhost:3000/sistema/api/festividades';

  constructor( private http: HttpClient ) { }

  getFestividades() {
    return this.http.get(this.API_URI);
  }

  getFestividad(id: number) {
    return this.http.get(`${this.API_URI}/${id}`);
  }

  postFestividad(festividad: Festividad) {
    return this.http.post(`${this.API_URI}/`, festividad);
  }

  deleteFestividad(id: number) {
    return this.http.delete(`${this.API_URI}/${id}`);
  }

  updateFestividad(id: number, festividad: Festividad) {
    return this.http.put(`${this.API_URI}/${id}`, festividad);
  }

}
