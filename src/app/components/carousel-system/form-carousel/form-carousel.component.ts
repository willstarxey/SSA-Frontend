import { Component, OnInit } from '@angular/core';
import { Carousel } from '../../../models/Carousel';
import { CarouselService } from '../../../services/carousel.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-carousel',
  templateUrl: './form-carousel.component.html',
  styleUrls: ['./form-carousel.component.css']
})
export class FormCarouselComponent implements OnInit {

  carousel: Carousel = {
    id: 0,
    titulo: '',
    descripcion: '',
    imagen: null,
    created_at: new Date()
  };

  edit = false;

  constructor(private carouselService: CarouselService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.carouselService.getCarousel(params.id).subscribe(
        res => {
          console.log(res);
          this.carousel = res[0];
          this.edit = true;
        },
        err => console.log(err)
      );
    }
  }

  saveCarousel() {
    delete this.carousel.id;
    delete this.carousel.created_at;
    delete this.carousel.imagen;
    this.carouselService.postCarousel(this.carousel).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/sistema/carousel']);
      },
      err => console.log(err)
    );
  }

  updateCarousel() {
    delete this.carousel.created_at;
    delete this.carousel.imagen;
    this.carouselService.updateCarousel(this.carousel.id, this.carousel).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/sistema/carousel']);
      },
      err => console.log(err)
    );
    console.log();
  }

}
