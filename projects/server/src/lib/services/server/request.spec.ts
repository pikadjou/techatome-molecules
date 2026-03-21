import { ECacheStrategy } from '../../types/cache';
import { Request } from './request';

describe('Request', () => {
  it('should create a request with required properties', () => {
    const request = new Request({ type: 'GetUsers' });
    expect(request.type).toBe('GetUsers');
    expect(request.id).toBeDefined();
    expect(typeof request.id).toBe('number');
  });

  it('should set default values', () => {
    const request = new Request({ type: 'GetUsers' });
    expect(request.loginRequired).toBeTrue();
    expect(request.cacheTime).toBe(ECacheStrategy.NoCache);
    expect(request.urlData).toBeNull();
  });

  it('should accept custom content', () => {
    const content = { name: 'test', value: 42 };
    const request = new Request({ type: 'PostUser', content });
    expect(request.BrutContent).toEqual(content);
  });

  it('should return JSON stringified content via Content getter', () => {
    const content = { name: 'test' };
    const request = new Request({ type: 'PostUser', content });
    expect(request.Content).toBe(JSON.stringify(content));
  });

  it('should return raw content via BrutContent getter', () => {
    const content = { name: 'test', items: [1, 2, 3] };
    const request = new Request({ type: 'PostUser', content });
    expect(request.BrutContent).toBe(content);
  });

  it('should accept custom cacheTime', () => {
    const request = new Request({
      type: 'GetUsers',
      cacheTime: 30,
    });
    expect(request.cacheTime).toBe(30);
  });

  it('should accept ECacheStrategy.Inifity', () => {
    const request = new Request({
      type: 'GetUsers',
      cacheTime: ECacheStrategy.Inifity,
    });
    expect(request.cacheTime).toBe(-1);
  });

  it('should accept custom loginRequired', () => {
    const request = new Request({
      type: 'GetUsers',
      loginRequired: false,
    });
    expect(request.loginRequired).toBeFalse();
  });

  it('should accept custom urlData', () => {
    const urlData = { id: '123' };
    const request = new Request({
      type: 'GetUser',
      urlData,
    });
    expect(request.urlData).toEqual(urlData);
  });

  it('should generate unique ids for different requests', () => {
    const request1 = new Request({ type: 'GetUsers' });
    const request2 = new Request({ type: 'GetUsers' });
    expect(request1.id).not.toBe(request2.id);
  });
});
