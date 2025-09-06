import * as i0 from "@angular/core";
export declare enum CriticityStatus {
    Unknown = 0,
    P1 = 1,
    P2 = 2,
    P3 = 3
}
export declare const criticityLabel: (criticity: CriticityStatus) => string;
export declare class CriticityComponent {
    criticity: number | CriticityStatus;
    constructor();
    label(): string;
    type(): "success" | "warning" | "danger" | "primary";
    static ɵfac: i0.ɵɵFactoryDeclaration<CriticityComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CriticityComponent, "ta-criticity", never, { "criticity": { "alias": "criticity"; "required": false; }; }, {}, never, never, true, never>;
}
