import { translationProps, Translation } from './translation';

describe('Translation DTO', () => {
  it('should define Translation interface properties', () => {
    const translation: Translation = {
      id: '1',
      key: 'hello',
      value: 'Hello',
      feature: { id: '1', key: 'common' } as any,
    } as Translation;
    expect(translation.key).toBe('hello');
    expect(translation.value).toBe('Hello');
    expect(translation.feature?.key).toBe('common');
  });

  it('should allow feature to be optional', () => {
    const translation: Translation = {
      id: '2',
      key: 'world',
      value: 'World',
    } as Translation;
    expect(translation.feature).toBeUndefined();
  });

  describe('translationProps', () => {
    it('should be defined', () => {
      expect(translationProps).toBeTruthy();
    });

    it('should contain key property', () => {
      const keyProp = translationProps.get('key');
      expect(keyProp).toBeTruthy();
    });

    it('should contain value property', () => {
      const valueProp = translationProps.get('value');
      expect(valueProp).toBeTruthy();
    });

    it('should contain feature property', () => {
      const featureProp = translationProps.get('feature');
      expect(featureProp).toBeTruthy();
    });
  });
});
