import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-correo',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login-correo.component.html',
  styleUrl: './login-correo.component.css'
})
export class LoginCorreoComponent {
  email:string="";
  password:string="";

  @Output() Usuario = new EventEmitter<string>();

  constructor(public myAuth: AuthService, private router: Router){}

  ingresar(): void{
    console.log(this.email);
    console.log(this.password);
    if(this.validate_password(this.password) && this.validate_email(this.email) && this.validate_field(this.password)){
      this.myAuth.login(this.email,this.password).subscribe((displayName) => {
         this.Usuario.emit(displayName);
         Swal.fire({
          title: 'Inicio de sesión exitoso',
          text: "Bienvenido " + displayName,
          icon: 'success',
          confirmButtonText: 'Continuar',
        }).then(() => {
          this.router.navigate(['/#']);
        });
      },
      error => {
        Swal.fire({
          title: 'Error',
          text: "Credenciales invalidas.",
          icon: 'error',
          confirmButtonText: 'Continuar',
        });
      }
    );
    }else{
      
    }
  }

  validate_email(eml: string): boolean {
    const expression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (expression.test(eml)) {
      // Email es válido
      return true;
    } else {
      Swal.fire({
        title: 'Error',
        text: "Correo inválido.",
        icon: 'error',
        confirmButtonText: 'Continuar',
      });
      return false;
    }
  }
  
  validate_password(pass:string):boolean{
    if(pass.length < 6){
      Swal.fire({
        title: 'Error',
        text: "La contraseña debe tener al menos 6 caracteres",
        icon: 'error',
        confirmButtonText: 'Continuar',
      });
      return false;
    }else{
      return true
    }
  }

  validate_field(field:any):boolean{
    if(field.length <= 0){
      Swal.fire({
        title: 'Error',
        text: "Faltan campos por llenar.",
        icon: 'error',
        confirmButtonText: 'Continuar',
      });
      return false;
    }else{
      return true;
    }
  }
}
