import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1p1TechDemoComponent } from './c1p1-tech-demo.component';

describe('C1p1TechDemoComponent', () => {
  let component: C1p1TechDemoComponent;
  let fixture: ComponentFixture<C1p1TechDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1p1TechDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C1p1TechDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
