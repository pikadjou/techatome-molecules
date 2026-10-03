import * as i0 from "@angular/core";
export interface TabBarItem {
    /** Identifiant remonté par `(select)`. */
    key: string;
    /** Clé de traduction, ou texte déjà traduit. */
    label: string;
    icon?: string;
    /** Compteur en pastille ; `null` le masque. */
    count?: number | string | null;
    disabled?: boolean;
}
/** `underline` : onglets de section ; `pill` : filtres capsulés. */
export type TabBarVariant = 'underline' | 'pill';
export declare class TabBarComponent {
    active: import("@angular/core").InputSignal<string | null>;
    items: import("@angular/core").InputSignal<TabBarItem[]>;
    variant: import("@angular/core").InputSignal<TabBarVariant>;
    select: import("@angular/core").OutputEmitterRef<string>;
    hasCount(item: TabBarItem): boolean;
    isActive(item: TabBarItem): boolean;
    trigger(item: TabBarItem): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabBarComponent, "ta-tab-bar", never, { "active": { "alias": "active"; "required": false; "isSignal": true; }; "items": { "alias": "items"; "required": true; "isSignal": true; }; "variant": { "alias": "variant"; "required": false; "isSignal": true; }; }, { "select": "select"; }, never, never, true, never>;
}
