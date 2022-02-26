import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C4s5GewichteteMatrixComponent } from './c4s5-gewichtete-matrix.component';

describe('C4s5GewichteteMatrixComponent', () => {
  let component: C4s5GewichteteMatrixComponent;
  let fixture: ComponentFixture<C4s5GewichteteMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C4s5GewichteteMatrixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C4s5GewichteteMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
