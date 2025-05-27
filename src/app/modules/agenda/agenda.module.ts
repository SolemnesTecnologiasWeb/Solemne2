import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgendaCalendarioComponent } from './pages/agenda-calendario/agenda-calendario.component';
import { AGENDA_ROUTES } from './agenda.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AGENDA_ROUTES),
    AgendaCalendarioComponent  // ✅ IMPORTAR aquí
  ]
})
export class AgendaModule {}
