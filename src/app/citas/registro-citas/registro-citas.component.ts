import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cita, FechaOcupada, Medico } from '../../medico';
import { MedicoService } from '../../shared/medico.service';
import {MatDatepickerInputEvent, MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select'; 
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ResumenComponent } from '../resumen/resumen.component';
import { LoadingService } from '../../shared/loading.service';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AuthService } from '../../auth.service';
import { Observable } from 'rxjs';
import { UserService } from '../../user.service';
import { environment } from '../../../environments/environment.development';
import { Paciente } from '../../paciente';
import { CorreoService } from '../../correo.service';
import { QRCodeModule } from 'angularx-qrcode';
import { SafeUrl } from '@angular/platform-browser';
import { QRService } from '../../qr.service';


@Component({
  selector: 'app-registro-citas',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatSelectModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    CommonModule,
    ResumenComponent,
    AngularFireDatabaseModule, 
    QRCodeModule
  ],
  templateUrl: './registro-citas.component.html',
  styleUrl: './registro-citas.component.css'
})

export class RegistroCitasComponent implements OnInit {

  //Resumen
  continuar:boolean=false;
  
  //Formulario
  citaForm: FormGroup;
  especialidad:any="";
  medico:any="";
  medicoAux:any="";
  misMedicos:Medico[]=[];
  nombrePac:string="";
  telefonoPac:string="";
  apellidosPac:string="";

  //Fechas input material
  fechaAct = new Date();
  fechaInp:any="";
  minDate:Date;
  maxDate:Date;

  //Fechas formateadas
  fechaSelected:any="";

  //Recuperar los usuarios
  users:Paciente[]=[];
  //Recuperar usuario actual
  usuario?:Paciente={
    nombre: "",
    apellido:"",
    correo: "",
    telefono:"",
    fecha: ""
  };

  //Mensaje para el correo
  mensaje:string="";
  //Mensaje para el QR
  mensajeQR:string="";
  public qrCodeDownloadLink: SafeUrl = "";
  //Estructura del array de fechas ocupadas
  horas:FechaOcupada[]=[];

  //Horas del servicio
  hours: string[] = [
    '7:00', '8:00', '9:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00', '17:00', '18:00',
    '19:00', '20:00'
  ];

  especialidades:string[]=[
    "Medicina general","Oftalmología", "Cardiología", "Dermatología","Ginecología y obstetricia",
    "Neurología","Pediatría","Oncología","Ortopedia y traumatología", "Endocrinología",
    "Psiquiatría","Geriatría"
  ];

  //Hora seleccionada
  horaSelected:any="";

  //Cosntructor

