import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MEDICO_ROUTES } from './medico.routes';
import { MedicoListadoComponent } from './pages/medico-listado/medico-listado.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MEDICO_ROUTES),
    MedicoListadoComponent  // porque es standalone
  ]
})
export class MedicoModule {}
