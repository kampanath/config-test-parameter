import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockIrdEditComponent } from './stock-ird-edit.component';

describe('StockIrdEditComponent', () => {
  let component: StockIrdEditComponent;
  let fixture: ComponentFixture<StockIrdEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockIrdEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockIrdEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
