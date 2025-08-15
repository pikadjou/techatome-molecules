import { TaIconType } from './types';

/**
 * Check if an icon is a font icon (Material Icons, etc.)
 */
export function isFontIcon(icon: TaIconType): boolean {
  // Font icons are typically strings without file extensions
  return typeof icon === 'string' && !icon.includes('.') && !icon.startsWith('/') && !icon.startsWith('assets/');
}

/**
 * Check if an icon is a local icon (SVG, PNG, etc.)
 */
export function isLocalIcon(icon: TaIconType): boolean {
  return typeof icon === 'string' && (
    icon.includes('.') || 
    icon.startsWith('/') || 
    icon.startsWith('assets/')
  );
}

/**
 * Get the font icon name, returns the icon name for Material Icons
 */
export function getFontIcon(icon: TaIconType): string {
  if (isFontIcon(icon)) {
    return icon;
  }
  return 'help'; // default fallback icon
}