import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAteCreateComponent } from './profile-ate-create.component';

describe('ProfileAteCreateComponent', () => {
  let component: ProfileAteCreateComponent;
  let fixture: ComponentFixture<ProfileAteCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAteCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
