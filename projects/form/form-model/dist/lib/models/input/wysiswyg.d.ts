import { EditorToolType, WysiswgBlockData } from "@ta/wysiswyg";
import { IInputBase, InputBase } from "./base";
export interface IWysiswyg extends IInputBase<WysiswgBlockData[]> {
    stringValue?: string | null;
    enabledTools?: EditorToolType[];
    placeholder?: string;
}
export declare class InputWysiswyg extends InputBase<WysiswgBlockData[] | null> {
    controlType: string;
    enabledTools: EditorToolType[];
    placeholder: string;
    constructor(options?: IWysiswyg);
}
