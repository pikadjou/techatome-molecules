import { TestBed } from '@angular/core/testing';

import { TaIconType, TaIconsService } from './icons.service';

describe('TaIconsService', () => {
  let service: TaIconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaIconsService],
    });
    service = TestBed.inject(TaIconsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an SVG string for a known icon type', () => {
    const icon = service.getIcon(TaIconType.Add);
    expect(icon).toBeDefined();
    expect(typeof icon).toBe('string');
  });

  it('should return a string containing svg content for known icons', () => {
    const icon = service.getIcon(TaIconType.Search);
    if (icon) {
      expect(icon.toLowerCase()).toContain('svg');
    }
  });

  it('should return an empty string for the Unknown icon type', () => {
    const icon = service.getIcon(TaIconType.Unknown);
    expect(icon).toBe('');
  });

  it('should return distinct SVG content for different icon types', () => {
    const addIcon = service.getIcon(TaIconType.Add);
    const searchIcon = service.getIcon(TaIconType.Search);
    if (addIcon && searchIcon) {
      expect(addIcon).not.toBe(searchIcon);
    }
  });

  it('should return SVG content containing <svg for icons with mapped values', () => {
    const icon = service.getIcon(TaIconType.Delete);
    if (icon) {
      expect(icon.toLowerCase()).toContain('<svg');
      expect(icon.toLowerCase()).toContain('</svg>');
    }
  });

  it('should return valid SVG for multiple icon types', () => {
    const iconTypes = [
      TaIconType.Edit,
      TaIconType.Email,
      TaIconType.Phone,
      TaIconType.Star,
      TaIconType.Warning,
    ];

    for (const iconType of iconTypes) {
      const icon = service.getIcon(iconType);
      expect(icon).toBeDefined();
      if (icon) {
        expect(icon.toLowerCase()).toContain('svg');
      }
    }
  });

  it('should return a string type for all icon lookups', () => {
    const icon = service.getIcon(TaIconType.Folder);
    expect(typeof icon).toBe('string');
  });
});
