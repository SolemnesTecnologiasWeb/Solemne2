import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource } from '@angular/material/table';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core'; // este es para mat-option


@Component({
  selector: 'app-historial-citas',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule
  ],
  templateUrl: './historial-citas.component.html',
  styleUrls: ['./historial-citas.component.css']
})
export class HistorialCitasComponent implements OnInit{
  displayedColumns: string[] = ['paciente', 'medico', 'especialidad', 'fecha', 'hora', 'estado'];

  citas = [
    {
      paciente: 'Valentina Fernández',
      medico: 'Dra. Ana López',
      especialidad: 'Pediatría',
      fecha: '2025-06-10',
      hora: '09:30',
      estado: 'Confirmada'
    },
    {
      paciente: 'Aurora Quezada',
      medico: 'Dra. Nathalia Lucero',
      especialidad: 'Pediatría',
      fecha: '2025-06-10',
      hora: '10:30',
      estado: 'Confirmada'
    },
    {
      paciente: 'Luis Araya',
      medico: 'Dr. Carlos Soto',
      especialidad: 'Cardiología',
      fecha: '2025-06-07',
      hora: '11:00',
      estado: 'Realizada'
    },
    {
      paciente: 'Sofía Ramírez',
      medico: 'Dra. Marta Ríos',
      especialidad: 'Dermatología',
      fecha: '2025-06-15',
      hora: '15:00',
      estado: 'Cancelada'
    },
    {
      paciente: 'Diego Vivanco',
      medico: 'Dra. Renata Jofré',
      especialidad: 'Dermatología',
      fecha: '2025-06-30',
      hora: '12:00',
      estado: 'Cancelada'
    }
  ];
  

  dataSource = new MatTableDataSource(this.citas);

  getColorHex(estado: string): string {
    switch (estado) {
      case 'Confirmada': return '#99CC00';      // verde
      case 'Realizada': return '#75C2A6';       // celeste suave
      case 'Cancelada': return '#CA3E47';       // rojo 
      default: return '#cccccc';                // gris por defecto
    }
  }
  

  ngOnInit() {
    this.dataSource.filterPredicate = (data, filter) => {
      const f = JSON.parse(filter);
  
      const texto = f.texto?.toLowerCase() || '';
      const coincideTexto =
        data.paciente.toLowerCase().includes(texto) ||
        data.medico.toLowerCase().includes(texto);
  
      const coincideEstado = !f.estado || data.estado === f.estado;
      const coincideEspecialidad = !f.especialidad || data.especialidad === f.especialidad;
  
      const fechaCita = new Date(data.fecha);
      const desde = f.fechaInicio ? new Date(f.fechaInicio) : null;
      const hasta = f.fechaFin ? new Date(f.fechaFin) : null;
  
      const coincideFecha =
        (!desde || fechaCita >= desde) &&
        (!hasta || fechaCita <= hasta);
  
      return coincideTexto && coincideEstado && coincideEspecialidad && coincideFecha;
    };
  }
  
filtroTexto: string = '';

aplicarFiltros() {
  const filtro = {
    texto: this.filtroTexto,
    estado: this.filtroEstado,
    especialidad: this.filtroEspecialidad,
    fechaInicio: this.fechaInicio,
    fechaFin: this.fechaFin
  };
  this.dataSource.filter = JSON.stringify(filtro);
}

limpiarFiltros() {
  this.filtroEstado = '';
  this.filtroEspecialidad = '';
  this.fechaInicio = '';
  this.fechaFin = '';
  this.filtroTexto = '';
  this.aplicarFiltros();
}

get especialidadesUnicas(): string[] {
  return [...new Set(this.citas.map(c => c.especialidad))];
}

  filtroEstado = '';
  filtroEspecialidad = '';
  fechaInicio: string = '';
  fechaFin: string = '';

  
}
