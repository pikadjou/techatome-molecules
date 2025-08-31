import { NgClass, NgTemplateOutlet, AsyncPipe, NgIf, NgFor, NgStyle, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Injectable, ViewChild, Input, Component, inject, Inject, EventEmitter, Output, NgModule } from '@angular/core';
import { TaBaseComponent, TaAbstractComponent, isNonNullable, CamDirectivePipeModule } from '@ta/utils';
import * as i3 from '@angular/material/menu';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import * as i1$1 from '@angular/router';
import { RouterModule } from '@angular/router';
import * as i2 from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { FontIconComponent, LocalIconComponent, CamIconsModule } from '@ta/icons';
import { TemplateModalContainer, NotificationBadgeComponent, LogoComponent, ContainerValidationComponent, SwiperComponent, SwiperLightComponent, NotificationBadgeContainerComponent, ListContainerComponent, ListElementComponent, ListTitleComponent, CamUiModule, CamSwiperModule, CamContainerModule, CamLayoutModule, CamListModule } from '@ta/ui';
import { CamLazyTranslationService, TranslatePipe } from '@ta/translation';
import * as i1 from '@angular/material/dialog';
import { CamSharedMenuService } from '@ta/services';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { of, BehaviorSubject } from 'rxjs';

const hasFontIcon = (item) => {
    if (item.hasOwnProperty('icon')) {
        return typeof item.icon === 'string';
    }
    return false;
};
const hasIconImage = (item) => {
    if (item.hasOwnProperty('icon')) {
        return typeof item.icon === 'number';
    }
    return false;
};
const getIcon = (item) => {
    if (hasFontIcon(item) || hasIconImage(item)) {
        return item.icon;
    }
    return '';
};
const getFontIcon = (item) => {
    if (hasFontIcon(item)) {
        return item.icon;
    }
    return '';
};

class CamTranslationMenu extends CamLazyTranslationService {
    constructor() {
        super('menu');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamTranslationMenu, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamTranslationMenu, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamTranslationMenu, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

class MenuItemComponent extends TaBaseComponent {
    constructor(modal) {
        super();
        this.modal = modal;
        this.styleType = 'bloc';
        this.isOpen = false;
        CamTranslationMenu.getInstance();
    }
    ngOnInit() {
        this.isOpen = this.item.defaultOpen;
    }
    getStyleType() {
        return this.styleType + ' ' + this.item.style;
    }
    hasFontIcon() {
        return hasFontIcon(this.item);
    }
    hasIconImage() {
        return hasIconImage(this.item);
    }
    getIcon() {
        return getIcon(this.item);
    }
    getFontIcon() {
        return getFontIcon(this.item);
    }
    hasChild() {
        return this.item.children.length > 0;
    }
    toggle() {
        this.isOpen = !this.isOpen;
    }
    getTemplate() {
        if (this.item.isMenuPanel) {
            return this.item.template;
        }
        return null;
    }
    trackByFn(index, item) {
        return this.item + '-' + item.key;
    }
    executeCallback() {
        const myTemplate = this.getTemplate();
        if (myTemplate) {
            if (this.breakpoints.isLessThanXS) {
                this.modal.open(TemplateModalContainer, {
                    data: {
                        template: myTemplate,
                    },
                });
            }
            else {
                this.triggerMenu.openMenu();
            }
        }
        else {
            this.item.callback?.();
        }
    }
    getLink() {
        if (this.item.link && this.item.link !== '')
            return this.item.link;
        return '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MenuItemComponent, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: MenuItemComponent, isStandalone: true, selector: "ta-menu-item", inputs: { item: "item", styleType: "styleType" }, viewQueries: [{ propertyName: "triggerMenu", first: true, predicate: MatMenuTrigger, descendants: true }], usesInheritance: true, ngImport: i0, template: "@if (!this.hasChild()) {\n  <ng-container [style.cursor]=\"this.item.callback ? 'pointer' : 'default'\">\n    @if (this.getLink()) {\n      <a\n        class=\"link\"\n        [ngClass]=\"this.getStyleType()\"\n        routerLinkActive=\"active\"\n        [routerLinkActiveOptions]=\"{ exact: this.item.exact }\"\n        [routerLink]=\"[this.getLink()]\"\n        [replaceUrl]=\"this.item.replaceUrl\"\n      >\n        <ng-template [ngTemplateOutlet]=\"Item\"></ng-template>\n      </a>\n    } @else {\n      <a (click)=\"this.executeCallback()\" class=\"link\" [ngClass]=\"this.getStyleType()\">\n        <ng-template [ngTemplateOutlet]=\"Item\"></ng-template>\n      </a>\n    }\n  </ng-container>\n}\n\n<ng-template #Item [typedTemplate]=\"this.typeToken\">\n  <div class=\"item pointer\" [class.disable]=\"item.disabled\">\n    <div class=\"icon\">\n      @if (this.hasFontIcon()) {\n        <span class=\"icon-material\">\n          <ta-font-icon [name]=\"this.getFontIcon()\" size=\"xs\" [ngClass]=\"item.iconsColor\"></ta-font-icon>\n        </span>\n      }\n    </div>\n\n    <div class=\"title\">{{ item.label | translate }}</div>\n\n    <div class=\"badge-container d-flex\">\n      @if (item.options?.notificationBadge?.label) {\n        <ta-notification-badge\n          [number]=\"item.options?.notificationBadge?.label || 0\"\n          [style]=\"'brand-700'\"\n          fontSize=\"xs\"\n          [relative]=\"true\"\n        ></ta-notification-badge>\n      }\n      @let extraTemplate = item.options?.extraTemplate;\n      @if (extraTemplate) {\n        <ng-template [ngTemplateOutlet]=\"extraTemplate\"></ng-template>\n      }\n    </div>\n    @if (item.endingIcon) {\n      <div class=\"ending-icon-container\">\n        <ta-font-icon [name]=\"item.endingIcon\" [ngClass]=\"item.iconsColor\"></ta-font-icon>\n      </div>\n    }\n    @let template = this.getTemplate();\n    @if (template) {\n      <div class=\"trigger-container\">\n        <div class=\"trigger\" [matMenuTriggerFor]=\"menu\" #triggerPanel></div>\n        <mat-menu #menu=\"matMenu\">\n          <ng-container *ngTemplateOutlet=\"template\"></ng-container>\n        </mat-menu>\n      </div>\n    }\n  </div>\n</ng-template>\n", styles: [".link{display:flex;flex-direction:row;text-decoration:none;padding:var(--ta-space-xs)}.link .icon,.link .title{padding:0;margin:0;color:var(--ta-icon-tertiary)}.link.dark .icon{color:var(--ta-icon-primary)}.link.dark .title{color:var(--ta-text-primary)}.link.active .icon{color:var(--ta-icon-brand-primary)}.link.active .title{color:var(--ta-text-brand-primary)}@media screen and (min-width: 768px){.link.active .icon,.link.active .title{color:var(--ta-icon-invert-primary)}}.link.horizontal{justify-content:center}.link.horizontal .icon,.link.horizontal .title{flex:0 0 100%;max-width:100%;font-size:var(--ta-font-body-sm-default-size);line-height:var(--ta-font-body-sm-default-line);font-weight:var(--ta-font-body-sm-default-weight)}.link.horizontal .item{position:relative}.link.horizontal .item .badge-container{position:absolute;top:-10px;right:0}.link.vertical{padding:var(--ta-space-md) var(--ta-space-md)}.link.vertical .item{display:flex;align-items:center}.link.vertical .icon,.link.vertical .title{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight);text-align:left;flex:0 0 auto;width:auto}.link.vertical .icon{margin-right:var(--ta-space-md)}@media screen and (max-width: 575px){.link.responsive{justify-content:center}.link.responsive .icon,.link.responsive .title{flex:0 0 100%;max-width:100%;font-size:var(--ta-font-body-sm-default-size);line-height:var(--ta-font-body-sm-default-line);font-weight:var(--ta-font-body-sm-default-weight)}.link.responsive .item{position:relative}.link.responsive .item .badge-container{position:absolute;top:-10px;right:0}.link.responsive .ending-icon-container{display:none}}@media screen and (min-width: 576px){.link.responsive{justify-content:center}.link.responsive .icon,.link.responsive .title{flex:0 0 100%;max-width:100%;font-size:var(--ta-font-body-sm-default-size);line-height:var(--ta-font-body-sm-default-line);font-weight:var(--ta-font-body-sm-default-weight)}.link.responsive .item{position:relative}.link.responsive .item .badge-container{position:absolute;top:-10px;right:0}.link.responsive .ending-icon-container{display:none}}@media screen and (min-width: 992px){.link.responsive{padding:var(--ta-space-md) var(--ta-space-md)}.link.responsive .item{display:flex;align-items:center}.link.responsive .icon,.link.responsive .title{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight);text-align:left;flex:0 0 auto;width:auto}.link.responsive .icon{margin-right:var(--ta-space-md)}}.link.responsive.menu-minimized .icon{margin-left:auto!important;margin-right:auto!important}.link.responsive.menu-minimized .title{display:none}.link .disable{opacity:.5}.link .item{width:100%;text-align:center}.link .icon-image{margin-bottom:3px}.link .badge-container{position:relative;margin-left:auto}.link .ending-icon-container{display:flex;align-items:center;justify-content:flex-end}.trigger-container{position:relative}.trigger-container .trigger{position:absolute;top:0;right:calc(var(--ta-space-xl) * -1)}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "ngmodule", type: RouterModule }, { kind: "directive", type: i1$1.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i1$1.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "ariaCurrentWhenActive", "routerLinkActive"], outputs: ["isActiveChange"], exportAs: ["routerLinkActive"] }, { kind: "ngmodule", type: MatMenuModule }, { kind: "component", type: i3.MatMenu, selector: "mat-menu", inputs: ["backdropClass", "aria-label", "aria-labelledby", "aria-describedby", "xPosition", "yPosition", "overlapTrigger", "hasBackdrop", "class", "classList"], outputs: ["closed", "close"], exportAs: ["matMenu"] }, { kind: "directive", type: i3.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", inputs: ["mat-menu-trigger-for", "matMenuTriggerFor", "matMenuTriggerData", "matMenuTriggerRestoreFocus"], outputs: ["menuOpened", "onMenuOpen", "menuClosed", "onMenuClose"], exportAs: ["matMenuTrigger"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i2.TranslatePipe, name: "translate" }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: NotificationBadgeComponent, selector: "ta-notification-badge", inputs: ["number", "fontSize", "style", "relative"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MenuItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-menu-item', standalone: true, imports: [
                        NgClass,
                        NgTemplateOutlet,
                        RouterModule,
                        MatMenuModule,
                        TranslateModule,
                        FontIconComponent,
                        NotificationBadgeComponent,
                    ], template: "@if (!this.hasChild()) {\n  <ng-container [style.cursor]=\"this.item.callback ? 'pointer' : 'default'\">\n    @if (this.getLink()) {\n      <a\n        class=\"link\"\n        [ngClass]=\"this.getStyleType()\"\n        routerLinkActive=\"active\"\n        [routerLinkActiveOptions]=\"{ exact: this.item.exact }\"\n        [routerLink]=\"[this.getLink()]\"\n        [replaceUrl]=\"this.item.replaceUrl\"\n      >\n        <ng-template [ngTemplateOutlet]=\"Item\"></ng-template>\n      </a>\n    } @else {\n      <a (click)=\"this.executeCallback()\" class=\"link\" [ngClass]=\"this.getStyleType()\">\n        <ng-template [ngTemplateOutlet]=\"Item\"></ng-template>\n      </a>\n    }\n  </ng-container>\n}\n\n<ng-template #Item [typedTemplate]=\"this.typeToken\">\n  <div class=\"item pointer\" [class.disable]=\"item.disabled\">\n    <div class=\"icon\">\n      @if (this.hasFontIcon()) {\n        <span class=\"icon-material\">\n          <ta-font-icon [name]=\"this.getFontIcon()\" size=\"xs\" [ngClass]=\"item.iconsColor\"></ta-font-icon>\n        </span>\n      }\n    </div>\n\n    <div class=\"title\">{{ item.label | translate }}</div>\n\n    <div class=\"badge-container d-flex\">\n      @if (item.options?.notificationBadge?.label) {\n        <ta-notification-badge\n          [number]=\"item.options?.notificationBadge?.label || 0\"\n          [style]=\"'brand-700'\"\n          fontSize=\"xs\"\n          [relative]=\"true\"\n        ></ta-notification-badge>\n      }\n      @let extraTemplate = item.options?.extraTemplate;\n      @if (extraTemplate) {\n        <ng-template [ngTemplateOutlet]=\"extraTemplate\"></ng-template>\n      }\n    </div>\n    @if (item.endingIcon) {\n      <div class=\"ending-icon-container\">\n        <ta-font-icon [name]=\"item.endingIcon\" [ngClass]=\"item.iconsColor\"></ta-font-icon>\n      </div>\n    }\n    @let template = this.getTemplate();\n    @if (template) {\n      <div class=\"trigger-container\">\n        <div class=\"trigger\" [matMenuTriggerFor]=\"menu\" #triggerPanel></div>\n        <mat-menu #menu=\"matMenu\">\n          <ng-container *ngTemplateOutlet=\"template\"></ng-container>\n        </mat-menu>\n      </div>\n    }\n  </div>\n</ng-template>\n", styles: [".link{display:flex;flex-direction:row;text-decoration:none;padding:var(--ta-space-xs)}.link .icon,.link .title{padding:0;margin:0;color:var(--ta-icon-tertiary)}.link.dark .icon{color:var(--ta-icon-primary)}.link.dark .title{color:var(--ta-text-primary)}.link.active .icon{color:var(--ta-icon-brand-primary)}.link.active .title{color:var(--ta-text-brand-primary)}@media screen and (min-width: 768px){.link.active .icon,.link.active .title{color:var(--ta-icon-invert-primary)}}.link.horizontal{justify-content:center}.link.horizontal .icon,.link.horizontal .title{flex:0 0 100%;max-width:100%;font-size:var(--ta-font-body-sm-default-size);line-height:var(--ta-font-body-sm-default-line);font-weight:var(--ta-font-body-sm-default-weight)}.link.horizontal .item{position:relative}.link.horizontal .item .badge-container{position:absolute;top:-10px;right:0}.link.vertical{padding:var(--ta-space-md) var(--ta-space-md)}.link.vertical .item{display:flex;align-items:center}.link.vertical .icon,.link.vertical .title{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight);text-align:left;flex:0 0 auto;width:auto}.link.vertical .icon{margin-right:var(--ta-space-md)}@media screen and (max-width: 575px){.link.responsive{justify-content:center}.link.responsive .icon,.link.responsive .title{flex:0 0 100%;max-width:100%;font-size:var(--ta-font-body-sm-default-size);line-height:var(--ta-font-body-sm-default-line);font-weight:var(--ta-font-body-sm-default-weight)}.link.responsive .item{position:relative}.link.responsive .item .badge-container{position:absolute;top:-10px;right:0}.link.responsive .ending-icon-container{display:none}}@media screen and (min-width: 576px){.link.responsive{justify-content:center}.link.responsive .icon,.link.responsive .title{flex:0 0 100%;max-width:100%;font-size:var(--ta-font-body-sm-default-size);line-height:var(--ta-font-body-sm-default-line);font-weight:var(--ta-font-body-sm-default-weight)}.link.responsive .item{position:relative}.link.responsive .item .badge-container{position:absolute;top:-10px;right:0}.link.responsive .ending-icon-container{display:none}}@media screen and (min-width: 992px){.link.responsive{padding:var(--ta-space-md) var(--ta-space-md)}.link.responsive .item{display:flex;align-items:center}.link.responsive .icon,.link.responsive .title{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight);text-align:left;flex:0 0 auto;width:auto}.link.responsive .icon{margin-right:var(--ta-space-md)}}.link.responsive.menu-minimized .icon{margin-left:auto!important;margin-right:auto!important}.link.responsive.menu-minimized .title{display:none}.link .disable{opacity:.5}.link .item{width:100%;text-align:center}.link .icon-image{margin-bottom:3px}.link .badge-container{position:relative;margin-left:auto}.link .ending-icon-container{display:flex;align-items:center;justify-content:flex-end}.trigger-container{position:relative}.trigger-container .trigger{position:absolute;top:0;right:calc(var(--ta-space-xl) * -1)}\n"] }]
        }], ctorParameters: () => [{ type: i1.MatDialog }], propDecorators: { item: [{
                type: Input
            }], styleType: [{
                type: Input
            }], triggerMenu: [{
                type: ViewChild,
                args: [MatMenuTrigger]
            }] } });

