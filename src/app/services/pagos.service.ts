import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pago } from '../models/Pago';

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  API_URI = 'http://localhost:3000/sistema/api/pagos';

  constructor( private http: HttpClient ) { }

  getPagos() {
    return this.http.get(this.API_URI);
  }

  getPago(id: number) {
    return this.http.get(`${this.API_URI}/${id}`);
  }

  postPago(pago: Pago) {
    return this.http.post(`${this.API_URI}/`, pago);
  }

  deletePago(id: number) {
    return this.http.delete(`${this.API_URI}/${id}`);
  }

  updatePago(id: number, pago: Pago) {
    return this.http.put(`${this.API_URI}/${id}`, pago);
  }

}
