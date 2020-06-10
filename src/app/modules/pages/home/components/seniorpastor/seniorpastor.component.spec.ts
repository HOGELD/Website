import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniorpastorComponent } from './seniorpastor.component';

describe('SeniorpastorComponent', () => {
  let component: SeniorpastorComponent;
  let fixture: ComponentFixture<SeniorpastorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeniorpastorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeniorpastorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
