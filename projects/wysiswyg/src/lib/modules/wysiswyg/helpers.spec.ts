import { convertBlocksToHtml } from './helpers';

describe('convertBlocksToHtml', () => {
  it('should convert paragraph blocks to HTML', () => {
    const blocks = [
      { type: 'paragraph', data: { text: 'Hello world' } },
    ] as any[];

    const result = convertBlocksToHtml(blocks);
    expect(result).toContain('Hello world');
  });

  it('should convert multiple blocks and join with space', () => {
    const blocks = [
      { type: 'paragraph', data: { text: 'First' } },
      { type: 'paragraph', data: { text: 'Second' } },
    ] as any[];

    const result = convertBlocksToHtml(blocks);
    expect(result).toContain('First');
    expect(result).toContain('Second');
  });

  it('should handle empty blocks array', () => {
    const result = convertBlocksToHtml([]);
    expect(result).toBe('');
  });

  it('should handle header blocks', () => {
    const blocks = [
      { type: 'header', data: { text: 'Title', level: 2 } },
    ] as any[];

    const result = convertBlocksToHtml(blocks);
    expect(result).toContain('Title');
  });
});
