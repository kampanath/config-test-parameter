import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImeiEditComponent } from './imei-edit.component';

describe('ImeiEditComponent', () => {
  let component: ImeiEditComponent;
  let fixture: ComponentFixture<ImeiEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImeiEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImeiEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
