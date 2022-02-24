import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C2s1TileMatrixSetComponent } from './c2s1-tile-matrix-set.component';

describe('C2s1TileMatrixSetComponent', () => {
  let component: C2s1TileMatrixSetComponent;
  let fixture: ComponentFixture<C2s1TileMatrixSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C2s1TileMatrixSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C2s1TileMatrixSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
