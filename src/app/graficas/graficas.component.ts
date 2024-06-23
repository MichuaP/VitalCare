import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-graficas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './graficas.component.html',
  styleUrl: './graficas.component.css'
})
export class GraficasComponent implements OnInit {
  public chart: Chart;
  // public datos1: number[];
  public datos2: number[];
  public titulos: string[];

  ngOnInit(): void {
    this.crearGraficas();
  }
  
  crearGraficas() {
    const data = this.datos();

    this.chart = new Chart("chart", {
      type: 'bar',
      data: data,
      options: {
        indexAxis: 'x',
        elements: {
          bar: {
            borderWidth: 2,
          }
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
          },
          title: {
            display: true,
            text: 'Pacientes ingresados'
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Especialidad asistida'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Pacientes ingresados'
            }
          }
        }
      }
    })
  }

  datos() {
    const labels = ["Diagnóstico clínico", "Medicina General", "Oftalmología", "Cardiología", "Dermatología", "Ginecología y Obstetricia", "Neurología", "Pediatría", "Oncología", "Ortopedia y Traumatología", "Endocrinología", "Psiquiatría", "Geriatría"];
    this.titulos = labels;
    const valoresRamdom = (num: number) => Array.from({ length: num }, () => Math.floor(Math.random() * 100));
    // this.datos1 = valoresRamdom(labels.length);
    this.datos2 = valoresRamdom(labels.length);

    return {
      labels: labels,
      datasets: [
        // {
        //   label: 'Urgencias',
        //   data: this.datos1,
        //   borderColor: 'rgb(184, 0, 184)',
        //   backgroundColor: 'rgb(128, 0, 128)',
        // },
        {
          label: 'Pacientes',
          data: this.datos2,
          borderColor: 'rgb(0, 219, 135)',
          backgroundColor: 'rgb(0, 172, 106)',
        }
      ]
    };
  }

  actualizar() {
    const newData = this.datos();
    this.chart.data = newData;
    this.chart.update();
  }

}
