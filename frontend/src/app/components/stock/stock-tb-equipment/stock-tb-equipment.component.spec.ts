import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTbEquipmentComponent } from './stock-tb-equipment.component';

describe('StockTbEquipmentComponent', () => {
  let component: StockTbEquipmentComponent;
  let fixture: ComponentFixture<StockTbEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockTbEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockTbEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
