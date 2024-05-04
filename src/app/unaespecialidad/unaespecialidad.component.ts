import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Especialidad } from '../medico';
import { ServiciosClinicaService } from '../shared/servicios-clinica.service';

@Component({
  selector: 'app-unaespecialidad',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './unaespecialidad.component.html',
  styleUrl: './unaespecialidad.component.css'
})
export class UnaespecialidadComponent {
  @Input() especialidad!:Especialidad;

  constructor(public serviciosClinica: ServiciosClinicaService, public activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.especialidad = serviciosClinica.getUnaEspecialidad(params['id']);
    })
  }
}
