import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { TA_AUTH_TOKEN } from '../user/services/auth.service';
import { TaAuth0Service } from './services/auth0.service';
import { provideAuth0 } from './provide';

describe('provideAuth0', () => {
  it('should return an array of providers', () => {
    const result = provideAuth0({
      config: {
        domain: 'test.auth0.com',
        clientId: 'test-client-id',
      },
    });
    expect(result).toBeTruthy();
    expect(Array.isArray(result)).toBe(true);
  });

  it('should include TA_AUTH_TOKEN provider with TaAuth0Service', () => {
    const result = provideAuth0({
      config: {
        domain: 'test.auth0.com',
        clientId: 'test-client-id',
      },
    }) as any[];
    const authProvider = result.find(
      (p: any) => p && p.provide === TA_AUTH_TOKEN
    );
    expect(authProvider).toBeTruthy();
    expect(authProvider.useClass).toBe(TaAuth0Service);
  });

  it('should include HTTP_INTERCEPTORS provider', () => {
    const result = provideAuth0({
      config: {
        domain: 'test.auth0.com',
        clientId: 'test-client-id',
      },
    }) as any[];
    const interceptorProvider = result.find(
      (p: any) => p && p.provide === HTTP_INTERCEPTORS
    );
    expect(interceptorProvider).toBeTruthy();
    expect(interceptorProvider.multi).toBe(true);
  });
});
