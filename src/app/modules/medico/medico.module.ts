import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MedicoListadoComponent } from './pages/medico-listado/medico-listado.component';
import { MEDICO_ROUTES } from './medico.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MEDICO_ROUTES),
    MedicoListadoComponent  // ✅ IMPORTAR en lugar de declarar
  ]
})
export class MedicoModule {}