class MenuComponent extends TaBaseComponent {
    get containerCss() {
        switch (this.container) {
            case 'overflow':
                return 'overflow';
            case 'second':
                return 'second';
            case 'main':
                return 'main-nav ' + this.menu.direction;
            default:
                return '';
        }
    }
    constructor() {
        super();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MenuComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: MenuComponent, isStandalone: true, selector: "ta-menu", inputs: { menu: "menu", container: "container" }, usesInheritance: true, ngImport: i0, template: "<ul class=\"menu\" [ngClass]=\"this.containerCss\">\n  @for (item of this.menu.elements; track this.trackByKey($index, item)) {\n    @if ((item.visible$ | async) === true) {\n      <li>\n        <ta-menu-item [item]=\"item\" [class]=\"item.key\" [styleType]=\"this.menu.direction\"></ta-menu-item>\n      </li>\n    }\n  }\n</ul>\n", styles: [".menu{display:flex;flex-direction:row;list-style:none;padding:0;margin:0}.menu li{padding:0;margin:0}.menu.horizontal li{flex:1}.menu.vertical li{flex:0 0 100%;max-width:100%}@media screen and (max-width: 767px){.menu.responsive{width:100%}.menu.responsive li{flex:1}}@media screen and (min-width: 768px){.menu.responsive li{flex:0 0 100%;max-width:100%}}ul.second{list-style:none;display:flex;flex-direction:row;padding:0;margin:0;background-color:var(--ta-neutral-50)}ul.second li{padding:0;margin:0;flex:1}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: MenuItemComponent, selector: "ta-menu-item", inputs: ["item", "styleType"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-menu', standalone: true, imports: [NgClass, AsyncPipe, MenuItemComponent], template: "<ul class=\"menu\" [ngClass]=\"this.containerCss\">\n  @for (item of this.menu.elements; track this.trackByKey($index, item)) {\n    @if ((item.visible$ | async) === true) {\n      <li>\n        <ta-menu-item [item]=\"item\" [class]=\"item.key\" [styleType]=\"this.menu.direction\"></ta-menu-item>\n      </li>\n    }\n  }\n</ul>\n", styles: [".menu{display:flex;flex-direction:row;list-style:none;padding:0;margin:0}.menu li{padding:0;margin:0}.menu.horizontal li{flex:1}.menu.vertical li{flex:0 0 100%;max-width:100%}@media screen and (max-width: 767px){.menu.responsive{width:100%}.menu.responsive li{flex:1}}@media screen and (min-width: 768px){.menu.responsive li{flex:0 0 100%;max-width:100%}}ul.second{list-style:none;display:flex;flex-direction:row;padding:0;margin:0;background-color:var(--ta-neutral-50)}ul.second li{padding:0;margin:0;flex:1}\n"] }]
        }], ctorParameters: () => [], propDecorators: { menu: [{
                type: Input
            }], container: [{
                type: Input
            }] } });

