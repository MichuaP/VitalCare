import { Component } from '@angular/core';
import { Especialidad, Servicio } from '../medico';
import { ServiciosClinicaService } from '../shared/servicios-clinica.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  misServicios:Servicio[]=[];
  misEspecialidades:Especialidad[]=[];

  constructor(public serviciosClinica: ServiciosClinicaService) {
    console.log("Constructor de servicios de la clinica");
  }

  ngOnInit(): void {
    console.log("ngOnInit de Servicios de la clinica");
    this.misServicios = this.serviciosClinica.getServicios();
    console.log(this.misServicios);

    this.misEspecialidades = this.serviciosClinica.getEspecialidades();
    console.log(this.misEspecialidades);
  }
}
