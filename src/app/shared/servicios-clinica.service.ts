import { Injectable } from '@angular/core';
import { CESPECIALIDADES, CSERVICIOS } from '../misServicios';
import { Especialidad, Servicio } from '../medico';

@Injectable({
  providedIn: 'root',
})
export class ServiciosClinicaService {

  // Obtener los array CSERVICIOS y CESPECIALIDADES
  private servicios: Servicio[] = CSERVICIOS;
  private especialidades: Especialidad[] = CESPECIALIDADES;

  constructor() { }

  // Obtener los servicios
  getServicios():Servicio[] {
    return this.servicios;
  }

  // Obtener las especialidades
  getEspecialidades():Especialidad[] {
    return this.especialidades;
  }

  getUnaEspecialidad(posicion:number):Especialidad {
    return this.especialidades[posicion];
  }

  searchUnaEspecialidad(nomEsp: string):number {
    let index = this.especialidades.findIndex(p=> p.nombreEspecialidad === nomEsp);
    return index;
  }
}
