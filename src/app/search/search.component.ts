import { Component } from '@angular/core';
import { UnaespecialidadComponent } from '../unaespecialidad/unaespecialidad.component';
import { Especialidad } from '../medico';
import { ActivatedRoute } from '@angular/router';
import { ServiciosClinicaService } from '../shared/servicios-clinica.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [UnaespecialidadComponent, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  nombreEsp: string = "";
  indice: number = 0;

  miEspecialidad:Especialidad = {
    nombreEspecialidad: "",
    descripcion: "",
    icono: "",
    informacion: "",
    img: "",
    patologias: "",
    img2: "",
    acudir: ""
  };

  constructor(private serviciosClinica: ServiciosClinicaService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(parms => {
      this.nombreEsp = parms['nombreEsp'];
      this.indice = this.serviciosClinica.searchUnaEspecialidad(this.nombreEsp);
      console.log(this.indice);

      if(this.indice != -1) {
        this.miEspecialidad = this.serviciosClinica.getUnaEspecialidad(this.indice);
      }
    })
  }
}
