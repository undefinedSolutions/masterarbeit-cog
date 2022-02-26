import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3s3s1NutzungDesTMSComponent } from './c3s3s1-nutzung-des-tms.component';

describe('C3s3s1NutzungDesTMSComponent', () => {
  let component: C3s3s1NutzungDesTMSComponent;
  let fixture: ComponentFixture<C3s3s1NutzungDesTMSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C3s3s1NutzungDesTMSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C3s3s1NutzungDesTMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
