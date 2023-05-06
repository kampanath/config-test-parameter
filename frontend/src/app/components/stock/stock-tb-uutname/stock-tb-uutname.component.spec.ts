import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTbUutnameComponent } from './stock-tb-uutname.component';

describe('StockTbUutnameComponent', () => {
  let component: StockTbUutnameComponent;
  let fixture: ComponentFixture<StockTbUutnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockTbUutnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockTbUutnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
