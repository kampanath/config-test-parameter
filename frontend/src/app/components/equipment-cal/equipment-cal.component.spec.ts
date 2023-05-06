import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentCalComponent } from './equipment-cal.component';

describe('EquipmentCalComponent', () => {
  let component: EquipmentCalComponent;
  let fixture: ComponentFixture<EquipmentCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
