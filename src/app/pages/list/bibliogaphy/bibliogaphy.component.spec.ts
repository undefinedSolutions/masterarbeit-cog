import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliogaphyComponent } from './bibliogaphy.component';

describe('BibliogaphyComponent', () => {
  let component: BibliogaphyComponent;
  let fixture: ComponentFixture<BibliogaphyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibliogaphyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliogaphyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
