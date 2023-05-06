import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTbUutnameCreateComponent } from './stock-tb-uutname-create.component';

describe('StockTbUutnameCreateComponent', () => {
  let component: StockTbUutnameCreateComponent;
  let fixture: ComponentFixture<StockTbUutnameCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockTbUutnameCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockTbUutnameCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
