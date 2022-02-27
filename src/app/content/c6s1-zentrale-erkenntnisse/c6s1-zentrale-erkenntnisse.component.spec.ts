import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C6s1ZentraleErkenntnisseComponent } from './c6s1-zentrale-erkenntnisse.component';

describe('C6s1ZentraleErkenntnisseComponent', () => {
  let component: C6s1ZentraleErkenntnisseComponent;
  let fixture: ComponentFixture<C6s1ZentraleErkenntnisseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C6s1ZentraleErkenntnisseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C6s1ZentraleErkenntnisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
