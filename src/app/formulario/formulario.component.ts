import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule ,FormsModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  nombre: string="";
  
  formulario: FormGroup;

  @Output() propagar = new EventEmitter<string>();

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required, this.nombreValidator]),
      email: new FormControl('', [Validators.required, Validators.email]),
      tel: new FormControl('', [Validators.required, this.telefonoValidator]),
      asunto: new FormControl('', [Validators.required]),
      mensaje: new FormControl('', [Validators.required])
    });
  }

  onPropagar() {
    if (this.formulario.valid) {
      this.propagar.emit(this.formulario.value);
    } else {
      this.formulario.markAllAsTouched();
    }
  }

  
  nombreValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const nombre = control.value;
    if (nombre && nombre.split(' ').length < 2) {
      return { nombreInvalido: true };
    }
    return null;
  }

  
  telefonoValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const tel = control.value;
    const telefonoRegex = /^[0-9]{10}$/; 
    if (tel && !telefonoRegex.test(tel)) {
      return { telefonoInvalido: true };
    }
    return null;
  }
}