class MainMenuComponent extends TaBaseComponent {
    constructor() {
        super(...arguments);
        this.direction = 'vertical';
        this.sharedMenu = inject(CamSharedMenuService);
    }
    toggleView() {
        this.sharedMenu.isMinimized$.next(!this.sharedMenu.isMinimized$.getValue());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MainMenuComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: MainMenuComponent, isStandalone: true, selector: "ta-main-menu", inputs: { menuMain: "menuMain", menuUser: "menuUser", direction: "direction" }, usesInheritance: true, ngImport: i0, template: "<div class=\"main-nav-container\">\n  <div class=\"main-nav\" [ngClass]=\"this.direction\">\n    <div class=\"logo\">\n      <ta-logo class=\"small\"></ta-logo>\n      <ta-logo class=\"oneline\" [type]=\"'oneline'\"></ta-logo>\n    </div>\n    <div class=\"menu-nav\">\n      <ta-menu class=\"menu\" [menu]=\"this.menuMain\" [container]=\"'main'\"></ta-menu>\n    </div>\n    @if (this.menuUser) {\n      <div class=\"user-nav\">\n        <div class=\"sep\"></div>\n        <ta-menu class=\"menu\" [menu]=\"this.menuUser\" [container]=\"'main'\"></ta-menu>\n      </div>\n    }\n  </div>\n</div>\n", styles: [".main-nav{display:flex;flex-flow:column;padding:var(--ta-space-sm);border-radius:3px 3px 0 0;background-color:var(--ta-neutral-white);box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f}@media screen and (max-width: 575px){.main-nav{display:flex;flex-direction:row;justify-content:space-between;overflow-x:auto}}@media screen and (min-width: 576px){.main-nav{border-radius:0 3px 3px 0;padding:var(--ta-space-sm);align-content:space-between}}@media screen and (min-width: 992px){.main-nav{padding:var(--ta-space-md)}}.main-nav.vertical{flex-direction:row}.main-nav .logo{margin:auto}@media screen and (max-width: 575px){.main-nav .logo{display:none}}@media screen and (min-width: 576px){.main-nav .logo{width:48px}.main-nav .logo .small{display:block}.main-nav .logo .oneline{display:none}}@media screen and (min-width: 992px){.main-nav .logo{width:80px}.main-nav .logo .small{display:none}.main-nav .logo .oneline{display:block}}.main-nav.menu-minimized .logo{margin-left:auto!important;width:48px!important}.main-nav.menu-minimized .logo .small{display:block!important}.main-nav.menu-minimized .logo .oneline{display:none!important}.main-nav .menu-nav,.main-nav .menu-nav .menu{flex:1}@media screen and (max-width: 575px){.main-nav .user-nav{display:none}}.main-nav .user-nav .sep{border-bottom:1px solid var(--ta-surface-brand-primary);margin:var(--ta-space-sm)}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: LogoComponent, selector: "ta-logo", inputs: ["color", "type", "widthPercentage"] }, { kind: "component", type: MenuComponent, selector: "ta-menu", inputs: ["menu", "container"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MainMenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-main-menu', standalone: true, imports: [NgClass, AsyncPipe, FontIconComponent, LogoComponent, MenuComponent], template: "<div class=\"main-nav-container\">\n  <div class=\"main-nav\" [ngClass]=\"this.direction\">\n    <div class=\"logo\">\n      <ta-logo class=\"small\"></ta-logo>\n      <ta-logo class=\"oneline\" [type]=\"'oneline'\"></ta-logo>\n    </div>\n    <div class=\"menu-nav\">\n      <ta-menu class=\"menu\" [menu]=\"this.menuMain\" [container]=\"'main'\"></ta-menu>\n    </div>\n    @if (this.menuUser) {\n      <div class=\"user-nav\">\n        <div class=\"sep\"></div>\n        <ta-menu class=\"menu\" [menu]=\"this.menuUser\" [container]=\"'main'\"></ta-menu>\n      </div>\n    }\n  </div>\n</div>\n", styles: [".main-nav{display:flex;flex-flow:column;padding:var(--ta-space-sm);border-radius:3px 3px 0 0;background-color:var(--ta-neutral-white);box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f}@media screen and (max-width: 575px){.main-nav{display:flex;flex-direction:row;justify-content:space-between;overflow-x:auto}}@media screen and (min-width: 576px){.main-nav{border-radius:0 3px 3px 0;padding:var(--ta-space-sm);align-content:space-between}}@media screen and (min-width: 992px){.main-nav{padding:var(--ta-space-md)}}.main-nav.vertical{flex-direction:row}.main-nav .logo{margin:auto}@media screen and (max-width: 575px){.main-nav .logo{display:none}}@media screen and (min-width: 576px){.main-nav .logo{width:48px}.main-nav .logo .small{display:block}.main-nav .logo .oneline{display:none}}@media screen and (min-width: 992px){.main-nav .logo{width:80px}.main-nav .logo .small{display:none}.main-nav .logo .oneline{display:block}}.main-nav.menu-minimized .logo{margin-left:auto!important;width:48px!important}.main-nav.menu-minimized .logo .small{display:block!important}.main-nav.menu-minimized .logo .oneline{display:none!important}.main-nav .menu-nav,.main-nav .menu-nav .menu{flex:1}@media screen and (max-width: 575px){.main-nav .user-nav{display:none}}.main-nav .user-nav .sep{border-bottom:1px solid var(--ta-surface-brand-primary);margin:var(--ta-space-sm)}\n"] }]
        }], propDecorators: { menuMain: [{
                type: Input
            }], menuUser: [{
                type: Input
            }], direction: [{
                type: Input
            }] } });

class BottomSheetTemplateBasicComponent {
    constructor(data) {
        this.data = data;
        CamTranslationMenu.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BottomSheetTemplateBasicComponent, deps: [{ token: MAT_BOTTOM_SHEET_DATA }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: BottomSheetTemplateBasicComponent, isStandalone: true, selector: "ta-bottom-sheet-template-basic", ngImport: i0, template: "<div class=\"handler\">\n  <span></span>\n</div>\n\n<div class=\"row bottom-sheet-template-basic\">\n  @for (item of this.data.menu$ | async; track item) {\n    <div\n      class=\"ta-c\"\n      [ngClass]=\"this.data.orientation === 'horizontal' ? 'col-12' : 'col'\"\n    >\n      @if (!item.secure) {\n        <div (click)=\"item.action()\">\n          <ng-template\n            [ngTemplateOutlet]=\"Item\"\n            [ngTemplateOutletContext]=\"{\n              item: item,\n            }\"\n          >\n          </ng-template>\n        </div>\n      } @else {\n        <ta-container-validation (validated)=\"item.action()\">\n          <ng-template\n            [ngTemplateOutlet]=\"Item\"\n            [ngTemplateOutletContext]=\"{\n              item: item,\n            }\"\n          >\n          </ng-template>\n        </ta-container-validation>\n      }\n    </div>\n  }\n</div>\n\n<ng-template #Item let-item=\"item\" [typedTemplate]=\"this.typeItem\">\n  <div class=\"item\" [ngClass]=\"this.data.orientation\">\n    @if (item.icon) {\n      <ta-font-icon [name]=\"item.icon\" class=\"icon\"></ta-font-icon>\n    }\n\n    <div class=\"title-container\">\n      <div class=\"label\">{{ item.label | translate }}</div>\n\n      @if (item.subtitle) {\n        <div>\n          {{ item.subtitle | translate }}\n        </div>\n      }\n    </div>\n  </div>\n</ng-template>\n", styles: [".bottom-sheet-template-basic{padding-bottom:env(safe-area-inset-bottom)}.handler{text-align:center;padding-top:var(--ta-space-xs);padding-bottom:var(--ta-space-sm)}.handler span{display:block;height:4px;width:40px;background-color:#0000004d;border-radius:10px;margin:auto}.item{text-align:center;padding:var(--ta-space-sm) 0}.item.horizontal{display:flex;justify-content:flex-start;align-items:center;gap:var(--ta-space-xs)}.item .title-container{margin:auto 0}.item .title-container .label{font-size:var(--ta-font-body-xs-default-size);line-height:var(--ta-font-body-xs-default-line);font-weight:var(--ta-font-body-xs-default-weight)}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i2.TranslatePipe, name: "translate" }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: ContainerValidationComponent, selector: "ta-container-validation", inputs: ["disabled"], outputs: ["validated"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BottomSheetTemplateBasicComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-bottom-sheet-template-basic', standalone: true, imports: [NgIf, NgFor, NgClass, AsyncPipe, NgTemplateOutlet, TranslateModule, FontIconComponent, ContainerValidationComponent], template: "<div class=\"handler\">\n  <span></span>\n</div>\n\n<div class=\"row bottom-sheet-template-basic\">\n  @for (item of this.data.menu$ | async; track item) {\n    <div\n      class=\"ta-c\"\n      [ngClass]=\"this.data.orientation === 'horizontal' ? 'col-12' : 'col'\"\n    >\n      @if (!item.secure) {\n        <div (click)=\"item.action()\">\n          <ng-template\n            [ngTemplateOutlet]=\"Item\"\n            [ngTemplateOutletContext]=\"{\n              item: item,\n            }\"\n          >\n          </ng-template>\n        </div>\n      } @else {\n        <ta-container-validation (validated)=\"item.action()\">\n          <ng-template\n            [ngTemplateOutlet]=\"Item\"\n            [ngTemplateOutletContext]=\"{\n              item: item,\n            }\"\n          >\n          </ng-template>\n        </ta-container-validation>\n      }\n    </div>\n  }\n</div>\n\n<ng-template #Item let-item=\"item\" [typedTemplate]=\"this.typeItem\">\n  <div class=\"item\" [ngClass]=\"this.data.orientation\">\n    @if (item.icon) {\n      <ta-font-icon [name]=\"item.icon\" class=\"icon\"></ta-font-icon>\n    }\n\n    <div class=\"title-container\">\n      <div class=\"label\">{{ item.label | translate }}</div>\n\n      @if (item.subtitle) {\n        <div>\n          {{ item.subtitle | translate }}\n        </div>\n      }\n    </div>\n  </div>\n</ng-template>\n", styles: [".bottom-sheet-template-basic{padding-bottom:env(safe-area-inset-bottom)}.handler{text-align:center;padding-top:var(--ta-space-xs);padding-bottom:var(--ta-space-sm)}.handler span{display:block;height:4px;width:40px;background-color:#0000004d;border-radius:10px;margin:auto}.item{text-align:center;padding:var(--ta-space-sm) 0}.item.horizontal{display:flex;justify-content:flex-start;align-items:center;gap:var(--ta-space-xs)}.item .title-container{margin:auto 0}.item .title-container .label{font-size:var(--ta-font-body-xs-default-size);line-height:var(--ta-font-body-xs-default-line);font-weight:var(--ta-font-body-xs-default-weight)}\n"] }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_BOTTOM_SHEET_DATA]
                }] }] });

