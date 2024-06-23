import { Component } from '@angular/core';
import { Pregunta } from '../medico';
import { FaqService } from '../shared/faq.service';

@Component({
  selector: 'app-ayuda',
  standalone: true,
  imports: [],
  templateUrl: './ayuda.component.html',
  styleUrl: './ayuda.component.css'
})
export class AyudaComponent {
  misPreguntas:Pregunta[] = [];

  constructor(public faqService:FaqService){}

  ngOnInit():void{
    this.misPreguntas = this.faqService.getPreguntas();
  }
}
