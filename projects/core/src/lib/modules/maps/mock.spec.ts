import { markers } from './mock';

describe('markers (mock data)', () => {
  it('should be an array', () => {
    expect(Array.isArray(markers)).toBeTrue();
  });

  it('should contain marker objects with position and title', () => {
    markers.forEach(marker => {
      expect(marker.position).toBeDefined();
      expect(marker.position.lat).toBeDefined();
      expect(marker.position.lng).toBeDefined();
      expect(typeof marker.title).toBe('string');
    });
  });

  it('should have numeric lat and lng values', () => {
    markers.forEach(marker => {
      expect(typeof marker.position.lat).toBe('number');
      expect(typeof marker.position.lng).toBe('number');
    });
  });

  it('should have non-empty title values', () => {
    markers.forEach(marker => {
      expect(marker.title.length).toBeGreaterThan(0);
    });
  });

  it('should contain Bruxelles as the first marker', () => {
    expect(markers[0].title).toBe('Bruxelles');
  });

  it('should have reasonable latitude values for Belgium', () => {
    markers.forEach(marker => {
      expect(marker.position.lat).toBeGreaterThanOrEqual(49);
      expect(marker.position.lat).toBeLessThanOrEqual(52);
    });
  });

  it('should have reasonable longitude values for Belgium', () => {
    markers.forEach(marker => {
      expect(marker.position.lng).toBeGreaterThanOrEqual(2);
      expect(marker.position.lng).toBeLessThanOrEqual(7);
    });
  });
});
