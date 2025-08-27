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
export declare const ChartColors: ColorPalette;
export type ChartColorKey = keyof typeof ChartColors;
