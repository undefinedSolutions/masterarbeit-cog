import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliographicDescriptionComponent } from './bibliographic-description.component';

describe('BibliographicDescriptionComponent', () => {
  let component: BibliographicDescriptionComponent;
  let fixture: ComponentFixture<BibliographicDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibliographicDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliographicDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
