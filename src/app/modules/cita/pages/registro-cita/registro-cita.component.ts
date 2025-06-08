import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-registro-cita',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './registro-cita.component.html',
  styleUrls: ['./registro-cita.component.css']
})
export class RegistroCitaComponent {
  formCita: FormGroup;

  medicos = ['Dra. Ana López', 'Dr. Carlos Soto', 'Dra. Marta Ríos']; // simulado

  constructor(private fb: FormBuilder) {
    this.formCita = this.fb.group({
      paciente: ['', Validators.required],
      medico: ['', Validators.required],
      fecha: ['', Validators.required],
      hora: ['', Validators.required]
    });
  }

  registrarCita() {
    if (this.formCita.valid) {
      console.log('Cita registrada:', this.formCita.value);
      alert('Cita registrada con éxito 🩺');
      this.formCita.reset();
    }
  }
}
