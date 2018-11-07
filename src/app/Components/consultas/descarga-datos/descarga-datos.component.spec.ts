import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescargaDatosComponent } from './descarga-datos.component';

describe('DescargaDatosComponent', () => {
  let component: DescargaDatosComponent;
  let fixture: ComponentFixture<DescargaDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescargaDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescargaDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
