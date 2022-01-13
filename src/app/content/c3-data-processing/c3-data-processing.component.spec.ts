import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3DataProcessingComponent } from './c3-data-processing.component';

describe('C3DataProcessingComponent', () => {
  let component: C3DataProcessingComponent;
  let fixture: ComponentFixture<C3DataProcessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C3DataProcessingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C3DataProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
