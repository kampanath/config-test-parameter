import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockUUTStatusTypeComponent } from './stock-uutstatus-type.component';

describe('StockUUTStatusTypeComponent', () => {
  let component: StockUUTStatusTypeComponent;
  let fixture: ComponentFixture<StockUUTStatusTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockUUTStatusTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockUUTStatusTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
