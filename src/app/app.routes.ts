import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [

  { path: '', component: HomeComponent },

  {
    path: 'medico',
    loadChildren: () =>
      import('./modules/medico/medico.module').then(m => m.MedicoModule),
  },
  {
    path: 'cita',
    loadChildren: () =>
      import('./modules/cita/cita.module').then(m => m.CitaModule),
  },
  {
    path: '',
    redirectTo: 'medico',
    pathMatch: 'full'
  },
  {
    path: 'agenda',
    loadChildren: () => import('./modules/agenda/agenda.routes').then(m => m.AGENDA_ROUTES)
  }
];
