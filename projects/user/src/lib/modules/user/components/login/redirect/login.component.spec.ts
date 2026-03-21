import { TestBed } from '@angular/core/testing';

import { TA_AUTH_TOKEN } from '../../../services/auth.service';
import { LoginRedirectComponent } from './login.component';

describe('LoginRedirectComponent', () => {
  let mockAuthService: any;

  beforeEach(async () => {
    mockAuthService = {
      login: jasmine.createSpy('login'),
      signin: jasmine.createSpy('signin'),
      logout: jasmine.createSpy('logout').and.returnValue(Promise.resolve(null)),
    };

    await TestBed.configureTestingModule({
      imports: [LoginRedirectComponent],
      providers: [
        { provide: TA_AUTH_TOKEN, useValue: mockAuthService },
      ],
    }).compileComponents();
  });

  it('should call login on construction', () => {
    const fixture = TestBed.createComponent(LoginRedirectComponent);
    fixture.detectChanges();
    expect(mockAuthService.login).toHaveBeenCalled();
  });
});
