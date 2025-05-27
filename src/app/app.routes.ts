import { Routes } from '@angular/router';

export const routes: Routes = [
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
    path: 'agenda',
    loadChildren: () =>
      import('./modules/agenda/agenda.module').then(m => m.AgendaModule),
  },
  {
    path: '',
    redirectTo: 'medico',
    pathMatch: 'full'
  },
];
