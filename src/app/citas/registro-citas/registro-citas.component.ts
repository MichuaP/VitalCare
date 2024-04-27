import { Component } from '@angular/core';
import { Cita, Medico } from '../../medico';
import { MedicoService } from '../../shared/medico.service';
import {MatDatepickerInputEvent, MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule, provideNativeDateAdapter} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select'; 

@Component({
  selector: 'app-registro-citas',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule],
  templateUrl: './registro-citas.component.html',
  styleUrl: './registro-citas.component.css'
})
export class RegistroCitasComponent {
  
  especialidad:any="";
  medico:any="";
  misMedicos:Medico[]=[];
  miCita!:Cita;

  //Fechas
  fechaAct = new Date();
  fechaInp:any="";
  minDate:Date;
  maxDate:Date;

  //Horas de servicio
   horas = [
     {"hora": '07:00', "d":"0"},{"hora": '08:00', "d":"0"},{"hora": '09:00', "d":"0"},
     {"hora": '10:00', "d":"0"},{"hora": '11:00', "d":"0"},{"hora": '12:00', "d":"0"},
     {"hora": '13:00', "d":"0"},{"hora": '14:00', "d":"0"},{"hora": '15:00', "d":"0"},
     {"hora": '16:00', "d":"0"},{"hora": '17:00', "d":"0"},{"hora": '18:00', "d":"0"},
     {"hora": '19:00', "d":"0"},{"hora": '20:00', "d":"0"}
  ];

  //Inyectamos el servicio en el constructor
  constructor(public miservicio: MedicoService){
    console.log("constructor de medicos citas");
    //Manejo de fechas input material
    const currentDate = new Date();
    //Fecha mínima es la fecha actual
    this.minDate = currentDate;
    //Fecha máxima es diciembre de este año
    this.maxDate = new Date(currentDate.getFullYear(), 11, 31);
  }

  events: string[] = [];

  fechaSelec(event: MatDatepickerInputEvent<Date>) {
    console.log("la fecha seleccionada es "+ event.value);
  }

  horaSelec(hora:any):void{
    console.log('Hora seleccionada:'+hora);
  }

  ngOnInit():void{
    console.log("ngOnInit de citas 1");
    this.misMedicos=this.miservicio.getMedicos();
    console.log(this.misMedicos);
    //Obtenemos datos de local
    const horasOcu = localStorage.getItem('ocupadas');
    if (horasOcu) {
      this.horas = JSON.parse(horasOcu);
      console.log("Se han recuperado horas del localstorage");
      console.log('Horas recuperadas del localStorage:', this.horas);
    }else{
      console.log('No hay horas guardadas en el localStorage.');
      localStorage.setItem('ocupadas', JSON.stringify(this.horas));
    }
  }

  //Función que recibe la especialidad seleccionada
  espSeleccionada(value:string): void {
		this.especialidad = value;
    console.log(this.especialidad);
	}

  //Función que recibe al doctor seleccionado
  docSeleccionado(doctor:any):void{
    this.medico = doctor;
  }

  nuevaCita(): void{
    //  this.clientesService.agregarCliente(this.cliente);
    // this.miCita
  }

  seleccionada(select:string){
    console.log("lo seleccionado es:"+select);
  }
  

}
