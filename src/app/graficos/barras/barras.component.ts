import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { AuthService } from '../../auth.service';
import { PieComponent } from '../pie/pie.component';
import { LineComponent } from '../line/line.component';

@Component({
  selector: 'app-barras',
  standalone: true,
  imports: [CommonModule, PieComponent, LineComponent],
  templateUrl: './barras.component.html',
  styleUrl: './barras.component.css'
})
export class BarrasComponent implements OnInit {
  public chart: Chart;
  public datos: number[];
  public titulos: string[];

  constructor(public myAuth: AuthService) {
    this.myAuth.getCitas().subscribe(
      (data) => {
        console.log(data, 'dataengraficas');
        console.log(data, 'dataengraficas');

        // Inicializar un objeto para contar las especialidades
        let especialidadConteo: { [key: string]: number } = {};

        data.forEach((cita: any) => {
          let especialidad = cita.especialidad;
          if (especialidadConteo[especialidad]) {
            especialidadConteo[especialidad]++;
          } else {
            especialidadConteo[especialidad] = 1;
          }
        });

        console.log(especialidadConteo, 'conteo de especialidades');
        
        this.titulos = [
          'Medicina general',
          'Oftalmología',
          'Cardiología',
          'Dermatología',
          'Ginecología y obstetricia',
          'Neurología',
          'Pediatría',
          'Oncología',
          'Ortopedia y traumatología',
          'Endocrinología',
          'Psiquiatría',
          'Geriatría',
        ];

        console.log(this.titulos);

        console.log("before") //NO QUITAR

        this.datos = this.titulos.map(label => especialidadConteo[label] || 0);
        console.log(this.datos,"Valores datos")

        let datos = {
          labels: this.titulos,
          datasets: [
            {
              label: 'Pacientes',
              data: this.datos,
              borderColor: 'rgb(0, 219, 135)',
              backgroundColor: 'rgb(68, 187, 128)',
            },
          ],
        };

        this.chart = new Chart('chart', {
          type: 'bar',
          data: datos,
          options: {
            indexAxis: 'x',
            elements: {
              bar: {
                borderWidth: 2,
              },
            },
            responsive: true,
            plugins: {
              legend: {
                position: 'right',
              },
              title: {
                display: true,
                text: 'Pacientes ingresados',
              },
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Especialidad asistida',
                },
              },
              y: {
                title: {
                  display: true,
                  text: 'Pacientes ingresados',
                },
              },
            },
          },
        });
      },
      (error) => {
        alert('Error al ingresar');
      }
    );
  }

  ngOnInit(): void {}

}
