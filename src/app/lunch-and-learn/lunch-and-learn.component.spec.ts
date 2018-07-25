import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchAndLearnComponent } from './lunch-and-learn.component';

describe('LunchAndLearnComponent', () => {
  let component: LunchAndLearnComponent;
  let fixture: ComponentFixture<LunchAndLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunchAndLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LunchAndLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
