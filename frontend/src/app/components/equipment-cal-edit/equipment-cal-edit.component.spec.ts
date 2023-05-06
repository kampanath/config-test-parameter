import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentCalEditComponent } from './equipment-cal-edit.component';

describe('EquipmentCalEditComponent', () => {
  let component: EquipmentCalEditComponent;
  let fixture: ComponentFixture<EquipmentCalEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentCalEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentCalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
