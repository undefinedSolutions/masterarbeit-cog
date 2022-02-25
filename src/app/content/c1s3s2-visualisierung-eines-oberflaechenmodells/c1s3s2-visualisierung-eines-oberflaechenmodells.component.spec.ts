import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1s3s2VisualisierungEinesOberflaechenmodellsComponent } from './c1s3s2-visualisierung-eines-oberflaechenmodells.component';

describe('C1s3s2VisualisierungEinesOberflaechenmodellsComponent', () => {
  let component: C1s3s2VisualisierungEinesOberflaechenmodellsComponent;
  let fixture: ComponentFixture<C1s3s2VisualisierungEinesOberflaechenmodellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1s3s2VisualisierungEinesOberflaechenmodellsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C1s3s2VisualisierungEinesOberflaechenmodellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
