import { TaSizes } from '@ta/styles';
import { Placeholder, PlaceholderConfig } from '../placeholder/config';
import * as i0 from "@angular/core";
export type LoaderSize = 'sm' | 'md' | 'lg';
export declare class LoaderComponent {
    isLoading: boolean;
    skeleton: PlaceholderConfig | null;
    size: TaSizes;
    text: string;
    constructor();
    getPlaceholder(): Placeholder;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LoaderComponent, "ta-loader", never, { "isLoading": { "alias": "isLoading"; "required": false; }; "skeleton": { "alias": "skeleton"; "required": false; }; "size": { "alias": "size"; "required": false; }; "text": { "alias": "text"; "required": false; }; }, {}, never, ["*"], true, never>;
}
