import { BottomSheetData } from './bottom-sheet-data';

describe('BottomSheetData', () => {
  it('should allow creation of a conforming object', () => {
    const data: BottomSheetData = {
      label: 'Test',
      action: () => {},
    };
    expect(data.label).toBe('Test');
    expect(data.action).toBeDefined();
  });

  it('should allow optional properties', () => {
    const data: BottomSheetData = {
      label: 'Test',
      icon: 'home',
      subtitle: 'Subtitle',
      secure: true,
      action: () => {},
    };
    expect(data.icon).toBe('home');
    expect(data.subtitle).toBe('Subtitle');
    expect(data.secure).toBe(true);
  });

  it('should allow action to accept data parameter', () => {
    let receivedData: any;
    const data: BottomSheetData = {
      label: 'Test',
      action: (d?: any) => {
        receivedData = d;
      },
    };
    data.action('hello');
    expect(receivedData).toBe('hello');
  });
});
