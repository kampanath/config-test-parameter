import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ATECalibrationComponent } from './atecalibration.component';

describe('ATECalibrationComponent', () => {
  let component: ATECalibrationComponent;
  let fixture: ComponentFixture<ATECalibrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ATECalibrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ATECalibrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
