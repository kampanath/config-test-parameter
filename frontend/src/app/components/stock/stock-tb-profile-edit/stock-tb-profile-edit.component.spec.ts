import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTbProfileEditComponent } from './stock-tb-profile-edit.component';

describe('StockTbProfileEditComponent', () => {
  let component: StockTbProfileEditComponent;
  let fixture: ComponentFixture<StockTbProfileEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockTbProfileEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockTbProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
