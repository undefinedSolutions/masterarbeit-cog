import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3s3s2NutzungDesWMSComponent } from './c3s3s2-nutzung-des-wms.component';

describe('C3s3s2NutzungDesWMSComponent', () => {
  let component: C3s3s2NutzungDesWMSComponent;
  let fixture: ComponentFixture<C3s3s2NutzungDesWMSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C3s3s2NutzungDesWMSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C3s3s2NutzungDesWMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
