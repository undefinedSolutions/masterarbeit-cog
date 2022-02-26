import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeMapComponent } from './iframe-map.component';

describe('IframeMapComponent', () => {
  let component: IframeMapComponent;
  let fixture: ComponentFixture<IframeMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IframeMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IframeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
