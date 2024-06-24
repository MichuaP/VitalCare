import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QRService {
  private qrUrl = 'http://localhost:3000/data'; // URL del endpoint

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
