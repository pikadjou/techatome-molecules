export interface ColorPalette {
  blue900: string;
  blue800: string;
  blue700: string;
  blue600: string;
  blue500: string;
  blue400: string;
  blue300: string;
  blue200: string;
  blue100: string;
  blue50: string;
  success: string;
  danger: string;
  warning: string;
  info: string;
  light: string;
  dark: string;
  white: string;
  black: string;
}

export const ChartColors: ColorPalette = {
  blue900: "#1f2245",
  blue800: "#172aa5",
  blue700: "#3c54e4",
  blue600: "#6b7cea",
  blue500: "#98a6ff",
  blue400: "#cbd3ff",
  blue300: "#e5e9ff",
  blue200: "#f2f4fe",
  blue100: "#f8f9ff",
  blue50: "#ffffff",
  success: "#4CAF50",
  danger: "#F44336",
  warning: "#FFC107",
  info: "#2196F3",
  light: "#F1F1F1",
  dark: "#212121",
  white: "#FFFFFF",
  black: "#000000",
};

export type ChartColorKey = keyof typeof ChartColors;