  constructor(public miservicio: MedicoService, private fb: FormBuilder, private router:Router, public basedatos:AuthService, public user: UserService, public correoService: CorreoService, public qrservice: QRService, private loadingService: LoadingService){

    //Formulario

    this.citaForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      especialidad: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      hora: ['', [Validators.required]],
    });
    //Establecer fecha actual
    const fechaFormatAct = new Date(this.fechaAct);
    //Establecer la fecha mínima
    this.minDate = this.fechaAct;
    //Establecer la fecha máxima es diciembre de este año
    this.maxDate = new Date(this.fechaAct.getFullYear(), 11, 31);
    //Obtener array de horas ocupadas de la base de datos
    this.obtenerHoras();
    this.UsuarioActual();
    this.Autorrellenado();
  }

  UsuarioActual(){
    this.usuario = this.user.getUser();
  }

  Autorrellenado(){
    this.nombrePac = this.usuario.nombre;
    this.apellidosPac = this.usuario.apellido;
    this.telefonoPac = this.usuario.telefono;
    this.citaForm.controls['nombre'].disable();
    this.citaForm.controls['apellidos'].disable();
    this.citaForm.controls['telefono'].disable();
  }

  //Verificar que todo el formulario se llenó
  checkData(){
    const button = document.getElementById('btnConfirmarCita') as HTMLButtonElement;
    button.innerHTML = `
        <div class="spinner-border text-light" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      `;
    if(this.citaForm.valid){
      Swal.fire({
        title: "¿Deseas confirmar tu cita?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Confirmar",
        denyButtonText: `Cancelar`
      }).then((result) => {
         if (result.isConfirmed) {
          this.nuevaCita();
        } else if (result.isDenied) {
        }
        button.innerHTML = `Confirmar cita`;
      });
    }else{
      Swal.fire('¡Porfavor llene todos los campos!', '', 'error').then((result) => {
        button.innerHTML = `Confirmar cita`;
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

  //Función que recibe la hora seleccionada
  horaSelec(hora:any):void{
    this.horaSelected=hora;
  }

  //Función que verifica si la hora está ocupada para el día seleccionado
  hOcupada(fecha: string, hora: string): boolean {
    for (let f= 0; f < this.horas.length; f++) {
      if (this.horas[f].fecha === fecha && this.horas[f].hora === hora) {
        return true;
      }
    }
    return false;
  }

  //ngOnInit
  ngOnInit():void{
    this.loadingService.show();
    this.misMedicos=this.miservicio.getMedicos();
    //Obtenemos datos de local
    const fechasOcupadas = localStorage.getItem('ocupadas');
    if (fechasOcupadas) {
      //Si existe en localstorage, se pasa al array de horas
       this.horas = JSON.parse(fechasOcupadas);
    }else{
      localStorage.setItem('ocupadas', JSON.stringify(this.horas));
    }
    this.loadingService.hide();
  }

//Función que recibe las horas ocupadas (para no seleccionar fecha ocupada)
obtenerHoras() {
  this.basedatos.getFechasOcupadas().subscribe(fechas => {
    this.horas = fechas;
    console.log("Fechas ocupadas:", this.horas);
  }, error => {
    console.error("Error al obtener fechas ocupadas:", error);
    Swal.fire({
      title: 'Error',
      text: 'Error al obtener fechas ocupadas.',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
  });
}

  //Función que recibe la especialidad seleccionada
  espSeleccionada(value:string): void {
		this.especialidad = value;
    this.continuar=true;
	}

  //Función que recibe al doctor seleccionado
  docSeleccionado(doctor:any, indice:number):void{
    this.medicoAux = doctor;
    this.medico = this.misMedicos[indice].nombre;
  }

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }

  //Función para hacer una nueva cita
  nuevaCita(): void {
    let newCita:Cita = {
      nombrePaciente:this.nombrePac,
      telefono: this.telefonoPac,
      costo:"$650",
      nombreDoctor:this.medico,
      especialidad: this.especialidad,
      fecha:this.fechaSelected,
      hora:this.horaSelected
    };
    let nuevasHoras:FechaOcupada = {
      fecha:this.fechaSelected,
      hora:this.horaSelected
    };
    //Utilizar el servicio para agregar la cita a la base de datos "citas"
    this.basedatos.agregarCita(newCita);
    //Agregar las horas ocupadas a la base de datos "horasOcupadas"
    this.basedatos.guardarFechasOcupadas(nuevasHoras);
    this.mensaje = "Doctor/Doctora que te atenderá: " + this.medico 
    + "<br>Especialidad: " + this.especialidad + "<br>Fecha de la cita: " + this.fechaSelected 
    + "<br>Hora de la cita: " + this.horaSelected + "<br>Costo de la cita: $650<br>¡Recuerda llegar puntual a tu cita!<br>" + 
    "<h1>- VitalCare</h1>";
    this.qrservice.sendConsulta(this.user.loggeduser.nombre, this.fechaSelected, this.horaSelected).subscribe((res) => {
      this.mensajeQR = res;
    }, (error) => {
      this.mensajeQR = "Error en la consulta de la base de datos";
    });
    if(newCita){
      this.correoService
      .sendCita(
        this.user.loggeduser.nombre + " " + this.user.loggeduser.apellido,
        this.user.loggeduser.correo,
        this.user.loggeduser.telefono,
        "Informacion de tu cita",
        this.mensaje
      )
      .subscribe(
        (res) => {
          console.log('¡Correo enviado correctamente!');
        },
        (error) => {
          console.log('Error al enviar el correo:', error);
        }
      );
      Swal.fire({
        icon: "success",
        title: "Cita reservada con éxito",
        html:'<div>Puedes pagar al momento de asistir a tu cita. Se te ha enviado un correo electronico con la información de tu cita.</div><div><button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">Generar codigo QR</button></div>',
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
    }
  }

}
