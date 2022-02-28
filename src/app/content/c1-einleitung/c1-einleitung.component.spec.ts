import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1EinleitungComponent } from './c1-einleitung.component';

describe('C1EinleitungComponent', () => {
  let component: C1EinleitungComponent;
  let fixture: ComponentFixture<C1EinleitungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1EinleitungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C1EinleitungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
