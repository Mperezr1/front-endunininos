import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasDocumentoComponent } from './consultas-documento.component';

describe('ConsultasDocumentoComponent', () => {
  let component: ConsultasDocumentoComponent;
  let fixture: ComponentFixture<ConsultasDocumentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultasDocumentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultasDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
