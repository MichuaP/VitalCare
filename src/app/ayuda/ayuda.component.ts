import { Component } from '@angular/core';
import { Pregunta } from '../medico';
import { FaqService } from '../shared/faq.service';
import { CustomDatePipe } from '../custom-date.pipe';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-ayuda',
  standalone: true,
  imports: [CustomDatePipe,UpperCasePipe],
  templateUrl: './ayuda.component.html',
  styleUrl: './ayuda.component.css'
})
export class AyudaComponent {
  misPreguntas:Pregunta[] = [];
  currentDate: Date = new Date();

  constructor(public faqService:FaqService){}

  ngOnInit():void{
    this.misPreguntas = this.faqService.getPreguntas();
  }
}
