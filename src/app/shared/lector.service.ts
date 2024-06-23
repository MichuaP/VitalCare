import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LectorService {

  constructor() { }
  speak(text: string) {
    if ('speechSynthesis' in window) {
      let speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      console.error('Tu navegador no admite la síntesis de voz.');
    }
  }
}
