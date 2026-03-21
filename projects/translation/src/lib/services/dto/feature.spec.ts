import { featureProps, Feature } from './feature';

describe('Feature DTO', () => {
  it('should define Feature interface properties', () => {
    const feature: Feature = {
      id: '1',
      key: 'test-feature',
    } as Feature;
    expect(feature.key).toBe('test-feature');
    expect(feature.id).toBe('1');
  });

  describe('featureProps', () => {
    it('should be defined', () => {
      expect(featureProps).toBeTruthy();
    });

    it('should contain key property', () => {
      const keyProp = featureProps.get('key');
      expect(keyProp).toBeTruthy();
    });
  });
});
