import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3s2s2BereitstellungDurchGeoServerComponent } from './c3s2s2-bereitstellung-durch-geo-server.component';

describe('C3s2s2BereitstellungDurchGeoServerComponent', () => {
  let component: C3s2s2BereitstellungDurchGeoServerComponent;
  let fixture: ComponentFixture<C3s2s2BereitstellungDurchGeoServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C3s2s2BereitstellungDurchGeoServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C3s2s2BereitstellungDurchGeoServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
