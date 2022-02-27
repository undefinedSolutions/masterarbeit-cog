import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C6ZusammenfassungComponent } from './c6-zusammenfassung.component';

describe('C6ZusammenfassungComponent', () => {
  let component: C6ZusammenfassungComponent;
  let fixture: ComponentFixture<C6ZusammenfassungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C6ZusammenfassungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C6ZusammenfassungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
