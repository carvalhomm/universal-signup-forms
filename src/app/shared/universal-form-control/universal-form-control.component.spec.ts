import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversalFormControlComponent } from './universal-form-control.component';

describe('UniversalFormControlComponent', () => {
  let component: UniversalFormControlComponent;
  let fixture: ComponentFixture<UniversalFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversalFormControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversalFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
