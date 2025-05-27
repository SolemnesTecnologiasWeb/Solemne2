import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoListadoComponent } from './medico-listado.component';

describe('MedicoListadoComponent', () => {
  let component: MedicoListadoComponent;
  let fixture: ComponentFixture<MedicoListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicoListadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicoListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
