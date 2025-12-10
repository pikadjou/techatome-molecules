import { FileType } from "../file-type";
export interface UploadFilePayloadInput {
    type?: FileType;
    description?: String;
    file: File;
}
