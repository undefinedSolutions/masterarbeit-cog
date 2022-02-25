import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1s3s1AnzeigenEinesOrthomosaikComponent } from './c1s3s1-anzeigen-eines-orthomosaik.component';

describe('C1s3s1AnzeigenEinesOrthomosaikComponent', () => {
  let component: C1s3s1AnzeigenEinesOrthomosaikComponent;
  let fixture: ComponentFixture<C1s3s1AnzeigenEinesOrthomosaikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1s3s1AnzeigenEinesOrthomosaikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C1s3s1AnzeigenEinesOrthomosaikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
