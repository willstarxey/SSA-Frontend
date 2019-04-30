import { Component, OnInit } from '@angular/core';
import { PagosService } from '../../../services/pagos.service';
import { Pago } from '../../../models/Pago';
import { UsersService } from '../../../services/users.service';
import { User } from 'src/app/models/User';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-index-pagos',
  templateUrl: './index-pagos.component.html',
  styleUrls: ['./index-pagos.component.css']
})
export class IndexPagosComponent implements OnInit {

  pagos: Pago|any = [];

  constructor( private pagosService: PagosService, private usersService: UsersService, private spinnerService: NgxSpinnerService ) { }

  ngOnInit() {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 800);
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
