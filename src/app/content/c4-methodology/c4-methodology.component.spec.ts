import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C4MethodologyComponent } from './c4-methodology.component';

describe('C4MethodologyComponent', () => {
  let component: C4MethodologyComponent;
  let fixture: ComponentFixture<C4MethodologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C4MethodologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C4MethodologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
