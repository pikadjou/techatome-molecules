import { IGTMConfig, provideGTM } from './providerGTM';

describe('provideGTM', () => {
  it('should return an array of providers', () => {
    const config: IGTMConfig = { gtmId: 'GTM-TEST123' };
    const providers = provideGTM(config);

    expect(Array.isArray(providers)).toBeTrue();
  });

  it('should return providers for a given gtmId', () => {
    const config: IGTMConfig = { gtmId: 'GTM-ABCDEF' };
    const providers = provideGTM(config);

    expect(providers).toBeTruthy();
    expect((providers as any[]).length).toBeGreaterThan(0);
  });
});

describe('IGTMConfig', () => {
  it('should allow creating a config with required gtmId', () => {
    const config: IGTMConfig = { gtmId: 'GTM-123' };
    expect(config.gtmId).toBe('GTM-123');
  });

  it('should allow optional enabled property', () => {
    const config: IGTMConfig = { gtmId: 'GTM-123', enabled: true };
    expect(config.enabled).toBeTrue();
  });

  it('should allow enabled to be false', () => {
    const config: IGTMConfig = { gtmId: 'GTM-123', enabled: false };
    expect(config.enabled).toBeFalse();
  });
});
