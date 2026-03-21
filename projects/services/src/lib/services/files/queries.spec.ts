import { GET_DOCUMENTS } from './queries';

describe('GET_DOCUMENTS', () => {
  it('should return a GraphQueryPayload with query and variables', () => {
    const result = GET_DOCUMENTS({ ids: ['1', '2'] });
    expect(result.query).toBeDefined();
    expect(result.variables).toEqual({});
  });

  it('should create query without where clause when ids is empty', () => {
    const result = GET_DOCUMENTS({ ids: [] });
    expect(result.query).toBeDefined();
    expect(result.variables).toEqual({});
  });

  it('should create query without where clause when ids is undefined', () => {
    const result = GET_DOCUMENTS({});
    expect(result.query).toBeDefined();
    expect(result.variables).toEqual({});
  });

  it('should accept a take parameter', () => {
    const result = GET_DOCUMENTS({ ids: ['1'], take: 50 });
    expect(result.query).toBeDefined();
  });
});
