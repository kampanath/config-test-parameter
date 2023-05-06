import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IMEIShowTableComponent } from './imei-show-table.component';

describe('IMEIShowTableComponent', () => {
  let component: IMEIShowTableComponent;
  let fixture: ComponentFixture<IMEIShowTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IMEIShowTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IMEIShowTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
