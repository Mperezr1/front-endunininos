import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarEliminarComponent } from './modificar-Eliminar.component';

describe('ModificarEliminarComponent', () => {
  let component: ModificarEliminarComponent;
  let fixture: ComponentFixture<ModificarEliminarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarEliminarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
