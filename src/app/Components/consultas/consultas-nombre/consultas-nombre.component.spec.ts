import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasNombreComponent } from './consultas-nombre.component';

describe('ConsultasNombreComponent', () => {
  let component: ConsultasNombreComponent;
  let fixture: ComponentFixture<ConsultasNombreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultasNombreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultasNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
