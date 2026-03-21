import {
  RichParagraphLink,
  RichParagraphText,
  RichStructure,
  RichText,
  RichTextChildren,
} from './rich-text';

describe('RichText types', () => {
  it('should create a valid RichParagraphText', () => {
    const text: RichParagraphText = {
      bold: true,
      underline: false,
      italic: true,
      text: 'Hello',
      type: 'text',
    };
    expect(text.type).toBe('text');
    expect(text.bold).toBe(true);
    expect(text.text).toBe('Hello');
  });

  it('should create a valid RichParagraphLink', () => {
    const link: RichParagraphLink = {
      children: [
        { bold: false, underline: false, italic: false, text: 'Click here', type: 'text' },
      ],
      type: 'link',
      url: 'https://example.com',
    };
    expect(link.type).toBe('link');
    expect(link.url).toBe('https://example.com');
    expect(link.children.length).toBe(1);
  });

  it('should create a valid RichStructure for paragraph', () => {
    const structure: RichStructure = {
      type: 'paragraph',
      level: 1,
      children: [
        { bold: false, underline: false, italic: false, text: 'Test', type: 'text' },
      ],
    };
    expect(structure.type).toBe('paragraph');
    expect(structure.children.length).toBe(1);
  });

  it('should create a valid RichStructure for heading', () => {
    const structure: RichStructure = {
      type: 'heading',
      level: 2,
      children: [],
    };
    expect(structure.type).toBe('heading');
    expect(structure.level).toBe(2);
  });

  it('should create a valid RichText array', () => {
    const richText: RichText = [
      {
        type: 'paragraph',
        level: 1,
        children: [
          { bold: false, underline: false, italic: false, text: 'Content', type: 'text' },
        ],
      },
    ];
    expect(richText.length).toBe(1);
  });
});
