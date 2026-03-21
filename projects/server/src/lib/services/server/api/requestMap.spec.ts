import { RequestMap } from './requestMap';
import { Request } from '../request';

describe('RequestMap', () => {
  beforeEach(() => {
    RequestMap.mappingApi = {};
  });

  describe('register', () => {
    it('should register routes into the mapping', () => {
      RequestMap.register({
        GetUsers: { type: 'GET', url: '{ApiUrl}/users' },
        PostUser: { type: 'POST', url: '{ApiUrl}/users' },
      });

      expect(RequestMap.mappingApi['GetUsers']).toEqual({
        type: 'GET',
        url: '{ApiUrl}/users',
      });
      expect(RequestMap.mappingApi['PostUser']).toEqual({
        type: 'POST',
        url: '{ApiUrl}/users',
      });
    });

    it('should merge with existing routes', () => {
      RequestMap.register({
        GetUsers: { type: 'GET', url: '{ApiUrl}/users' },
      });
      RequestMap.register({
        GetProjects: { type: 'GET', url: '{ApiUrl}/projects' },
      });

      expect(RequestMap.mappingApi['GetUsers']).toBeDefined();
      expect(RequestMap.mappingApi['GetProjects']).toBeDefined();
    });
  });

  describe('getConfigById', () => {
    it('should return the config for a registered route', () => {
      RequestMap.register({
        GetUsers: { type: 'GET', url: '{ApiUrl}/users' },
      });

      const config = RequestMap.getConfigById('GetUsers');
      expect(config).toEqual({ type: 'GET', url: '{ApiUrl}/users' });
    });

    it('should return null for an unregistered route', () => {
      const config = RequestMap.getConfigById('NonExistent');
      expect(config).toBeNull();
    });
  });

  describe('parseUrl', () => {
    it('should replace {ApiUrl} with the server URL', () => {
      const request = new Request({
        type: 'GetUsers',
        loginRequired: false,
        cacheTime: 0,
      });

      const url = RequestMap.parseUrl({
        serverUrl: 'http://localhost:3000',
        url: '{ApiUrl}/api/users',
        request,
      });

      expect(url).toBe('http://localhost:3000/api/users');
    });

    it('should replace URL placeholders with urlData values', () => {
      const request = new Request({
        type: 'GetUser',
        urlData: { userId: '123' },
        loginRequired: false,
        cacheTime: 0,
      });

      const url = RequestMap.parseUrl({
        serverUrl: 'http://localhost:3000',
        url: '{ApiUrl}/api/users/{userId}',
        request,
      });

      expect(url).toBe('http://localhost:3000/api/users/123');
    });

    it('should append apiExt when provided', () => {
      const request = new Request({
        type: 'GetUsers',
        loginRequired: false,
        cacheTime: 0,
      });

      const url = RequestMap.parseUrl({
        serverUrl: 'http://localhost:3000',
        url: '{ApiUrl}/api/users',
        request,
        apiExt: '?v=1',
      });

      expect(url).toBe('http://localhost:3000/api/users?v=1');
    });

    it('should replace URL placeholders with BrutContent values', () => {
      const request = new Request({
        type: 'GetUser',
        content: { userId: '456' },
        loginRequired: false,
        cacheTime: 0,
      });

      const url = RequestMap.parseUrl({
        serverUrl: 'http://localhost:3000',
        url: '{ApiUrl}/api/users/{userId}',
        request,
      });

      expect(url).toBe('http://localhost:3000/api/users/456');
    });
  });
});