class BottomSheetTemplateGenericComponent {
    constructor(data) {
        this.data = data;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BottomSheetTemplateGenericComponent, deps: [{ token: MAT_BOTTOM_SHEET_DATA }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BottomSheetTemplateGenericComponent, isStandalone: true, selector: "ta-bottom-sheet-template-generic", ngImport: i0, template: "<div class=\"handler\">\n  <span></span>\n</div>\n\n<div\n  class=\"bottom-sheet-template-generic\"\n  [ngStyle]=\"{ 'max-height': this.data.maxHeight ?? 'auto' }\"\n>\n  <ng-template\n    [ngTemplateOutlet]=\"this.data.template\"\n    [ngTemplateOutletContext]=\"this.data.context ?? {}\"\n  ></ng-template>\n</div>\n", styles: [".bottom-sheet-template-generic{padding:var(--ta-space-sm);padding-bottom:calc(var(--ta-space-sm) + env(safe-area-inset-bottom))}.handler{text-align:center;padding-top:var(--ta-space-xs);padding-bottom:var(--ta-space-sm)}.handler span{display:block;height:4px;width:40px;background-color:#0000004d;border-radius:10px;margin:auto}\n"], dependencies: [{ kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BottomSheetTemplateGenericComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-bottom-sheet-template-generic', standalone: true, imports: [NgStyle], template: "<div class=\"handler\">\n  <span></span>\n</div>\n\n<div\n  class=\"bottom-sheet-template-generic\"\n  [ngStyle]=\"{ 'max-height': this.data.maxHeight ?? 'auto' }\"\n>\n  <ng-template\n    [ngTemplateOutlet]=\"this.data.template\"\n    [ngTemplateOutletContext]=\"this.data.context ?? {}\"\n  ></ng-template>\n</div>\n", styles: [".bottom-sheet-template-generic{padding:var(--ta-space-sm);padding-bottom:calc(var(--ta-space-sm) + env(safe-area-inset-bottom))}.handler{text-align:center;padding-top:var(--ta-space-xs);padding-bottom:var(--ta-space-sm)}.handler span{display:block;height:4px;width:40px;background-color:#0000004d;border-radius:10px;margin:auto}\n"] }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_BOTTOM_SHEET_DATA]
                }] }] });

class QuickActionsComponent {
    constructor() {
        this.tabSelection = null;
        this.elementPerPage = 3.5;
        this.canDeselect = false;
        this.tabSelected = new EventEmitter();
        CamTranslationMenu.getInstance();
    }
    onQuickActionSelected(menuIcon) {
        if (menuIcon.disabled) {
            return;
        }
        this.tabSelected.emit(this._selectedValue(menuIcon.key));
    }
    _selectedValue(newSelection) {
        if (this.canDeselect && this.tabSelection === newSelection)
            return null;
        return newSelection;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: QuickActionsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: QuickActionsComponent, isStandalone: true, selector: "ta-quick-actions", inputs: { tabSelection: "tabSelection", menu: "menu", elementPerPage: "elementPerPage", canDeselect: "canDeselect" }, outputs: { tabSelected: "tabSelected" }, ngImport: i0, template: "@if (this.menu) {\n  <div class=\"tabs my-space-2\">\n    <div class=\"menu-tab\">\n      <ta-swiper\n        [slidesPerPage]=\"this.elementPerPage\"\n        [swipeTemplate]=\"swipeTemplate\"\n        [slides]=\"this.menu.elements\"\n      ></ta-swiper>\n    </div>\n  </div>\n}\n\n<ng-template #swipeTemplate let-element=\"element\" [typedTemplate]=\"typeToken\">\n  <div\n    class=\"menu-item\"\n    [class.active]=\"this.tabSelection === element.key\"\n    [class.disabled]=\"element.disabled === true\"\n    (click)=\"this.onQuickActionSelected(element)\"\n  >\n    @if (element.icon) {\n      <ta-local-icon [type]=\"element.icon\" [size]=\"'xs'\"></ta-local-icon>\n    }\n    <p class=\"text-truncate\">{{ element.label | translate }}</p>\n    <div class=\"bottom\"></div>\n  </div>\n</ng-template>\n", styles: [".tabs{background:var(--ta-neutral-50);border-radius:10px 10px 0 0}.tabs .menu-tab .menu-item{cursor:pointer;color:var(--ta-neutral-400);padding:var(--ta-space-xs) var(--ta-space-sm);border-bottom:solid;font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-bold-weight);text-align:center}.tabs .menu-tab .menu-item.active{color:var(--ta-neutral-900);border-bottom-color:var(--ta-surface-brand-primary)}.tabs .menu-tab .menu-item.disabled{filter:grayscale(100%)}\n"], dependencies: [{ kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i2.TranslatePipe, name: "translate" }, { kind: "component", type: LocalIconComponent, selector: "ta-local-icon", inputs: ["type", "size", "rotation"] }, { kind: "component", type: SwiperComponent, selector: "ta-swiper", inputs: ["swipeTemplate", "slides", "slidesPerPage", "slidesPerGroup", "isFreeMode", "startAt"], outputs: ["onSlideChanged"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: QuickActionsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-quick-actions', standalone: true, imports: [NgIf, NgTemplateOutlet, TranslateModule, LocalIconComponent, SwiperComponent], template: "@if (this.menu) {\n  <div class=\"tabs my-space-2\">\n    <div class=\"menu-tab\">\n      <ta-swiper\n        [slidesPerPage]=\"this.elementPerPage\"\n        [swipeTemplate]=\"swipeTemplate\"\n        [slides]=\"this.menu.elements\"\n      ></ta-swiper>\n    </div>\n  </div>\n}\n\n<ng-template #swipeTemplate let-element=\"element\" [typedTemplate]=\"typeToken\">\n  <div\n    class=\"menu-item\"\n    [class.active]=\"this.tabSelection === element.key\"\n    [class.disabled]=\"element.disabled === true\"\n    (click)=\"this.onQuickActionSelected(element)\"\n  >\n    @if (element.icon) {\n      <ta-local-icon [type]=\"element.icon\" [size]=\"'xs'\"></ta-local-icon>\n    }\n    <p class=\"text-truncate\">{{ element.label | translate }}</p>\n    <div class=\"bottom\"></div>\n  </div>\n</ng-template>\n", styles: [".tabs{background:var(--ta-neutral-50);border-radius:10px 10px 0 0}.tabs .menu-tab .menu-item{cursor:pointer;color:var(--ta-neutral-400);padding:var(--ta-space-xs) var(--ta-space-sm);border-bottom:solid;font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-bold-weight);text-align:center}.tabs .menu-tab .menu-item.active{color:var(--ta-neutral-900);border-bottom-color:var(--ta-surface-brand-primary)}.tabs .menu-tab .menu-item.disabled{filter:grayscale(100%)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { tabSelection: [{
                type: Input
            }], menu: [{
                type: Input
            }], elementPerPage: [{
                type: Input
            }], canDeselect: [{
                type: Input
            }], tabSelected: [{
                type: Output
            }] } });

