import { Routes } from '@angular/router';
import { RegistroCitasComponent } from './citas/registro-citas/registro-citas.component';
import { ServiciosComponent } from './servicios/servicios.component';

export const routes: Routes = [
    { path:'regCitas', component: RegistroCitasComponent },
    { path: 'servicios', component: ServiciosComponent },
];
