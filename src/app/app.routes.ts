import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'medico',
    loadChildren: () =>
      import('./modules/medico/medico.module').then(m => m.MedicoModule),
  },
  {
    path: '',
    redirectTo: 'medico',
    pathMatch: 'full'
  }
];
