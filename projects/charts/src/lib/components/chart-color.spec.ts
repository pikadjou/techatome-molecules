import { ChartColors, ColorPalette } from './chart-color';

describe('ChartColors', () => {
  it('should define a complete color palette', () => {
    expect(ChartColors).toBeTruthy();
  });

  it('should have blue scale colors', () => {
    expect(ChartColors.blue900).toBe('#1f2245');
    expect(ChartColors.blue800).toBe('#172aa5');
    expect(ChartColors.blue700).toBe('#3c54e4');
    expect(ChartColors.blue600).toBe('#6b7cea');
    expect(ChartColors.blue500).toBe('#98a6ff');
    expect(ChartColors.blue400).toBe('#cbd3ff');
    expect(ChartColors.blue300).toBe('#e5e9ff');
    expect(ChartColors.blue200).toBe('#f2f4fe');
    expect(ChartColors.blue100).toBe('#f8f9ff');
    expect(ChartColors.blue50).toBe('#ffffff');
  });

  it('should have semantic colors', () => {
    expect(ChartColors.success).toBe('#4CAF50');
    expect(ChartColors.danger).toBe('#F44336');
    expect(ChartColors.warning).toBe('#FFC107');
    expect(ChartColors.info).toBe('#2196F3');
  });

  it('should have neutral colors', () => {
    expect(ChartColors.light).toBe('#F1F1F1');
    expect(ChartColors.dark).toBe('#212121');
    expect(ChartColors.white).toBe('#FFFFFF');
    expect(ChartColors.black).toBe('#000000');
  });

  it('should have all expected keys', () => {
    const expectedKeys: (keyof ColorPalette)[] = [
      'blue900', 'blue800', 'blue700', 'blue600', 'blue500',
      'blue400', 'blue300', 'blue200', 'blue100', 'blue50',
      'success', 'danger', 'warning', 'info',
      'light', 'dark', 'white', 'black',
    ];
    expectedKeys.forEach(key => {
      expect(ChartColors[key]).toBeDefined();
    });
  });
});
