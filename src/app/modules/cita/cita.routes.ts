import { Routes } from '@angular/router';
import { RegistroCitaComponent } from './pages/registro-cita/registro-cita.component';
import { HistorialCitasComponent } from './pages/historial-citas/historial-citas.component';

export const CITA_ROUTES: Routes = [
  {
    path: '',
    component: RegistroCitaComponent,
  },
  {
    path: 'historial',
    component: HistorialCitasComponent,
  }
];
