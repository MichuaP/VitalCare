import { Component, ElementRef, AfterViewInit, OnDestroy  } from '@angular/core';
import { Medico } from '../medico';
import { MedicoService } from '../shared/medico.service';
import Masonry from 'masonry-layout';

@Component({
  selector: 'app-medicos',
  standalone: true,
  imports: [],
  templateUrl: './medicos.component.html',
  styleUrl: './medicos.component.css'
})
export class MedicosComponent {
  misMedicos:Medico[]=[];
  masonry!: Masonry;
  constructor(public miservicio:MedicoService, private el: ElementRef){ }

  ngOnInit():void{
    this.misMedicos = this.miservicio.getMedicos();
  }

  ngAfterViewInit(): void {
    // Inicializa Masonry después de que la vista del componente se haya inicializado completamente.
    this.initMasonry();
  }

  private initMasonry(): void {
    // Inicializa Masonry con el elemento contenedor que deseas aplicar Masonry.
    this.masonry = new Masonry(this.el.nativeElement, {
      // Otras opciones de configuración según tus necesidades.
      itemSelector: '.col-card',
      percentPosition: true
    });
  }
}
