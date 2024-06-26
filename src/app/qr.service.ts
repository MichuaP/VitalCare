import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QRService {
  private qrUrl = 'https://us-central1-pruebafirebase-adf04.cloudfunctions.net/api/data'; // URL del endpoint

  constructor(private httpClient: HttpClient) { }

  sendConsulta(nombre: string, fecha: string, hora: string) {
    const data = { // Crea un objeto data con estos datos
      nombre: nombre,
      fecha: fecha,
      hora: hora
    };
    return this.httpClient.post(this.qrUrl, data, {responseType: 'text'}); // Enviar los datos al backend
  }
}
