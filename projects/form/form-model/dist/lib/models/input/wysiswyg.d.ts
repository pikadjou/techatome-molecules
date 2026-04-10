import { EditorToolType, WysiswgBlockData } from "@ta/wysiswyg";
import { IInputBase, InputBase } from "./base";
export interface IWysiswyg extends IInputBase<WysiswgBlockData[]> {
    stringValue?: string | null;
    enabledTools?: EditorToolType[];
}
export declare class InputWysiswyg extends InputBase<WysiswgBlockData[] | null> {
    controlType: string;
    enabledTools: EditorToolType[];
    constructor(options?: IWysiswyg);
}
