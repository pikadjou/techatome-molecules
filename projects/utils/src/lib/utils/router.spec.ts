import { Router } from '@angular/router';

import { getFirstSegmentRouteName } from './router';

describe('router utils', () => {
  describe('getFirstSegmentRouteName', () => {
    it('should return the first segment of the URL', () => {
      const mockRouter = { url: '/dashboard/settings' } as Router;
      expect(getFirstSegmentRouteName(mockRouter)).toBe('dashboard');
    });

    it('should return empty string for root URL', () => {
      const mockRouter = { url: '/' } as Router;
      expect(getFirstSegmentRouteName(mockRouter)).toBe('');
    });

    it('should return the segment for a simple URL', () => {
      const mockRouter = { url: '/home' } as Router;
      expect(getFirstSegmentRouteName(mockRouter)).toBe('home');
    });
  });
});
