import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffidavitComponent } from './affidavit.component';

describe('AffidavitComponent', () => {
  let component: AffidavitComponent;
  let fixture: ComponentFixture<AffidavitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffidavitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffidavitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
