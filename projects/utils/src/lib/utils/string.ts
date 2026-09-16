import { EFileExtension } from '../types/files/file-extension';

export const getFileExtension = (filePath: string): EFileExtension => {
  // Ignore la query string et l'ancre (`photo.jpg?token=…`).
  const name = getFullFileNameFromUrl(filePath)?.split(/[?#]/)[0] ?? null;
  const extension: string | null = name?.split('.').pop()?.toLowerCase() || null;

  switch (extension) {
    case 'pdf':
      return EFileExtension.PDF;
    case 'doc':
    case 'docx':
      return EFileExtension.Word;
    case 'xls':
    case 'xlsx':
      return EFileExtension.Excel;
    case 'jpg':
    case 'jpeg':
    case 'png':
    case 'gif':
    case 'webp':
    case 'avif':
    case 'bmp':
    case 'svg':
    case 'heic':
      return EFileExtension.Image;
  }

  return EFileExtension.Unknown;
};

export const getFullFileNameFromUrl = (url: string): string | null => {
  return url.split('/').pop() || null;
};

export const trigram = (name: string | null | undefined) => {
  if (!name) {
    return '';
  }
  if (name.length < 4) {
    return name;
  }

  return (name[0] + name[2] + name[3]).toUpperCase();
};

export const capitalizeFirstLetter = (value: string): string => {
  if (value.length === 0) return value;
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export const convertToNumber = (values?: string[]): number[] => values?.map(value => Number(value)) || [];

export const isURL = (str: string) => {
  // Expression régulière pour vérifier une URL
  const pattern = /^https?:\/\//; // Fragment d'URL

  return !!pattern.test(str);
};
