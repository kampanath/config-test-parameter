import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTbEquipmentEditComponent } from './stock-tb-equipment-edit.component';

describe('StockTbEquipmentEditComponent', () => {
  let component: StockTbEquipmentEditComponent;
  let fixture: ComponentFixture<StockTbEquipmentEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockTbEquipmentEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockTbEquipmentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
