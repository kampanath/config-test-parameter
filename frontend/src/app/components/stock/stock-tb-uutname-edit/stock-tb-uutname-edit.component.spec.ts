import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTbUutnameEditComponent } from './stock-tb-uutname-edit.component';

describe('StockTbUutnameEditComponent', () => {
  let component: StockTbUutnameEditComponent;
  let fixture: ComponentFixture<StockTbUutnameEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockTbUutnameEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockTbUutnameEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
