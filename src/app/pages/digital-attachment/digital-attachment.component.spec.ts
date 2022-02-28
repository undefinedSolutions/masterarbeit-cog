import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalAttachmentComponent } from './digital-attachment.component';

describe('DigitalAttachmentComponent', () => {
  let component: DigitalAttachmentComponent;
  let fixture: ComponentFixture<DigitalAttachmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalAttachmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalAttachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
