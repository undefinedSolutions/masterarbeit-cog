import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C5DiscussionComponent } from './c5-discussion.component';

describe('C5DiscussionComponent', () => {
  let component: C5DiscussionComponent;
  let fixture: ComponentFixture<C5DiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C5DiscussionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C5DiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
