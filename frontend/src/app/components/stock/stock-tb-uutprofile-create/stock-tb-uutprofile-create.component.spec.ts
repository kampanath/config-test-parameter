import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTbUutprofileCreateComponent } from './stock-tb-uutprofile-create.component';

describe('StockTbUutprofileCreateComponent', () => {
  let component: StockTbUutprofileCreateComponent;
  let fixture: ComponentFixture<StockTbUutprofileCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockTbUutprofileCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockTbUutprofileCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
