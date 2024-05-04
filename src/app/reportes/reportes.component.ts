import { Component } from '@angular/core';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [],
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.css',
})
export class ReportesComponent {
  citas: any[] = [];
  fechaAct = new Date();
  //Fechas formateadas
  fechaSelected: any = '';
  citaSeleccionada: string = 'todas'; // Por defecto, mostrar todas las citas

  constructor() {
    //Establecer fecha actual
    const fechaFormatAct = new Date(this.fechaAct);
    console.log('La fecha actual formateada es: ' + fechaFormatAct.toLocaleDateString());
  }

  ngOnInit(): void {
    this.obtenerCitasLocalStorage();
  }

  obtenerCitasLocalStorage() {
    const citasString = localStorage.getItem('citas');
    if (citasString) {
      this.citas = JSON.parse(citasString);
    }
  }

  obtenerCitasSegunTipo(): any[] {
    if (this.citaSeleccionada === 'proximas') {
      return this.citas.filter((cita) => {
        const fechaCita = new Date(cita.fecha);
        return fechaCita > this.fechaAct; // Filtrar citas cuya fecha sea proxima a la fecha actual
      });
    } else if (this.citaSeleccionada === 'anteriores') {
      return this.citas.filter((cita) => {
        const fechaCita = new Date(cita.fecha);
        return fechaCita < this.fechaAct; // Filtrar citas cuya fecha sea anterior a la fecha actual
      });
    } else {
      return this.citas;
    }
  }

  tipoCita(event: any) {
    this.citaSeleccionada = event.target.value;
  }
}
