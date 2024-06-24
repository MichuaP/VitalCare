import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-pie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pie.component.html',
  styleUrl: './pie.component.css'
})
export class PieComponent implements OnInit {
  public chart1: Chart;
  public datos: number[];
  public titulos: string[];

  constructor(public myAuth: AuthService) {
    this.myAuth.getCitas().subscribe(
      (data) => {
        console.log(data, 'dataengraficas');
        console.log(data, 'dataengraficas');

        // Inicializar un objeto para contar los medicos
        let medicosConteo: { [key: string]: number } = {};

        data.forEach((cita: any) => {
          let medico = cita.nombreDoctor;
          if (medicosConteo[medico]) {
            medicosConteo[medico]++;
          } else {
            medicosConteo[medico] = 1;
          }
        });

        console.log(medicosConteo, 'conteo de medicos');
        
        this.titulos = [
          "Dr.House",
          "Santiago García Pérez",
          "Valentina Rodríguez Martínez",
          "Mateo López Sánchez",
          "Sofía Fernández González",
          "Sebastián Martínez López",
          "Isabella Pérez Rodríguez",
          "Leonardo Torres García",
          "Emilia Ruiz Martínez",
          "Gabriel Díaz Pérez",
          "Lucía Gómez Sánchez",
          "Juan Herrera Martínez",
          "Valeria Castro Rodríguez",
          "Diego Jiménez Pérez",
          "Elena Ramírez Sánchez",
          "Alejandro Morales Martínez",
          "María Nuñez Rodríguez",
          "Nicolás Ortiz Pérez",
          "Victoria Flores Sánchez",
          "Matías Herrera Rivas",
          "Catalina Rojas Espinoza",
          "Nicolás Medina Salazar",
          "Valentina León Flores",
          "Martín Silva Mendoza",
          "Antonella Soto Cruz"
        ];

        console.log(this.titulos);

        console.log("before") //NO QUITAR

        this.datos = this.titulos.map(label => medicosConteo[label] || 0);
        console.log(this.datos,"Valores datos")

        let datos = {
          labels: this.titulos,
          datasets: [
            {
              label: 'Pacientes',
              data: this.datos,
              backgroundColor: ['rgb(197, 0, 0)','rgb(216, 61, 0)','rgb(241, 111, 5)','rgb(247, 149, 2)','rgb(248, 187, 19)','rgb(255, 241, 48)','rgb(176, 228, 32)','rgb(30, 168, 53)','rgb(3, 148, 92)','rgb(38, 214, 141)','rgb(58, 228, 205)','rgb(42, 178, 231)','rgb(23, 121, 167)','rgb(4, 88, 145)','rgb(66, 0, 219)','rgb(109, 7, 134)','rgb(164, 14, 209)','rgb(210, 61, 255)','rgb(238, 118, 232)','rgb(245, 112, 185)','rgb(243, 65, 163)','rgb(209, 14, 121)','rgb(136, 0, 75)','rgb(165, 26, 61)','rgb(104, 19, 33)']
            },
          ],
        };

        this.chart1 = new Chart('chart1', {
          type: 'pie' as ChartType,
          data: datos,
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Médicos mas solicitados'
              }
            }
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
