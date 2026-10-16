import { Component, computed, inject, output, signal } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { TaWebPushService, WebPushPermission } from '@ta/capacitor';
import { TaBaseComponent } from '@ta/utils';

import { TaTranslationUI } from '../../../translation.service';
import { BannerComponent } from '../banner/banner.component';
import { ButtonComponent } from '../button/button.component';
import { TextComponent } from '../text/text.component';
import { TitleComponent } from '../title/title.component';

/**
 * - `unsupported` : l'API manque et rien n'y changera → le composant ne rend rien ;
 * - `install` : iOS hors écran d'accueil → consigne d'installation ;
 * - `denied` : permission refusée → consigne pour la réactiver dans les réglages ;
 * - `active` : permission accordée et abonnement enregistré ;
 * - `ask` : bouton « Activer sur cet appareil ».
 */
export type WebPushCardState = 'unsupported' | 'install' | 'denied' | 'active' | 'ask';

@Component({
  selector: 'ta-web-push-card',
  templateUrl: './web-push-card.component.html',
  styleUrl: './web-push-card.component.scss',
  standalone: true,
  imports: [TranslateModule, BannerComponent, ButtonComponent, TextComponent, TitleComponent],
})
export class WebPushCardComponent extends TaBaseComponent {
  /** Résultat de la demande de permission, après le clic. */
  enabled = output<WebPushPermission>();

  public readonly push = inject(TaWebPushService);

  public readonly busy = signal(false);
  public readonly failed = signal(false);

  public readonly state = computed<WebPushCardState>(() => {
    if (!this.push.isConfigured()) {
      return 'unsupported';
    }
    const permission = this.push.permission();
    if (permission === 'unsupported') {
      return this.push.isIos && !this.push.isStandalone ? 'install' : 'unsupported';
    }
    if (permission === 'denied') {
      return 'denied';
    }
    if (permission === 'granted' && this.push.isSubscribed()) {
      return 'active';
    }
    return 'ask';
  });

  constructor() {
    super();
    TaTranslationUI.getInstance();
  }

  public async onEnable(): Promise<void> {
    this.busy.set(true);
    this.failed.set(false);
    try {
      const permission = await this.push.enable();
      this.failed.set(permission === 'granted' && !this.push.isSubscribed());
      this.enabled.emit(permission);
    } catch {
      this.failed.set(true);
    } finally {
      this.busy.set(false);
    }
  }
}
