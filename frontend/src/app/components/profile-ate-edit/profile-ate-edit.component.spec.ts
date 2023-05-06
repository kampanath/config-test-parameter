import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAteEditComponent } from './profile-ate-edit.component';

describe('ProfileAteEditComponent', () => {
  let component: ProfileAteEditComponent;
  let fixture: ComponentFixture<ProfileAteEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAteEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
