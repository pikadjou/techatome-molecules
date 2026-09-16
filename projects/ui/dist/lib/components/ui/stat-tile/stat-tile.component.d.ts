import * as i0 from "@angular/core";
/** Teinte de la pastille d'icône. */
export type StatTileTone = 'brand' | 'accent' | 'success' | 'warning' | 'alert' | 'neutral';
/**
 * `value-first` met le chiffre en avant (compteur de tête de liste).
 * `label-first` met le libellé en capitales au-dessus (fiche de détail, où la
 * valeur est un texte et non un nombre).
 */
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
