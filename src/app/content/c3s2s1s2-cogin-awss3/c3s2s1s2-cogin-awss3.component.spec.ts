import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3s2s1s2COGInAWSS3Component } from './c3s2s1s2-cogin-awss3.component';

describe('C3s2s1s2COGInAWSS3Component', () => {
  let component: C3s2s1s2COGInAWSS3Component;
  let fixture: ComponentFixture<C3s2s1s2COGInAWSS3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C3s2s1s2COGInAWSS3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C3s2s1s2COGInAWSS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
