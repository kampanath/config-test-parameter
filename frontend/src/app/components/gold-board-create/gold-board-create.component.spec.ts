import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldBoardCreateComponent } from './gold-board-create.component';

describe('GoldBoardCreateComponent', () => {
  let component: GoldBoardCreateComponent;
  let fixture: ComponentFixture<GoldBoardCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldBoardCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldBoardCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
