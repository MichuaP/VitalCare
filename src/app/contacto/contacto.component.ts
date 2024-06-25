import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';
import { CorreoService } from '../correo.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
  imports: [MenuComponent, FooterComponent, RouterOutlet, CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule],
})
export class ContactoComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private correoService: CorreoService) {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, this.nombreValidator]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, this.telefonoValidator]],
      asunto: ['', [Validators.required]],
      mensaje: ['', [Validators.required]]
    });
  }

  telefonoValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const tel = control.value;
    const telefonoRegex = /^[0-9]{10}$/;
    if (tel && !telefonoRegex.test(tel)) {
      return { telefonoInvalido: true };
    }
    return null;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const { nombre, email, telefono, asunto, mensaje } = this.contactForm.value;
      this.correoService.sendEmail(nombre, email, telefono, asunto, mensaje).subscribe(
        () => {
          Swal.fire({
            title: '¡Enviado!',
            text: 'El correo ha sido enviado con éxito',
            icon: 'success',
          });
          this.contactForm.reset();
        },
        (error) => {
          Swal.fire({
            title: '¡Error!',
            text: 'Hubo un problema al enviar el correo',
            icon: 'error',
          });
        }
      );
    } else {
      this.contactForm.markAllAsTouched();
      Swal.fire('¡Por favor, llene todos los campos!', '', 'error');
    }
  }
  

  nombreValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const nombre = control.value;
    if (nombre && nombre.split(' ').length < 2) {
      return { nombreInvalido: true };
    }
    return null;
  }
}
