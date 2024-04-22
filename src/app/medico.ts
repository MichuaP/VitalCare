export interface Medico{
    nombre:string;
    especialidad:string;
    foto:string;
    cedula:string;
    universidad:string;
    lugarespecialidad:string;
    telefono:string;
    correo:string;
}

export interface Cita{
    nombrePaciente:string;
    telefono:string;
    costo:string;
    nombreDoctor:string;
    especialidad:string;
    fecha:string;
    hora:string;
}