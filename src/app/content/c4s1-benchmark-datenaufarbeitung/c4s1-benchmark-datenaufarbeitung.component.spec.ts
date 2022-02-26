import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C4s1BenchmarkDatenaufarbeitungComponent } from './c4s1-benchmark-datenaufarbeitung.component';

describe('C4s1BenchmarkDatenaufarbeitungComponent', () => {
  let component: C4s1BenchmarkDatenaufarbeitungComponent;
  let fixture: ComponentFixture<C4s1BenchmarkDatenaufarbeitungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C4s1BenchmarkDatenaufarbeitungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C4s1BenchmarkDatenaufarbeitungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
