import { Component } from '@angular/core';
import { Cita, Medico } from '../../medico';
import { MedicoService } from '../../shared/medico.service';

@Component({
  selector: 'app-registro-citas',
  standalone: true,
  imports: [],
  templateUrl: './registro-citas.component.html',
  styleUrl: './registro-citas.component.css'
})
export class RegistroCitasComponent {
  
  especialidad:any="";
  medico:any="";
  misMedicos:Medico[]=[];

  //Inyectamos el servicio en el constructor
  constructor(public miservicio: MedicoService){
    console.log("constructor de medicos citas");
  }

  ngOnInit():void{
    console.log("ngOnInit de citas 1");
    this.misMedicos=this.miservicio.getMedicos();
    console.log(this.misMedicos);
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

  miCita!:Cita;

  nuevaCita(): void{
    //  this.clientesService.agregarCliente(this.cliente);
    // this.miCita
  }

  seleccionada(select:string){
    console.log("lo seleccionado es:"+select);
  }

}
