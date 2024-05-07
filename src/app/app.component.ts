import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ServiciosComponent } from "./servicios/servicios.component";
import { MenuComponent } from "./menu/menu.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterModule, ServiciosComponent, MenuComponent, HomeComponent, FooterComponent]
})
export class AppComponent {
  title = 'VitalCare';
}
