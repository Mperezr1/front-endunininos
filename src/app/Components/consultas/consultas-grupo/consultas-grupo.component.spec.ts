import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasGrupoComponent } from './consultas-grupo.component';

describe('ConsultasGrupoComponent', () => {
  let component: ConsultasGrupoComponent;
  let fixture: ComponentFixture<ConsultasGrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultasGrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultasGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
