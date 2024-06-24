  import { Component } from '@angular/core';
  import { RouterModule } from '@angular/router';
  import { AuthService } from '../auth.service';
  import { Cita, CitaConID, Medico } from '../medico';
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
    selectedTipoConsulta:any = "todas"
    medicos:Medico[]=[];
    especialidades:string[]=[
      "Medicina general","Oftalmología", "Cardiología", "Dermatología","Ginecología y obstetricia",
      "Neurología","Pediatría","Oncología","Ortopedia y traumatología", "Endocrinología",
      "Psiquiatría","Geriatría"
    ];


    citasalmacen: CitaConID[] = []; // Arreglo para almacenar todas las citas y no se borren al cambiar la consulta
    citas: CitaConID[] = []; //Estructura del array de citas
    fechaActual: Date; // Variable para almacenar la fecha actual
    citasAnteriores: CitaConID[] = []; // Arreglo para almacenar citas pasadas
    citasProximas: CitaConID[] = []; // Arreglo para almacenar citas futuras

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
      Swal.fire({
        title: "¿Deseas borrar la cita?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Confirmar",
        denyButtonText: `Cancelar`
      }).then((result) => {
        if (result.isConfirmed) {
          //Eliminar Cita
          this.basedatos.eliminarCita(id).subscribe(() => {
            this.obtenerCitas(); //Actualizar Citas
            Swal.fire({
              title: '¡Éxito!',
              text: 'Se ha eliminado la cita correctamente.',
              icon: 'success',
              confirmButtonText: 'Continuar',
            });
          }, error => {
            Swal.fire({title: '¡Error!', icon: 'error', confirmButtonText: 'Continuar',});
          });
          //
        } else if (result.isDenied) {
        }
      });
    }

    // Método para filtrar las citas entre pasadas y futuras
    filtrarCitas() {
      console.log("Entré a FiltrarCitas");
      this.citas.forEach(cita => {
        console.log("No llega aquí");
        const fechaCita = new Date(cita.fecha); // Se convierte la fecha de la cita en un objeto Date
        console.log("Fecha de la Cita:" + fechaCita);
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

    tipoCitaMedicos(event: any) {
      const selectedMedicoNombre = event.target.value;
      this.citas = []; // Resetea la lista de citas
  
      if (selectedMedicoNombre == 'todas') {
        this.citas = this.citasalmacen.slice(); // Copia todas las citas
      } else {
        this.citasalmacen.forEach(cita => {
          if (cita.nombreDoctor == selectedMedicoNombre) {
            this.citas.push(cita);
          }
        });
      }
    }
  
    tipoCitaEspecialidad(event: any) {
      const selectedMedicoNombre = event.target.value;
      this.citas = []; // Resetea la lista de citas
    
      if (selectedMedicoNombre == 'todas') {
        this.citas = this.citasalmacen.slice(); // Copia todas las citas
      } else {
        this.citasalmacen.forEach(cita => {
          if (cita.especialidad == selectedMedicoNombre) {
            this.citas.push(cita);
          }
        });
      }
      
    }
  
    tipoConsulta(event1: any) {
      this.citas= [];
      const tipo = event1.target.value;
      this.selectedTipoConsulta = tipo;
      this.citas = this.citasalmacen;
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