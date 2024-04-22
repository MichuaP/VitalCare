import { Injectable } from '@angular/core';
import { Medico } from '../medico';
import { CMEDICOS } from '../misMedicos';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  // Obtener array CMEDICOS
  private medicos:Medico[]=CMEDICOS;

  constructor() { }

  // Obtener los médicos
  getMedicos():Medico[]{
    return this.medicos;
  }

  // Obtener un médico
  getUnMedico(posicion:number):Medico{
    return this.medicos[posicion];
  }

  // Buscar por nombre de medico
  // searchUnMedico(nomMedico:string):number{
  //   let index = this.medicos.findIndex(p => p.nombre === nomMedico);
  //   return index;
  // }
  
}
