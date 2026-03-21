import { EFileExtension } from '../types/files/file-extension';
import {
  getFileExtension,
  getFullFileNameFromUrl,
  trigram,
  capitalizeFirstLetter,
  convertToNumber,
  isURL,
} from './string';

describe('string utils', () => {
  describe('getFileExtension', () => {
    it('should return PDF for .pdf files', () => {
      expect(getFileExtension('document.pdf')).toBe(EFileExtension.PDF);
    });

    it('should return Word for .docx files', () => {
      expect(getFileExtension('document.docx')).toBe(EFileExtension.Word);
    });

    it('should return Excel for .xlsx files', () => {
      expect(getFileExtension('spreadsheet.xlsx')).toBe(EFileExtension.Excel);
    });

    it('should return Excel for .xls files', () => {
      expect(getFileExtension('spreadsheet.xls')).toBe(EFileExtension.Excel);
    });

    it('should return Image for .jpg files', () => {
      expect(getFileExtension('photo.jpg')).toBe(EFileExtension.Image);
    });

    it('should return Image for .jpeg files', () => {
      expect(getFileExtension('photo.jpeg')).toBe(EFileExtension.Image);
    });

    it('should return Image for .png files', () => {
      expect(getFileExtension('photo.png')).toBe(EFileExtension.Image);
    });

    it('should return Unknown for unrecognized extensions', () => {
      expect(getFileExtension('file.txt')).toBe(EFileExtension.Unknown);
    });

    it('should handle file paths with directories', () => {
      expect(getFileExtension('/path/to/document.pdf')).toBe(EFileExtension.PDF);
    });

    it('should handle URLs', () => {
      expect(getFileExtension('https://example.com/files/doc.pdf')).toBe(EFileExtension.PDF);
    });
  });

  describe('getFullFileNameFromUrl', () => {
    it('should extract filename from a URL', () => {
      expect(getFullFileNameFromUrl('https://example.com/files/document.pdf')).toBe('document.pdf');
    });

    it('should extract filename from a path', () => {
      expect(getFullFileNameFromUrl('/path/to/file.txt')).toBe('file.txt');
    });

    it('should return null for empty string', () => {
      expect(getFullFileNameFromUrl('')).toBeNull();
    });
  });

  describe('trigram', () => {
    it('should return trigram of a name', () => {
      expect(trigram('Alice')).toBe('ALC');
    });

    it('should return empty string for null', () => {
      expect(trigram(null)).toBe('');
    });

    it('should return empty string for undefined', () => {
      expect(trigram(undefined)).toBe('');
    });

    it('should return the name itself if shorter than 4 characters', () => {
      expect(trigram('Bob')).toBe('Bob');
    });

    it('should return uppercase trigram', () => {
      expect(trigram('david')).toBe('AVI');
    });
  });

  describe('capitalizeFirstLetter', () => {
    it('should capitalize the first letter', () => {
      expect(capitalizeFirstLetter('hello')).toBe('Hello');
    });

    it('should handle already capitalized string', () => {
      expect(capitalizeFirstLetter('Hello')).toBe('Hello');
    });

    it('should return empty string for empty input', () => {
      expect(capitalizeFirstLetter('')).toBe('');
    });

    it('should handle single character', () => {
      expect(capitalizeFirstLetter('a')).toBe('A');
    });
  });

  describe('convertToNumber', () => {
    it('should convert string array to number array', () => {
      expect(convertToNumber(['1', '2', '3'])).toEqual([1, 2, 3]);
    });

    it('should return empty array for undefined', () => {
      expect(convertToNumber(undefined)).toEqual([]);
    });

    it('should handle empty array', () => {
      expect(convertToNumber([])).toEqual([]);
    });

    it('should handle non-numeric strings as NaN', () => {
      const result = convertToNumber(['abc']);
      expect(result.length).toBe(1);
      expect(isNaN(result[0])).toBe(true);
    });
  });

  describe('isURL', () => {
    it('should return true for http URLs', () => {
      expect(isURL('http://example.com')).toBe(true);
    });

    it('should return true for https URLs', () => {
      expect(isURL('https://example.com')).toBe(true);
    });

    it('should return false for non-URL strings', () => {
      expect(isURL('not a url')).toBe(false);
    });

    it('should return false for partial URLs', () => {
      expect(isURL('example.com')).toBe(false);
    });

    it('should return false for empty string', () => {
      expect(isURL('')).toBe(false);
    });
  });
});
