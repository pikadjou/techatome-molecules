import { TemplateRef } from '@angular/core';

import { MenuPanel } from './panel';

describe('MenuPanel', () => {
  it('should create with a template', () => {
    const mockTemplate = {} as TemplateRef<any>;
    const panel = new MenuPanel({
      template: mockTemplate,
      key: 'panel1',
      label: 'Panel',
    });
    expect(panel.template).toBe(mockTemplate);
    expect(panel.key).toBe('panel1');
    expect(panel.label).toBe('Panel');
  });

  it('should have isMenuPanel return true', () => {
    const mockTemplate = {} as TemplateRef<any>;
    const panel = new MenuPanel({ template: mockTemplate });
    expect(panel.isMenuPanel).toBe(true);
  });

  it('should inherit MenuIcon properties', () => {
    const mockTemplate = {} as TemplateRef<any>;
    const panel = new MenuPanel({
      template: mockTemplate,
      icon: 'settings',
      key: 'settings-panel',
      label: 'Settings Panel',
      order: 5,
    });
    expect(panel.icon).toBe('settings');
    expect(panel.key).toBe('settings-panel');
    expect(panel.order).toBe(5);
  });
});
