import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServiciosComponent } from "./servicios/servicios.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ServiciosComponent]
})
export class AppComponent {
  title = 'Mini2_AngularTW';
}
