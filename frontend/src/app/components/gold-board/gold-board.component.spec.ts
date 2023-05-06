import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldBoardComponent } from './gold-board.component';

describe('GoldBoardComponent', () => {
  let component: GoldBoardComponent;
  let fixture: ComponentFixture<GoldBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
