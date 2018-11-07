import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasColegioComponent } from './consultas-colegio.component';

describe('ConsultasColegioComponent', () => {
  let component: ConsultasColegioComponent;
  let fixture: ComponentFixture<ConsultasColegioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultasColegioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultasColegioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
