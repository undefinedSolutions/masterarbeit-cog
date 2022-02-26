import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C4s2BenchmarkDatenbereitstellungComponent } from './c4s2-benchmark-datenbereitstellung.component';

describe('C4s2BenchmarkDatenbereitstellungComponent', () => {
  let component: C4s2BenchmarkDatenbereitstellungComponent;
  let fixture: ComponentFixture<C4s2BenchmarkDatenbereitstellungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C4s2BenchmarkDatenbereitstellungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C4s2BenchmarkDatenbereitstellungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
