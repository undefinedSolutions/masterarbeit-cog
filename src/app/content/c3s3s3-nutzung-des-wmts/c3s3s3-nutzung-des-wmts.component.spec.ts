import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3s3s3NutzungDesWMTSComponent } from './c3s3s3-nutzung-des-wmts.component';

describe('C3s3s3NutzungDesWMTSComponent', () => {
  let component: C3s3s3NutzungDesWMTSComponent;
  let fixture: ComponentFixture<C3s3s3NutzungDesWMTSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C3s3s3NutzungDesWMTSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C3s3s3NutzungDesWMTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
