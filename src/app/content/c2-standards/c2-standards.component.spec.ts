import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C2StandardsComponent } from './c2-standards.component';

describe('C2StandardsComponent', () => {
  let component: C2StandardsComponent;
  let fixture: ComponentFixture<C2StandardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C2StandardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C2StandardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
