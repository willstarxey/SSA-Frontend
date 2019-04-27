import { Component, OnInit } from '@angular/core';
import { AvisosService } from '../../../services/avisos.service';
import { Aviso } from '../../../models/Aviso';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-avisos',
  templateUrl: './form-avisos.component.html',
  styleUrls: ['./form-avisos.component.css']
})
export class FormAvisosComponent implements OnInit {

  aviso: Aviso = {
    id: 0,
    titulo: '',
    descripcion: '',
    created_at: new Date()
  };

  edit = false;

  constructor( private avisosService: AvisosService, private router: Router, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.avisosService.getAviso(params.id).subscribe(
        res => {
          console.log(res);
          this.aviso = res[0];
          this.edit = true;
        },
        err => console.log(err)
      );
    }
  }

  saveAviso() {
    delete this.aviso.id;
    delete this.aviso.created_at;
    this.avisosService.postAviso(this.aviso).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/sistema/avisos']);
      },
      err => console.log(err)
    );
  }

  updateAviso() {
    delete this.aviso.created_at;
    this.avisosService.updateAviso(this.aviso.id, this.aviso).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/sistema/avisos']);
      },
      err => console.log(err)
    );
  }

}
