export interface Medico{
    nombre:string;
    especialidad:string;
    foto:string;
    cedula:string;
    universidad:string;
    lugarespecialidad:string;
    telefono:string;
    correo:string;
    sexo:string;
}

export interface Cita {
  nombrePaciente: string;
  telefono: string;
  costo: string;
  nombreDoctor: string;
  especialidad: string;
  fecha: string;
  hora: string;
}

export interface Servicio {
  nombreServicio: String;
  descripcion: String;
  costo: String;
  img: String;
}

export interface Especialidad {
  nombreEspecialidad: String;
  descripcion: String;
  icono: String;
  informacion: String;
  patologias: String;
  img: String;
  img2: String;
  acudir: String;
}

export interface Desarrolladores{
  nombre:string;
  descripcion:string,
  imagen:string;
}