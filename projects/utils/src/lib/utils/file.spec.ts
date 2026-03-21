import {
  octetsToMo,
  extractExtension,
  determineNewHeight,
  determineNewWidth,
  determineNewSize,
} from './file';

describe('file utils', () => {
  describe('octetsToMo', () => {
    it('should convert bytes to megabytes', () => {
      expect(octetsToMo(1048576)).toBe(1);
    });

    it('should return 0 for 0 bytes', () => {
      expect(octetsToMo(0)).toBe(0);
    });

    it('should handle fractional megabytes', () => {
      expect(octetsToMo(524288)).toBe(0.5);
    });
  });

  describe('extractExtension', () => {
    it('should extract pdf extension', () => {
      expect(extractExtension('document.pdf')).toBe('pdf');
    });

    it('should extract docx extension', () => {
      expect(extractExtension('file.docx')).toBe('docx');
    });

    it('should extract xlsx extension', () => {
      expect(extractExtension('spreadsheet.xlsx')).toBe('xlsx');
    });

    it('should handle filenames with multiple dots', () => {
      expect(extractExtension('my.file.name.txt')).toBe('txt');
    });
  });

  describe('determineNewHeight', () => {
    it('should calculate new height preserving aspect ratio', () => {
      // original: 200x400, new width: 200 => new height: 100
      expect(determineNewHeight(200, 400, 200)).toBe(100);
    });

    it('should return original height when new width equals original', () => {
      expect(determineNewHeight(300, 400, 400)).toBe(300);
    });
  });

  describe('determineNewWidth', () => {
    it('should calculate new width preserving aspect ratio', () => {
      // original: 400x200, new height: 100 => new width: 200
      expect(determineNewWidth(400, 200, 100)).toBe(200);
    });

    it('should return original width when new height equals original', () => {
      expect(determineNewWidth(400, 200, 200)).toBe(400);
    });
  });

  describe('determineNewSize', () => {
    it('should scale down when new dimensions are smaller', () => {
      const result = determineNewSize(400, 200, 100, 200);
      expect(result.width).toBeLessThanOrEqual(100);
      expect(result.height).toBeLessThanOrEqual(200);
    });

    it('should return original dimensions when new dimensions are larger', () => {
      const result = determineNewSize(100, 100, 200, 200);
      expect(result).toEqual({ width: 100, height: 100 });
    });

    it('should preserve aspect ratio when scaling down', () => {
      const result = determineNewSize(400, 200, 100, 200);
      const originalRatio = 200 / 400;
      const newRatio = result.width / result.height;
      expect(newRatio).toBeCloseTo(originalRatio, 5);
    });
  });
});
