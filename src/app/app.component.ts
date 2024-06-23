import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ServiciosComponent } from "./servicios/servicios.component";
import { MenuComponent } from "./menu/menu.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { AccesibilidadComponent } from './accesibilidad/accesibilidad.component';
import { LectorService } from './shared/lector.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterModule, ServiciosComponent, MenuComponent, HomeComponent, FooterComponent, AccesibilidadComponent]
})
export class AppComponent {
  title = 'VitalCare';

  constructor( private service: LectorService){

  }

  content(event: MouseEvent) {
    const element = event.target as HTMLElement;
    let contenido: string[] = [];
    if (element.textContent != null) {
      contenido = element.textContent.split(' ');
    } else {
      contenido = [""];
    }
    const contenidoString = contenido.join(' ');
      this.service.speak(contenidoString);
    
  }
}
