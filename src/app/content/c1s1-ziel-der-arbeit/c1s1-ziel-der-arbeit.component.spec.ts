import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1s1ZielDerArbeitComponent } from './c1s1-ziel-der-arbeit.component';

describe('C1s1ZielDerArbeitComponent', () => {
  let component: C1s1ZielDerArbeitComponent;
  let fixture: ComponentFixture<C1s1ZielDerArbeitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1s1ZielDerArbeitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C1s1ZielDerArbeitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
