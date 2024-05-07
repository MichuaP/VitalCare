import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { FooterComponent } from "../footer/footer.component";
import { FormularioComponent } from "../formulario/formulario.component";

@Component({
    selector: 'app-contacto',
    standalone: true,
    templateUrl: './contacto.component.html',
    styleUrl: './contacto.component.css',
    imports: [MenuComponent, FooterComponent, FormularioComponent]
})
export class ContactoComponent {
    name:string="";
    procesaPropagar(nombre:string){
        console.log(nombre);
        this.name = nombre;
        
    }
}
