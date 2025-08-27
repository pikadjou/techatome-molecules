import { WysiswgBlockData } from '@ta/wysiswyg';
import { IInputBase, InputBase } from './base';
export interface IWysiswyg extends IInputBase<WysiswgBlockData[]> {
}
export declare class InputWysiswyg extends InputBase<WysiswgBlockData[] | null> {
    controlType: string;
    constructor(options?: IWysiswyg);
}
