import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';
import { CorreoService } from '../correo.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
  imports: [MenuComponent, FooterComponent, RouterOutlet, CommonModule, FormsModule, HttpClientModule],
})
export class ContactoComponent {
  nombre: string = '';
  email: string = '';
  telefono: string = '';
  asunto: string = '';
  mensaje: string = '';

  constructor(private correoService: CorreoService) {}

  enviarCorreo() {
    this.correoService
      .sendEmail(
        this.nombre,
        this.email,
        this.telefono,
        this.asunto,
        this.mensaje
      )
      .subscribe(
        (res) => {
          console.log('¡Correo enviado correctamente!');
          // Mostrar confirmación con SweetAlert2
          Swal.fire({
            title: '¡Enviado!',
            text: 'El correo ha sido enviado con éxito',
            icon: 'success',
          });
        },
        (error) => {
          console.log('Error al enviar el correo:', error);
          // Mostrar error con SweetAlert2
          Swal.fire({
            title: '¡Error!',
            text: 'Hubo un problema al enviar el correo',
            icon: 'error',
          });
        }
      );
  }
}
