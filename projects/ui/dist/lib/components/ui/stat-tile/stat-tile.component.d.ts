import * as i0 from "@angular/core";
/** Teinte de la pastille d'icône. */
export type StatTileTone = 'brand' | 'accent' | 'success' | 'warning' | 'alert' | 'neutral';
/** `value-first` : chiffre en avant ; `label-first` : libellé en capitales au-dessus. */
export type StatTileLayout = 'value-first' | 'label-first';
export declare class StatTileComponent {
    icon: import("@angular/core").InputSignal<string | undefined>;
    label: import("@angular/core").InputSignal<string>;
    layout: import("@angular/core").InputSignal<StatTileLayout>;
    tone: import("@angular/core").InputSignal<StatTileTone>;
    value: import("@angular/core").InputSignal<string | number | null | undefined>;
    getClasses(): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<StatTileComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StatTileComponent, "ta-stat-tile", never, { "icon": { "alias": "icon"; "required": false; "isSignal": true; }; "label": { "alias": "label"; "required": false; "isSignal": true; }; "layout": { "alias": "layout"; "required": false; "isSignal": true; }; "tone": { "alias": "tone"; "required": false; "isSignal": true; }; "value": { "alias": "value"; "required": false; "isSignal": true; }; }, {}, never, ["*", "*"], true, never>;
}
