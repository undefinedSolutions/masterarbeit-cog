import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3s1s2VorbereitungDesWMSUndWMTSComponent } from './c3s1s2-vorbereitung-des-wmsund-wmts.component';

describe('C3s1s2VorbereitungDesWMSUndWMTSComponent', () => {
  let component: C3s1s2VorbereitungDesWMSUndWMTSComponent;
  let fixture: ComponentFixture<C3s1s2VorbereitungDesWMSUndWMTSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C3s1s2VorbereitungDesWMSUndWMTSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C3s1s2VorbereitungDesWMSUndWMTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
