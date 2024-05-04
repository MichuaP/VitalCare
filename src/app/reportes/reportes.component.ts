import { Component } from '@angular/core';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [],
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.css',
})
export class ReportesComponent {
  citas: any[] = []; // Arreglo para almacenar todas las citas
  fechaActual: Date; // Variable para almacenar la fecha actual
  citasAnteriores: any[] = []; // Arreglo para almacenar citas pasadas
  citasProximas: any[] = []; // Arreglo para almacenar citas futuras

  constructor() {
    // Extraer la fecha actual del sistema
    this.fechaActual = new Date();
    console.log('La fecha actual es: ' + this.fechaActual.toLocaleDateString());
  }

  ngOnInit(): void {
    this.obtenerCitasLocalStorage(); // Extrae las citas almacenadas en el localStorage
    this.filtrarCitas(); // Se llama a la función para filtrar las citas entre pasadas y futuras
  }

  // Método para obtener las citas almacenadas en el localStorage
  obtenerCitasLocalStorage() {
    const citasString = localStorage.getItem('citas');
    if (citasString) {
      this.citas = JSON.parse(citasString); // Si hay citas almacenadas, se parsean y se asignan al arreglo de citas
    }
  }

  // Método para filtrar las citas entre pasadas y futuras
  filtrarCitas() {
    this.citas.forEach(cita => {
      const fechaCita = new Date(cita.fecha); // Se convierte la fecha de la cita en un objeto Date
      if (fechaCita < this.fechaActual) { // Si la fecha de la cita es anterior a la fecha actual
        this.citasAnteriores.push(cita); // Se añade la cita al arreglo de citas pasadas
        return this.citasAnteriores;
      } else {
        this.citasProximas.push(cita); // Si no, se añade al arreglo de citas futuras
        return this.citasProximas;
      }
    });

    console.log('Citas anteriores:', this.citasAnteriores);
    console.log('Citas próximas:', this.citasProximas);
  }

  // Método para filtrar las citas según el tipo seleccionado (próximas, anteriores o todas)
  tipoCita(event: any) {
    const tipo = event.target.value; // Se obtiene el valor seleccionado en el evento
    if (tipo === 'proximas') {
        this.citas = this.citasProximas; // Si el tipo es "proximas", se muestran las citas próximas al arreglo de citas
    } else if (tipo === 'anteriores') {
        this.citas = this.citasAnteriores; // Si es "anteriores", se muestran las citas pasadas
    } else if (tipo === 'todas') {
      this.citas = JSON.parse(localStorage.getItem('citas') || '[]'); // Si es "todas", se obtienen todas las citas del localStorage
    }
}
}
