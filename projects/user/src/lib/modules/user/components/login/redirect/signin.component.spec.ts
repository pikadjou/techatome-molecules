import { TestBed } from '@angular/core/testing';

import { TA_AUTH_TOKEN } from '../../../services/auth.service';
import { SignRedirectComponent } from './signin.component';

describe('SignRedirectComponent', () => {
  let mockAuthService: any;

  beforeEach(async () => {
    mockAuthService = {
      login: jasmine.createSpy('login'),
      signin: jasmine.createSpy('signin'),
      logout: jasmine.createSpy('logout').and.returnValue(Promise.resolve(null)),
    };

    await TestBed.configureTestingModule({
      imports: [SignRedirectComponent],
      providers: [
        { provide: TA_AUTH_TOKEN, useValue: mockAuthService },
      ],
    }).compileComponents();
  });

  it('should call signin on construction', () => {
    const fixture = TestBed.createComponent(SignRedirectComponent);
    fixture.detectChanges();
    expect(mockAuthService.signin).toHaveBeenCalled();
  });
});
