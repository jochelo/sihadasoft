import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticoSoporteComponent } from './diagnostico-soporte.component';

describe('DiagnosticoSoporteComponent', () => {
  let component: DiagnosticoSoporteComponent;
  let fixture: ComponentFixture<DiagnosticoSoporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosticoSoporteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticoSoporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
