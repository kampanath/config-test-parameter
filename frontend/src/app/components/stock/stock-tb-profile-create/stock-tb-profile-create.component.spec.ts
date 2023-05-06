import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTbProfileCreateComponent } from './stock-tb-profile-create.component';

describe('StockTbProfileCreateComponent', () => {
  let component: StockTbProfileCreateComponent;
  let fixture: ComponentFixture<StockTbProfileCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockTbProfileCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockTbProfileCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
