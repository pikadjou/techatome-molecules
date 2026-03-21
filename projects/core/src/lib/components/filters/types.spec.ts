import { ActiveFilterTag } from './types';

describe('ActiveFilterTag', () => {
  it('should create an ActiveFilterTag object', () => {
    const tag: ActiveFilterTag = { id: '1', name: 'Status' };

    expect(tag.id).toBe('1');
    expect(tag.name).toBe('Status');
  });

  it('should allow empty string values', () => {
    const tag: ActiveFilterTag = { id: '', name: '' };

    expect(tag.id).toBe('');
    expect(tag.name).toBe('');
  });
});
