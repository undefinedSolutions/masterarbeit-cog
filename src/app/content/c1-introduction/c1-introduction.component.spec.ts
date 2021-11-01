import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1IntroductionComponent } from './c1-introduction.component';

describe('C1IntroductionComponent', () => {
  let component: C1IntroductionComponent;
  let fixture: ComponentFixture<C1IntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1IntroductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C1IntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
