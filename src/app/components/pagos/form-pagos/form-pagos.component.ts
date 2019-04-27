import { Component, OnInit } from '@angular/core';
import { Pago } from '../../../models/Pago';
import { PagosService } from '../../../services/pagos.service';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor( private pagosService: PagosService, private activatedRoute: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.pagosService.getPago(params.id).subscribe(
        res => {
          console.log(res);
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

}
