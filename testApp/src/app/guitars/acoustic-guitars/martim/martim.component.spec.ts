import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MartimComponent } from './martim.component';

describe('MartimComponent', () => {
  let component: MartimComponent;
  let fixture: ComponentFixture<MartimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MartimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MartimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
