import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaCalendarioComponent } from './agenda-calendario.component';

describe('AgendaCalendarioComponent', () => {
  let component: AgendaCalendarioComponent;
  let fixture: ComponentFixture<AgendaCalendarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgendaCalendarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendaCalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
