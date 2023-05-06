import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IMEIProductComponent } from './imei-product.component';

describe('IMEIProductComponent', () => {
  let component: IMEIProductComponent;
  let fixture: ComponentFixture<IMEIProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IMEIProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IMEIProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
