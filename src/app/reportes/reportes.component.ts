  import { Component } from '@angular/core';
  import { RouterModule } from '@angular/router';
  import { AuthService } from '../auth.service';
  import { Cita, CitaConID, Medico } from '../medico';
  import { UserService } from '../user.service';
  import { Observable } from 'rxjs';
  import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
  import Swal from 'sweetalert2';
  import { CommonModule } from '@angular/common';
  import { MedicoService } from '../shared/medico.service';

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

    constructor(public basedatos: AuthService, public user: UserService,public medicoservicio: MedicoService) {
      // Extraer la fecha actual del sistema
      this.fechaActual = new Date();
      console.log('La fecha actual es: ' + this.fechaActual.toLocaleDateString());
    }

    ngOnInit(): void {
      this.obtenerCitas(); // Extrae las citas almacenadas en la base de datos
      this.medicos=this.medicoservicio.getMedicos();
    }

    //Método para obtener las citas almacenadas en la base de datos
    obtenerCitas(){
      console.log("Citas obtenidas");
      this.basedatos.getCitas().subscribe(citas => {
        this.citas = citas;
        console.log(this.citas);
        this.filtrarCitas(); // Se llama a la función para filtrar las citas entre pasadas y futuras
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
      this.citas.forEach(cita => {
        // Transformar la fecha de dd/MM/yyyy a un objeto Date
        const fechaCita = this.convertirFecha(cita.fecha);
        if (fechaCita < this.fechaActual) { // Si la fecha de la cita es anterior a la fecha actual
          this.citasAnteriores.push(cita); // Se añade la cita al arreglo de citas pasadas
          return this.citasAnteriores;
        } else {
          this.citasProximas.push(cita); // Si no, se añade al arreglo de citas futuras
          return this.citasProximas;
        }
      });
    }

    //Funcion para convertir fechas en formato dd/mm/aa a un tipo fecha
    convertirFecha(fechaStr: string): Date {
      const [day, month, year] = fechaStr.split('/').map(Number);
      return new Date(year, month - 1, day);
    }

    // Método para filtrar las citas según el tipo seleccionado (próximas, anteriores o todas)
    tipoCita(event: any) {
      const tipo = event.target.value; // Se obtiene el valor seleccionado en el evento
      if (tipo === 'proximas') {
        console.log("Citas proximas");
        this.citas = this.citasProximas; // Si el tipo es "proximas", se muestran las citas próximas al arreglo de citas
      } else if (tipo === 'anteriores') {
        console.log("Citas anteriores");
        this.citas = this.citasAnteriores; // Si es "anteriores", se muestran las citas pasadas
      } else if (tipo === 'todas') {
        this.obtenerCitas();
        console.log("Todas");
      }
    }

    // Método para filtrar las citas según el tipo seleccionado
    tipoConsulta(value: any) {
      if (value=="todas"){
        this.selectedTipoConsulta="todas";
      }else if(value=="medico"){
        this.selectedTipoConsulta = "medico";
      }else if(value=="especialidad"){
        this.selectedTipoConsulta="especialidad";
      }
    }

    nombreMedico:any="";
    especialidad:any="";

    //Función que recibe el medico seleccionado
    pormedicos(value:any): void {
      this.nombreMedico = value;
    }

    //Función que recibe la especialidad seleccionada
    porespecialidad(value:any):void{
      this.especialidad = value;
    }

    // tipoCitaMedicos(event: any) {
    //   const selectedMedicoNombre = event.target.value;
    //   this.citas = []; // Resetea la lista de citas
  
    //   if (selectedMedicoNombre == 'todas') {
    //     this.citas = this.citasalmacen.slice(); // Copia todas las citas
    //   } else {
    //     this.citasalmacen.forEach(cita => {
    //       if (cita.nombreDoctor == selectedMedicoNombre) {
    //         this.citas.push(cita);
    //       }
    //     });
    //   }
    // }
  
    // tipoCitaEspecialidad(event: any) {
    //   const selectedMedicoNombre = event.target.value;
    //   this.citas = []; // Resetea la lista de citas
    
    //   if (selectedMedicoNombre == 'todas') {
    //     this.citas = this.citasalmacen.slice(); // Copia todas las citas
    //   } else {
    //     this.citasalmacen.forEach(cita => {
    //       if (cita.especialidad == selectedMedicoNombre) {
    //         this.citas.push(cita);
    //       }
    //     });
    //   }
      
    // }

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