import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunziesComponent } from './funzies.component';

describe('FunziesComponent', () => {
  let component: FunziesComponent;
  let fixture: ComponentFixture<FunziesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunziesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunziesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
