import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3s2s2s1WMSImGeoServerComponent } from './c3s2s2s1-wmsim-geo-server.component';

describe('C3s2s2s1WMSImGeoServerComponent', () => {
  let component: C3s2s2s1WMSImGeoServerComponent;
  let fixture: ComponentFixture<C3s2s2s1WMSImGeoServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C3s2s2s1WMSImGeoServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C3s2s2s1WMSImGeoServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
