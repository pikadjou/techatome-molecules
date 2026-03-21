import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import { TA_AUTH_TOKEN } from '../../services/auth.service';
import { TA_USER_SERVICE } from '../../services/user.service';
import { MyAccountComponent } from './my-account.component';

describe('MyAccountComponent', () => {
  let component: MyAccountComponent;
  let fixture: ComponentFixture<MyAccountComponent>;
  let mockAuthService: any;
  let mockUserService: any;

  beforeEach(async () => {
    mockAuthService = {
      login: jasmine.createSpy('login'),
      logout: jasmine.createSpy('logout').and.returnValue(Promise.resolve(null)),
    };

    mockUserService = {
      userProfile: {
        get$: jasmine.createSpy('get$').and.returnValue(of(null)),
      },
    };

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        MyAccountComponent,
      ],
      providers: [
        { provide: TA_AUTH_TOKEN, useValue: mockAuthService },
        { provide: TA_USER_SERVICE, useValue: mockUserService },
        { provide: Router, useValue: jasmine.createSpyObj('Router', ['navigateByUrl']) },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have isEditable default to false', () => {
    expect(component.isEditable()).toBe(false);
  });

  it('should have profileMenu default to null', () => {
    expect(component.profileMenu()).toBeNull();
  });

  it('should have appVersion default to null', () => {
    expect(component.appVersion()).toBeNull();
  });

  it('should initialize disconnectionMenu on init', () => {
    expect(component.disconnectionMenu()).toBeTruthy();
  });

  it('should emit navigateEvent on navigateToProfile', () => {
    spyOn(component.navigateEvent, 'emit');
    component.navigateToProfile();
    expect(component.navigateEvent.emit).toHaveBeenCalled();
  });

  it('should emit navigateEditEvent on navigateToEditProfile', () => {
    spyOn(component.navigateEditEvent, 'emit');
    component.navigateToEditProfile();
    expect(component.navigateEditEvent.emit).toHaveBeenCalled();
  });

  it('should get disconnection menu with logout item', () => {
    const menu = component.getDisconnectionMenu();
    expect(menu).toBeTruthy();
    expect(menu.elements.length).toBe(1);
  });

  it('should have profile$ getter', () => {
    expect(component.profile$).toBeDefined();
  });
});
