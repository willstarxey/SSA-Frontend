import { Component, OnInit } from '@angular/core';
import { Festividad } from '../../../models/Festividad';
import { FestividadesService } from '../../../services/festividades.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-festividades',
  templateUrl: './form-festividades.component.html',
  styleUrls: ['./form-festividades.component.css']
})
export class FormFestividadesComponent implements OnInit {

  festividad: Festividad = {
    id: 0,
    titulo: '',
    descripcion: '',
    imagen: null,
    fecha: new Date(),
    created_at: new Date()
  };

  edit = false;

  constructor(private festividadesService: FestividadesService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activeRoute.snapshot.params;
    console.log(params);
    if (params.id) {
      this.festividadesService.getFestividad(params.id).subscribe(
        res => {
          console.log(res);
          this.festividad = res[0];
          this.edit = true;
        },
        err => console.log(err)
      );
    }
  }

  saveFestividad() {
    delete this.festividad.id;
    delete this.festividad.created_at;
    delete this.festividad.imagen;
    delete this.festividad.fecha;
    this.festividadesService.postFestividad(this.festividad).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/sistema/festividades']);
      },
      err => console.log(err)
    );
  }

  updateFestividad() {
    delete this.festividad.created_at;
    delete this.festividad.imagen;
    delete this.festividad.fecha;
    this.festividadesService.updateFestividad(this.festividad.id, this.festividad).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/sistema/festividades']);
      },
      err => console.log(err)
    );
    console.log();
  }

}
