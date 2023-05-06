import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockMysqlCreateComponent } from './stock-mysql-create.component';

describe('StockMysqlCreateComponent', () => {
  let component: StockMysqlCreateComponent;
  let fixture: ComponentFixture<StockMysqlCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockMysqlCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockMysqlCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
