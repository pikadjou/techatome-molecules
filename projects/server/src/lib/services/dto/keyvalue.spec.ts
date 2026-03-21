import { keyValueProps, KeyValue } from './keyvalue';

describe('KeyValue', () => {
  it('should have keyValueProps GraphSchema with key and value fields', () => {
    expect(keyValueProps.get('key')).toBe('key');
    expect(keyValueProps.get('value')).toBe('value');
  });
});
