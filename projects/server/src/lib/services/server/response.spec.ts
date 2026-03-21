import { StatusReponse } from './response';

describe('StatusReponse enum', () => {
  it('should have Unknown as 0', () => {
    expect(StatusReponse.Unknown).toBe(0);
  });

  it('should have Successful as 200', () => {
    expect(StatusReponse.Successful).toBe(200);
  });

  it('should have NoContent as 204', () => {
    expect(StatusReponse.NoContent).toBe(204);
  });

  it('should have Unauthorized as 401', () => {
    expect(StatusReponse.Unauthorized).toBe(401);
  });

  it('should have Forbidden as 403', () => {
    expect(StatusReponse.Forbidden).toBe(403);
  });

  it('should have Error as 500', () => {
    expect(StatusReponse.Error).toBe(500);
  });
});
