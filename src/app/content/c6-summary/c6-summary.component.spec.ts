import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C6SummaryComponent } from './c6-summary.component';

describe('C6SummaryComponent', () => {
  let component: C6SummaryComponent;
  let fixture: ComponentFixture<C6SummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C6SummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C6SummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
