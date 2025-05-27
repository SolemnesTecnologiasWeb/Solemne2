import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegistroCitaComponent } from './pages/registro-cita/registro-cita.component';
import { CITA_ROUTES } from './cita.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CITA_ROUTES),
    RegistroCitaComponent  // ✅ IMPORTAR aquí
  ]
})
export class CitaModule {}
