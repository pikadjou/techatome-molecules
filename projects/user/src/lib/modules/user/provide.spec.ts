import { TA_USER_SERVICE, TaUserService } from './services/user.service';
import { provideUser } from './provide';

describe('provideUser', () => {
  it('should return an array of providers', () => {
    const result = provideUser({ service: TaUserService });
    expect(result).toBeTruthy();
    expect(Array.isArray(result)).toBe(true);
  });

  it('should include TA_USER_SERVICE provider', () => {
    const result = provideUser({ service: TaUserService }) as any[];
    const userProvider = result.find(
      (p: any) => p && p.provide === TA_USER_SERVICE
    );
    expect(userProvider).toBeTruthy();
    expect(userProvider.useClass).toBe(TaUserService);
  });
});
