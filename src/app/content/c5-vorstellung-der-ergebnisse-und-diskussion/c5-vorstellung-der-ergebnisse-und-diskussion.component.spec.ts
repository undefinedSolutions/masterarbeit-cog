import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C5VorstellungDerErgebnisseUndDiskussionComponent } from './c5-vorstellung-der-ergebnisse-und-diskussion.component';

describe('C5VorstellungDerErgebnisseUndDiskussionComponent', () => {
  let component: C5VorstellungDerErgebnisseUndDiskussionComponent;
  let fixture: ComponentFixture<C5VorstellungDerErgebnisseUndDiskussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C5VorstellungDerErgebnisseUndDiskussionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C5VorstellungDerErgebnisseUndDiskussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
