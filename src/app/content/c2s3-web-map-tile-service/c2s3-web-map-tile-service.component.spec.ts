import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C2s3WebMapTileServiceComponent } from './c2s3-web-map-tile-service.component';

describe('C2s3WebMapTileServiceComponent', () => {
  let component: C2s3WebMapTileServiceComponent;
  let fixture: ComponentFixture<C2s3WebMapTileServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C2s3WebMapTileServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C2s3WebMapTileServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
