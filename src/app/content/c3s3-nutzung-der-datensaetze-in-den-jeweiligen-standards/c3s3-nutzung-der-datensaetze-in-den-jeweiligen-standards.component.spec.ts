import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3s3NutzungDerDatensaetzeInDenJeweiligenStandardsComponent } from './c3s3-nutzung-der-datensaetze-in-den-jeweiligen-standards.component';

describe('C3s3NutzungDerDatensaetzeInDenJeweiligenStandardsComponent', () => {
  let component: C3s3NutzungDerDatensaetzeInDenJeweiligenStandardsComponent;
  let fixture: ComponentFixture<C3s3NutzungDerDatensaetzeInDenJeweiligenStandardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C3s3NutzungDerDatensaetzeInDenJeweiligenStandardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C3s3NutzungDerDatensaetzeInDenJeweiligenStandardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
