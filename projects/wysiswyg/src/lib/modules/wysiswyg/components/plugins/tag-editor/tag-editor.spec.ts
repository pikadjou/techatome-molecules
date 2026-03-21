import { TagTool } from './tag-editor';

describe('TagTool', () => {
  let tool: TagTool;
  let mockApi: any;

  beforeEach(() => {
    mockApi = {
      listeners: {
        on: jasmine.createSpy('on'),
        off: jasmine.createSpy('off'),
      },
    };

    tool = new TagTool({
      api: mockApi,
      config: {
        users: [
          { id: '1', name: 'Alice' },
          { id: '2', name: 'Bob' },
        ],
      },
    } as any);
  });

  it('should create', () => {
    expect(tool).toBeTruthy();
  });

  it('should be an inline tool', () => {
    expect(TagTool.isInline).toBe(true);
  });

  it('should have a keyboard shortcut', () => {
    expect(TagTool.shortcut).toBe('CTRL+A');
  });

  it('should define sanitize rules for span', () => {
    expect(TagTool.sanitize).toBeDefined();
    expect(TagTool.sanitize.span).toBeDefined();
    expect(TagTool.sanitize.span.class).toBe(true);
    expect(TagTool.sanitize.span['data-user-id']).toBe(true);
  });

  it('should store users from config', () => {
    expect(tool.users.length).toBe(2);
    expect(tool.users[0].name).toBe('Alice');
    expect(tool.users[1].name).toBe('Bob');
  });

  it('should default to empty users when no config', () => {
    const toolNoConfig = new TagTool({
      api: mockApi,
      config: {},
    } as any);
    expect(toolNoConfig.users).toEqual([]);
  });

  it('should create dropdown element', () => {
    expect(tool.dropdown).toBeTruthy();
    expect(tool.dropdown instanceof HTMLDivElement).toBe(true);
  });

  it('should create template tag span', () => {
    expect(tool.templateTagSpan).toBeTruthy();
    expect(tool.templateTagSpan.classList.contains('tag-user')).toBe(true);
    expect(tool.templateTagSpan.textContent).toBe('@');
  });

  it('render should return menu config', () => {
    const result = tool.render();
    expect(result).toBeDefined();
    expect(result.icon).toBe('@');
    expect(result.label).toBe('Tag');
    expect(result.onActivate).toBeDefined();
  });

  it('checkState should return false', () => {
    expect(tool.checkState()).toBe(false);
  });

  it('surround should do nothing with null range', () => {
    expect(() => tool.surround(null)).not.toThrow();
  });

  it('handleKeydown should do nothing with no event', () => {
    expect(() => tool.handleKeydown()).not.toThrow();
  });

  it('handleKeydown should do nothing with non-keyboard event', () => {
    const mouseEvent = new MouseEvent('click');
    expect(() => tool.handleKeydown(mouseEvent)).not.toThrow();
  });

  it('handleKeydown should prevent default on @ key', () => {
    const event = new KeyboardEvent('keydown', { key: '@' });
    spyOn(event, 'preventDefault');
    tool.handleKeydown(event);
    expect(event.preventDefault).toHaveBeenCalled();
  });

  it('handleTyping should do nothing when no current tag span', () => {
    expect(() => tool.handleTyping()).not.toThrow();
  });

  it('handleOutsideClick should do nothing with no event', () => {
    expect(() => tool.handleOutsideClick()).not.toThrow();
  });

  it('handleOutsideClick should do nothing when dropdown is hidden', () => {
    tool.dropdown.hidden = true;
    const event = new MouseEvent('click');
    expect(() => tool.handleOutsideClick(event)).not.toThrow();
  });
});