class QuickActionsCustomComponent {
    constructor() {
        this.elementPerPage = 3.5;
        this.slidesPerGroup = 1;
        this.isFreeMode = true;
        this.onSlideChanged = new EventEmitter();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: QuickActionsCustomComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: QuickActionsCustomComponent, isStandalone: true, selector: "ta-quick-actions-custom", inputs: { elementPerPage: "elementPerPage", swipeTemplate: "swipeTemplate", slidesPerGroup: "slidesPerGroup", isFreeMode: "isFreeMode", elements: "elements" }, outputs: { onSlideChanged: "onSlideChanged" }, ngImport: i0, template: "@if (this.elements && this.elements.length > 0) {\n  <div class=\"tabs my-space-2\">\n    <div class=\"menu-tab\">\n      <ta-swiper\n        [slidesPerPage]=\"this.elementPerPage\"\n        [slidesPerGroup]=\"this.slidesPerGroup\"\n        [swipeTemplate]=\"swipeTemplate\"\n        [slides]=\"this.elements\"\n        [isFreeMode]=\"this.isFreeMode\"\n        (onSlideChanged)=\"this.onSlideChanged.emit($event)\"\n      ></ta-swiper>\n    </div>\n  </div>\n}\n", styles: [""], dependencies: [{ kind: "component", type: SwiperComponent, selector: "ta-swiper", inputs: ["swipeTemplate", "slides", "slidesPerPage", "slidesPerGroup", "isFreeMode", "startAt"], outputs: ["onSlideChanged"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: QuickActionsCustomComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-quick-actions-custom', standalone: true, imports: [NgIf, SwiperComponent], template: "@if (this.elements && this.elements.length > 0) {\n  <div class=\"tabs my-space-2\">\n    <div class=\"menu-tab\">\n      <ta-swiper\n        [slidesPerPage]=\"this.elementPerPage\"\n        [slidesPerGroup]=\"this.slidesPerGroup\"\n        [swipeTemplate]=\"swipeTemplate\"\n        [slides]=\"this.elements\"\n        [isFreeMode]=\"this.isFreeMode\"\n        (onSlideChanged)=\"this.onSlideChanged.emit($event)\"\n      ></ta-swiper>\n    </div>\n  </div>\n}\n" }]
        }], propDecorators: { elementPerPage: [{
                type: Input
            }], swipeTemplate: [{
                type: Input
            }], slidesPerGroup: [{
                type: Input
            }], isFreeMode: [{
                type: Input
            }], onSlideChanged: [{
                type: Output
            }], elements: [{
                type: Input
            }] } });

/*
 ** @deprecated
 */
class ToggleNavigationComponent {
    constructor() {
        this.activeKey = '';
        this.notifEnabled = false;
        CamTranslationMenu.getInstance();
    }
    get containerCss() {
        return this.container ?? '';
    }
    ngOnInit() {
        if (this.menu.elements.find(element => element.options?.notificationBadge?.label)) {
            this.notifEnabled = true;
        }
        const activeItem = this.menu.elements.find(item => item.defaultOpen);
        if (activeItem) {
            this.callback(activeItem);
        }
    }
    hasFontIcon(item) {
        return hasFontIcon(item);
    }
    hasIconImage(item) {
        return hasIconImage(item);
    }
    getIcon(item) {
        return getIcon(item);
    }
    getFontIcon(item) {
        return getFontIcon(item);
    }
    getLink(item) {
        if (item.link && item.link !== '')
            return item.link;
        return ''; // TODO this._navigationService.currentPageUrl;
    }
    callback(item) {
        if (item.disabled) {
            return;
        }
        this.activeKey = item.key;
        if (item.callback) {
            item.callback();
        }
    }
    isActive(item) {
        return item.key === this.activeKey;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ToggleNavigationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: ToggleNavigationComponent, isStandalone: true, selector: "ta-toggle-navigation", inputs: { menu: "menu", container: "container" }, ngImport: i0, template: "<div class=\"toggle-container\" [ngClass]=\"this.containerCss\" [class.switch-container]=\"this.container === 'switch'\">\n  <ta-swiper-light\n    [items]=\"this.menu.elements\"\n    [template]=\"template\"\n    [forced]=\"true\"\n    swiperClasses=\"g-space-lg pt-space-md\"\n  ></ta-swiper-light>\n</div>\n\n<ng-template #template let-element=\"element\">\n  @if (element.callback || element.disabled) {\n    <div\n      (click)=\"this.callback(element)\"\n      class=\"toggle-element\"\n      [class.active]=\"this.isActive(element)\"\n      [class.disabled]=\"element.disabled\"\n    >\n      <ng-template\n        [ngTemplateOutlet]=\"Item\"\n        [ngTemplateOutletContext]=\"{\n          item: element,\n        }\"\n      >\n      </ng-template>\n    </div>\n  } @else {\n    <div\n      class=\"toggle-element\"\n      routerLinkActive=\"active\"\n      [routerLinkActiveOptions]=\"{ exact: element.exact }\"\n      [routerLink]=\"[this.getLink(element)]\"\n      [queryParamsHandling]=\"element.queryParamsHandling\"\n      [replaceUrl]=\"element.replaceUrl\"\n      [ngClass]=\"{ disabled: element.disabled }\"\n    >\n      <ng-template\n        [ngTemplateOutlet]=\"Item\"\n        [ngTemplateOutletContext]=\"{\n          item: element,\n        }\"\n      >\n      </ng-template>\n    </div>\n  }\n</ng-template>\n\n<ng-template #Item let-item=\"item\" [typedTemplate]=\"this.typeItem\">\n  <div class=\"label flex-row align-center mb-space-xs\">\n    @if (this.hasFontIcon(item) || this.hasIconImage(item)) {\n      <div class=\"icon\">\n        @if (this.hasFontIcon(item)) {\n          <span class=\"icon-material\">\n            <ta-font-icon [name]=\"this.getFontIcon(item)\"></ta-font-icon>\n          </span>\n        } @else if (this.hasIconImage(item)) {\n          <span class=\"icon-image\">\n            <ta-local-icon [type]=\"this.getIcon(item)\" size=\"xs\"></ta-local-icon>\n          </span>\n        }\n      </div>\n    }\n    @if (item.label) {\n      <div class=\"text-truncate\">\n        {{ item.label | translate }}\n      </div>\n    }\n    @if (item.options?.notificationBadge !== null) {\n      <div class=\"badge ml-space-xs\">\n        {{ item.options?.notificationBadge?.label }}\n      </div>\n    }\n    @if (item.translationData?.length) {\n      <div>({{ item.translationData?.length }})</div>\n    }\n  </div>\n</ng-template>\n", styles: [".toggle-container{border-bottom:1px solid var(--ta-neutral-300)}.toggle-container.switch-container{overflow:hidden}.toggle-container .badge{width:20px;height:20px;background-color:var(--ta-brand-700);color:var(--ta-brand-50);border-radius:50%;display:flex;justify-content:center;align-items:center}.toggle-container .toggle-element{color:var(--ta-neutral-800);font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-bold-weight);cursor:pointer}.toggle-container .toggle-element .icon{margin:auto;color:var(--ta-brand-700)}.toggle-container .toggle-element.active .icon{color:var(--ta-icon-brand-primary)}.toggle-container.switch{border-radius:var(--ta-space-xs)}.toggle-container.switch .toggle-element{background:var(--ta-surface-secondary)}.toggle-container.switch .toggle-element.disabled{opacity:.5}.toggle-container.switch .toggle-element.active{background:var(--ta-brand-700);color:var(--ta-neutral-50)}.toggle-container.tab .toggle-element.disabled{opacity:.5}.toggle-container.tab .toggle-element.active{color:var(--ta-text-brand-primary);border-bottom:2px solid var(--ta-border-brand)}.label{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "ngmodule", type: RouterModule }, { kind: "directive", type: i1$1.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i1$1.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "ariaCurrentWhenActive", "routerLinkActive"], outputs: ["isActiveChange"], exportAs: ["routerLinkActive"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i2.TranslatePipe, name: "translate" }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: LocalIconComponent, selector: "ta-local-icon", inputs: ["type", "size", "rotation"] }, { kind: "component", type: SwiperLightComponent, selector: "ta-swiper-light", inputs: ["items", "template", "swiperClasses", "containerClasses", "forced"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ToggleNavigationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-toggle-navigation', standalone: true, imports: [NgIf, NgClass, NgTemplateOutlet, RouterModule, TranslateModule, FontIconComponent, LocalIconComponent, SwiperLightComponent], template: "<div class=\"toggle-container\" [ngClass]=\"this.containerCss\" [class.switch-container]=\"this.container === 'switch'\">\n  <ta-swiper-light\n    [items]=\"this.menu.elements\"\n    [template]=\"template\"\n    [forced]=\"true\"\n    swiperClasses=\"g-space-lg pt-space-md\"\n  ></ta-swiper-light>\n</div>\n\n<ng-template #template let-element=\"element\">\n  @if (element.callback || element.disabled) {\n    <div\n      (click)=\"this.callback(element)\"\n      class=\"toggle-element\"\n      [class.active]=\"this.isActive(element)\"\n      [class.disabled]=\"element.disabled\"\n    >\n      <ng-template\n        [ngTemplateOutlet]=\"Item\"\n        [ngTemplateOutletContext]=\"{\n          item: element,\n        }\"\n      >\n      </ng-template>\n    </div>\n  } @else {\n    <div\n      class=\"toggle-element\"\n      routerLinkActive=\"active\"\n      [routerLinkActiveOptions]=\"{ exact: element.exact }\"\n      [routerLink]=\"[this.getLink(element)]\"\n      [queryParamsHandling]=\"element.queryParamsHandling\"\n      [replaceUrl]=\"element.replaceUrl\"\n      [ngClass]=\"{ disabled: element.disabled }\"\n    >\n      <ng-template\n        [ngTemplateOutlet]=\"Item\"\n        [ngTemplateOutletContext]=\"{\n          item: element,\n        }\"\n      >\n      </ng-template>\n    </div>\n  }\n</ng-template>\n\n<ng-template #Item let-item=\"item\" [typedTemplate]=\"this.typeItem\">\n  <div class=\"label flex-row align-center mb-space-xs\">\n    @if (this.hasFontIcon(item) || this.hasIconImage(item)) {\n      <div class=\"icon\">\n        @if (this.hasFontIcon(item)) {\n          <span class=\"icon-material\">\n            <ta-font-icon [name]=\"this.getFontIcon(item)\"></ta-font-icon>\n          </span>\n        } @else if (this.hasIconImage(item)) {\n          <span class=\"icon-image\">\n            <ta-local-icon [type]=\"this.getIcon(item)\" size=\"xs\"></ta-local-icon>\n          </span>\n        }\n      </div>\n    }\n    @if (item.label) {\n      <div class=\"text-truncate\">\n        {{ item.label | translate }}\n      </div>\n    }\n    @if (item.options?.notificationBadge !== null) {\n      <div class=\"badge ml-space-xs\">\n        {{ item.options?.notificationBadge?.label }}\n      </div>\n    }\n    @if (item.translationData?.length) {\n      <div>({{ item.translationData?.length }})</div>\n    }\n  </div>\n</ng-template>\n", styles: [".toggle-container{border-bottom:1px solid var(--ta-neutral-300)}.toggle-container.switch-container{overflow:hidden}.toggle-container .badge{width:20px;height:20px;background-color:var(--ta-brand-700);color:var(--ta-brand-50);border-radius:50%;display:flex;justify-content:center;align-items:center}.toggle-container .toggle-element{color:var(--ta-neutral-800);font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-bold-weight);cursor:pointer}.toggle-container .toggle-element .icon{margin:auto;color:var(--ta-brand-700)}.toggle-container .toggle-element.active .icon{color:var(--ta-icon-brand-primary)}.toggle-container.switch{border-radius:var(--ta-space-xs)}.toggle-container.switch .toggle-element{background:var(--ta-surface-secondary)}.toggle-container.switch .toggle-element.disabled{opacity:.5}.toggle-container.switch .toggle-element.active{background:var(--ta-brand-700);color:var(--ta-neutral-50)}.toggle-container.tab .toggle-element.disabled{opacity:.5}.toggle-container.tab .toggle-element.active{color:var(--ta-text-brand-primary);border-bottom:2px solid var(--ta-border-brand)}.label{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { menu: [{
                type: Input
            }], container: [{
                type: Input
            }] } });

