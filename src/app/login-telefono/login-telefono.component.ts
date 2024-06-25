import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-telefono',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-telefono.component.html',
  styleUrl: './login-telefono.component.css'
})
export class LoginTelefonoComponent {

  constructor(public myAuth: AuthService, public user: UserService, public router: Router){}
  @ViewChild('captchaContainer', { static: false }) captchaContainer!: ElementRef;

  ngAfterViewInit(): void {
    this.captcha();
  }

  opcion:number=0;
  username: string ="";
  email:string="";
  password:string="";
  errorMsg:string="";
  phone:string="";
  codigo:any;
  captchaFlag:boolean=true;
  @Output() Usuario = new EventEmitter<string>();
  

  captcha(): void {
    if (this.captchaContainer) {
      this.myAuth.initializeRecaptcha(this.captchaContainer.nativeElement);
      console.log("Captcha initialized");
      this.captchaFlag = true;
    } else {
      console.log("Captcha container is undefined");
      Swal.fire({
        title: 'Error',
        text: 'El contenedor del Captcha no está definido.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  }
  

  enviarCodigo(): void {
    //Validamos si existe la cuenta
    this.myAuth.existe(this.phone).then(existe => {
      if(existe){
        this.myAuth.sendCode(this.phone).subscribe(() => {
          Swal.fire({
            title: 'Código enviado',
            text: 'El código ha sido enviado exitosamente.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          });
          this.captchaFlag = false;
        }, error => {
          Swal.fire({
            title: 'Error',
            text: 'Hubo un error al enviar el código.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
          });
        });
      } else {
        this.errorMsg = "Error, no hay una cuenta registrada con este número de teléfono";
      }
    });
  }
  
  ingresarTel(): void {
    this.myAuth.loginSMS(this.codigo).subscribe(() => {
      this.user.setUserSMS(this.phone);
      this.Usuario.emit("OK");
      Swal.fire({
        title: 'Ingresado',
        text: 'Ingreso exitoso.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      }).then(() => {
        this.router.navigate(['/#']);
      });
    }, error => {
      Swal.fire({
        title: 'Error',
        text: 'Error al ingresar.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    });
  }
  


  validate_email(eml: string): boolean {
    const expression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (expression.test(eml)) {
      // Email es válido
      return true;
    } else {
      Swal.fire({
        title: 'Email Invalido ',
        text: 'El email no es valido.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return false;
    }
  }
  
  

  validate_password(pass: string): boolean {
    if (pass.length < 6) {
      Swal.fire({
        title: 'Password Invalida ',
        text: 'La password tiene que ser mas larga que 6 caracteres.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return false;
    } else {
      return true;
    }
  }
  
  validate_field(field: any): boolean {
    if (field.length <= 0) {
      Swal.fire({
        title: 'Campo faltante',
        text: 'Falta un campo.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return false;
    } else {
      return true;
    }
  }
  
}
