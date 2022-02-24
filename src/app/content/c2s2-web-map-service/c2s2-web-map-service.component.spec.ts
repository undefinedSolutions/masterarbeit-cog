import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C2s2WebMapServiceComponent } from './c2s2-web-map-service.component';

describe('C2s2WebMapServiceComponent', () => {
  let component: C2s2WebMapServiceComponent;
  let fixture: ComponentFixture<C2s2WebMapServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C2s2WebMapServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C2s2WebMapServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
