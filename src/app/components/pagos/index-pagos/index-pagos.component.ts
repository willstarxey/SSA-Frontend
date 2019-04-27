import { Component, OnInit } from '@angular/core';
import { PagosService } from '../../../services/pagos.service';
import { Pago } from '../../../models/Pago';

@Component({
  selector: 'app-index-pagos',
  templateUrl: './index-pagos.component.html',
  styleUrls: ['./index-pagos.component.css']
})
export class IndexPagosComponent implements OnInit {

  pagos: Pago|any = [];

  constructor( private pagosService: PagosService ) { }

  ngOnInit() {
    this.getPagos();
  }

  getPagos() {
    this.pagosService.getPagos().subscribe(
      res => {
        this.pagos = res;
      },
      err => console.log(err)
    );
  }

  deletePago(id: number) {
    this.pagosService.deletePago(id).subscribe(
      res => {
        console.log(res);
        this.getPagos();
      },
      err => console.log(err)
    );
  }

}
