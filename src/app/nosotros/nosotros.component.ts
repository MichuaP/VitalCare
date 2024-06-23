import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { DomseguroPipe } from '../domseguro.pipe';
import { LectorService } from '../shared/lector.service';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [MatTabsModule, MatListModule, MatIconModule,DomseguroPipe],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {
  video:string="SaINJn6ZKsM?si=_-lUR9QtiRphRLmn";
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
