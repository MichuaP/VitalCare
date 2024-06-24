import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-line',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './line.component.html',
  styleUrl: './line.component.css'
})
export class LineComponent implements OnInit {
  public chart2: Chart;
  public datos: number[];
  public titulos: string[];
  public meses: string[];


  constructor(public myAuth: AuthService) {
    this.myAuth.getCitas().subscribe(
      (data) => {
        console.log(data, 'dataengraficas');
        console.log(data, 'dataengraficas');

        // Inicializar un objeto para contar las meses
        let mesConteo: { [key: string]: number } = {};

        data.forEach((cita: any) => {
          let fecha = cita.fecha;
          let mes = fecha.split('/')[0];
          if (mesConteo[mes]) {
            mesConteo[mes]++;
          } else {
            mesConteo[mes] = 1;
          }
        });

        console.log(mesConteo, 'conteo de meses');
        
        this.titulos = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
        this.meses = ['1','2','3','4','5','6','7','8','9','10','11','12'];

        console.log(this.titulos);

        console.log("before") //NO QUITAR

        this.datos = this.meses.map(label => mesConteo[label] || 0);
        console.log(this.datos,"Valores datos")

        let datos = {
          labels: this.titulos,
          datasets: [
            {
              label: 'Pacientes',
              data: this.datos,
              borderColor: 'rgb(0, 219, 135)',
              backgroundColor: 'rgb(68, 187, 128)',
              fill: true
            },
          ],
        };

        this.chart2 = new Chart('chart2', {
          type: 'line',
          data: datos,
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: 'Chart.js Line Chart - stacked=',
              },
              tooltip: {
                mode: 'index'
              },
            },
            interaction: {
              mode: 'nearest',
              axis: 'x',
              intersect: false
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Month'
                }
              },
              y: {
                stacked: true,
                title: {
                  display: true,
                  text: 'Value'
                }
              }
            }
          }
        });
      },
      (error) => {
        alert('Error al ingresar');
      }
    );
  }

  ngOnInit(): void {}

}
