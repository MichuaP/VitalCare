import { Component } from '@angular/core';
import { Desarrolladores } from '../medico';
import { DesarrolladoresService } from '../shared/desarrolladores.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-equipo',
    standalone: true,
    templateUrl: './equipo.component.html',
    styleUrl: './equipo.component.css',
    imports: [CommonModule]
})
export class EquipoComponent {
    array:Desarrolladores [] =[];

    constructor(public desarrolladoresService: DesarrolladoresService){

    }

    ngOnInit(){
        this.recuperarDatos();
    }
/*
    recuperarDatos(){
        this.desarrolladoresService.retornar().subscribe({
            next: this.successRequest.bind(this),
            error: (err) => {console.log(err)}
        });
    }
*/
recuperarDatos() {
    this.desarrolladoresService.retornar().subscribe({
      next: this.successRequest.bind(this),
      error: (err) => {
        console.log(err);
        Swal.fire({
          title: 'Error',
          text: 'Error al recuperar los datos.',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
    });
  }
  
    successRequest(data:any):void{
        console.log("data",data);
        this.array = data.desarrolladores;
        console.log("array", this.array);
    }

    chunkArray(arr: any[], chunkSize: number): any[][] {
        let R = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
          R.push(arr.slice(i, i + chunkSize));
        }
        return R;
    }
}
