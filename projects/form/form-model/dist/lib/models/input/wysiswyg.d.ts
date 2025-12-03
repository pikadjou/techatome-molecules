import { WysiswgBlockData } from '@ta/wysiswyg';
import { IInputBase, InputBase } from './base';
export interface IWysiswyg extends IInputBase<WysiswgBlockData[]> {
    stringValue?: string | null;
}
export declare class InputWysiswyg extends InputBase<WysiswgBlockData[] | null> {
    controlType: string;
    constructor(options?: IWysiswyg);
}
