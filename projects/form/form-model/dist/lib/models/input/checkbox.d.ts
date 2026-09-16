import { IInputBase, InputBase } from "./base";
export interface IInputCheckBox extends IInputBase<boolean> {
    toggle?: boolean;
    /**
     * Clés de traduction des deux états d'un interrupteur. Sans elles, la
     * position du curseur est la seule indication ; avec, l'état se lit. À poser
     * quand se tromper coûte cher — ce qui est publié, ce qui est notifié.
     */
    onLabel?: string;
    offLabel?: string;
}
export declare class InputCheckBox extends InputBase<boolean> {
    controlType: string;
    onLabel?: string;
    offLabel?: string;
    constructor(options?: IInputCheckBox);
}
