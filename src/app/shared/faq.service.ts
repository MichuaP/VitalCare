import { Injectable } from '@angular/core';
import { FAQ } from '../preguntas';
import { Pregunta } from '../medico';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  private preguntas: Pregunta[] = FAQ;
  constructor() { }

  // Obtener los servicios
  getPreguntas():Pregunta[] {
    return this.preguntas;
  }
}
