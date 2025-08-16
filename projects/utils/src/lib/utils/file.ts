import { Camera } from '@capacitor/camera';
import Compressor from 'compressorjs';

import { FileStructure } from '../types/files/temporary-files';
import { newGuid } from './identifier';

export const octetsToMo = (octets: number) => {
  return octets / (1024 * 1024);
};

export const extractExtension = (name: string): 'docx' | 'pdf' | 'xlsx' | string => {
  // Séparer le nom du fichier en parties en fonction du point (.)
  var parties = name.split('.');
  // Récupérer la dernière partie (qui est l'extension)
  var extension = parties[parties.length - 1];
  return extension;
};
export const getBase64FromFile = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.result) {
        resolve(reader.result.toString());
      }
      reject(null);
    };
    reader.readAsDataURL(file);
  });
};

export const getBlobImage = async (base64: string) => {
  const blob = await fetch(base64).then(res => res.blob());
  return await compressImage(blob);
};

export const compressImage = async (blob: Blob): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    new Compressor(blob, {
      quality: 0.4,
      convertSize: 1000000, // 1MB
      success: (blob: Blob) => {
        resolve(blob);
      },
      error: (error: Error) => {
        reject(error);
      },
    });
  });
};

export const downloadFile = (url: string) => {
  const imageRegex = /\.(jpg|jpeg|png|gif|bmp|webp|svg)$/i;

  if (imageRegex.test(url)) {
    window.open(url, '_blank');
  } else {
    window.open(
      'https://docs.google.com/a/google.com/viewer?url=' + url.replaceAll('&', '%26') + '&embedded=false',
      '_blank'
    );
  }
};

export const pickImages = async (): Promise<FileStructure[]> => {
  const gallery = await Camera.pickImages({
    quality: 60,
  });

  const pics = [];
  for (let pic of gallery.photos) {
    const file: FileStructure = {
      file: await pathToFile(pic),
      localUrl: pic.webPath,
    };

    if (!file.file) {
      continue;
    }
    pics.push(file);
  }

  return pics;
};

export const pathToFile = async (pic: { webPath?: string; format: string }): Promise<File | null> => {
  if (!pic.webPath) return null;

  const response = await fetch(pic.webPath);

  const blob = await compressImage(await response.blob());
  return new File([blob], newGuid(), { type: pic.format });
};

/**
 * Calculates the proper height of an image with a custom width, preserving the original aspect ratio.
 *
 * @param originalHeight
 * @param originalWidth
 * @param newWidth
 */
export const determineNewHeight = (originalHeight: number, originalWidth: number, newWidth: number) => {
  return (originalHeight / originalWidth) * newWidth;
};

/**
 * Calculates the proper width of an image with a custom height, preserving the original aspect ratio.
 *
 * @param originalWidth
 * @param originalHeight
 * @param newWidth
 */
export const determineNewWidth = (originalWidth: number, originalHeight: number, newHeight: number) => {
  return (originalWidth / originalHeight) * newHeight;
};

/**
 * Calculates the proper height of an image with a custom width, preserving the original aspect ratio.
 *
 * @param originalHeight
 * @param originalWidth
 * @param newWidth
 */
export const determineNewSize = (
  originalHeight: number,
  originalWidth: number,
  newWidth: number,
  newHeight: number
): { width: number; height: number } => {
  if (newHeight < originalHeight || newWidth < originalWidth) {
    var ratio = Math.min(newWidth / originalWidth, newHeight / originalHeight);

    return { width: originalWidth * ratio, height: originalHeight * ratio };
  }

  return { width: originalWidth, height: originalHeight };
};
