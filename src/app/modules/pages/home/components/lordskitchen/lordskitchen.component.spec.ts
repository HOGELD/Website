import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LordskitchenComponent } from './lordskitchen.component';

describe('LordskitchenComponent', () => {
  let component: LordskitchenComponent;
  let fixture: ComponentFixture<LordskitchenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LordskitchenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LordskitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
