import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTbUutprofileComponent } from './stock-tb-uutprofile.component';

describe('StockTbUutprofileComponent', () => {
  let component: StockTbUutprofileComponent;
  let fixture: ComponentFixture<StockTbUutprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockTbUutprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockTbUutprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
