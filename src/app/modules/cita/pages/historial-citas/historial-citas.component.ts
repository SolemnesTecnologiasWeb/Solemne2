import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-historial-citas',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatChipsModule
  ],
  templateUrl: './historial-citas.component.html',
  styleUrls: ['./historial-citas.component.css']
})
export class HistorialCitasComponent {
  displayedColumns: string[] = ['paciente', 'medico', 'fecha', 'hora', 'estado'];

  citas = [
    {
      paciente: 'Valentina Fernández',
      medico: 'Dra. Ana López',
      fecha: '2024-06-10',
      hora: '09:30',
      estado: 'Confirmada'
    },
    {
      paciente: 'Luis Araya',
      medico: 'Dr. Carlos Soto',
      fecha: '2024-06-09',
      hora: '11:00',
      estado: 'Realizada'
    },
    {
      paciente: 'Sofía Ramírez',
      medico: 'Dra. Marta Ríos',
      fecha: '2024-06-11',
      hora: '15:00',
      estado: 'Cancelada'
    }
  ];

  getColor(estado: string): string {
    switch (estado) {
      case 'Confirmada': return 'primary';
      case 'Realizada': return 'accent';
      case 'Cancelada': return 'warn';
      default: return '';
    }
  }  
}
