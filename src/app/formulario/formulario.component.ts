import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  nombre: string="";
  
  @Output() propagar = new EventEmitter<string>();

  onPropagar(){
    this.propagar.emit(this.nombre);
  }
}
