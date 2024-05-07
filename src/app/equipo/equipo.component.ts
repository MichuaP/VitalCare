import { Component } from '@angular/core';
import { Desarrolladores } from '../medico';
import { DesarrolladoresService } from '../shared/desarrolladores.service';

@Component({
    selector: 'app-equipo',
    standalone: true,
    templateUrl: './equipo.component.html',
    styleUrl: './equipo.component.css',
    imports: []
})
export class EquipoComponent {
    array:Desarrolladores [] =[];

    constructor(public desarrolladoresService: DesarrolladoresService){

    }

    ngOnInit(){
        this.recuperarDatos();
    }

    recuperarDatos(){
        this.desarrolladoresService.retornar().subscribe({
            next: this.successRequest.bind(this),
            error: (err) => {console.log(err)}
        });
    }

    successRequest(data:any):void{
        console.log("data",data);
        this.array = data.desarrolladores;
        console.log("array", this.array);
    }
}
