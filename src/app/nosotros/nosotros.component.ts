import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { DomseguroPipe } from '../domseguro.pipe';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [MatTabsModule, MatListModule, MatIconModule,DomseguroPipe],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {
  video:string="SaINJn6ZKsM?si=_-lUR9QtiRphRLmn";

}
