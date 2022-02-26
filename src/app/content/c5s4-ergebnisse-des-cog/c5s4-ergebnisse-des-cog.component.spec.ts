import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C5s4ErgebnisseDesCOGComponent } from './c5s4-ergebnisse-des-cog.component';

describe('C5s4ErgebnisseDesCOGComponent', () => {
  let component: C5s4ErgebnisseDesCOGComponent;
  let fixture: ComponentFixture<C5s4ErgebnisseDesCOGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C5s4ErgebnisseDesCOGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C5s4ErgebnisseDesCOGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
