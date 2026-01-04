import { TaSizes } from "@ta/styles";
import { Placeholder, PlaceholderConfig } from "../placeholder/config";
import * as i0 from "@angular/core";
export type LoaderSize = "sm" | "md" | "lg";
export declare class LoaderComponent {
    isLoading: import("@angular/core").InputSignal<boolean>;
    skeleton: import("@angular/core").InputSignal<PlaceholderConfig | null>;
    size: import("@angular/core").InputSignal<TaSizes>;
    text: import("@angular/core").InputSignal<string>;
    getPlaceholder(): Placeholder;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LoaderComponent, "ta-loader", never, { "isLoading": { "alias": "isLoading"; "required": false; "isSignal": true; }; "skeleton": { "alias": "skeleton"; "required": false; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; "text": { "alias": "text"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}
