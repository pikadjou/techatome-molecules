import { provideHttpClient } from '@angular/common/http';
import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Apollo } from 'apollo-angular';

import { TaWebPushService, WebPushPermission } from '@ta/capacitor';
import { TRANSLATION_SOURCE_CONFIG, TranslationSourceType } from '@ta/translation';

import { WebPushCardComponent } from '@lib/ui/components/ui/web-push-card/web-push-card.component';

interface FakePush {
  isIos: boolean;
  isStandalone: boolean;
  isSupported: boolean;
  permission: ReturnType<typeof signal<WebPushPermission>>;
  isSubscribed: ReturnType<typeof signal<boolean>>;
  isConfigured: ReturnType<typeof signal<boolean>>;
  enable: jasmine.Spy;
}

describe('WebPushCardComponent', () => {
  let fixture: ComponentFixture<WebPushCardComponent>;
  let component: WebPushCardComponent;
  let push: FakePush;

  beforeEach(async () => {
    push = {
      enable: jasmine.createSpy('enable').and.resolveTo('granted'),
      isConfigured: signal(true),
      isIos: false,
      isStandalone: false,
      isSubscribed: signal(false),
      isSupported: true,
      permission: signal<WebPushPermission>('default'),
    };
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({ loader: { provide: TranslateLoader, useClass: TranslateFakeLoader } }),
        WebPushCardComponent,
      ],
      providers: [
        provideHttpClient(),
        provideRouter([]),
        { provide: Apollo, useValue: {} },
        { provide: TRANSLATION_SOURCE_CONFIG, useValue: { filePath: '', type: TranslationSourceType.FILE } },
        { provide: TaWebPushService, useValue: push },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(WebPushCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  function button(): HTMLElement | null {
    return fixture.nativeElement.querySelector('ta-button');
  }

  it('propose d’activer quand la permission n’a pas encore été demandée', () => {
    expect(component.state()).toBe('ask');
    expect(button()).not.toBeNull();
  });

  it('se masque quand le navigateur ne supporte pas le push', () => {
    push.permission.set('unsupported');
    fixture.detectChanges();
    expect(component.state()).toBe('unsupported');
    expect(fixture.nativeElement.querySelector('.web-push-card')).toBeNull();
  });

  it('invite à installer la PWA sur iOS hors écran d’accueil', () => {
    push.isIos = true;
    push.permission.set('unsupported');
    fixture.detectChanges();
    expect(component.state()).toBe('install');
    expect(button()).toBeNull();
  });

  it('explique comment réactiver quand la permission est refusée', () => {
    push.permission.set('denied');
    fixture.detectChanges();
    expect(component.state()).toBe('denied');
    expect(button()).toBeNull();
  });

  it('se dit actif quand la permission est accordée et l’abonnement enregistré', () => {
    push.permission.set('granted');
    push.isSubscribed.set(true);
    fixture.detectChanges();
    expect(component.state()).toBe('active');
    expect(button()).toBeNull();
  });

  it('repropose le bouton quand la permission est accordée mais l’abonnement perdu', () => {
    push.permission.set('granted');
    push.isSubscribed.set(false);
    fixture.detectChanges();
    expect(component.state()).toBe('ask');
  });

  it('se masque quand le serveur n’a pas de clé VAPID', () => {
    push.isConfigured.set(false);
    fixture.detectChanges();
    expect(component.state()).toBe('unsupported');
  });

  it('appelle enable() au clic et émet la permission', async () => {
    const emitted: WebPushPermission[] = [];
    component.enabled.subscribe(permission => emitted.push(permission));

    await component.onEnable();

    expect(push.enable).toHaveBeenCalled();
    expect(emitted).toEqual(['granted']);
    expect(component.busy()).toBeFalse();
  });

  it('signale l’échec quand la permission est accordée sans abonnement', async () => {
    push.permission.set('granted');
    push.isSubscribed.set(false);

    await component.onEnable();

    expect(component.failed()).toBeTrue();
  });
});