class ContextMenuComponent extends TaBaseComponent {
    constructor() {
        super();
        CamTranslationMenu.getInstance();
    }
    hasFontIcon(item) {
        return hasFontIcon(item);
    }
    hasIconImage(item) {
        return hasIconImage(item);
    }
    getIcon(item) {
        return getIcon(item);
    }
    getFontIcon(item) {
        return getFontIcon(item);
    }
    getLink(item) {
        if (item.link && item.link !== '')
            return item.link;
        return '';
    }
    getRoute(item) {
        return item.disabled ? [] : [this.getLink(item)];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ContextMenuComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: ContextMenuComponent, isStandalone: true, selector: "ta-context-menu", inputs: { menu: "menu" }, usesInheritance: true, ngImport: i0, template: "<ul class=\"context-menu row\">\n  @for (item of this.menu.elements; track this.trackByKey($index, item)) {\n    @if ((item.visible$ | async) === true) {\n      <li class=\"col-6 col-md-4 col-lg-2\">\n        <div\n          class=\"element\"\n          routerLinkActive=\"active\"\n          [routerLinkActiveOptions]=\"{ exact: item.exact }\"\n          [routerLink]=\"this.getRoute(item)\"\n          [queryParamsHandling]=\"item.queryParamsHandling\"\n          [class.disabled]=\"item.disabled\"\n        >\n          <div class=\"icon align-self-center\">\n            @if (this.hasFontIcon(item)) {\n              <span class=\"icon-material\">\n                <ta-font-icon [name]=\"this.getFontIcon(item)\" size=\"xs\"></ta-font-icon>\n              </span>\n            }\n            @if (this.hasIconImage(item)) {\n              <span class=\"icon-image\">\n                <ta-local-icon [type]=\"this.getIcon(item)\" size=\"xs\"></ta-local-icon>\n              </span>\n            }\n          </div>\n          <div class=\"label align-self-center\">\n            {{ item.label | translate }}\n          </div>\n        </div>\n      </li>\n    }\n  }\n</ul>\n", styles: [".context-menu{list-style:none;padding:0;margin:0}.context-menu .disabled{opacity:.5}.context-menu .element{text-align:center;border:1px solid var(--ta-neutral-400);padding:var(--ta-space-md) 0;margin-bottom:var(--ta-space-sm);border-radius:var(--ta-space-md)}.context-menu .element .icon{color:var(--ta-surface-brand-primary)}.context-menu .element .label{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-bold-weight);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:var(--ta-space-xs)}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "ngmodule", type: RouterModule }, { kind: "directive", type: i1$1.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i1$1.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "ariaCurrentWhenActive", "routerLinkActive"], outputs: ["isActiveChange"], exportAs: ["routerLinkActive"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i2.TranslatePipe, name: "translate" }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: LocalIconComponent, selector: "ta-local-icon", inputs: ["type", "size", "rotation"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ContextMenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-context-menu', standalone: true, imports: [NgIf, NgFor, AsyncPipe, RouterModule, TranslateModule, FontIconComponent, LocalIconComponent], template: "<ul class=\"context-menu row\">\n  @for (item of this.menu.elements; track this.trackByKey($index, item)) {\n    @if ((item.visible$ | async) === true) {\n      <li class=\"col-6 col-md-4 col-lg-2\">\n        <div\n          class=\"element\"\n          routerLinkActive=\"active\"\n          [routerLinkActiveOptions]=\"{ exact: item.exact }\"\n          [routerLink]=\"this.getRoute(item)\"\n          [queryParamsHandling]=\"item.queryParamsHandling\"\n          [class.disabled]=\"item.disabled\"\n        >\n          <div class=\"icon align-self-center\">\n            @if (this.hasFontIcon(item)) {\n              <span class=\"icon-material\">\n                <ta-font-icon [name]=\"this.getFontIcon(item)\" size=\"xs\"></ta-font-icon>\n              </span>\n            }\n            @if (this.hasIconImage(item)) {\n              <span class=\"icon-image\">\n                <ta-local-icon [type]=\"this.getIcon(item)\" size=\"xs\"></ta-local-icon>\n              </span>\n            }\n          </div>\n          <div class=\"label align-self-center\">\n            {{ item.label | translate }}\n          </div>\n        </div>\n      </li>\n    }\n  }\n</ul>\n", styles: [".context-menu{list-style:none;padding:0;margin:0}.context-menu .disabled{opacity:.5}.context-menu .element{text-align:center;border:1px solid var(--ta-neutral-400);padding:var(--ta-space-md) 0;margin-bottom:var(--ta-space-sm);border-radius:var(--ta-space-md)}.context-menu .element .icon{color:var(--ta-surface-brand-primary)}.context-menu .element .label{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-bold-weight);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:var(--ta-space-xs)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { menu: [{
                type: Input
            }] } });

