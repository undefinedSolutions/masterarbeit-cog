import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3s2s2s2WMTSImGeoServerComponent } from './c3s2s2s2-wmtsim-geo-server.component';

describe('C3s2s2s2WMTSImGeoServerComponent', () => {
  let component: C3s2s2s2WMTSImGeoServerComponent;
  let fixture: ComponentFixture<C3s2s2s2WMTSImGeoServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C3s2s2s2WMTSImGeoServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C3s2s2s2WMTSImGeoServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
