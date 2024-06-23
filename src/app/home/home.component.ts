import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { DomseguroPipe } from '../domseguro.pipe';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LectorService } from '../shared/lector.service';
import { AccesibilidadComponent } from '../accesibilidad/accesibilidad.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [MenuComponent, DomseguroPipe, RouterModule, AccesibilidadComponent]
})
export class HomeComponent {
    video:string="kkHVpcB4IyU";       
    constructor(private service: LectorService) {}
  content(event: MouseEvent) {
    const element = event.target as HTMLElement;
    let contenido: string[] = [];
    if (element.textContent != null) {
      contenido = element.textContent.split(' ');
    } else {
      contenido = [''];
    }
    const contenidoString = contenido.join(' ');
    this.service.speak(contenidoString);
  }
}
