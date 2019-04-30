import { Component, OnInit } from '@angular/core';
import { AvisosService } from '../../../services/avisos.service';
import { Aviso } from '../../../models/Aviso';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-index-avisos',
  templateUrl: './index-avisos.component.html',
  styleUrls: ['./index-avisos.component.css']
})
export class IndexAvisosComponent implements OnInit {

  avisos: Aviso|any = [];

  constructor( private avisosService: AvisosService, private spinnerService: NgxSpinnerService ) { }

  ngOnInit() {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 800);
    this.getAvisos();
  }

  getAvisos() {
    this.avisosService.getAvisos().subscribe(
      res => {
        this.avisos = res;
      },
      err => console.log(err)
    );
  }

  deleteAviso(id: number) {
    this.avisosService.deleteAviso(id).subscribe(
      res => {
        console.log(res);
        this.getAvisos();
      },
      err => console.log(err)
    );
  }

}
