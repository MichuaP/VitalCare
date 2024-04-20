import { Component } from '@angular/core';
import { Medico } from '../../medico';
import { MedicoService } from '../../shared/medico.service';

@Component({
  selector: 'app-registro-citas',
  standalone: true,
  imports: [],
  templateUrl: './registro-citas.component.html',
  styleUrl: './registro-citas.component.css'
})
export class RegistroCitasComponent {
  // cliente!: Cliente;
  // grupos!: Grupo[];

  // constructor(private clientesService: ClientesService){}

  // ngOnInit(){
  //   this.cliente = this.clientesService.nuevoCliente();
  //   this.grupos = this.clientesService.getGrupos();
  // }

  // nuevoCliente(): void{
  //   this.clientesService.agregarCliente(this.cliente);
  //   this.cliente = this.clientesService.nuevoCliente();
  // }

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

}
