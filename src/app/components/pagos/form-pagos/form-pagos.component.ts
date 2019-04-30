import { Component, OnInit } from '@angular/core';
import { Pago } from '../../../models/Pago';
import { PagosService } from '../../../services/pagos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-form-pagos',
  templateUrl: './form-pagos.component.html',
  styleUrls: ['./form-pagos.component.css']
})
export class FormPagosComponent implements OnInit {

  pago: Pago = {
    id: 0,
    concepto: '',
    cantidad: 0,
    Users_id: 0,
    created_at: new Date()
  };

  edit = false;

  users: User|any = [];

// tslint:disable-next-line: max-line-length
  constructor( private pagosService: PagosService, private activatedRoute: ActivatedRoute, private router: Router, private usersService: UsersService ) { }

  ngOnInit() {
    this.getList();
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.pagosService.getPago(params.id).subscribe(
        res => {
          this.pago = res[0];
          this.edit = true;
        },
        err => console.log(err)
      );
    }
  }

  savePago() {
    delete this.pago.id;
    delete this.pago.created_at;
    console.log(this.pago);
    this.pagosService.postPago(this.pago).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/sistema/pagos']);
      },
      err => console.log(err)
    );
  }

  updatePago() {
    delete this.pago.created_at;
    this.pagosService.updatePago(this.pago.id, this.pago).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/sistema/pagos']);
      },
      err => console.log(err)
    );
    console.log();
  }

  getList() {
    this.usersService.getUsersList().subscribe(
      res => {
        this.users = res;
      },
      err => console.log(err)
    );
  }

  hola() {
    console.log('hola');
  }

}
