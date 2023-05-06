import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockMysqlComponent } from './stock-mysql.component';

describe('StockMysqlComponent', () => {
  let component: StockMysqlComponent;
  let fixture: ComponentFixture<StockMysqlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockMysqlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockMysqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
