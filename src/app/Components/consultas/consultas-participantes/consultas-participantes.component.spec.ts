import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasParticipantesComponent } from './consultas-participantes.component';

describe('ConsultasParticipantesComponent', () => {
  let component: ConsultasParticipantesComponent;
  let fixture: ComponentFixture<ConsultasParticipantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultasParticipantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultasParticipantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
