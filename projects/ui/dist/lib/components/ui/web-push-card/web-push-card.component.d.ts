import { TaWebPushService, WebPushPermission } from '@ta/capacitor';
import { TaBaseComponent } from '@ta/utils';
import * as i0 from "@angular/core";
/**
 * - `unsupported` : l'API manque et rien n'y changera → le composant ne rend rien ;
 * - `install` : iOS hors écran d'accueil → consigne d'installation ;
 * - `denied` : permission refusée → consigne pour la réactiver dans les réglages ;
 * - `active` : permission accordée et abonnement enregistré ;
 * - `ask` : bouton « Activer sur cet appareil ».
 */
export type WebPushCardState = 'unsupported' | 'install' | 'denied' | 'active' | 'ask';
export declare class WebPushCardComponent extends TaBaseComponent {
    /** Résultat de la demande de permission, après le clic. */
    enabled: import("@angular/core").OutputEmitterRef<WebPushPermission>;
    readonly push: TaWebPushService;
    readonly busy: import("@angular/core").WritableSignal<boolean>;
    readonly failed: import("@angular/core").WritableSignal<boolean>;
    readonly state: import("@angular/core").Signal<WebPushCardState>;
    constructor();
    onEnable(): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<WebPushCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WebPushCardComponent, "ta-web-push-card", never, {}, { "enabled": "enabled"; }, never, never, true, never>;
}
