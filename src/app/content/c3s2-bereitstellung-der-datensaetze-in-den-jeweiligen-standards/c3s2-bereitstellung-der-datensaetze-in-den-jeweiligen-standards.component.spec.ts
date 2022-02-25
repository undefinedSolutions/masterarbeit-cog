import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3s2BereitstellungDerDatensaetzeInDenJeweiligenStandardsComponent } from './c3s2-bereitstellung-der-datensaetze-in-den-jeweiligen-standards.component';

describe('C3s2BereitstellungDerDatensaetzeInDenJeweiligenStandardsComponent', () => {
  let component: C3s2BereitstellungDerDatensaetzeInDenJeweiligenStandardsComponent;
  let fixture: ComponentFixture<C3s2BereitstellungDerDatensaetzeInDenJeweiligenStandardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C3s2BereitstellungDerDatensaetzeInDenJeweiligenStandardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C3s2BereitstellungDerDatensaetzeInDenJeweiligenStandardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
