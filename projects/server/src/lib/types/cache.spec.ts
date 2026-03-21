import { ECacheStrategy, CacheStrategy } from './cache';

describe('ECacheStrategy', () => {
  it('should have Inifity as -1', () => {
    expect(ECacheStrategy.Inifity).toBe(-1);
  });

  it('should have NoCache as 0', () => {
    expect(ECacheStrategy.NoCache).toBe(0);
  });
});

describe('CacheStrategy type', () => {
  it('should accept ECacheStrategy values', () => {
    const strategy1: CacheStrategy = ECacheStrategy.Inifity;
    const strategy2: CacheStrategy = ECacheStrategy.NoCache;
    expect(strategy1).toBe(-1);
    expect(strategy2).toBe(0);
  });

  it('should accept number values', () => {
    const strategy: CacheStrategy = 30;
    expect(strategy).toBe(30);
  });
});
