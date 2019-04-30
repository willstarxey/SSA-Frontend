import { Component, OnInit } from '@angular/core';
import { Pago } from 'src/app/models/Pago';
import { UsersService } from '../../services/users.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-user-system',
  templateUrl: './user-system.component.html',
  styleUrls: ['./user-system.component.css']
})
export class UserSystemComponent implements OnInit {

  pagos: Pago|any;

  constructor( private usersService: UsersService, private spinnerService: NgxSpinnerService ) { }

  ngOnInit() {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 800);
    this.getPays( Number(localStorage.getItem('ID')) );
  }

  private getPays(id: number) {
    this.usersService.getPagos(id).subscribe(
      res => {
        this.pagos = res;
      },
      err => console.log(err)
    );
  }


}
