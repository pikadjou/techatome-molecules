import { InputWysiswyg } from './wysiswyg';

describe('InputWysiswyg', () => {
  it('should create with defaults', () => {
    const input = new InputWysiswyg({ key: 'content', label: 'Content' });
    expect(input).toBeTruthy();
    expect(input.key).toBe('content');
    expect(input.label).toBe('Content');
    expect(input.controlType).toBe('wysiswyg');
  });

  it('should accept a value array', () => {
    const blocks = [{ type: 'paragraph', data: { text: 'Hello' } }];
    const input = new InputWysiswyg({ key: 'content', value: blocks as any });
    expect(input.value).toEqual(blocks as any);
  });

  it('should parse stringValue into value', () => {
    const blocks = [{ type: 'paragraph', data: { text: 'Hello' } }];
    const stringValue = JSON.stringify(blocks);
    const input = new InputWysiswyg({ key: 'content', stringValue });
    expect(input.value).toEqual(blocks as any);
  });

  it('should handle invalid JSON in stringValue gracefully', () => {
    const input = new InputWysiswyg({ key: 'content', stringValue: 'not-json' });
    // Should not throw, value stays as default
    expect(input).toBeTruthy();
  });

  it('should not parse stringValue if not provided', () => {
    const input = new InputWysiswyg({ key: 'content' });
    expect(input.value).toBeNull();
  });

  it('should create formControl', () => {
    const input = new InputWysiswyg({ key: 'content' });
    input.createFormControl();
    expect(input.formControl).toBeTruthy();
  });
});
