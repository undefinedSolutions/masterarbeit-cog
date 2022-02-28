import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C6s2ReflexionComponent } from './c6s2-reflexion.component';

describe('C6s2ReflexionComponent', () => {
  let component: C6s2ReflexionComponent;
  let fixture: ComponentFixture<C6s2ReflexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C6s2ReflexionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C6s2ReflexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
