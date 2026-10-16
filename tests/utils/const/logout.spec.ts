import { runBeforeLogoutHooks } from '@lib/utils/const/logout';

describe('runBeforeLogoutHooks', () => {
  it('attend les hooks qui répondent', async () => {
    const calls: string[] = [];
    await runBeforeLogoutHooks([
      async () => {
        calls.push('a');
      },
      () => {
        calls.push('b');
      },
    ]);
    expect(calls).toEqual(['a', 'b']);
  });

  it('ignore un hook en erreur', async () => {
    await expectAsync(runBeforeLogoutHooks([() => Promise.reject(new Error('x'))])).toBeResolved();
  });

  it('continue après le plafond si un hook ne répond jamais', async () => {
    await expectAsync(runBeforeLogoutHooks([() => new Promise(() => {})], 20)).toBeResolved();
  });

  it('rend la main tout de suite sans hook', async () => {
    await expectAsync(runBeforeLogoutHooks([])).toBeResolved();
  });
});
