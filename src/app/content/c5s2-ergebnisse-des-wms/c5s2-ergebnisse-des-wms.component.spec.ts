import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C5s2ErgebnisseDesWMSComponent } from './c5s2-ergebnisse-des-wms.component';

describe('C5s2ErgebnisseDesWMSComponent', () => {
  let component: C5s2ErgebnisseDesWMSComponent;
  let fixture: ComponentFixture<C5s2ErgebnisseDesWMSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C5s2ErgebnisseDesWMSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C5s2ErgebnisseDesWMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
