import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-medico-listado',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule  // 👈 importante
  ],
  templateUrl: './medico-listado.component.html',
  styleUrls: ['./medico-listado.component.css']
})
export class MedicoListadoComponent {
  medicos = [
    { nombre: 'Dra. Ana López', especialidad: 'Pediatría' },
    { nombre: 'Dr. Carlos Soto', especialidad: 'Cardiología' },
    { nombre: 'Dra. Marta Ríos', especialidad: 'Dermatología' }
  ];

  displayedColumns: string[] = ['nombre', 'especialidad'];
  dataSource = this.medicos;
}
