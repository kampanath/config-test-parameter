import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTbProfileDetailEditComponent } from './stock-tb-profile-detail-edit.component';

describe('StockTbProfileDetailEditComponent', () => {
  let component: StockTbProfileDetailEditComponent;
  let fixture: ComponentFixture<StockTbProfileDetailEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockTbProfileDetailEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockTbProfileDetailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
