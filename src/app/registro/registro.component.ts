import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Cita, Medico } from '../medico';
import { MedicoService } from '../shared/medico.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { CommonModule } from '@angular/common';
import { ResumenComponent } from '../citas/resumen/resumen.component';
import { AuthService } from '../auth.service';
import { LoadingService } from '../shared/loading.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatSelectModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    CommonModule,
    ResumenComponent],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  //Resumen
  continuar:boolean=false;
  
  //Formulario
  citaForm: FormGroup;
  nombrePac:string="";
  telefonoPac:string="";
  apellidosPac:string="";
  correoPac:string="";
  contrasenaPac:string="";
  errorMsg:string="";

  //Fechas input material
  fechaAct = new Date();
  fechaInp:any="";
  minDate:Date;
  maxDate:Date;

  //Fechas formateadas
  fechaSelected:any="";

  //Hora seleccionada
  horaSelected:any="";

  //Cosntructor
  constructor(private fb: FormBuilder, private router:Router, public myAuth: AuthService, private loadingService: LoadingService){
    //Formulario
    this.citaForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      correo: ['', [Validators.required]],
      contraseña: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
    });
    //Establecer fecha actual
    const fechaFormatAct = new Date(this.fechaAct);
    //Establecer la fecha mínima
    this.minDate = this.fechaAct;
  }

  //Verificar que todo el formulario se llenó
  checkData(){
    this.loadingService.show();
    const button = document.getElementById('botonRegistrar') as HTMLButtonElement;
    button.innerHTML = `
        <div class="spinner-border text-light" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      `;
    if(this.citaForm.valid){   
      this.loadingService.hide();   
      Swal.fire({
        title: "¿Deseas confirmar tu registro?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Confirmar",
        denyButtonText: `Cancelar`
      }).then((result) => {
        if (result.isConfirmed) {
          this.registrarPaciente();
        } else if (result.isDenied) {
        }
        button.innerHTML = `¡Registrarse!`;
      });
    }else{
      this.loadingService.hide();
      Swal.fire('¡Porfavor llene todos los campos!', '', 'error').then((result) => {
        button.innerHTML = `¡Registrarse!`;
      });
    }
  }

  //Función que recibe la fecha seleccionada
  fechaSelec(event: MatDatepickerInputEvent<Date>) {
    this.fechaInp= event.value;
    //Formatear la fecha
    const fechaFormatInp = new Date(this.fechaInp);
    this.fechaSelected = fechaFormatInp.toLocaleDateString();
  }

  //ngOnInit
  ngOnInit():void{
  }

  validate_email(eml: string): boolean {
    const expression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (expression.test(eml)) {
      // Email es válido
      return true;
    } else {
      Swal.fire({
        title: 'Correo no válido',
        text: 'El correo electrónico no es válido.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return false;
    }
  }
  
  

  validate_password(pass: string): boolean {
    if (pass.length < 6) {
      Swal.fire({
        title: 'Contraseña no válida',
        text: 'La contraseña debe tener al menos 6 caracteres.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return false;
    } else {
      return true;
    }
  }
  

  validate_field(field: any): boolean {
    if (field.length <= 0) {
      Swal.fire({
        title: 'Campo faltante',
        text: 'Falta un campo.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return false;
    } else {
      return true;
    }
  }
  

  registrarPaciente(): void {
    console.log(this.nombrePac);
    console.log(this.correoPac);
    if(this.validate_password(this.contrasenaPac) && this.validate_email(this.correoPac) && this.validate_field(this.nombrePac)){
      this.myAuth.register(this.correoPac, this.nombrePac, this.apellidosPac, this.contrasenaPac, this.telefonoPac, this.fechaSelected).subscribe(() => {
        Swal.fire({
          title: 'Éxito!',
          text: 'Se ha registrado tu usuario correctamente. ¡VitalCare te da la bienvenida!.',
          icon: 'success',
          confirmButtonText: '¡Genial!',
        }).then(() => {
          this.router.navigate(['/inicio']);
        });
      },(error) => {
        // Error al registrar usuario
        console.error("Error al registrar usuario:", error);
        if (error.code === "auth/email-already-in-use") {
          this.errorMsg = "El correo electrónico ya está en uso. Por favor, intente con otro.";
        } else {
          this.errorMsg = "Ocurrió un error durante el registro. Por favor, inténtelo de nuevo más tarde.";
        }
        Swal.fire({
          title: 'Error',
          text: this.errorMsg,
          icon: 'error',
          confirmButtonText: 'Continuar',
        });
      });
    }
    /*if(newCita){
      Swal.fire({
        icon: "success",
        title: "Cita reservada con éxito",
        text:"Puedes pagar al momento de asistir a tu cita",
        showDenyButton: true,
        denyButtonColor:"#3085d6",
        denyButtonText:"Ir a inicio",
        confirmButtonText: "Ir a mis citas",
      }).then((result) => {
         if (result.isConfirmed) {
          this.router.navigate(['/reportes']);
        } else if (result.isDenied) {
          this.router.navigate(['/inicio']);
        }
      });
    }*/
  }
}
