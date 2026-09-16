import { TemplateRef } from "@angular/core";
import { TaBaseComponent } from "@ta/utils";
import { Menu } from "../../models/menu/menu";
import * as i0 from "@angular/core";
/**
 * `surface` : bandeau blanc posé sur le fond de page.
 * `brand` : bandeau plein de la couleur de marque, la navigation passe en
 * inversé. C'est la seule variante où le bandeau touche les bords de l'écran.
 */
export type MainMenuTone = "surface" | "brand";
export declare class MainMenuComponent extends TaBaseComponent {
    menuMain: import("@angular/core").InputSignal<Menu<import("@ta/menu").MenuBase>>;
    tone: import("@angular/core").InputSignal<MainMenuTone>;
    /**
     * Verrou de marque : un projet peut remplacer le logo par son propre bloc
     * (marque + signature), sans redéfinir tout le bandeau.
     */
    logoTemplate: import("@angular/core").InputSignal<TemplateRef<any> | undefined>;
    menuUser: import("@angular/core").InputSignal<Menu<import("@ta/menu").MenuBase> | undefined>;
    userMenuTemplate: import("@angular/core").InputSignal<TemplateRef<any> | undefined>;
    direction: import("@angular/core").InputSignal<"horizontal" | "vertical">;
    private _sharedMenu;
    isPanelOpen: boolean;
    navigateToHome(): void;
    toggleView(): void;
    toggleMobilePanel(): void;
    closeMobilePanel(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MainMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MainMenuComponent, "ta-main-menu", never, { "menuMain": { "alias": "menuMain"; "required": true; "isSignal": true; }; "tone": { "alias": "tone"; "required": false; "isSignal": true; }; "logoTemplate": { "alias": "logoTemplate"; "required": false; "isSignal": true; }; "menuUser": { "alias": "menuUser"; "required": false; "isSignal": true; }; "userMenuTemplate": { "alias": "userMenuTemplate"; "required": false; "isSignal": true; }; "direction": { "alias": "direction"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
