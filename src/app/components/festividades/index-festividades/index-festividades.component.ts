import { Component, OnInit } from '@angular/core';
import { FestividadesService } from 'src/app/services/festividades.service';
import { Festividad } from '../../../models/Festividad';

@Component({
  selector: 'app-index-festividades',
  templateUrl: './index-festividades.component.html',
  styleUrls: ['./index-festividades.component.css']
})
export class IndexFestividadesComponent implements OnInit {

  festividades: Festividad|any = [];

  constructor( private festividadesService: FestividadesService ) { }

  ngOnInit() {
    this.getFestividades();
  }

  getFestividades() {
    this.festividadesService.getFestividades().subscribe(
      res => {
        this.festividades = res;
      },
      err => console.log(err)
    );
  }

  deleteFestividad(id: number) {
    this.festividadesService.deleteFestividad(id).subscribe(
      res => {
        console.log(res);
        this.getFestividades();
      },
      err => console.log(err)
    );
  }

}
