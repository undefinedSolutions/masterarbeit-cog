import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C5s1ErgebnisseDesTMSComponent } from './c5s1-ergebnisse-des-tms.component';

describe('C5s1ErgebnisseDesTMSComponent', () => {
  let component: C5s1ErgebnisseDesTMSComponent;
  let fixture: ComponentFixture<C5s1ErgebnisseDesTMSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C5s1ErgebnisseDesTMSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C5s1ErgebnisseDesTMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
