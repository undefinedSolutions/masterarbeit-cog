import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C5s3ErgebnisseDesWMTSComponent } from './c5s3-ergebnisse-des-wmts.component';

describe('C5s3ErgebnisseDesWMTSComponent', () => {
  let component: C5s3ErgebnisseDesWMTSComponent;
  let fixture: ComponentFixture<C5s3ErgebnisseDesWMTSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C5s3ErgebnisseDesWMTSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C5s3ErgebnisseDesWMTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
