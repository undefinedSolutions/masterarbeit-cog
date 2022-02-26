import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3s3s4NutzungDesCOGComponent } from './c3s3s4-nutzung-des-cog.component';

describe('C3s3s4NutzungDesCOGComponent', () => {
  let component: C3s3s4NutzungDesCOGComponent;
  let fixture: ComponentFixture<C3s3s4NutzungDesCOGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C3s3s4NutzungDesCOGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C3s3s4NutzungDesCOGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
