import { Component, EventEmitter, Output } from '@angular/core';
import { Cita, Medico } from '../../medico';
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
    ResumenComponent
  ],
  templateUrl: './registro-citas.component.html',
  styleUrl: './registro-citas.component.css'
})

export class RegistroCitasComponent {

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

  //Estructura del array de fechas ocupadas (localstorage)
  horas=[
    {"fecha":"30/4/2024","hora":"12:00"}
    //dd/mm/yyyy
  ];

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
  constructor(public miservicio: MedicoService, private fb: FormBuilder, private router:Router){
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
  }

  //Verificar que todo el formulario se llenó
  checkData(){
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
      });
    }else{
      Swal.fire('¡Porfavor llene todos los campos!', '', 'error');
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
    this.misMedicos=this.miservicio.getMedicos();
    //Obtenemos datos de local
    const fechasOcupadas = localStorage.getItem('ocupadas');
    if (fechasOcupadas) {
      //Si existe en localstorage, se pasa al array de horas
       this.horas = JSON.parse(fechasOcupadas);
    }else{
      localStorage.setItem('ocupadas', JSON.stringify(this.horas));
    }
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
    //Utilizar el servicio para agregar a cita al array de localStorage
    this.miservicio.agregarCita(newCita);
    //Agregar las horas ocupadas al array de citas ocupadas
    this.horas.push({fecha:this.fechaSelected, hora:this.horaSelected});
    localStorage.setItem('ocupadas', JSON.stringify(this.horas));
    if(newCita){
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
    }
  }

}
