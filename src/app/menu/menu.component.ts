import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginCorreoComponent } from '../login-correo/login-correo.component';
import { LoginTelefonoComponent } from '../login-telefono/login-telefono.component';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { LoadingService } from '../shared/loading.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, LoginCorreoComponent, LoginTelefonoComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  Logueado$:Observable<boolean>;
  Logueado:boolean;
  Metodo:boolean;
  AdminMode:boolean;
  displayName: string;

  constructor(private router:Router, public myAuth: AuthService, private loadingService: LoadingService) {
    this.Logueado$ = myAuth.isAuthenticated();
    this.Logueado$.subscribe((revisar) => {
      this.Logueado=revisar;
    });
    this.Metodo=false;
  }

  Logout(){
    this.loadingService.show();
    setTimeout(() => {
      this.myAuth.logout();
      this.loadingService.hide();
    },5000);
  }

  cambioMetodo(){
    if(this.Metodo){
      this.Metodo=false;
    }else{
      this.Metodo=true;
    }
  }

  logueado(txt: string){
    this.displayName = txt;
    if(txt == "AdminVitalCare"){
      this.AdminMode=true;
    }else{
      this.AdminMode=false;
    }
  }

  buscarUnaEspecialidad(nombre:string) {
    this.router.navigate(['/buscador',nombre]);
  }
}
