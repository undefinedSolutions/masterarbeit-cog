import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3s1s1VorbereitungDesTMSComponent } from './c3s1s1-vorbereitung-des-tms.component';

describe('C3s1s1VorbereitungDesTMSComponent', () => {
  let component: C3s1s1VorbereitungDesTMSComponent;
  let fixture: ComponentFixture<C3s1s1VorbereitungDesTMSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C3s1s1VorbereitungDesTMSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C3s1s1VorbereitungDesTMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
