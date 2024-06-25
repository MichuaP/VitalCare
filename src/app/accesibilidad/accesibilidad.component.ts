import { A11yModule, FocusTrap, FocusTrapFactory } from '@angular/cdk/a11y';
import { Component, ElementRef, OnInit } from '@angular/core';
import { LectorService } from '../shared/lector.service';

@Component({
  selector: 'app-accesibilidad',
  standalone: true,
  imports: [A11yModule],
  templateUrl: './accesibilidad.component.html',
  styleUrl: './accesibilidad.component.css'
})
export class AccesibilidadComponent implements OnInit{
  isScreenReaderEnabled = false;
  fontSize = 16; 
  highContrast = false;
  largeCursor = false;
  focusTrap: FocusTrap;

  ngOnInit(): void {
    
  }
  constructor(private focusTrapFactory: FocusTrapFactory, private elementRef: ElementRef, private service: LectorService) {
    this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
  }
/*
  increaseFontSize() {
    this.fontSize += 2;
    document.body.style.fontSize = `${this.fontSize}px`;
  }

  decreaseFontSize() {
    this.fontSize = Math.max(12, this.fontSize - 2); 
    document.body.style.fontSize = `${this.fontSize}px`;
  }
*/

increaseFontSize() {
  this.fontSize += 2;
  document.documentElement.style.fontSize = `${this.fontSize}px`;
}

decreaseFontSize() {
  this.fontSize = Math.max(12, this.fontSize - 2);
  document.documentElement.style.fontSize = `${this.fontSize}px`;
}
  toggleHighContrast() {
    this.highContrast = !this.highContrast;
    if (this.highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }
  
  enableFocusTrap() {
    this.focusTrap.enabled;
  }

  disableFocusTrap() {
    this.focusTrap.enabled;
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

  toggleLargeCursor() {
    this.largeCursor = !this.largeCursor;
    if (this.largeCursor) {
      document.body.classList.add('large-cursor');
    } else {
      document.body.classList.remove('large-cursor');
    }
  }

  menuVisible: boolean = false;
  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }


}
