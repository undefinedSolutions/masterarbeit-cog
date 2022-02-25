import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C2s4CloudOptimizedGeoTIFFComponent } from './c2s4-cloud-optimized-geo-tiff.component';

describe('C2s4CloudOptimizedGeoTIFFComponent', () => {
  let component: C2s4CloudOptimizedGeoTIFFComponent;
  let fixture: ComponentFixture<C2s4CloudOptimizedGeoTIFFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C2s4CloudOptimizedGeoTIFFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C2s4CloudOptimizedGeoTIFFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
