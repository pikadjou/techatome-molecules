import { provideServer, provideStrapi } from './provider';

describe('provideServer', () => {
  it('should return an array of providers', () => {
    const result = provideServer({
      graphQlConfig: { url: 'http://localhost:4000/graphql' },
      restConfig: { pendindRequestId: 5, serverUrl: 'http://localhost:3000' },
    });

    expect(Array.isArray(result)).toBeTrue();
    expect(result.length).toBeGreaterThan(0);
  });

  it('should work with empty config', () => {
    const result = provideServer({});
    expect(Array.isArray(result)).toBeTrue();
  });

  it('should include GraphQL config provider', () => {
    const result = provideServer({
      graphQlConfig: { url: 'http://test/graphql' },
    });
    expect(result).toBeTruthy();
  });

  it('should include REST config provider', () => {
    const result = provideServer({
      restConfig: { pendindRequestId: 10, serverUrl: 'http://test' },
    });
    expect(result).toBeTruthy();
  });
});

describe('provideStrapi', () => {
  it('should return an array of providers', () => {
    const result = provideStrapi({
      strapiConfig: { url: 'http://localhost:1337/graphql', token: 'test-token' },
    });

    expect(Array.isArray(result)).toBeTrue();
    expect(result.length).toBeGreaterThan(0);
  });
});
