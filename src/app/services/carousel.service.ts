import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carousel } from '../models/Carousel';

@Injectable({
  providedIn: 'root'
})

export class CarouselService {

  API_URI = 'http://localhost:3000/sistema/api/carousel';

  constructor( private http: HttpClient ) { }

  getCarousels() {
    return this.http.get(this.API_URI);
  }

  getCarousel(id: number) {
    return this.http.get(`${this.API_URI}/${id}`);
  }

  postCarousel(carousel: Carousel) {
    return this.http.post(`${this.API_URI}/`, carousel);
  }

  deleteCarousel(id: number) {
    return this.http.delete(`${this.API_URI}/${id}`);
  }

  updateCarousel(id: number, carousel: Carousel) {
    return this.http.put(`${this.API_URI}/${id}`, carousel);
  }

}
