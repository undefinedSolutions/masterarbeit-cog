import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3s1VorbereitungDerDatensaetzeInDenJeweiligenStandardsComponent } from './c3s1-vorbereitung-der-datensaetze-in-den-jeweiligen-standards.component';

describe('C3s1VorbereitungDerDatensaetzeInDenJeweiligenStandardsComponent', () => {
  let component: C3s1VorbereitungDerDatensaetzeInDenJeweiligenStandardsComponent;
  let fixture: ComponentFixture<C3s1VorbereitungDerDatensaetzeInDenJeweiligenStandardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C3s1VorbereitungDerDatensaetzeInDenJeweiligenStandardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C3s1VorbereitungDerDatensaetzeInDenJeweiligenStandardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
