export interface ThemeConfig {
  name: string;
  label: string;
  cssFile: string;
}

export const THEMES: ThemeConfig[] = [
  { name: 'bailo', label: 'Bailo (Light)', cssFile: 'assets/themes/bailo.css' },
  { name: 'subsidia', label: 'Subsidia (Dark)', cssFile: 'assets/themes/subsidia.css' },
];
