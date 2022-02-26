import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C4MethodikComponent } from './c4-methodik.component';

describe('C4MethodikComponent', () => {
  let component: C4MethodikComponent;
  let fixture: ComponentFixture<C4MethodikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C4MethodikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C4MethodikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
