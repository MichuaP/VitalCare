import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { MenuComponent } from "../menu/menu.component";

@Component({
    selector: 'app-equipo',
    standalone: true,
    templateUrl: './equipo.component.html',
    styleUrl: './equipo.component.css',
    imports: [FooterComponent, MenuComponent]
})
export class EquipoComponent {

}