class NavigationComponent extends TaAbstractComponent {
    constructor() {
        super();
        this.swiper = false;
        this.options = {};
        this.hasFontIcon = hasFontIcon;
        this.getFontIcon = getFontIcon;
        this.activeKey = '';
        CamTranslationMenu.getInstance();
    }
    ngOnInit() {
        const defaultOpen = this.menu.elements.find(e => e.defaultOpen);
        if (!defaultOpen || !defaultOpen.callback) {
            return;
        }
        this.callback(defaultOpen);
        if (this.manuallyChanged$) {
            this._registerSubscription(this.manuallyChanged$.subscribe({
                next: (key) => {
                    const found = this.menu.elements.find(element => element.key === key);
                    if (found) {
                        this.callback(found);
                    }
                },
            }));
        }
    }
    getSpaceClass() {
        if (this.options.spaceElement === null) {
            return '';
        }
        return `g-space-${this.options.spaceElement ?? 'lg'}`;
    }
    getLink(item) {
        if (item.link && item.link !== '') {
            return item.link;
        }
        return ''; // TODO this._navigationService.currentPageUrl;
    }
    callback(item) {
        if (item.disabled) {
            return;
        }
        this.activeKey = item.key;
        if (item.callback) {
            item.callback();
        }
    }
    isActive(item) {
        return item.key === this.activeKey;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: NavigationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: NavigationComponent, isStandalone: true, selector: "ta-menu-navigation", inputs: { menu: "menu", container: "container", swiper: "swiper", options: "options", manuallyChanged$: "manuallyChanged$" }, usesInheritance: true, ngImport: i0, template: "<div class=\"navigation-container\" [class]=\"this.container\">\n  <div class=\"list\">\n    @if (this.swiper) {\n      <ta-swiper-light\n        [items]=\"this.menu.elements\"\n        [template]=\"template\"\n        [forced]=\"true\"\n        [swiperClasses]=\"this.getSpaceClass()\"\n      ></ta-swiper-light>\n    } @else {\n      <div class=\"element-list\" [ngClass]=\"this.menu.direction + ' ' + this.getSpaceClass()\">\n        @for (element of this.menu.elements; track element) {\n          <div class=\"element\">\n            <ng-template\n              [ngTemplateOutlet]=\"template\"\n              [ngTemplateOutletContext]=\"{\n                element: element,\n              }\"\n            >\n            </ng-template>\n          </div>\n        }\n      </div>\n    }\n  </div>\n</div>\n\n<ng-template #template let-element=\"element\">\n  <ta-notification-badge-container class=\"c-pointer\">\n    @if (element.callback || element.disabled) {\n      <div\n        (click)=\"this.callback(element)\"\n        class=\"item-container\"\n        [ngClass]=\"{ active: this.isActive(element), disabled: element.disabled }\"\n      >\n        <ng-template\n          [ngTemplateOutlet]=\"Item\"\n          [ngTemplateOutletContext]=\"{\n            item: element,\n          }\"\n        >\n        </ng-template>\n      </div>\n    } @else {\n      <div\n        class=\"item-container\"\n        routerLinkActive=\"active\"\n        [routerLinkActiveOptions]=\"{ exact: element.exact }\"\n        [routerLink]=\"[this.getLink(element)]\"\n        [queryParamsHandling]=\"element.queryParamsHandling\"\n      >\n        <ng-template\n          [ngTemplateOutlet]=\"Item\"\n          [ngTemplateOutletContext]=\"{\n            item: element,\n          }\"\n        >\n        </ng-template>\n      </div>\n    }\n    @if (element.options?.notificationBadge?.label) {\n      <ta-notification-badge\n        [number]=\"element.options?.notificationBadge?.label || 0\"\n        [style]=\"element.options?.notificationBadge?.style\"\n        fontSize=\"xs\"\n      ></ta-notification-badge>\n    }\n  </ta-notification-badge-container>\n</ng-template>\n\n<ng-template #Item let-item=\"item\" [typedTemplate]=\"this.typeItem\">\n  <div class=\"item\" [class.disabled]=\"item.disabled\">\n    @if (this.hasFontIcon(item)) {\n      <div class=\"icon\">\n        <ta-font-icon [name]=\"this.getFontIcon(item)\"></ta-font-icon>\n      </div>\n    }\n    @if (item.label) {\n      <div class=\"label\">\n        {{ item.label | translate }}\n      </div>\n    }\n    @if (item.translationData?.length) {\n      <div class=\"bullet\">({{ item.translationData?.length }})</div>\n    }\n  </div>\n</ng-template>\n", styles: [".element-list{gap:var(--ta-space-md);display:flex;flex-direction:row}.element-list.vertical{display:flex;flex-direction:column}.tags .item-container .item{flex-direction:row;display:flex;align-items:center;gap:var(--ta-space-xs);padding:var(--ta-space-md);border:1px solid transparent;color:var(--ta-text-tertiary);background-color:var(--ta-surface-tertiary);border-color:var(--ta-surface-tertiary);border-radius:var(--ta-radius-rounded);font-size:var(--ta-font-body-sm-default-size);line-height:var(--ta-font-body-sm-default-line);font-weight:var(--ta-font-body-sm-default-weight)}.tags .item-container.disabled .item{background-color:var(--ta-surface-primary);border-color:var(--ta-border-disabled)}.tags .item-container.active .item{color:var(--ta-text-brand-primary);background-color:var(--ta-surface-default);border-color:var(--ta-surface-default)}.tab .list{border-bottom:1px solid var(--ta-border-secondary)}.tab .item-container .item{flex-direction:row;display:flex;align-items:center;gap:var(--ta-space-xs);padding:var(--ta-space-md);border-bottom:2px solid transparent;color:var(--ta-text-tertiary);font-size:var(--ta-font-body-sm-default-size);line-height:var(--ta-font-body-sm-default-line);font-weight:var(--ta-font-body-sm-default-weight)}.tab .item-container.disabled{opacity:.5}.tab .item-container.active .item{color:var(--ta-text-brand-primary);border-bottom-color:var(--ta-border-brand)}:host ::ng-deep .swiper-container{gap:var(--ta-space-sm)!important}:host ::ng-deep ta-font-icon{margin-top:-6px;display:block}:host ::ng-deep ta-font-icon i{height:18px!important;font-size:18px!important}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "ngmodule", type: RouterModule }, { kind: "directive", type: i1$1.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i1$1.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "ariaCurrentWhenActive", "routerLinkActive"], outputs: ["isActiveChange"], exportAs: ["routerLinkActive"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i2.TranslatePipe, name: "translate" }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: NotificationBadgeComponent, selector: "ta-notification-badge", inputs: ["number", "fontSize", "style", "relative"] }, { kind: "component", type: NotificationBadgeContainerComponent, selector: "ta-notification-badge-container" }, { kind: "component", type: SwiperLightComponent, selector: "ta-swiper-light", inputs: ["items", "template", "swiperClasses", "containerClasses", "forced"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: NavigationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-menu-navigation', standalone: true, imports: [
                        NgIf,
                        NgFor,
                        NgClass,
                        NgTemplateOutlet,
                        RouterModule,
                        TranslateModule,
                        FontIconComponent,
                        NotificationBadgeComponent,
                        NotificationBadgeContainerComponent,
                        SwiperLightComponent,
                    ], template: "<div class=\"navigation-container\" [class]=\"this.container\">\n  <div class=\"list\">\n    @if (this.swiper) {\n      <ta-swiper-light\n        [items]=\"this.menu.elements\"\n        [template]=\"template\"\n        [forced]=\"true\"\n        [swiperClasses]=\"this.getSpaceClass()\"\n      ></ta-swiper-light>\n    } @else {\n      <div class=\"element-list\" [ngClass]=\"this.menu.direction + ' ' + this.getSpaceClass()\">\n        @for (element of this.menu.elements; track element) {\n          <div class=\"element\">\n            <ng-template\n              [ngTemplateOutlet]=\"template\"\n              [ngTemplateOutletContext]=\"{\n                element: element,\n              }\"\n            >\n            </ng-template>\n          </div>\n        }\n      </div>\n    }\n  </div>\n</div>\n\n<ng-template #template let-element=\"element\">\n  <ta-notification-badge-container class=\"c-pointer\">\n    @if (element.callback || element.disabled) {\n      <div\n        (click)=\"this.callback(element)\"\n        class=\"item-container\"\n        [ngClass]=\"{ active: this.isActive(element), disabled: element.disabled }\"\n      >\n        <ng-template\n          [ngTemplateOutlet]=\"Item\"\n          [ngTemplateOutletContext]=\"{\n            item: element,\n          }\"\n        >\n        </ng-template>\n      </div>\n    } @else {\n      <div\n        class=\"item-container\"\n        routerLinkActive=\"active\"\n        [routerLinkActiveOptions]=\"{ exact: element.exact }\"\n        [routerLink]=\"[this.getLink(element)]\"\n        [queryParamsHandling]=\"element.queryParamsHandling\"\n      >\n        <ng-template\n          [ngTemplateOutlet]=\"Item\"\n          [ngTemplateOutletContext]=\"{\n            item: element,\n          }\"\n        >\n        </ng-template>\n      </div>\n    }\n    @if (element.options?.notificationBadge?.label) {\n      <ta-notification-badge\n        [number]=\"element.options?.notificationBadge?.label || 0\"\n        [style]=\"element.options?.notificationBadge?.style\"\n        fontSize=\"xs\"\n      ></ta-notification-badge>\n    }\n  </ta-notification-badge-container>\n</ng-template>\n\n<ng-template #Item let-item=\"item\" [typedTemplate]=\"this.typeItem\">\n  <div class=\"item\" [class.disabled]=\"item.disabled\">\n    @if (this.hasFontIcon(item)) {\n      <div class=\"icon\">\n        <ta-font-icon [name]=\"this.getFontIcon(item)\"></ta-font-icon>\n      </div>\n    }\n    @if (item.label) {\n      <div class=\"label\">\n        {{ item.label | translate }}\n      </div>\n    }\n    @if (item.translationData?.length) {\n      <div class=\"bullet\">({{ item.translationData?.length }})</div>\n    }\n  </div>\n</ng-template>\n", styles: [".element-list{gap:var(--ta-space-md);display:flex;flex-direction:row}.element-list.vertical{display:flex;flex-direction:column}.tags .item-container .item{flex-direction:row;display:flex;align-items:center;gap:var(--ta-space-xs);padding:var(--ta-space-md);border:1px solid transparent;color:var(--ta-text-tertiary);background-color:var(--ta-surface-tertiary);border-color:var(--ta-surface-tertiary);border-radius:var(--ta-radius-rounded);font-size:var(--ta-font-body-sm-default-size);line-height:var(--ta-font-body-sm-default-line);font-weight:var(--ta-font-body-sm-default-weight)}.tags .item-container.disabled .item{background-color:var(--ta-surface-primary);border-color:var(--ta-border-disabled)}.tags .item-container.active .item{color:var(--ta-text-brand-primary);background-color:var(--ta-surface-default);border-color:var(--ta-surface-default)}.tab .list{border-bottom:1px solid var(--ta-border-secondary)}.tab .item-container .item{flex-direction:row;display:flex;align-items:center;gap:var(--ta-space-xs);padding:var(--ta-space-md);border-bottom:2px solid transparent;color:var(--ta-text-tertiary);font-size:var(--ta-font-body-sm-default-size);line-height:var(--ta-font-body-sm-default-line);font-weight:var(--ta-font-body-sm-default-weight)}.tab .item-container.disabled{opacity:.5}.tab .item-container.active .item{color:var(--ta-text-brand-primary);border-bottom-color:var(--ta-border-brand)}:host ::ng-deep .swiper-container{gap:var(--ta-space-sm)!important}:host ::ng-deep ta-font-icon{margin-top:-6px;display:block}:host ::ng-deep ta-font-icon i{height:18px!important;font-size:18px!important}\n"] }]
        }], ctorParameters: () => [], propDecorators: { menu: [{
                type: Input
            }], container: [{
                type: Input
            }], swiper: [{
                type: Input
            }], options: [{
                type: Input
            }], manuallyChanged$: [{
                type: Input
            }] } });

class Menu {
    constructor(options = {}) {
        this.direction = 'responsive';
        this.direction = options.direction || 'responsive';
        this.elements = options.elements || [];
    }
}

class MenuBase {
    constructor(options = {}) {
        this.key = options.key || '';
        this.label = options.label || '';
        this.order = options.order === undefined ? 1 : options.order;
        this.link = options.link || '';
        this.callback = options.callback;
        this.style = options.style || 'bloc';
        this.children = options.children || [];
        this.visible$ = options.visible$ || of(true);
        this.defaultOpen = options.defaultOpen === undefined ? false : options.defaultOpen;
        this.exact = options.exact === undefined ? false : options.exact;
        this.replaceUrl = isNonNullable(options.replaceUrl) ? options.replaceUrl : false;
        this.queryParamsHandling = options.queryParamsHandling ?? '';
        this.disabled = options.disabled === undefined ? false : options.disabled;
        this.translationData = options.translationData;
        this.endingIcon = options.endingIcon;
        this.iconsColor = options.iconsColor;
        this.options = options.options;
    }
    get isMenuPanel() {
        return false;
    }
}

