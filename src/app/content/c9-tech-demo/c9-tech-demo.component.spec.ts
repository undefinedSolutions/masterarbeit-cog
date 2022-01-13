import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C9TechDemoComponent } from './c9-tech-demo.component';

describe('C9TechDemoComponent', () => {
  let component: C9TechDemoComponent;
  let fixture: ComponentFixture<C9TechDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C9TechDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C9TechDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
