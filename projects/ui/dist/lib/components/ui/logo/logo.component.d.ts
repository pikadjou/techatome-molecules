import * as i0 from "@angular/core";
export declare class LogoComponent {
    /**
     * If set, logo white or black version will be taken
     */
    color?: 'white' | 'black';
    /**
     * If set, logo oneline version will be taken
     */
    type?: 'oneline';
    /**
     * Set the logo width in %
     */
    widthPercentage?: number;
    get imageWidth(): string;
    constructor();
    getImagePath(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<LogoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LogoComponent, "ta-logo", never, { "color": { "alias": "color"; "required": false; }; "type": { "alias": "type"; "required": false; }; "widthPercentage": { "alias": "widthPercentage"; "required": false; }; }, {}, never, never, true, never>;
}
