import { Component } from '@angular/core';
import { Medico } from '../medico';
import { MedicoService } from '../shared/medico.service';

@Component({
  selector: 'app-medicos',
  standalone: true,
  imports: [],
  templateUrl: './medicos.component.html',
  styleUrl: './medicos.component.css'
})
export class MedicosComponent {
  misMedicos:Medico[]=[];

  constructor(public miservicio:MedicoService){ }

  ngOnInit():void{
    this.misMedicos = this.miservicio.getMedicos();
  }
}