class MenuIcon extends MenuBase {
    constructor(options) {
        super(options);
        this.icon = options.icon || '';
    }
}

class MenuPanel extends MenuIcon {
    get isMenuPanel() {
        return true;
    }
    constructor(options) {
        super(options);
        this.template = options.template;
    }
}

var TaMainRoute;
(function (TaMainRoute) {
    TaMainRoute["HOME"] = "HOME";
    TaMainRoute["USERLOGIN"] = "USERLOGIN";
    TaMainRoute["USERLOGOUT"] = "USERLOGOUT";
    TaMainRoute["NOTIFICATIONS"] = "NOTIFICATIONS";
    TaMainRoute["REDIRECT"] = "REDIRECT";
})(TaMainRoute || (TaMainRoute = {}));
class TaRoutesCore {
    constructor() {
        this.routes = [
            {
                key: TaMainRoute.HOME,
                url: '',
            },
            {
                key: TaMainRoute.USERLOGIN,
                url: 'login',
            },
            {
                key: TaMainRoute.USERLOGOUT,
                url: 'logout',
            },
            {
                key: TaMainRoute.NOTIFICATIONS,
                url: 'notifications',
            },
            {
                key: TaMainRoute.REDIRECT,
                url: 'redirect',
            },
        ];
    }
    addRoute(route) {
        this.routes.push(route);
    }
    addRoutes(routes) {
        routes.forEach(route => this.addRoute(route));
    }
    getHome() {
        return this.getAbsoluteUrl([TaMainRoute.HOME]);
    }
    getLogin() {
        return this.getAbsoluteUrl([TaMainRoute.USERLOGIN]);
    }
    getLogout() {
        return this.getAbsoluteUrl([TaMainRoute.USERLOGOUT]);
    }
    getUrl(eNums, params = {}, strict = false) {
        const url = this._replaceParams(this._getUrl(eNums), params);
        return strict ? this._removeParams(url) : url;
    }
    getAbsoluteUrl(eNums, params = {}, strict = false) {
        const url = this._replaceParams(this._getUrl(eNums, true), params);
        return strict ? this._removeParams(url) : url;
    }
    addQueryParamsToUrl(route, params = {}) {
        const keys = Object.keys(params);
        for (let key of keys) {
            route.params[key] = params[key];
        }
        return route.toString();
    }
    getPermission(eNums) {
        const route = this._getRouteByENum(eNums);
        if (route === null) {
            return true;
        }
        else {
            return route.canActivate === undefined ? true : route.canActivate;
        }
    }
    _replaceParams(url, params) {
        if (!params || Object.keys(params).length === 0) {
            return url;
        }
        // Create regex using the keys of the replacement object.
        const regex = new RegExp(':(' + Object.keys(params).join('|') + ')', 'g');
        // Replace the string by the value in object
        return url.replace(regex, (m, $1) => params[$1] || m);
    }
    _removeParams(url) {
        const regex = new RegExp('/:([a-zA-Z0-9_]*)', 'g');
        return url.replace(regex, '');
    }
    _getRouteByENum(eNums) {
        let route = null;
        for (const eNum of eNums) {
            route = this._getByENum(route === null ? this.routes : route.children, eNum);
            if (route === null) {
                return null;
            }
        }
        return route;
    }
    _getUrl(eNums, absolute = false) {
        let route = null;
        let url = '';
        for (const eNum of eNums) {
            route = this._getByENum(route === null ? this.routes : route.children, eNum);
            if (route === null) {
                break;
            }
            url += (url === '' ? '' : '/') + route.url;
        }
        return route === null ? '' : absolute === false ? route.url : '/' + url;
    }
    _getByENum(routes, eNum) {
        if (!routes) {
            return null;
        }
        for (const route of routes) {
            if (route.key === eNum) {
                return route;
            }
        }
        return null;
    }
}
const TaRoutes = new TaRoutesCore();

class FilterHelper {
    get filter() {
        return this._filter;
    }
    set filter(filter) {
        this._filter = filter;
        this.refresh$.next(this._filter);
    }
    constructor(items) {
        this.refresh$ = new BehaviorSubject('');
        this._filter = '';
        this._items = items;
    }
    getMenu() {
        return new Menu({
            elements: this._items.map(item => {
                const key = this._getKey(item.label);
                return new MenuBase({
                    key: key,
                    label: item.label,
                    callback: () => (this.filter = key),
                    defaultOpen: item.defaultOpen,
                    order: item.order,
                    visible$: item.visible$,
                    translationData: item.translationData,
                    options: item.options,
                });
            }),
            direction: 'responsive',
        });
    }
    updateMenuDatas(data) {
        for (const item of data) {
            const itemToModify = this._items.find(x => this._getKey(x.label) === item.key);
            if (itemToModify) {
                itemToModify.translationData = item.translationData;
                itemToModify.options = item.options;
                if (item.visible$) {
                    itemToModify.visible$ = item.visible$;
                }
            }
        }
    }
    _getKey(label) {
        const lastDot = label.lastIndexOf('.');
        if (lastDot !== -1) {
            return label.substring(lastDot + 1);
        }
        else {
            return label;
        }
    }
}

class ListComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ListComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: ListComponent, isStandalone: true, selector: "ta-list", inputs: { menu: "menu" }, ngImport: i0, template: "<ta-list-container class=\"content\">\n  @for (item of this.menu.elements; track item) {\n    <ta-list-element>\n      <ta-list-title>\n        <div>\n          @if (item.icon) {\n            <ta-font-icon [name]=\"$any(item.icon)\"></ta-font-icon>\n          }\n          {{ item.label }}\n        </div>\n      </ta-list-title>\n    </ta-list-element>\n  }\n</ta-list-container>\n", styles: [""], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: ListContainerComponent, selector: "ta-list-container" }, { kind: "component", type: ListElementComponent, selector: "ta-list-element", inputs: ["withSeparator", "flexColumn"], outputs: ["action"] }, { kind: "component", type: ListTitleComponent, selector: "ta-list-title" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-list', standalone: true, imports: [NgIf, NgFor, FontIconComponent, ListContainerComponent, ListElementComponent, ListTitleComponent], template: "<ta-list-container class=\"content\">\n  @for (item of this.menu.elements; track item) {\n    <ta-list-element>\n      <ta-list-title>\n        <div>\n          @if (item.icon) {\n            <ta-font-icon [name]=\"$any(item.icon)\"></ta-font-icon>\n          }\n          {{ item.label }}\n        </div>\n      </ta-list-title>\n    </ta-list-element>\n  }\n</ta-list-container>\n" }]
        }], propDecorators: { menu: [{
                type: Input
            }] } });

/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { CamMenuModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { MenuComponent, MenuItemComponent, BottomSheetTemplateBasicComponent } from '@ta/library-name';
 */
class CamMenuModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamMenuModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: CamMenuModule, imports: [CamUiModule, CamSwiperModule, CamContainerModule, CamDirectivePipeModule, CamLayoutModule, CamListModule, CommonModule, RouterModule, CamIconsModule, MatMenuModule, TranslatePipe, MenuComponent, MenuItemComponent, BottomSheetTemplateBasicComponent, QuickActionsComponent, QuickActionsCustomComponent, ToggleNavigationComponent, ContextMenuComponent, BottomSheetTemplateGenericComponent, MainMenuComponent, ListComponent, NavigationComponent], exports: [MenuComponent,
            MenuItemComponent,
            BottomSheetTemplateBasicComponent,
            QuickActionsComponent,
            QuickActionsCustomComponent,
            ToggleNavigationComponent,
            ContextMenuComponent,
            BottomSheetTemplateGenericComponent,
            MainMenuComponent,
            NavigationComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamMenuModule, imports: [CamUiModule, CamSwiperModule, CamContainerModule, CamDirectivePipeModule, CamLayoutModule, CamListModule, CommonModule, RouterModule, CamIconsModule, MatMenuModule, MenuComponent, MenuItemComponent, BottomSheetTemplateBasicComponent, QuickActionsComponent, QuickActionsCustomComponent, ToggleNavigationComponent, ContextMenuComponent, MainMenuComponent, ListComponent, NavigationComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamMenuModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [CamUiModule, CamSwiperModule, CamContainerModule, CamDirectivePipeModule, CamLayoutModule, CamListModule, CommonModule, RouterModule, CamIconsModule, MatMenuModule, TranslatePipe, MenuComponent, MenuItemComponent, BottomSheetTemplateBasicComponent, QuickActionsComponent, QuickActionsCustomComponent, ToggleNavigationComponent, ContextMenuComponent, BottomSheetTemplateGenericComponent, MainMenuComponent, ListComponent, NavigationComponent],
                    exports: [
                        MenuComponent,
                        MenuItemComponent,
                        BottomSheetTemplateBasicComponent,
                        QuickActionsComponent,
                        QuickActionsCustomComponent,
                        ToggleNavigationComponent,
                        ContextMenuComponent,
                        BottomSheetTemplateGenericComponent,
                        MainMenuComponent,
                        NavigationComponent,
                    ],
                }]
        }] });

/*
 * Public API Surface of menu
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BottomSheetTemplateBasicComponent, BottomSheetTemplateGenericComponent, CamMenuModule, ContextMenuComponent, FilterHelper, MainMenuComponent, Menu, MenuBase, MenuComponent, MenuIcon, MenuItemComponent, MenuPanel, NavigationComponent, QuickActionsComponent, QuickActionsCustomComponent, TaMainRoute, TaRoutes, TaRoutesCore, ToggleNavigationComponent };
//# sourceMappingURL=ta-menu.mjs.map
