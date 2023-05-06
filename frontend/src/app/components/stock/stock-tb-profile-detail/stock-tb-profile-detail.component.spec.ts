import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTbProfileDetailComponent } from './stock-tb-profile-detail.component';

describe('StockTbProfileDetailComponent', () => {
  let component: StockTbProfileDetailComponent;
  let fixture: ComponentFixture<StockTbProfileDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockTbProfileDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockTbProfileDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
