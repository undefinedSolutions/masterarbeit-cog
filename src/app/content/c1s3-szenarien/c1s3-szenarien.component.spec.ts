import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1s3SzenarienComponent } from './c1s3-szenarien.component';

describe('C1s3SzenarienComponent', () => {
  let component: C1s3SzenarienComponent;
  let fixture: ComponentFixture<C1s3SzenarienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1s3SzenarienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C1s3SzenarienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
