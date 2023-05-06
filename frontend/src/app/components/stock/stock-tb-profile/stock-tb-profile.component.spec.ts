import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTbProfileComponent } from './stock-tb-profile.component';

describe('StockTbProfileComponent', () => {
  let component: StockTbProfileComponent;
  let fixture: ComponentFixture<StockTbProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockTbProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockTbProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
