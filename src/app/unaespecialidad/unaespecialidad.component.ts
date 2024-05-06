import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Especialidad } from '../medico';
import { ServiciosClinicaService } from '../shared/servicios-clinica.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-unaespecialidad',
  standalone: true,
  imports: [RouterModule, CommonModule],
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

  /* ------- Estilos para uso de ngStyle ------ */

  tam = 40;
  tam2 = 20;
  estilo = 'bold';
  highlight = '#43ba7f';

  presentacionBtn = {
    'background-color': '#43ba7f',
    'color': 'white',
    'font-size.px': '20',
    'border-radius.px': '40',
    'font-weight': 'bold',
    'padding': '15px 27px',
    'text-decoration': 'none',
    'transition': 'background-color 0.3s ease',
  };

  hoverStyles = {
    'background-color': '#193126'
  };

  onMouseEnter() {
    Object.assign(this.presentacionBtn, this.hoverStyles);
  }

  onMouseLeave() {
    this.presentacionBtn['background-color'] = '#43ba7f';
  }

  circulo = {
    'border': '5px solid #43ba7f',
    'border-radius': '50%',
    'width.px': '100',
    'height.px': '100',
    'overflow': 'hidden',
    'display': 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    'margin': '0 auto',
    'margin-bottom.px': '10'
  };

  imgStyle = {
    'width':'100%',
    'border-radius.px':'30'
  }
}