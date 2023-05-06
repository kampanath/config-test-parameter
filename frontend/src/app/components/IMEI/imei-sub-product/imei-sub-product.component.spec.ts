import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IMEISubProductComponent } from './imei-sub-product.component';

describe('IMEISubProductComponent', () => {
  let component: IMEISubProductComponent;
  let fixture: ComponentFixture<IMEISubProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IMEISubProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IMEISubProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
