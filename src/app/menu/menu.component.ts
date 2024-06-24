import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginCorreoComponent } from '../login-correo/login-correo.component';
import { LoginTelefonoComponent } from '../login-telefono/login-telefono.component';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, LoginCorreoComponent, LoginTelefonoComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  Logueado: boolean;
  Metodo: boolean;
  AdminMode: boolean;
  displayName: string;

  constructor(
    private router: Router,
    public myAuth: AuthService,
    public user: UserService
  ) {
    this.Logueado = this.user.login;
    this.Metodo = false;
  }

  Logout() {
    this.myAuth.logout();
    this.user.Logout();
    this.Logueado = this.user.login;
    this.router.navigate(['/inicio']);
  }

  cambioMetodo() {
    if (this.Metodo) {
      this.Metodo = false;
    } else {
      this.Metodo = true;
    }
  }

  getNombre(){
    return this.user.loggeduser.nombre;
  }

  logueado(txt: string) {
    console.log("Llegue aqui");
    this.Logueado = this.user.login;
    if (this.user.login) {
      if (this.user.loggeduser.nombre == 'AdminVitalCare') {
        this.AdminMode = true;
      } else {
        this.AdminMode = false;
      }
    }
  }

  buscarUnaEspecialidad(nombre: string) {
    this.router.navigate(['/buscador', nombre]);
  }
}
