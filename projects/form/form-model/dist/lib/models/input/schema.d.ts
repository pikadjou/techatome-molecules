import { Picture } from '@ta/services';
import { FileStructure } from '@ta/utils';
import { IInputBase, InputBase } from './base';
export interface IInputSchema extends IInputBase<string> {
    update?: (data: FileStructure[]) => Promise<Picture[]>;
}
export declare class InputSchema extends InputBase<string> {
    update: ((data: FileStructure[]) => Promise<Picture[]>) | null;
    constructor(options?: IInputSchema);
}
