import { Component, OnInit } from '@angular/core';
import { CarouselService } from '../../../services/carousel.service';
import { Carousel } from '../../../models/Carousel';

@Component({
  selector: 'app-index-carousel',
  templateUrl: './index-carousel.component.html',
  styleUrls: ['./index-carousel.component.css']
})
export class IndexCarouselComponent implements OnInit {

  carousel: Carousel|any = [];

  constructor( private carouselService: CarouselService ) { }

  ngOnInit() {
    this.getCarousels();
  }

  getCarousels() {
    this.carouselService.getCarousels().subscribe(
      res => {
        this.carousel = res;
      },
      err => console.log(err)
    );
  }

  deleteCarousel(id: number) {
    this.carouselService.deleteCarousel(id).subscribe(
      res => {
        console.log(res);
        this.getCarousels();
      },
      err => console.log(err)
    );
  }

}
