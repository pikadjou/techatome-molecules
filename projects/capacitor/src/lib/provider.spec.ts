import { providePwa } from './provider';
import { PWA_CONFIG_KEY } from './services/pwa.service';

describe('providePwa', () => {
  it('should return an array of providers', () => {
    const result = providePwa({ active: true });
    expect(result).toBeTruthy();
    expect(Array.isArray(result)).toBe(true);
  });

  it('should include PWA_CONFIG_KEY provider', () => {
    const result = providePwa({ active: false }) as any[];
    const pwaProvider = result.find(
      (p: any) => p && p.provide === PWA_CONFIG_KEY
    );
    expect(pwaProvider).toBeTruthy();
    expect(pwaProvider.useValue).toEqual({ active: false });
  });
});
