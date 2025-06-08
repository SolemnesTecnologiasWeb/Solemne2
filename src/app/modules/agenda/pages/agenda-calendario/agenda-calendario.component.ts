import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-agenda-calendario',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatChipsModule,
    MatCardModule
  ],
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
    { dia: 'Lunes', fecha: '2025-06-23', hora: '09:00', medico: 'Dra. Ana López', paciente: 'Valentina Fernández' },
    { dia: 'Martes', fecha: '2025-06-24', hora: '10:00', medico: 'Dr. Carlos Soto', paciente: 'Luis Araya' },
    { dia: 'Miércoles', fecha: '2025-06-25', hora: '10:00', medico: 'Dr. Carlos Soto', paciente: 'Luis Araya' },
    { dia: 'Jueves', fecha: '2025-06-26', hora: '14:00', medico: 'Dra. Marta Ríos', paciente: 'Sofía Ramírez' },
    { dia: 'Viernes', fecha: '2025-06-27', hora: '09:00', medico: 'Dra. Ana López', paciente: 'Pedro González' },
  ];
  
  obtenerCita(dia: string, hora: string) {
    return this.citas.find(c => c.dia === dia && c.hora === hora);
  }
  
  get citasProximas() {
    const ahora = new Date();
    return this.citas
      .filter(cita => {
        const [año, mes, dia] = cita.fecha.split('-').map(Number);
        const [hora, minuto] = cita.hora.split(':').map(Number);
        const fechaHora = new Date(año, mes - 1, dia, hora, minuto);
        return fechaHora > ahora;
      })
      .sort((a, b) => {
        const fechaA = new Date(`${a.fecha}T${a.hora}`).getTime();
        const fechaB = new Date(`${b.fecha}T${b.hora}`).getTime();
        return fechaA - fechaB;
      })
  }

  get citasSemana() {
    const ahora = new Date();
    const finSemana = new Date();
    finSemana.setDate(ahora.getDate() + 7);
  
    return this.citas.filter(cita => {
      const fecha = new Date(`${cita.fecha}T${cita.hora}`);
      return fecha >= ahora && fecha <= finSemana;
    }).length;
  }
  
  get citasMes() {
    const ahora = new Date();
    const mesActual = ahora.getMonth();
    const anioActual = ahora.getFullYear();
  
    return this.citas.filter(cita => {
      const fecha = new Date(`${cita.fecha}T${cita.hora}`);
      return (
        fecha.getMonth() === mesActual &&
        fecha.getFullYear() === anioActual
      );
    }).length;
  }
  
}
