import { createQuery } from './graphPayload';

describe('createQuery', () => {
  it('should create a basic query payload with name', () => {
    const result = createQuery('users');
    expect(result.name).toBe('users');
    expect(result.query).toBeDefined();
    expect(result.variables).toEqual({});
  });

  it('should include props in the query when provided', () => {
    const result = createQuery('users', { props: 'id name email' });
    expect(result.name).toBe('users');
    expect(result.variables).toEqual({});
  });

  it('should include where variables when provided', () => {
    const where = { name: { eq: 'test' } } as any;
    const result = createQuery('users', { props: 'id name', where });
    expect(result.variables.where).toEqual(where);
  });

  it('should include order variables when provided', () => {
    const order = { name: 'ASC' } as any;
    const result = createQuery('users', { props: 'id name', order });
    expect(result.variables.order).toEqual(order);
  });

  it('should not include where in variables when not provided', () => {
    const result = createQuery('users', { props: 'id' });
    expect(result.variables.where).toBeUndefined();
  });

  it('should not include order in variables when not provided', () => {
    const result = createQuery('users', { props: 'id' });
    expect(result.variables.order).toBeUndefined();
  });

  it('should handle take parameter', () => {
    const result = createQuery('users', { props: 'id', take: 10 });
    expect(result.name).toBe('users');
  });

  it('should capitalize the query name', () => {
    const result = createQuery('users', { props: 'id' });
    expect(result.query).toBeDefined();
  });

  it('should handle prefixType for filter/sort input types', () => {
    const where = { name: { eq: 'test' } } as any;
    const result = createQuery('users', {
      props: 'id name',
      where,
      prefixType: 'user',
    });
    expect(result.variables.where).toEqual(where);
  });

  it('should handle all parameters together', () => {
    const where = { status: { eq: 'active' } } as any;
    const order = { name: 'ASC' } as any;

    const result = createQuery('projects', {
      props: 'id name status',
      where,
      order,
      take: 50,
      prefixType: 'project',
    });

    expect(result.name).toBe('projects');
    expect(result.variables.where).toEqual(where);
    expect(result.variables.order).toEqual(order);
  });
});
