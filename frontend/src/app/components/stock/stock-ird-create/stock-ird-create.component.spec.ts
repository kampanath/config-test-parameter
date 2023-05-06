import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockIrdCreateComponent } from './stock-ird-create.component';

describe('StockIrdCreateComponent', () => {
  let component: StockIrdCreateComponent;
  let fixture: ComponentFixture<StockIrdCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockIrdCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockIrdCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
