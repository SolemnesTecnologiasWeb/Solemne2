import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AGENDA_ROUTES } from './agenda.routes';
import { AgendaCalendarioComponent } from './pages/agenda-calendario/agenda-calendario.component';

@NgModule({
  imports: [
    RouterModule.forChild(AGENDA_ROUTES),
    AgendaCalendarioComponent  // se mantiene aquí porque es standalone
  ]
})
export class AgendaModule {}
