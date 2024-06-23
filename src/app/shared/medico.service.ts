import { Injectable } from '@angular/core';
import { Cita, Medico } from '../medico';
import { CMEDICOS } from '../misMedicos';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  // Obtener array CMEDICOS
  private medicos:Medico[]=CMEDICOS;

  //array de citas de localstorage
  citas!: Cita[];

  constructor() {this.citas = JSON.parse(localStorage.getItem("citas") || '[]');}

  // Obtener los médicos
  getMedicos():Medico[]{
    return this.medicos;
  }
  
}
