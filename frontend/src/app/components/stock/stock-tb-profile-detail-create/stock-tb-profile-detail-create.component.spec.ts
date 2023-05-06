import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTbProfileDetailCreateComponent } from './stock-tb-profile-detail-create.component';

describe('StockTbProfileDetailCreateComponent', () => {
  let component: StockTbProfileDetailCreateComponent;
  let fixture: ComponentFixture<StockTbProfileDetailCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockTbProfileDetailCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockTbProfileDetailCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
