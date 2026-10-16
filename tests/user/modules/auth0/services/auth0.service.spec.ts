import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AuthClientConfig, AuthService } from '@auth0/auth0-angular';
import { EMPTY } from 'rxjs';

import { TaGraphService } from '@ta/server';
import { TaTranslationService } from '@ta/translation';
import { TA_BEFORE_LOGOUT } from '@ta/utils';

import { TaAuth0Service } from '@lib/user/modules/auth0/services/auth0.service';
import { TA_USER_SERVICE } from '@lib/user/modules/user/services/user.service';

function flush(): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, 0));
}

describe('TaAuth0Service.logout', () => {
  let auth: jasmine.SpyObj<AuthService>;

  function setup(hooks: (() => Promise<unknown> | void)[]) {
    auth = jasmine.createSpyObj<AuthService>('AuthService', ['logout', 'loginWithRedirect'], {
      appState$: EMPTY,
      error$: EMPTY,
      isAuthenticated$: EMPTY,
      user$: EMPTY,
    });
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        TaAuth0Service,
        { provide: AuthService, useValue: auth },
        { provide: AuthClientConfig, useValue: { get: () => ({}) } },
        { provide: TaGraphService, useValue: {} },
        { provide: TaTranslationService, useValue: { getLanguage: () => 'fr' } },
        { provide: TA_USER_SERVICE, useValue: { fetchUserProfile$: () => EMPTY, userProfile: { get$: () => EMPTY } } },
        ...hooks.map(hook => ({ multi: true, provide: TA_BEFORE_LOGOUT, useValue: hook })),
      ],
    });
    return TestBed.inject(TaAuth0Service);
  }

  it('attend les hooks avant de déconnecter', async () => {
    let release: () => void = () => {};
    const hook = jasmine.createSpy('hook').and.returnValue(new Promise<void>(resolve => (release = resolve)));
    const service = setup([hook]);

    void service.logout();
    await flush();
    expect(hook).toHaveBeenCalled();
    expect(auth.logout).not.toHaveBeenCalled();

    release();
    await flush();
    expect(auth.logout).toHaveBeenCalled();
  });

  it('déconnecte quand même si un hook échoue', async () => {
    const service = setup([() => Promise.reject(new Error('boom'))]);

    void service.logout();
    await flush();

    expect(auth.logout).toHaveBeenCalled();
  });

  it('déconnecte sans hook', async () => {
    const service = setup([]);

    void service.logout();
    await flush();

    expect(auth.logout).toHaveBeenCalled();
  });
});
