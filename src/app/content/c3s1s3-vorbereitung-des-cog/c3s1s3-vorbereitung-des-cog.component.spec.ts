import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3s1s3VorbereitungDesCOGComponent } from './c3s1s3-vorbereitung-des-cog.component';

describe('C3s1s3VorbereitungDesCOGComponent', () => {
  let component: C3s1s3VorbereitungDesCOGComponent;
  let fixture: ComponentFixture<C3s1s3VorbereitungDesCOGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C3s1s3VorbereitungDesCOGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C3s1s3VorbereitungDesCOGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
