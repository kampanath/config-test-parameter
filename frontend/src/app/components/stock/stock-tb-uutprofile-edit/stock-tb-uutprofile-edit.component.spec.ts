import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTbUutprofileEditComponent } from './stock-tb-uutprofile-edit.component';

describe('StockTbUutprofileEditComponent', () => {
  let component: StockTbUutprofileEditComponent;
  let fixture: ComponentFixture<StockTbUutprofileEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockTbUutprofileEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockTbUutprofileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
