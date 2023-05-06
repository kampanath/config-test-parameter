import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockMysqlEditComponent } from './stock-mysql-edit.component';

describe('StockMysqlEditComponent', () => {
  let component: StockMysqlEditComponent;
  let fixture: ComponentFixture<StockMysqlEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockMysqlEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockMysqlEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
