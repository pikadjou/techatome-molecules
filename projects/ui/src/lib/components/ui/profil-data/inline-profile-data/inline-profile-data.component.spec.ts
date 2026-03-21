import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineProfileDataComponent } from './inline-profile-data.component';
import { IProfileData } from '../IProfileData';

describe('InlineProfileDataComponent', () => {
  let component: InlineProfileDataComponent;
  let fixture: ComponentFixture<InlineProfileDataComponent>;

  const mockProfile: IProfileData = {
    title: {
      main: 'John Doe',
      second: 'Developer',
      sub: 'Engineering',
    },
    phoneNumber: '+33612345678',
    email: 'john@example.com',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlineProfileDataComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(InlineProfileDataComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('profile', mockProfile);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have profile input set', () => {
    expect(component.profile()).toEqual(mockProfile);
  });

  it('should default userLogo to undefined', () => {
    expect(component.userLogo()).toBeUndefined();
  });
});
