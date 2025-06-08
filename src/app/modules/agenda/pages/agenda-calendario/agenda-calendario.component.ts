import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agenda-calendario',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatChipsModule],
  templateUrl: './agenda-calendario.component.html',
  styleUrls: ['./agenda-calendario.component.css']
})
export class AgendaCalendarioComponent {
  dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
  horas = [
  '09:00', '10:00', '11:00',
  '12:00', '13:00', '14:00',
  '15:00', '16:00'
  ];

  citas = [
    { dia: 'Lunes', hora: '09:00', medico: 'Dra. Ana López', paciente: 'Valentina Fernández' },
    { dia: 'Martes', hora: '10:00', medico: 'Dr. Carlos Soto', paciente: 'Luis Araya' },
    { dia: 'Jueves', hora: '14:00', medico: 'Dra. Marta Ríos', paciente: 'Sofía Ramírez' },
    { dia: 'Viernes', hora: '09:00', medico: 'Dra. Ana López', paciente: 'Pedro González' }
  ];

  obtenerCita(dia: string, hora: string) {
    return this.citas.find(c => c.dia === dia && c.hora === hora);
  }
  
  
  
}
