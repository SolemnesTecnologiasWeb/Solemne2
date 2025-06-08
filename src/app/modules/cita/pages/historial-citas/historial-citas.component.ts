import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource } from '@angular/material/table';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-historial-citas',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './historial-citas.component.html',
  styleUrls: ['./historial-citas.component.css']
})
export class HistorialCitasComponent implements OnInit{
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

  dataSource = new MatTableDataSource(this.citas);

  getColor(estado: string): string {
    switch (estado) {
      case 'Confirmada': return 'primary';
      case 'Realizada': return 'accent';
      case 'Cancelada': return 'warn';
      default: return '';
    }
  }
  
  ngOnInit() {
    this.dataSource.filterPredicate = (data, filter) => {
      const paciente = data.paciente.toLowerCase();
      const medico = data.medico.toLowerCase();
      return paciente.includes(filter) || medico.includes(filter);
    };
  }
  
}
