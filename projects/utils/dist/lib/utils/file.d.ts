import { FileStructure } from '../types/files/temporary-files';
export declare const octetsToMo: (octets: number) => number;
export declare const extractExtension: (name: string) => 'docx' | 'pdf' | 'xlsx' | string;
export declare const getBase64FromFile: (file: File) => Promise<string>;
export declare const getBlobImage: (base64: string) => Promise<Blob>;
export declare const compressImage: (blob: Blob) => Promise<Blob>;
export declare const downloadFile: (url: string) => void;
export declare const pickImages: () => Promise<FileStructure[]>;
export declare const pathToFile: (pic: {
    webPath?: string;
    format: string;
}) => Promise<File | null>;
/**
 * Calculates the proper height of an image with a custom width, preserving the original aspect ratio.
 *
 * @param originalHeight
 * @param originalWidth
 * @param newWidth
 */
export declare const determineNewHeight: (originalHeight: number, originalWidth: number, newWidth: number) => number;
/**
 * Calculates the proper width of an image with a custom height, preserving the original aspect ratio.
 *
 * @param originalWidth
 * @param originalHeight
 * @param newWidth
 */
export declare const determineNewWidth: (originalWidth: number, originalHeight: number, newHeight: number) => number;
/**
 * Calculates the proper height of an image with a custom width, preserving the original aspect ratio.
 *
 * @param originalHeight
 * @param originalWidth
 * @param newWidth
 */
export declare const determineNewSize: (originalHeight: number, originalWidth: number, newWidth: number, newHeight: number) => {
    width: number;
    height: number;
};
