import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C4s3BenchmarkDatenabrufComponent } from './c4s3-benchmark-datenabruf.component';

describe('C4s3BenchmarkDatenabrufComponent', () => {
  let component: C4s3BenchmarkDatenabrufComponent;
  let fixture: ComponentFixture<C4s3BenchmarkDatenabrufComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C4s3BenchmarkDatenabrufComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C4s3BenchmarkDatenabrufComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
