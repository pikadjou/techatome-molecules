import { CameraSource } from "@capacitor/camera";
import { FileStructure } from "../types/files/temporary-files";
export declare const octetsToMo: (octets: number) => number;
export declare const extractExtension: (name: string) => "docx" | "pdf" | "xlsx" | string;
export declare const getBase64FromFile: (file: File) => Promise<string>;
export declare const getBlobImage: (base64: string) => Promise<Blob>;
export declare const compressImage: (blob: Blob) => Promise<Blob>;
export declare const downloadFile: (url: string, filename?: string) => void;
/**
 * Indique si l'appareil courant peut prendre une photo.
 *
 * - Toujours `true` sur une plateforme native (iOS/Android via Capacitor).
 * - Sur le web, `true` uniquement si une caméra (videoinput) est détectée.
 */
export declare const canTakePhoto: () => Promise<boolean>;
export declare const pickImages: () => Promise<FileStructure[]>;
/**
 * Capture une photo via l'appareil. Par défaut, la source `Prompt` laisse
 * l'utilisateur choisir entre l'appareil photo et la galerie ; passer
 * `CameraSource.Camera` pour forcer la prise de vue en direct.
 */
export declare const takePhoto: (source?: CameraSource) => Promise<FileStructure | null>;
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
