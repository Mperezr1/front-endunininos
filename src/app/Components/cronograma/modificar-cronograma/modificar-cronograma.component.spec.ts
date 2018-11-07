import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarCronogramaComponent } from './modificar-cronograma.component';

describe('ModificarCronogramaComponent', () => {
  let component: ModificarCronogramaComponent;
  let fixture: ComponentFixture<ModificarCronogramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarCronogramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarCronogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
