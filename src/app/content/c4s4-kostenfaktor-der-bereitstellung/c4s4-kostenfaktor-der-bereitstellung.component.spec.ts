import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C4s4KostenfaktorDerBereitstellungComponent } from './c4s4-kostenfaktor-der-bereitstellung.component';

describe('C4s4KostenfaktorDerBereitstellungComponent', () => {
  let component: C4s4KostenfaktorDerBereitstellungComponent;
  let fixture: ComponentFixture<C4s4KostenfaktorDerBereitstellungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C4s4KostenfaktorDerBereitstellungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C4s4KostenfaktorDerBereitstellungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
