import { graphQlPaginationFields, graphQlTake } from './queries';

describe('graphQlTake', () => {
  it('should return take clause with the provided number', () => {
    expect(graphQlTake(50)).toBe('take: 50');
  });

  it('should default to 1000 when no value is provided', () => {
    expect(graphQlTake()).toBe('take: 1000');
  });

  it('should default to 1000 when null is provided', () => {
    expect(graphQlTake(null)).toBe('take: 1000');
  });
});

describe('graphQlPaginationFields', () => {
  it('should return pagination fields string', () => {
    const result = graphQlPaginationFields();
    expect(result).toContain('pageInfo');
    expect(result).toContain('hasNextPage');
    expect(result).toContain('hasPreviousPage');
    expect(result).toContain('totalCount');
  });
});
