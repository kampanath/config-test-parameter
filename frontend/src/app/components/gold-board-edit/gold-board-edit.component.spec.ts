import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldBoardEditComponent } from './gold-board-edit.component';

describe('GoldBoardEditComponent', () => {
  let component: GoldBoardEditComponent;
  let fixture: ComponentFixture<GoldBoardEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldBoardEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldBoardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
