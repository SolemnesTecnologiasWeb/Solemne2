import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CITA_ROUTES } from './cita.routes';
import { RegistroCitaComponent } from './pages/registro-cita/registro-cita.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CITA_ROUTES),
    RegistroCitaComponent  // porque es standalone
  ]
})
export class CitaModule {}
