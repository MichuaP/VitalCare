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

  //Agregar una cita al localStorage
  agregarCita(cita: Cita){
    this.citas.push(cita);
    localStorage.setItem('citas', JSON.stringify(this.citas));
  }

  //Agregar la hora ocupada a localstorage

  // Buscar por nombre de medico
  // searchUnMedico(nomMedico:string):number{
  //   let index = this.medicos.findIndex(p => p.nombre === nomMedico);
  //   return index;
  // }
  
}
