  import { Component } from '@angular/core';
  import { RouterModule } from '@angular/router';
  import { AuthService } from '../auth.service';
  import { Cita, CitaConID } from '../medico';
  import { UserService } from '../user.service';
  import { Observable } from 'rxjs';
  import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
  import Swal from 'sweetalert2';
  import { CommonModule } from '@angular/common';

  @Component({
    selector: 'app-reportes',
    standalone: true,
    imports: [RouterModule, SweetAlert2Module],
    templateUrl: './reportes.component.html',
    styleUrl: './reportes.component.css',
  })
  export class ReportesComponent {
    citas: CitaConID[] = []; //Estructura del array de citas
    fechaActual: Date; // Variable para almacenar la fecha actual
    citasAnteriores: any[] = []; // Arreglo para almacenar citas pasadas
    citasProximas: any[] = []; // Arreglo para almacenar citas futuras
    eliminar?: Observable<any[]>;

    constructor(public basedatos: AuthService, public user: UserService) {
      // Extraer la fecha actual del sistema
      this.fechaActual = new Date();
      console.log('La fecha actual es: ' + this.fechaActual.toLocaleDateString());
    }

    ngOnInit(): void {
      this.obtenerCitas(); // Extrae las citas almacenadas en la base de datos
      this.filtrarCitas(); // Se llama a la función para filtrar las citas entre pasadas y futuras
    }

    //Método para obtener las citas almacenadas en la base de datos
    obtenerCitas(){
      this.basedatos.getCitas().subscribe(citas => {
        this.citas = citas;
      }, error => {
        console.error("Error al obtener las citas:", error);
      });
    }

    borrarCita(id: string): void {
      if(confirm('¿Estás seguro de eliminar la cita?')) {
        this.basedatos.eliminarCita(id).subscribe(() => {
          this.obtenerCitas(); //Actualizar Citas
          alert('La cita se eliminó correctamente.');
        }, error => {
          Swal.fire('¡Error al eliminar la cita!', '', 'error');
        });
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

    getNombreUsuario() {
      return this.user.loggeduser.nombre;
    }
    getApellidosUsuario() {
      return this.user.loggeduser.apellido;
    }
    getCorreoUsuario() {
      return this.user.loggeduser.correo;
    }
    getTelefonoUsuario() {
      return this.user.loggeduser.telefono;
    }
    getFechaNacimientoUsuario() {
      return this.user.loggeduser.fecha;
    }

    getExisteUsuario() {
      return this.user.login;
    }

    getExisteCitaUsuario(): boolean {
      for(let cita of this.citas) {
        if(this.getTelefonoUsuario() == cita.telefono && this.getNombreUsuario() == cita.nombrePaciente) {
          return true;
        }
      }
      return false;
    }

  }