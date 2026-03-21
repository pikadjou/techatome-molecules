import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import { TaUsersService } from '../../services/users.service';
import { UserMyProfileComponent } from './user-my-profile.component';

describe('UserMyProfileComponent', () => {
  let component: UserMyProfileComponent;
  let fixture: ComponentFixture<UserMyProfileComponent>;
  let mockUsersService: any;

  beforeEach(async () => {
    mockUsersService = {
      currentUser: {
        get$: jasmine.createSpy('get$').and.returnValue(of(null)),
      },
      fetchCurrentUser$: jasmine.createSpy('fetchCurrentUser$').and.returnValue(of(null)),
    };

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        UserMyProfileComponent,
      ],
      providers: [
        { provide: TaUsersService, useValue: mockUsersService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserMyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have canModify default to true', () => {
    expect(component.canModify()).toBe(true);
  });

  it('should fetch current user on construction', () => {
    expect(mockUsersService.fetchCurrentUser$).toHaveBeenCalled();
  });

  it('should get full name', () => {
    const result = component.getFullName('John', 'Doe');
    expect(result).toBeTruthy();
  });

  it('should get user logo data', () => {
    const user = {
      firstName: 'Jane',
      lastName: 'Doe',
      trigram: 'JDO',
      picture: 'avatar.jpg',
    } as any;
    const result = component.getUserLogo(user);
    expect(result.userInfo.profilePictureUrl).toBe('avatar.jpg');
    expect(result.userInfo.naming.name).toBe('Doe');
    expect(result.userInfo.naming.firstName).toBe('Jane');
  });

  it('should emit modifyAction when modify is triggered', () => {
    spyOn(component.modifyAction, 'emit');
    component.ctas[0].callback();
    expect(component.modifyAction.emit).toHaveBeenCalled();
  });

  it('should have currentUser$ getter', () => {
    expect(component.currentUser$).toBeDefined();
  });
});
