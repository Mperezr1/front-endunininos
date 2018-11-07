import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarAgregarComponent } from './modificar-Agregar.component';

describe('ModificarAgregarComponent', () => {
  let component: ModificarAgregarComponent;
  let fixture: ComponentFixture<ModificarAgregarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarAgregarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
