import { Component, OnInit } from '@angular/core';
import { FestividadesService } from 'src/app/services/festividades.service';
import { Festividad } from '../../../models/Festividad';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-index-festividades',
  templateUrl: './index-festividades.component.html',
  styleUrls: ['./index-festividades.component.css']
})
export class IndexFestividadesComponent implements OnInit {

  festividades: Festividad|any = [];

  constructor( private festividadesService: FestividadesService, private spinnerService: NgxSpinnerService ) { }

  ngOnInit() {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 800);
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
