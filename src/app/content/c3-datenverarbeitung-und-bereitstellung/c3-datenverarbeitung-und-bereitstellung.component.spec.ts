import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3DatenverarbeitungUndBereitstellungComponent } from './c3-datenverarbeitung-und-bereitstellung.component';

describe('C3DatenverarbeitungUndBereitstellungComponent', () => {
  let component: C3DatenverarbeitungUndBereitstellungComponent;
  let fixture: ComponentFixture<C3DatenverarbeitungUndBereitstellungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C3DatenverarbeitungUndBereitstellungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C3DatenverarbeitungUndBereitstellungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
