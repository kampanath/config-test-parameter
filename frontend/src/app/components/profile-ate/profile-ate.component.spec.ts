import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileATEComponent } from './profile-ate.component';

describe('ProfileATEComponent', () => {
  let component: ProfileATEComponent;
  let fixture: ComponentFixture<ProfileATEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileATEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileATEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
