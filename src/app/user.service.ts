import { Injectable } from '@angular/core';
import { Paciente } from './paciente';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:Paciente[];
  loggeduser:Paciente;
  login:boolean=false;

  constructor(public basedatos: AuthService) { 
    this.getDatosUsuarios();
  }

  getDatosUsuarios(){
    this.basedatos.getDatos().subscribe(usuarios => {
      this.users = usuarios;
      console.log("Usuarios:", this.users);
    }, error => {
      console.error("Error al obtener usuarios:", error);
    });
  }

  getUser(): Paciente{
    return this.loggeduser;
  }

  setUserEmail(email: string){
    this.login=true;
    this.users.forEach((usuario) => {
      if(email == usuario.correo){
        this.loggeduser = usuario;
      }
    });
  }

  setUserSMS(phone: string){
    this.login=true;
    this.users.forEach((usuario) => {
      if(phone == usuario.telefono){
        this.loggeduser = usuario;
      }
    });
  }

  Logout(){
    this.loggeduser = {
      nombre: "",
      apellido:"",
      correo: "",
      telefono:"",
      fecha: ""
    };
    this.login=false;
  }


}
