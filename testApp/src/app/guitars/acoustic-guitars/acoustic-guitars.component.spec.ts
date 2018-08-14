import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcousticGuitarsComponent } from './acoustic-guitars.component';

describe('AcousticGuitarsComponent', () => {
  let component: AcousticGuitarsComponent;
  let fixture: ComponentFixture<AcousticGuitarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcousticGuitarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcousticGuitarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
