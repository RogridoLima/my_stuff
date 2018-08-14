import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LesPaulComponent } from './les-paul.component';

describe('LesPaulComponent', () => {
  let component: LesPaulComponent;
  let fixture: ComponentFixture<LesPaulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LesPaulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LesPaulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
