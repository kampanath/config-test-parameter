import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTbEquipmentAddComponent } from './stock-tb-equipment-add.component';

describe('StockTbEquipmentAddComponent', () => {
  let component: StockTbEquipmentAddComponent;
  let fixture: ComponentFixture<StockTbEquipmentAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockTbEquipmentAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockTbEquipmentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
