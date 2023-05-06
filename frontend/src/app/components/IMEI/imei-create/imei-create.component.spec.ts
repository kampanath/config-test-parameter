import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImeiCreateComponent } from './imei-create.component';

describe('ImeiCreateComponent', () => {
  let component: ImeiCreateComponent;
  let fixture: ComponentFixture<ImeiCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImeiCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImeiCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
