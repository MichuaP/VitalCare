import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {
  private emailUrl = 'https://us-central1-pruebafirebase-adf04.cloudfunctions.net/api/enviar-correo'; // URL del endpoint
  private citaUrl = 'https://us-central1-pruebafirebase-adf04.cloudfunctions.net/api/enviar-cita'; // URL del endpoint para las citas
  constructor(private httpClient: HttpClient) { } // Inyectar el servicio

  // Este método toma como argumentos los datos del formulario de correo electrónico
  sendEmail(nombre: string, email: string, telefono: string, asunto: string, mensaje: string) {
    const data = { // Crea un objeto data con estos datos
      nombre: nombre,
      email: email,
      telefono: telefono,
      asunto: asunto,
      mensaje: mensaje
    };
    return this.httpClient.post(this.emailUrl, data); // Enviar los datos al backend
  }

  sendCita(nombre: string, email: string, telefono: string, asunto: string, mensaje: string) {
    const data = { // Crea un objeto data con estos datos
      nombre: nombre,
      email: email,
      telefono: telefono,
      asunto: asunto,
      mensaje: mensaje
    };
    return this.httpClient.post(this.citaUrl, data); // Enviar los datos al backend
  }

}
