import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StratocasterComponent } from './stratocaster.component';

describe('StratocasterComponent', () => {
  let component: StratocasterComponent;
  let fixture: ComponentFixture<StratocasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StratocasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StratocasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
