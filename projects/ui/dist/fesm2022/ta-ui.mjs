import * as i1$4 from '@angular/common';
import { NgClass, NgIf, NgFor, NgStyle, DatePipe, NgTemplateOutlet, DecimalPipe, AsyncPipe, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Output, Input, Component, ViewChild, NgModule, Inject, CUSTOM_ELEMENTS_SCHEMA, inject, ViewEncapsulation, InjectionToken, Injector, Optional, ContentChild } from '@angular/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import * as i1$3 from '@angular/material/dialog';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i1$1 from '@angular/material/expansion';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { FontIconComponent, isFontIcon, getFontIcon, isLocalIcon, LocalIconComponent, MaterialIconComponent, CamIconType, CamIconsModule, CamIconsService } from '@ta/icons';
import { CamLazyTranslationService, TranslatePipe } from '@ta/translation';
import { StopPropagationDirective, Civility, PluralTranslatePipe, TaBaseComponent, extractExtension, roundToDecimal, octetsToMo, call, sendMail, CamDirectivePipeModule, CamBaseModal, createRange } from '@ta/utils';
import { register } from 'swiper/element/bundle';
import * as i1 from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { intervalToDuration, differenceInCalendarDays } from 'date-fns';
import { LocalStorage } from 'storage-manager-js';
import * as i1$2 from '@ta/capacitor';
import * as i2 from '@angular/material/menu';
import { MatMenuModule } from '@angular/material/menu';
import { CamSharedMenuService } from '@ta/services';
import { combineLatest, startWith, map, Subject } from 'rxjs';
import { MatDrawer, MatDrawerContainer, MatSidenavModule } from '@angular/material/sidenav';
import * as i1$5 from '@angular/material/progress-spinner';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import * as i1$6 from '@angular/cdk/overlay';
import { OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { CamBaseService } from '@ta/server';

class CamTranslationUI extends CamLazyTranslationService {
    constructor() {
        super('ui');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamTranslationUI, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamTranslationUI, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamTranslationUI, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

class BadgeComponent {
    constructor() {
        /**
         * Style of badge
         */
        this.type = 'primary';
        /**
         * @deprecated
         * showClickOption
         */
        this.showClickOption = false;
        this.clickAction = new EventEmitter();
        CamTranslationUI.getInstance();
    }
    getClass() {
        return `badge-${this.type}`;
    }
    click() {
        this.clickAction.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BadgeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: BadgeComponent, isStandalone: true, selector: "ta-badge", inputs: { value: "value", type: "type", showClickOption: "showClickOption", icon: "icon" }, outputs: { clickAction: "clickAction" }, ngImport: i0, template: "<span class=\"badge-container\" [ngClass]=\"this.getClass()\" (click)=\"this.click()\">\n  <span class=\"value\">{{ this.value | translate }}</span>\n  @if (this.icon) {\n    <ta-font-icon class=\"ml-space-xs\" [name]=\"icon\" type=\"xs\"></ta-font-icon>\n  }\n  @if (this.showClickOption) {\n    <ta-font-icon name=\"arrow-small\" type=\"xs\"></ta-font-icon>\n  }\n</span>\n", styles: [".badge-container{display:flex;width:fit-content;padding:var(--ta-space-sm) var(--ta-space-xs);font-size:var(--ta-font-body-xs-default-size);line-height:var(--ta-font-body-xs-default-line);font-weight:var(--ta-font-body-xs-bold-weight);border-radius:6px}.badge-container .value{white-space:nowrap}.badge-info{color:var(--ta-semantic-purple-dark);background:var(--ta-semantic-purple-light)}.badge-danger{color:var(--ta-semantic-red-dark);background:var(--ta-semantic-red-light)}.badge-warning{color:var(--ta-semantic-yellow-dark);background:var(--ta-semantic-yellow-light)}.badge-success{color:var(--ta-semantic-green-dark);background:var(--ta-semantic-green-light)}.badge-primary{color:var(--ta-brand-800);background:var(--ta-brand-300)}.badge-secondary{color:var(--ta-neutral-black);background:var(--ta-brand-300)}.badge-purple{color:var(--ta-semantic-purple-dark);background:var(--ta-semantic-purple-light)}.badge-orange{color:var(--ta-semantic-orange-dark);background:var(--ta-semantic-orange-light)}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BadgeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-badge', standalone: true, imports: [NgIf, NgClass, FontIconComponent, TranslateModule], template: "<span class=\"badge-container\" [ngClass]=\"this.getClass()\" (click)=\"this.click()\">\n  <span class=\"value\">{{ this.value | translate }}</span>\n  @if (this.icon) {\n    <ta-font-icon class=\"ml-space-xs\" [name]=\"icon\" type=\"xs\"></ta-font-icon>\n  }\n  @if (this.showClickOption) {\n    <ta-font-icon name=\"arrow-small\" type=\"xs\"></ta-font-icon>\n  }\n</span>\n", styles: [".badge-container{display:flex;width:fit-content;padding:var(--ta-space-sm) var(--ta-space-xs);font-size:var(--ta-font-body-xs-default-size);line-height:var(--ta-font-body-xs-default-line);font-weight:var(--ta-font-body-xs-bold-weight);border-radius:6px}.badge-container .value{white-space:nowrap}.badge-info{color:var(--ta-semantic-purple-dark);background:var(--ta-semantic-purple-light)}.badge-danger{color:var(--ta-semantic-red-dark);background:var(--ta-semantic-red-light)}.badge-warning{color:var(--ta-semantic-yellow-dark);background:var(--ta-semantic-yellow-light)}.badge-success{color:var(--ta-semantic-green-dark);background:var(--ta-semantic-green-light)}.badge-primary{color:var(--ta-brand-800);background:var(--ta-brand-300)}.badge-secondary{color:var(--ta-neutral-black);background:var(--ta-brand-300)}.badge-purple{color:var(--ta-semantic-purple-dark);background:var(--ta-semantic-purple-light)}.badge-orange{color:var(--ta-semantic-orange-dark);background:var(--ta-semantic-orange-light)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { value: [{
                type: Input
            }], type: [{
                type: Input
            }], showClickOption: [{
                type: Input
            }], icon: [{
                type: Input
            }], clickAction: [{
                type: Output
            }] } });

class BulletComponent {
    constructor() {
        this.size = 'sm';
        this.type = 'default';
    }
    getClass() {
        return `bullet-${this.type} ${this.size}`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BulletComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BulletComponent, isStandalone: true, selector: "ta-bullet", inputs: { size: "size", type: "type" }, ngImport: i0, template: "<span class=\"bullet-container\" [ngClass]=\"this.getClass()\">\n  <div>\n    <ng-content></ng-content>\n  </div>\n</span>\n", styles: [".bullet-container{display:inline-block;font-size:var(--ta-font-body-xs-default-size);line-height:var(--ta-font-body-xs-default-line);font-weight:var(--ta-font-body-xs-default-weight);border-radius:var(--ta-radius-full);border:1px solid transparent;color:var(--ta-text-invert-primary);font-size:var(--ta-font-key-xxs-default-size);line-height:var(--ta-font-key-xxs-default-line);font-weight:var(--ta-font-key-xxs-bold-weight)}.bullet-container.xs{width:5px;height:5px}.bullet-container.sm{width:10px;height:10px}.bullet-container.md{width:14px;height:14px}.bullet-container.lg{width:20px;height:20px}.bullet-default{color:var(--ta-text-brand-primary);background:var(--ta-surface-default);border-color:var(--ta-border-brand)}.bullet-secondary{color:var(--ta-text-body);background:var(--ta-surface-secondary);border-color:var(--ta-neutral-600)}.bullet-success{color:var(--ta-text-success);background:var(--ta-surface-success);border-color:var(--ta-border-success)}.bullet-warning{color:var(--ta-text-warning);background:var(--ta-surface-warning);border-color:var(--ta-border-warning)}.bullet-alert{color:var(--ta-text-alert);background:var(--ta-surface-alert);border-color:var(--ta-border-alert)}.bullet-purple{color:var(--ta-semantic-purple-dark);background:var(--ta-semantic-purple-light);border-color:var(--ta-semantic-purple-dark)}.bullet-new{background:var(--ta-surface-brand-primary);border-color:var(--ta-surface-brand-primary)}.bullet-notif{height:16px;width:16px;background:var(--ta-surface-brand-primary);border-color:var(--ta-surface-brand-primary)}.bullet-notif div{align-items:center;display:flex;justify-content:center;margin:auto}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BulletComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-bullet', standalone: true, imports: [NgClass], template: "<span class=\"bullet-container\" [ngClass]=\"this.getClass()\">\n  <div>\n    <ng-content></ng-content>\n  </div>\n</span>\n", styles: [".bullet-container{display:inline-block;font-size:var(--ta-font-body-xs-default-size);line-height:var(--ta-font-body-xs-default-line);font-weight:var(--ta-font-body-xs-default-weight);border-radius:var(--ta-radius-full);border:1px solid transparent;color:var(--ta-text-invert-primary);font-size:var(--ta-font-key-xxs-default-size);line-height:var(--ta-font-key-xxs-default-line);font-weight:var(--ta-font-key-xxs-bold-weight)}.bullet-container.xs{width:5px;height:5px}.bullet-container.sm{width:10px;height:10px}.bullet-container.md{width:14px;height:14px}.bullet-container.lg{width:20px;height:20px}.bullet-default{color:var(--ta-text-brand-primary);background:var(--ta-surface-default);border-color:var(--ta-border-brand)}.bullet-secondary{color:var(--ta-text-body);background:var(--ta-surface-secondary);border-color:var(--ta-neutral-600)}.bullet-success{color:var(--ta-text-success);background:var(--ta-surface-success);border-color:var(--ta-border-success)}.bullet-warning{color:var(--ta-text-warning);background:var(--ta-surface-warning);border-color:var(--ta-border-warning)}.bullet-alert{color:var(--ta-text-alert);background:var(--ta-surface-alert);border-color:var(--ta-border-alert)}.bullet-purple{color:var(--ta-semantic-purple-dark);background:var(--ta-semantic-purple-light);border-color:var(--ta-semantic-purple-dark)}.bullet-new{background:var(--ta-surface-brand-primary);border-color:var(--ta-surface-brand-primary)}.bullet-notif{height:16px;width:16px;background:var(--ta-surface-brand-primary);border-color:var(--ta-surface-brand-primary)}.bullet-notif div{align-items:center;display:flex;justify-content:center;margin:auto}\n"] }]
        }], propDecorators: { size: [{
                type: Input
            }], type: [{
                type: Input
            }] } });

class ActionButtonComponent {
    constructor() {
        this.isOpen = false;
    }
    isFontIcon(action) {
        return isFontIcon(action.icon);
    }
    getFontIcon(action) {
        return getFontIcon(action.icon);
    }
    isLocalIcon(action) {
        return isLocalIcon(action.icon);
    }
    openBullet() {
        if (this.actions.length === 0) {
            return;
        }
        if (this.actions.length > 1) {
            // more than one feature, we open all options
            this.isOpen = !this.isOpen;
            return;
        }
        const action = this.actions[0];
        action.callback();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ActionButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: ActionButtonComponent, isStandalone: true, selector: "ta-action-button", inputs: { actions: "actions" }, ngImport: i0, template: "<div class=\"container\">\n  <div class=\"bullet\" (click)=\"this.openBullet()\" [ngClass]=\"{ open: this.isOpen }\"></div>\n\n  <div class=\"items\">\n    @for (action of actions; track action) {\n      <div class=\"item\" (click)=\"this.action.callback()\" [ngClass]=\"{ show: this.isOpen }\">\n        @if (this.isFontIcon(action)) {\n          <ta-font-icon [name]=\"getFontIcon(action)\"></ta-font-icon>\n        } @else if (this.isLocalIcon(action)) {\n          <ta-local-icon [type]=\"action.icon\"></ta-local-icon>\n        }\n      </div>\n    }\n  </div>\n</div>\n", styles: [".container{position:relative}.container .bullet{cursor:pointer;position:absolute;background-color:var(--ta-surface-invert);height:50px;width:50px;border-radius:50%;z-index:2;right:0}.container .bullet:before,.container .bullet:after{position:absolute;content:\"\";background-color:var(--ta-neutral-100);inset:0;margin:auto;border-radius:.5em;transition:all .25s}.container .bullet:before{height:25px;width:.25em}.container .bullet:after{width:25px;height:.25em}.container .bullet.open:before{transform:rotate(-45deg)}.container .bullet.open:after{transform:rotate(-45deg)}.container .item{cursor:pointer;position:absolute;right:0;width:50px;height:50px;line-height:62px;border-radius:50%;opacity:0;z-index:1;color:var(--ta-neutral-100);text-align:center;transform:rotate(90deg);transition-property:all;transition-duration:.35s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}.container .item.show{opacity:1}.container .item:nth-of-type(1){background-color:purple;transform:translate(-5em);transition-delay:.2s}.container .item:nth-of-type(2){background-color:#6a5acd;transform:translate(-3.5em) translateY(-3.5em);transition-delay:.1s}.container .item:nth-of-type(3){background-color:#ba55d3;transform:translateY(-5em)}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: LocalIconComponent, selector: "ta-local-icon", inputs: ["type", "size", "rotation"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ActionButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-action-button', standalone: true, imports: [NgIf, NgFor, NgClass, FontIconComponent, LocalIconComponent], template: "<div class=\"container\">\n  <div class=\"bullet\" (click)=\"this.openBullet()\" [ngClass]=\"{ open: this.isOpen }\"></div>\n\n  <div class=\"items\">\n    @for (action of actions; track action) {\n      <div class=\"item\" (click)=\"this.action.callback()\" [ngClass]=\"{ show: this.isOpen }\">\n        @if (this.isFontIcon(action)) {\n          <ta-font-icon [name]=\"getFontIcon(action)\"></ta-font-icon>\n        } @else if (this.isLocalIcon(action)) {\n          <ta-local-icon [type]=\"action.icon\"></ta-local-icon>\n        }\n      </div>\n    }\n  </div>\n</div>\n", styles: [".container{position:relative}.container .bullet{cursor:pointer;position:absolute;background-color:var(--ta-surface-invert);height:50px;width:50px;border-radius:50%;z-index:2;right:0}.container .bullet:before,.container .bullet:after{position:absolute;content:\"\";background-color:var(--ta-neutral-100);inset:0;margin:auto;border-radius:.5em;transition:all .25s}.container .bullet:before{height:25px;width:.25em}.container .bullet:after{width:25px;height:.25em}.container .bullet.open:before{transform:rotate(-45deg)}.container .bullet.open:after{transform:rotate(-45deg)}.container .item{cursor:pointer;position:absolute;right:0;width:50px;height:50px;line-height:62px;border-radius:50%;opacity:0;z-index:1;color:var(--ta-neutral-100);text-align:center;transform:rotate(90deg);transition-property:all;transition-duration:.35s;transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}.container .item.show{opacity:1}.container .item:nth-of-type(1){background-color:purple;transform:translate(-5em);transition-delay:.2s}.container .item:nth-of-type(2){background-color:#6a5acd;transform:translate(-3.5em) translateY(-3.5em);transition-delay:.1s}.container .item:nth-of-type(3){background-color:#ba55d3;transform:translateY(-5em)}\n"] }]
        }], propDecorators: { actions: [{
                type: Input
            }] } });

class ButtonComponent {
    constructor() {
        /**
         * Is button type
         */
        this.state = 'classic';
        /**
         * Indicate the button type
         */
        this.type = 'primary';
        this.size = 'medium';
        this.icon = null;
        /**
         * Class - Add custom classes separates by space
         * Outline - Draw a border around the button when true
         * Rounded - Make button rounded when true
         * Circular - Make button circular when true
         */
        this.options = null;
        this.stopPropagationActivation = true;
        /**
         * Event emitted when button is clicked
         */
        this.action = new EventEmitter();
    }
    handleClick() {
        if (this.state === 'classic') {
            this.action.emit();
        }
    }
    getClass() {
        const css = {};
        css[this.state] = true;
        css[this.size] = true;
        css[this.type] = true;
        if (this.options?.circular === true) {
            css['circular'] = true;
        }
        if (this.options?.circular === 'big') {
            css['circular big'] = true;
        }
        if (this.options?.circular === 'small') {
            css['circular small'] = true;
        }
        if (this.options?.class) {
            css[this.options.class] = true;
        }
        if (this.options?.border === false) {
            css['no-border'] = true;
        }
        return css;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: ButtonComponent, isStandalone: true, selector: "ta-button", inputs: { state: "state", type: "type", size: "size", icon: "icon", options: "options", stopPropagationActivation: "stopPropagationActivation" }, outputs: { action: "action" }, ngImport: i0, template: "<button\r\n  appStopPropagation\r\n  [stopPropagationActivation]=\"this.stopPropagationActivation\"\r\n  type=\"button\"\r\n  class=\"button pointer\"\r\n  [ngClass]=\"this.getClass()\"\r\n  (click)=\"handleClick()\"\r\n>\r\n  <div class=\"flex-row g-space-sm align-center\">\r\n    @if (this.icon) {\r\n      <ta-font-icon [name]=\"this.icon\"></ta-font-icon>\r\n    }\r\n    <ng-content></ng-content>\r\n  </div>\r\n</button>\r\n", styles: [".button{width:100%;border:none;border-radius:var(--ta-radius-full);padding:var(--ta-space-sm) var(--ta-space-md);font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight);align-items:center;display:flex;justify-content:center;margin:auto;gap:var(--ta-space-md)}.button.small{font-size:var(--ta-font-body-sm-default-size);line-height:var(--ta-font-body-sm-default-line);font-weight:var(--ta-font-body-sm-default-weight);padding:var(--ta-space-xs) var(--ta-space-sm)}.button.large{padding:var(--ta-space-md) var(--ta-space-lg)}.button.no-border{border:none}.button.disabled,.button.inactive{cursor:not-allowed}.button.primary{color:var(--ta-text-invert-primary);background-color:var(--ta-surface-brand-primary)}.button.primary:hover{background-color:var(--ta-surface-hover-primary)}.button.primary.disabled{color:var(--ta-text-brand-secondary);background-color:var(--ta-surface-hover-secondary)}.button.primary.inactive{color:var(--ta-text-primary);background-color:var(--ta-surface-tertiary)}.button.primary ta-font-icon{color:var(--ta-icon-invert-primary)}.button.secondary{color:var(--ta-text-primary);background-color:var(--ta-surface-primary);border:1px solid var(--ta-border-secondary)}.button.secondary:hover{border-color:var(--ta-border-invert)}.button.secondary.disabled{color:var(--ta-text-tertiary);border-color:var(--ta-border-disabled)}.button.secondary.inactive{border-color:var(--ta-border-primary)}.button.secondary ta-font-icon{color:var(--ta-icon-brand-primary)}.circular{height:50px;width:50px;border-radius:50px;padding:0}.circular.big{height:90px;width:90px}.circular.small{height:40px;width:40px}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "directive", type: StopPropagationDirective, selector: "[appStopPropagation]", inputs: ["stopPropagationActivation"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-button', standalone: true, imports: [NgClass, NgIf, FontIconComponent, StopPropagationDirective], template: "<button\r\n  appStopPropagation\r\n  [stopPropagationActivation]=\"this.stopPropagationActivation\"\r\n  type=\"button\"\r\n  class=\"button pointer\"\r\n  [ngClass]=\"this.getClass()\"\r\n  (click)=\"handleClick()\"\r\n>\r\n  <div class=\"flex-row g-space-sm align-center\">\r\n    @if (this.icon) {\r\n      <ta-font-icon [name]=\"this.icon\"></ta-font-icon>\r\n    }\r\n    <ng-content></ng-content>\r\n  </div>\r\n</button>\r\n", styles: [".button{width:100%;border:none;border-radius:var(--ta-radius-full);padding:var(--ta-space-sm) var(--ta-space-md);font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight);align-items:center;display:flex;justify-content:center;margin:auto;gap:var(--ta-space-md)}.button.small{font-size:var(--ta-font-body-sm-default-size);line-height:var(--ta-font-body-sm-default-line);font-weight:var(--ta-font-body-sm-default-weight);padding:var(--ta-space-xs) var(--ta-space-sm)}.button.large{padding:var(--ta-space-md) var(--ta-space-lg)}.button.no-border{border:none}.button.disabled,.button.inactive{cursor:not-allowed}.button.primary{color:var(--ta-text-invert-primary);background-color:var(--ta-surface-brand-primary)}.button.primary:hover{background-color:var(--ta-surface-hover-primary)}.button.primary.disabled{color:var(--ta-text-brand-secondary);background-color:var(--ta-surface-hover-secondary)}.button.primary.inactive{color:var(--ta-text-primary);background-color:var(--ta-surface-tertiary)}.button.primary ta-font-icon{color:var(--ta-icon-invert-primary)}.button.secondary{color:var(--ta-text-primary);background-color:var(--ta-surface-primary);border:1px solid var(--ta-border-secondary)}.button.secondary:hover{border-color:var(--ta-border-invert)}.button.secondary.disabled{color:var(--ta-text-tertiary);border-color:var(--ta-border-disabled)}.button.secondary.inactive{border-color:var(--ta-border-primary)}.button.secondary ta-font-icon{color:var(--ta-icon-brand-primary)}.circular{height:50px;width:50px;border-radius:50px;padding:0}.circular.big{height:90px;width:90px}.circular.small{height:40px;width:40px}\n"] }]
        }], ctorParameters: () => [], propDecorators: { state: [{
                type: Input
            }], type: [{
                type: Input
            }], size: [{
                type: Input
            }], icon: [{
                type: Input
            }], options: [{
                type: Input
            }], stopPropagationActivation: [{
                type: Input
            }], action: [{
                type: Output
            }] } });

class DualButtonComponent {
    constructor() {
        this.isFull = false;
        this.type = 'primary';
        CamTranslationUI.getInstance();
    }
    getClass() {
        const css = {};
        css[this.type] = true;
        return css;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: DualButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: DualButtonComponent, isStandalone: true, selector: "ta-dual-button", inputs: { isFull: "isFull", first: "first", second: "second", type: "type" }, ngImport: i0, template: "<div class=\"dual-button row\" [class.full]=\"this.isFull\">\n  <div class=\"col first\" (click)=\"this.first.callback()\" [ngClass]=\"this.getClass()\">\n    <div class=\"flex-start\">\n      <ta-font-icon class=\"icon\" [name]=\"this.first.icon\"></ta-font-icon>\n      <span class=\"label\">{{ this.first.label | translate }}</span>\n    </div>\n  </div>\n  <div class=\"col second\" (click)=\"this.second.callback()\" [ngClass]=\"this.getClass()\">\n    <div class=\"flex-start\">\n      <span class=\"label\">{{ this.second.label | translate }}</span>\n      <ta-font-icon class=\"icon\" [name]=\"this.second.icon\"></ta-font-icon>\n    </div>\n  </div>\n</div>\n", styles: [".dual-button{display:flex;flex-direction:row;border:1px solid var(--ta-brand-50);border-radius:60px}.dual-button .first,.dual-button .second{flex:1;width:100%;font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight);padding:var(--ta-space-sm) 0}.dual-button .first.primary,.dual-button .second.primary{color:var(--ta-text-invert-primary)}.dual-button .first.secondary,.dual-button .second.secondary{color:var(--ta-text-primary);border:1px solid var(--ta-border-secondary)}.dual-button .first>div,.dual-button .second>div{justify-content:center;margin:auto}.dual-button .first .icon,.dual-button .second .icon{color:var(--ta-surface-brand-primary);margin:auto var(--ta-space-sm)}.dual-button .first{border-right:1px solid var(--ta-brand-700)}.dual-button .second{border-left:1px solid var(--ta-brand-700)}.dual-button.full{background-color:var(--ta-brand-700);border:1px solid var(--ta-text-invert-primary);color:var(--ta-text-invert-primary)}.dual-button.full .first .icon,.dual-button.full .second .icon{color:var(--ta-text-invert-primary)}.dual-button.full .first{border-right:1px solid var(--ta-text-invert-primary)}.dual-button.full .second{border-left:1px solid var(--ta-text-invert-primary)}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: DualButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-dual-button', standalone: true, imports: [NgClass, FontIconComponent, TranslateModule], template: "<div class=\"dual-button row\" [class.full]=\"this.isFull\">\n  <div class=\"col first\" (click)=\"this.first.callback()\" [ngClass]=\"this.getClass()\">\n    <div class=\"flex-start\">\n      <ta-font-icon class=\"icon\" [name]=\"this.first.icon\"></ta-font-icon>\n      <span class=\"label\">{{ this.first.label | translate }}</span>\n    </div>\n  </div>\n  <div class=\"col second\" (click)=\"this.second.callback()\" [ngClass]=\"this.getClass()\">\n    <div class=\"flex-start\">\n      <span class=\"label\">{{ this.second.label | translate }}</span>\n      <ta-font-icon class=\"icon\" [name]=\"this.second.icon\"></ta-font-icon>\n    </div>\n  </div>\n</div>\n", styles: [".dual-button{display:flex;flex-direction:row;border:1px solid var(--ta-brand-50);border-radius:60px}.dual-button .first,.dual-button .second{flex:1;width:100%;font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight);padding:var(--ta-space-sm) 0}.dual-button .first.primary,.dual-button .second.primary{color:var(--ta-text-invert-primary)}.dual-button .first.secondary,.dual-button .second.secondary{color:var(--ta-text-primary);border:1px solid var(--ta-border-secondary)}.dual-button .first>div,.dual-button .second>div{justify-content:center;margin:auto}.dual-button .first .icon,.dual-button .second .icon{color:var(--ta-surface-brand-primary);margin:auto var(--ta-space-sm)}.dual-button .first{border-right:1px solid var(--ta-brand-700)}.dual-button .second{border-left:1px solid var(--ta-brand-700)}.dual-button.full{background-color:var(--ta-brand-700);border:1px solid var(--ta-text-invert-primary);color:var(--ta-text-invert-primary)}.dual-button.full .first .icon,.dual-button.full .second .icon{color:var(--ta-text-invert-primary)}.dual-button.full .first{border-right:1px solid var(--ta-text-invert-primary)}.dual-button.full .second{border-left:1px solid var(--ta-text-invert-primary)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { isFull: [{
                type: Input
            }], first: [{
                type: Input
            }], second: [{
                type: Input
            }], type: [{
                type: Input
            }] } });

class ButtonToolComponent {
    constructor() {
        this.state = 'classic';
        this.type = 'primary';
        this.size = 'md';
        this.icon = null;
        this.stopPropagationActivation = true;
        this.readonly = false;
        /**
         * Event emitted when button is clicked
         */
        this.action = new EventEmitter();
    }
    handleClick() {
        if (this.state === 'classic') {
            this.action.emit();
        }
    }
    getClass() {
        const css = {};
        css[this.state] = true;
        css[this.size] = true;
        css[this.type] = true;
        return css;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ButtonToolComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: ButtonToolComponent, isStandalone: true, selector: "ta-button-tool", inputs: { state: "state", type: "type", size: "size", icon: "icon", stopPropagationActivation: "stopPropagationActivation", readonly: "readonly" }, outputs: { action: "action" }, ngImport: i0, template: "<button\r\n  [disabled]=\"this.readonly\"\r\n  appStopPropagation\r\n  [stopPropagationActivation]=\"this.stopPropagationActivation\"\r\n  type=\"button\"\r\n  class=\"button pointer\"\r\n  [ngClass]=\"this.getClass()\"\r\n  (click)=\"this.handleClick()\"\r\n>\r\n  <div class=\"flex-row g-space-sm align-c enter\">\r\n    @if (this.icon) {\r\n      <ta-font-icon [name]=\"this.icon\" [type]=\"this.size\"></ta-font-icon>\r\n    }\r\n  </div>\r\n</button>\r\n", styles: [".button{background-color:var(--ta-surface-primary);border:1px solid var(--ta-border-secondary);border-radius:var(--ta-radius-rounded);padding:var(--ta-space-sm);align-items:center;display:flex;justify-content:center;margin:auto}.button.disabled,.button.inactive{cursor:not-allowed}.button.primary{color:var(--ta-icon-primary)}.button.primary:hover,.button.primary.selected{color:var(--ta-text-brand-primary)}.button.primary.disabled,.button.primary.inactive{color:var(--ta-neutral-200);border-color:var(--ta-surface-hover-secondary)}.button.primary.unselected{color:var(--ta-text-primary);background-color:var(--ta-surface-tertiary)}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "directive", type: StopPropagationDirective, selector: "[appStopPropagation]", inputs: ["stopPropagationActivation"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ButtonToolComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-button-tool', standalone: true, imports: [NgIf, NgClass, FontIconComponent, StopPropagationDirective], template: "<button\r\n  [disabled]=\"this.readonly\"\r\n  appStopPropagation\r\n  [stopPropagationActivation]=\"this.stopPropagationActivation\"\r\n  type=\"button\"\r\n  class=\"button pointer\"\r\n  [ngClass]=\"this.getClass()\"\r\n  (click)=\"this.handleClick()\"\r\n>\r\n  <div class=\"flex-row g-space-sm align-c enter\">\r\n    @if (this.icon) {\r\n      <ta-font-icon [name]=\"this.icon\" [type]=\"this.size\"></ta-font-icon>\r\n    }\r\n  </div>\r\n</button>\r\n", styles: [".button{background-color:var(--ta-surface-primary);border:1px solid var(--ta-border-secondary);border-radius:var(--ta-radius-rounded);padding:var(--ta-space-sm);align-items:center;display:flex;justify-content:center;margin:auto}.button.disabled,.button.inactive{cursor:not-allowed}.button.primary{color:var(--ta-icon-primary)}.button.primary:hover,.button.primary.selected{color:var(--ta-text-brand-primary)}.button.primary.disabled,.button.primary.inactive{color:var(--ta-neutral-200);border-color:var(--ta-surface-hover-secondary)}.button.primary.unselected{color:var(--ta-text-primary);background-color:var(--ta-surface-tertiary)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { state: [{
                type: Input
            }], type: [{
                type: Input
            }], size: [{
                type: Input
            }], icon: [{
                type: Input
            }], stopPropagationActivation: [{
                type: Input
            }], readonly: [{
                type: Input
            }], action: [{
                type: Output
            }] } });

class CivilityComponent {
    constructor() { }
    getIcon() {
        switch (this.civility) {
            case Civility.Unknown:
                return '';
            case Civility.Dear:
                return 'wc';
            case Civility.Madame:
                return 'woman';
            case Civility.Sir:
                return 'man';
            default:
                return '';
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CivilityComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: CivilityComponent, isStandalone: true, selector: "ta-civility", inputs: { civility: "civility" }, ngImport: i0, template: "@if (this.civility) {\n  <ta-material-icon>\n    {{ this.getIcon() }}\n  </ta-material-icon>\n}\n", styles: [""], dependencies: [{ kind: "component", type: MaterialIconComponent, selector: "ta-material-icon", inputs: ["outline", "sharp", "round", "dualTone", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CivilityComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-civility', standalone: true, imports: [NgIf, MaterialIconComponent], template: "@if (this.civility) {\n  <ta-material-icon>\n    {{ this.getIcon() }}\n  </ta-material-icon>\n}\n" }]
        }], ctorParameters: () => [], propDecorators: { civility: [{
                type: Input
            }] } });

class ContactInformationComponent {
    constructor() {
        CamTranslationUI.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ContactInformationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: ContactInformationComponent, isStandalone: true, selector: "ta-contact-information", inputs: { value: "value", icon: "icon", localIcon: "localIcon" }, ngImport: i0, template: "@if (this.value) {\n  <div class=\"header\">\n    <div class=\"icon\">\n      @if (this.localIcon) {\n        <ta-local-icon class=\"local-icon\" [type]=\"this.localIcon\"></ta-local-icon>\n      } @else if (this.icon) {\n        <ta-font-icon [name]=\"this.icon\" type=\"sm\"></ta-font-icon>\n      }\n    </div>\n\n    <div class=\"value\">\n      <div class=\"text\">{{ this.value | translate }}</div>\n    </div>\n  </div>\n}\n<div class=\"content\">\n  <ng-content></ng-content>\n</div>\n", styles: [".header{gap:var(--ta-space-md);flex-direction:row;display:flex;align-items:center}.icon{color:var(--ta-surface-brand-primary);margin-right:var(--ta-space-xs)}.local-icon{max-width:20px}.text{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-bold-weight)}.value{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-bold-weight);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.content{margin-top:var(--ta-space-md);color:var(--ta-neutral-500)}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: LocalIconComponent, selector: "ta-local-icon", inputs: ["type", "size", "rotation"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ContactInformationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-contact-information', standalone: true, imports: [NgIf, FontIconComponent, LocalIconComponent, TranslateModule], template: "@if (this.value) {\n  <div class=\"header\">\n    <div class=\"icon\">\n      @if (this.localIcon) {\n        <ta-local-icon class=\"local-icon\" [type]=\"this.localIcon\"></ta-local-icon>\n      } @else if (this.icon) {\n        <ta-font-icon [name]=\"this.icon\" type=\"sm\"></ta-font-icon>\n      }\n    </div>\n\n    <div class=\"value\">\n      <div class=\"text\">{{ this.value | translate }}</div>\n    </div>\n  </div>\n}\n<div class=\"content\">\n  <ng-content></ng-content>\n</div>\n", styles: [".header{gap:var(--ta-space-md);flex-direction:row;display:flex;align-items:center}.icon{color:var(--ta-surface-brand-primary);margin-right:var(--ta-space-xs)}.local-icon{max-width:20px}.text{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-bold-weight)}.value{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-bold-weight);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.content{margin-top:var(--ta-space-md);color:var(--ta-neutral-500)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { value: [{
                type: Input
            }], icon: [{
                type: Input
            }], localIcon: [{
                type: Input
            }] } });

var CriticityStatus;
(function (CriticityStatus) {
    CriticityStatus[CriticityStatus["Unknown"] = 0] = "Unknown";
    CriticityStatus[CriticityStatus["P1"] = 1] = "P1";
    CriticityStatus[CriticityStatus["P2"] = 2] = "P2";
    CriticityStatus[CriticityStatus["P3"] = 3] = "P3";
})(CriticityStatus || (CriticityStatus = {}));
const criticityLabel = (criticity) => `ui.criticity.${criticity}`;
class CriticityComponent {
    constructor() {
        CamTranslationUI.getInstance();
    }
    label() {
        return criticityLabel(this.criticity);
    }
    type() {
        switch (this.criticity) {
            case CriticityStatus.P1:
                return 'danger';
            case CriticityStatus.P2:
                return 'warning';
            case CriticityStatus.P3:
                return 'success';
            default:
                return 'primary';
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CriticityComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: CriticityComponent, isStandalone: true, selector: "ta-criticity", inputs: { criticity: "criticity" }, ngImport: i0, template: "<ta-badge [value]=\"this.label() | translate\" [type]=\"this.type()\"></ta-badge>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }, { kind: "component", type: BadgeComponent, selector: "ta-badge", inputs: ["value", "type", "showClickOption", "icon"], outputs: ["clickAction"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CriticityComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-criticity', standalone: true, imports: [TranslateModule, BadgeComponent], template: "<ta-badge [value]=\"this.label() | translate\" [type]=\"this.type()\"></ta-badge>\n" }]
        }], ctorParameters: () => [], propDecorators: { criticity: [{
                type: Input
            }] } });

class CultureComponent {
    constructor() {
        CamTranslationUI.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CultureComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: CultureComponent, isStandalone: true, selector: "ta-culture", inputs: { cultures: "cultures" }, ngImport: i0, template: "<div class=\"flex-start g-space-xs\">\n  @for (culture of this.cultures; track culture; let isLast = $last) {\n    <div>\n      {{ 'ui.culture.short.' + culture | translate }}{{ !isLast ? ',' : '' }}\n    </div>\n  }\n</div>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CultureComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-culture', standalone: true, imports: [NgFor, TranslateModule], template: "<div class=\"flex-start g-space-xs\">\n  @for (culture of this.cultures; track culture; let isLast = $last) {\n    <div>\n      {{ 'ui.culture.short.' + culture | translate }}{{ !isLast ? ',' : '' }}\n    </div>\n  }\n</div>\n" }]
        }], ctorParameters: () => [], propDecorators: { cultures: [{
                type: Input
            }] } });

class DepartmentIconListComponent {
    constructor() {
        this.withName = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: DepartmentIconListComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: DepartmentIconListComponent, isStandalone: true, selector: "ta-department-icon-list", inputs: { departments: "departments", withName: "withName" }, ngImport: i0, template: "@if (this.withName) {\n  <div class=\"departements-container text-truncate\">\n    @for (department of this.departments; track department; let last = $last) {\n      <div class=\"department\">\n        <div class=\"img-container align-center\">\n          @if (department.iconPath) {\n            <img [src]=\"department.iconPath\" [alt]=\"department.name\" />\n          }\n        </div>\n        <p>{{ department.name }}{{ !last ? ',' : '' }}</p>\n      </div>\n    }\n  </div>\n} @else {\n  <div class=\"departements-container\">\n    @for (department of this.departments; track department) {\n      <div class=\"department\">\n        <div class=\"img-container align-center\">\n          @if (department.iconPath) {\n            <img [src]=\"department.iconPath\" [alt]=\"department.name\" />\n          }\n        </div>\n      </div>\n    }\n  </div>\n}\n", styles: ["@charset \"UTF-8\";.departements-container{display:flex;align-items:center}.department{display:flex;align-items:center;margin-right:var(--ta-space-space)}.img-container{margin-right:var(--ta-space-xs);width:20px}.img-container img{width:100%}.department:last-child span{display:none}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: DepartmentIconListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-department-icon-list', standalone: true, imports: [NgIf, NgFor], template: "@if (this.withName) {\n  <div class=\"departements-container text-truncate\">\n    @for (department of this.departments; track department; let last = $last) {\n      <div class=\"department\">\n        <div class=\"img-container align-center\">\n          @if (department.iconPath) {\n            <img [src]=\"department.iconPath\" [alt]=\"department.name\" />\n          }\n        </div>\n        <p>{{ department.name }}{{ !last ? ',' : '' }}</p>\n      </div>\n    }\n  </div>\n} @else {\n  <div class=\"departements-container\">\n    @for (department of this.departments; track department) {\n      <div class=\"department\">\n        <div class=\"img-container align-center\">\n          @if (department.iconPath) {\n            <img [src]=\"department.iconPath\" [alt]=\"department.name\" />\n          }\n        </div>\n      </div>\n    }\n  </div>\n}\n", styles: ["@charset \"UTF-8\";.departements-container{display:flex;align-items:center}.department{display:flex;align-items:center;margin-right:var(--ta-space-space)}.img-container{margin-right:var(--ta-space-xs);width:20px}.img-container img{width:100%}.department:last-child span{display:none}\n"] }]
        }], propDecorators: { departments: [{
                type: Input
            }], withName: [{
                type: Input
            }] } });

class DepartmentProfessionsComponent {
    get visibleProfessions() {
        if (this.maxVisible) {
            return this.professions.slice(0, this.maxVisible);
        }
        return this.professions;
    }
    constructor() {
        /**
         * font-size
         */
        this.fontSize = 'xs';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: DepartmentProfessionsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: DepartmentProfessionsComponent, isStandalone: true, selector: "ta-department-professions", inputs: { professions: "professions", fontSize: "fontSize", maxVisible: "maxVisible" }, ngImport: i0, template: "<div class=\"align-center professions-container g-space-xs\">\n  @for (profession of this.visibleProfessions; track profession) {\n    <span>\n      <ta-badge [value]=\"profession\"></ta-badge>\n    </span>\n  }\n  @if (this.maxVisible && this.professions.length > this.maxVisible) {\n    <span class=\"more-label\"> +{{ this.professions.length - maxVisible }} </span>\n  }\n</div>\n", styles: [".professions-container{display:flex;flex-wrap:wrap}.professions-container .more-label{color:var(--ta-brand-500)}\n"], dependencies: [{ kind: "component", type: BadgeComponent, selector: "ta-badge", inputs: ["value", "type", "showClickOption", "icon"], outputs: ["clickAction"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: DepartmentProfessionsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-department-professions', standalone: true, imports: [NgIf, NgFor, BadgeComponent], template: "<div class=\"align-center professions-container g-space-xs\">\n  @for (profession of this.visibleProfessions; track profession) {\n    <span>\n      <ta-badge [value]=\"profession\"></ta-badge>\n    </span>\n  }\n  @if (this.maxVisible && this.professions.length > this.maxVisible) {\n    <span class=\"more-label\"> +{{ this.professions.length - maxVisible }} </span>\n  }\n</div>\n", styles: [".professions-container{display:flex;flex-wrap:wrap}.professions-container .more-label{color:var(--ta-brand-500)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { professions: [{
                type: Input
            }], fontSize: [{
                type: Input
            }], maxVisible: [{
                type: Input
            }] } });

class DepartmentsComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: DepartmentsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: DepartmentsComponent, isStandalone: true, selector: "ta-departments", inputs: { departments: "departments", professions: "professions" }, ngImport: i0, template: "<div>\n  <ta-department-icon-list [departments]=\"this.departments\"></ta-department-icon-list>\n</div>\n<div>\n  <ta-department-professions [professions]=\"this.professions\"></ta-department-professions>\n</div>\n", styles: [""], dependencies: [{ kind: "component", type: DepartmentIconListComponent, selector: "ta-department-icon-list", inputs: ["departments", "withName"] }, { kind: "component", type: DepartmentProfessionsComponent, selector: "ta-department-professions", inputs: ["professions", "fontSize", "maxVisible"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: DepartmentsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-departments', standalone: true, imports: [DepartmentIconListComponent, DepartmentProfessionsComponent], template: "<div>\n  <ta-department-icon-list [departments]=\"this.departments\"></ta-department-icon-list>\n</div>\n<div>\n  <ta-department-professions [professions]=\"this.professions\"></ta-department-professions>\n</div>\n" }]
        }], propDecorators: { departments: [{
                type: Input
            }], professions: [{
                type: Input
            }] } });

class DurationComponent {
    constructor() {
        this.startDate = Date.now();
        this.endDate = Date.now();
        this.interval = null;
        CamTranslationUI.getInstance();
    }
    ngOnInit() {
        if (this.startDate && this.endDate) {
            try {
                this.interval = intervalToDuration({
                    start: new Date(this.startDate),
                    end: new Date(this.endDate),
                });
            }
            catch (error) {
                console.error('Invalid date format:', error);
            }
        }
        else {
            console.error('startDate or endDate is missing');
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: DurationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: DurationComponent, isStandalone: true, selector: "ta-duration", inputs: { startDate: "startDate", endDate: "endDate" }, ngImport: i0, template: "@if (this.interval) {\r\n  @if (\r\n    !this.interval.years &&\r\n    !this.interval.months &&\r\n    !this.interval.days &&\r\n    !this.interval?.hours\r\n  ) {\r\n    {{ \"ui.duration.less-than-one\" | translate }}\r\n  }\r\n\r\n  @if (this.interval.years) {\r\n    {{\r\n      \"ui.duration.years\"\r\n        | pluralTranslate : this.interval.years\r\n        | translate : { years: this.interval.years }\r\n    }}\r\n  }\r\n  @if (this.interval.months) {\r\n    {{\r\n      \"ui.duration.months\"\r\n        | pluralTranslate : this.interval.months\r\n        | translate : { months: this.interval.months }\r\n    }}\r\n  }\r\n  @if (this.interval.days) {\r\n    {{\r\n      \"ui.duration.days\"\r\n        | pluralTranslate : this.interval.days\r\n        | translate : { days: this.interval.days }\r\n    }}\r\n  }\r\n  @if (this.interval.hours) {\r\n    {{\r\n      \"ui.duration.hours\"\r\n        | pluralTranslate : this.interval.hours\r\n        | translate : { hours: this.interval.hours }\r\n    }}\r\n  }\r\n}\r\n", styles: [""], dependencies: [{ kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }, { kind: "pipe", type: PluralTranslatePipe, name: "pluralTranslate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: DurationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-duration', standalone: true, imports: [NgIf, TranslateModule, PluralTranslatePipe], template: "@if (this.interval) {\r\n  @if (\r\n    !this.interval.years &&\r\n    !this.interval.months &&\r\n    !this.interval.days &&\r\n    !this.interval?.hours\r\n  ) {\r\n    {{ \"ui.duration.less-than-one\" | translate }}\r\n  }\r\n\r\n  @if (this.interval.years) {\r\n    {{\r\n      \"ui.duration.years\"\r\n        | pluralTranslate : this.interval.years\r\n        | translate : { years: this.interval.years }\r\n    }}\r\n  }\r\n  @if (this.interval.months) {\r\n    {{\r\n      \"ui.duration.months\"\r\n        | pluralTranslate : this.interval.months\r\n        | translate : { months: this.interval.months }\r\n    }}\r\n  }\r\n  @if (this.interval.days) {\r\n    {{\r\n      \"ui.duration.days\"\r\n        | pluralTranslate : this.interval.days\r\n        | translate : { days: this.interval.days }\r\n    }}\r\n  }\r\n  @if (this.interval.hours) {\r\n    {{\r\n      \"ui.duration.hours\"\r\n        | pluralTranslate : this.interval.hours\r\n        | translate : { hours: this.interval.hours }\r\n    }}\r\n  }\r\n}\r\n" }]
        }], ctorParameters: () => [], propDecorators: { startDate: [{
                type: Input
            }], endDate: [{
                type: Input
            }] } });

class ExpandableTextComponent {
    constructor() {
        this.height = 100;
        this.showFullText = false;
        this.showButton = true;
        CamTranslationUI.getInstance();
    }
    get textHeight() {
        if (this._myText) {
            if (this._myText.nativeElement.offsetHeight < this.height) {
                return 'auto';
            }
        }
        if (this.showFullText) {
            return 'auto';
        }
        return `${this.height}px`;
    }
    get hasFixedHeight() {
        return this.textHeight != 'auto';
    }
    get hasTooBigText() {
        if (this._myText) {
            return this._myText.nativeElement.offsetHeight > this.height;
        }
        return true;
    }
    toggleText() {
        if (this.showFullText === false) {
            this.showFullText = true;
        }
        else {
            this.showFullText = false;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ExpandableTextComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: ExpandableTextComponent, isStandalone: true, selector: "ta-expandable-text", inputs: { height: "height" }, viewQueries: [{ propertyName: "_myText", first: true, predicate: ["myText"], descendants: true }], ngImport: i0, template: "<div class=\"text-container\">\n  <div\n    class=\"text\"\n    [class.with-shadow]=\"this.hasFixedHeight\"\n    [style.height]=\"this.textHeight\"\n  >\n    <div #myText>\n      <ng-content></ng-content>\n    </div>\n  </div>\n  @if (this.hasTooBigText) {\n    <button (click)=\"toggleText()\">\n      {{\n        (this.showFullText\n          ? \"ui.expandabletext.seeless\"\n          : \"ui.expandabletext.seemore\"\n        ) | translate\n      }}\n    </button>\n  }\n</div>\n", styles: [".text-container .text{overflow:hidden;position:relative}.text-container .with-shadow:after{content:\" \";position:absolute;left:0;right:0;bottom:0;height:50px;background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);background:-moz-linear-gradient(top,rgba(255,255,255,0) 0%,rgb(255,255,255) 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0%,rgba(255,255,255,0)),color-stop(100%,rgb(255,255,255)));background:-webkit-linear-gradient(top,rgba(255,255,255,0) 0%,rgb(255,255,255) 100%);background:-o-linear-gradient(top,rgba(255,255,255,0) 0%,rgb(255,255,255) 100%);background:-ms-linear-gradient(top,rgba(255,255,255,0) 0%,rgb(255,255,255) 100%);background:linear-gradient(to bottom,#fff0,#fff);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#00ffffff\",endColorstr=\"#ffffff\",GradientType=0)}.text-container button{margin-top:var(--ta-space-xs);background-color:transparent;border:none;color:var(--ta-neutral-500);cursor:pointer;padding:0;font-size:inherit}\n"], dependencies: [{ kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ExpandableTextComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-expandable-text', standalone: true, imports: [NgIf, TranslateModule], template: "<div class=\"text-container\">\n  <div\n    class=\"text\"\n    [class.with-shadow]=\"this.hasFixedHeight\"\n    [style.height]=\"this.textHeight\"\n  >\n    <div #myText>\n      <ng-content></ng-content>\n    </div>\n  </div>\n  @if (this.hasTooBigText) {\n    <button (click)=\"toggleText()\">\n      {{\n        (this.showFullText\n          ? \"ui.expandabletext.seeless\"\n          : \"ui.expandabletext.seemore\"\n        ) | translate\n      }}\n    </button>\n  }\n</div>\n", styles: [".text-container .text{overflow:hidden;position:relative}.text-container .with-shadow:after{content:\" \";position:absolute;left:0;right:0;bottom:0;height:50px;background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);background:-moz-linear-gradient(top,rgba(255,255,255,0) 0%,rgb(255,255,255) 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0%,rgba(255,255,255,0)),color-stop(100%,rgb(255,255,255)));background:-webkit-linear-gradient(top,rgba(255,255,255,0) 0%,rgb(255,255,255) 100%);background:-o-linear-gradient(top,rgba(255,255,255,0) 0%,rgb(255,255,255) 100%);background:-ms-linear-gradient(top,rgba(255,255,255,0) 0%,rgb(255,255,255) 100%);background:linear-gradient(to bottom,#fff0,#fff);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#00ffffff\",endColorstr=\"#ffffff\",GradientType=0)}.text-container button{margin-top:var(--ta-space-xs);background-color:transparent;border:none;color:var(--ta-neutral-500);cursor:pointer;padding:0;font-size:inherit}\n"] }]
        }], ctorParameters: () => [], propDecorators: { height: [{
                type: Input
            }], _myText: [{
                type: ViewChild,
                args: ['myText']
            }] } });

class CamExpansionPanelComponent extends TaBaseComponent {
    constructor() {
        super();
        this.templates = [];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamExpansionPanelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: CamExpansionPanelComponent, isStandalone: true, selector: "ta-expansion-panel", inputs: { templates: "templates" }, usesInheritance: true, ngImport: i0, template: "<mat-accordion>\n  @for (template of this.templates; track template) {\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <ng-template\n            [ngTemplateOutlet]=\"template.title\"\n            [ngTemplateOutletContext]=\"template.context ?? {}\"\n          ></ng-template>\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <ng-template\n        [ngTemplateOutlet]=\"template.content\"\n        [ngTemplateOutletContext]=\"template.context ?? {}\"\n      ></ng-template>\n    </mat-expansion-panel>\n  }\n</mat-accordion>\n", styles: [":host .mat-content,::ng-deep .mat-content{overflow:visible!important}:host .mat-expansion-panel,::ng-deep .mat-expansion-panel{box-shadow:none;border-radius:0!important;border-bottom:1px solid var(--ta-neutral-400);padding:var(--ta-space-sm) 0;background-color:var(--ta-surface-primary)}:host .mat-expansion-panel.mat-expanded,::ng-deep .mat-expansion-panel.mat-expanded{box-shadow:0 4px 8px #0000001a;border-radius:var(--ta-space-xs)!important}:host .mat-expansion-panel-header,:host .mat-expansion-panel-body,::ng-deep .mat-expansion-panel-header,::ng-deep .mat-expansion-panel-body{padding:var(--ta-space-xs)!important}\n"], dependencies: [{ kind: "ngmodule", type: MatExpansionModule }, { kind: "directive", type: i1$1.MatAccordion, selector: "mat-accordion", inputs: ["hideToggle", "displayMode", "togglePosition"], exportAs: ["matAccordion"] }, { kind: "component", type: i1$1.MatExpansionPanel, selector: "mat-expansion-panel", inputs: ["hideToggle", "togglePosition"], outputs: ["afterExpand", "afterCollapse"], exportAs: ["matExpansionPanel"] }, { kind: "component", type: i1$1.MatExpansionPanelHeader, selector: "mat-expansion-panel-header", inputs: ["expandedHeight", "collapsedHeight", "tabIndex"] }, { kind: "directive", type: i1$1.MatExpansionPanelTitle, selector: "mat-panel-title" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamExpansionPanelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-expansion-panel', standalone: true, imports: [NgFor, MatExpansionModule], template: "<mat-accordion>\n  @for (template of this.templates; track template) {\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <ng-template\n            [ngTemplateOutlet]=\"template.title\"\n            [ngTemplateOutletContext]=\"template.context ?? {}\"\n          ></ng-template>\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <ng-template\n        [ngTemplateOutlet]=\"template.content\"\n        [ngTemplateOutletContext]=\"template.context ?? {}\"\n      ></ng-template>\n    </mat-expansion-panel>\n  }\n</mat-accordion>\n", styles: [":host .mat-content,::ng-deep .mat-content{overflow:visible!important}:host .mat-expansion-panel,::ng-deep .mat-expansion-panel{box-shadow:none;border-radius:0!important;border-bottom:1px solid var(--ta-neutral-400);padding:var(--ta-space-sm) 0;background-color:var(--ta-surface-primary)}:host .mat-expansion-panel.mat-expanded,::ng-deep .mat-expansion-panel.mat-expanded{box-shadow:0 4px 8px #0000001a;border-radius:var(--ta-space-xs)!important}:host .mat-expansion-panel-header,:host .mat-expansion-panel-body,::ng-deep .mat-expansion-panel-header,::ng-deep .mat-expansion-panel-body{padding:var(--ta-space-xs)!important}\n"] }]
        }], ctorParameters: () => [], propDecorators: { templates: [{
                type: Input
            }] } });

class FileImageComponent {
    constructor() {
        this.size = 'sm';
    }
    get extIcon() {
        const ext = extractExtension(this.fileName);
        switch (ext) {
            case 'docx':
                return CamIconType.Doc;
            case 'pdf':
                return CamIconType.Pdf;
            case 'xlsx':
                return CamIconType.Xls;
            default:
                return CamIconType.FileEmpty;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FileImageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: FileImageComponent, isStandalone: true, selector: "ta-file-image", inputs: { fileName: "fileName", size: "size" }, ngImport: i0, template: "<ta-local-icon [type]=\"this.extIcon\" [size]=\"this.size\"></ta-local-icon>\n", styles: [""], dependencies: [{ kind: "component", type: LocalIconComponent, selector: "ta-local-icon", inputs: ["type", "size", "rotation"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FileImageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-file-image', standalone: true, imports: [LocalIconComponent], template: "<ta-local-icon [type]=\"this.extIcon\" [size]=\"this.size\"></ta-local-icon>\n" }]
        }], propDecorators: { fileName: [{
                type: Input
            }], size: [{
                type: Input
            }] } });

class TrigramComponent {
    constructor() {
        /**
         * Size of trigram
         */
        this.size = 35;
    }
    getFontSize() {
        return Math.round(this.size / 3);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TrigramComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: TrigramComponent, isStandalone: true, selector: "ta-trigram", inputs: { value: "value", size: "size" }, ngImport: i0, template: "@if (this.value) {\n  <div\n    class=\"trigram\"\n    [ngStyle]=\"{\n      'width.px': this.size,\n      'height.px': this.size,\n      'line-height.px': this.size,\n      'font-size.px': this.getFontSize()\n    }\"\n  >\n    {{ this.value }}\n  </div>\n}\n", styles: [".trigram{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight);background-color:var(--ta-surface-brand-primary);color:var(--ta-neutral-100);border-radius:100%;width:36px;height:36px;line-height:36px;text-align:center;vertical-align:middle;margin:auto}\n"], dependencies: [{ kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TrigramComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-trigram', standalone: true, imports: [NgIf, NgStyle], template: "@if (this.value) {\n  <div\n    class=\"trigram\"\n    [ngStyle]=\"{\n      'width.px': this.size,\n      'height.px': this.size,\n      'line-height.px': this.size,\n      'font-size.px': this.getFontSize()\n    }\"\n  >\n    {{ this.value }}\n  </div>\n}\n", styles: [".trigram{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight);background-color:var(--ta-surface-brand-primary);color:var(--ta-neutral-100);border-radius:100%;width:36px;height:36px;line-height:36px;text-align:center;vertical-align:middle;margin:auto}\n"] }]
        }], ctorParameters: () => [], propDecorators: { value: [{
                type: Input
            }], size: [{
                type: Input
            }] } });

class UserLogoComponent {
    constructor() {
        /**
         * Size of user logo desired
         */
        this.size = 'lg';
        this.defaultType = 'font';
        this._trigram = (name) => {
            if (!name)
                return '';
            if (name.length < 4)
                return name;
            return (name[0] + name[2] + name[3]).toUpperCase();
        };
    }
    get sizeValue() {
        if (this.forcedSize) {
            return this.forcedSize;
        }
        switch (this.size) {
            case 'sm':
                return 16;
            case 'md':
                return 24;
            case 'lg':
                return 48;
            case 'xl':
                return 70;
            default:
                return 48;
        }
    }
    getTrigram() {
        const trigram = this.user?.trigram || this.userInfo?.naming?.trigram;
        if (trigram) {
            return trigram;
        }
        return this._trigram(this.user?.firstName || this.userInfo?.naming?.trigram);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: UserLogoComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: UserLogoComponent, isStandalone: true, selector: "ta-user-logo", inputs: { userInfo: "userInfo", user: "user", size: "size", forcedSize: "forcedSize", defaultType: "defaultType" }, ngImport: i0, template: "@if (this.user?.picture || this.userInfo?.profilePictureUrl) {\n  <div class=\"img-container\">\n    <img\n      [src]=\"this.user?.picture || this.userInfo?.profilePictureUrl\"\n      [ngStyle]=\"{ 'width.px': this.sizeValue, 'height.px': this.sizeValue }\"\n      class=\"user-image\"\n    />\n  </div>\n} @else if (this.defaultType === 'trigram') {\n  <ta-trigram [value]=\"this.getTrigram()\" [size]=\"this.sizeValue\"></ta-trigram>\n} @else if (this.defaultType === 'font') {\n  <div\n    class=\"profile-icon\"\n    [ngStyle]=\"{ 'width.px': this.sizeValue, 'height.px': this.sizeValue }\"\n  >\n    <ta-font-icon name=\"profil-picture\" [type]=\"this.size ?? 'lg'\"></ta-font-icon>\n  </div>\n}\n", styles: [".user-image{border-radius:100%}.img-container{display:flex;justify-content:center;align-items:center}.profile-icon{display:flex;justify-content:center;align-items:center;border-radius:50%;background-color:var(--ta-brand-200);overflow:hidden}.profile-icon ta-font-icon{color:var(--ta-brand-700)}\n"], dependencies: [{ kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: TrigramComponent, selector: "ta-trigram", inputs: ["value", "size"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: UserLogoComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-user-logo', standalone: true, imports: [NgIf, NgStyle, FontIconComponent, TrigramComponent], template: "@if (this.user?.picture || this.userInfo?.profilePictureUrl) {\n  <div class=\"img-container\">\n    <img\n      [src]=\"this.user?.picture || this.userInfo?.profilePictureUrl\"\n      [ngStyle]=\"{ 'width.px': this.sizeValue, 'height.px': this.sizeValue }\"\n      class=\"user-image\"\n    />\n  </div>\n} @else if (this.defaultType === 'trigram') {\n  <ta-trigram [value]=\"this.getTrigram()\" [size]=\"this.sizeValue\"></ta-trigram>\n} @else if (this.defaultType === 'font') {\n  <div\n    class=\"profile-icon\"\n    [ngStyle]=\"{ 'width.px': this.sizeValue, 'height.px': this.sizeValue }\"\n  >\n    <ta-font-icon name=\"profil-picture\" [type]=\"this.size ?? 'lg'\"></ta-font-icon>\n  </div>\n}\n", styles: [".user-image{border-radius:100%}.img-container{display:flex;justify-content:center;align-items:center}.profile-icon{display:flex;justify-content:center;align-items:center;border-radius:50%;background-color:var(--ta-brand-200);overflow:hidden}.profile-icon ta-font-icon{color:var(--ta-brand-700)}\n"] }]
        }], propDecorators: { userInfo: [{
                type: Input
            }], user: [{
                type: Input
            }], size: [{
                type: Input
            }], forcedSize: [{
                type: Input
            }], defaultType: [{
                type: Input
            }] } });

class HelloUserComponent {
    constructor() {
        this.bulletSize = 'lg';
        CamTranslationUI.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: HelloUserComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: HelloUserComponent, isStandalone: true, selector: "ta-hello-user", inputs: { title: "title", userInfo: "userInfo", bulletSize: "bulletSize", footer: "footer" }, ngImport: i0, template: "<div class=\"hello-user-container\">\n  @if (this.title) {\n    <div class=\"title\">{{ this.title | translate }}</div>\n  }\n\n  @if (this.userInfo) {\n    <div class=\"trigram\">\n      <ta-user-logo [userInfo]=\"this.userInfo\" [size]=\"this.bulletSize\"></ta-user-logo>\n    </div>\n  }\n\n  <div class=\"footer\">\n    @if (this.userInfo?.naming?.firstName) {\n      <div>\n        {{ this.userInfo?.naming?.firstName }}\n      </div>\n    }\n    @if (this.userInfo?.naming?.name) {\n      <div>\n        {{ this.userInfo?.naming?.name }}\n      </div>\n    }\n    @if (this.footer) {\n      <div>{{ this.footer | translate }}</div>\n    }\n  </div>\n</div>\n", styles: [".hello-user-container{display:flex;flex-direction:column;gap:var(--ta-space-sm)}.hello-user-container .title{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-bold-weight);line-height:24px;letter-spacing:0;text-align:center;color:var(--ta-neutral-900)}.hello-user-container .trigram{margin:auto}.hello-user-container .footer{font-size:var(--ta-font-h1-default-size);line-height:var(--ta-font-h1-default-line);font-weight:var(--ta-font-h1-default-weight);text-align:center;color:var(--ta-neutral-900)}\n"], dependencies: [{ kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }, { kind: "component", type: UserLogoComponent, selector: "ta-user-logo", inputs: ["userInfo", "user", "size", "forcedSize", "defaultType"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: HelloUserComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-hello-user', standalone: true, imports: [NgIf, TranslateModule, UserLogoComponent], template: "<div class=\"hello-user-container\">\n  @if (this.title) {\n    <div class=\"title\">{{ this.title | translate }}</div>\n  }\n\n  @if (this.userInfo) {\n    <div class=\"trigram\">\n      <ta-user-logo [userInfo]=\"this.userInfo\" [size]=\"this.bulletSize\"></ta-user-logo>\n    </div>\n  }\n\n  <div class=\"footer\">\n    @if (this.userInfo?.naming?.firstName) {\n      <div>\n        {{ this.userInfo?.naming?.firstName }}\n      </div>\n    }\n    @if (this.userInfo?.naming?.name) {\n      <div>\n        {{ this.userInfo?.naming?.name }}\n      </div>\n    }\n    @if (this.footer) {\n      <div>{{ this.footer | translate }}</div>\n    }\n  </div>\n</div>\n", styles: [".hello-user-container{display:flex;flex-direction:column;gap:var(--ta-space-sm)}.hello-user-container .title{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-bold-weight);line-height:24px;letter-spacing:0;text-align:center;color:var(--ta-neutral-900)}.hello-user-container .trigram{margin:auto}.hello-user-container .footer{font-size:var(--ta-font-h1-default-size);line-height:var(--ta-font-h1-default-line);font-weight:var(--ta-font-h1-default-weight);text-align:center;color:var(--ta-neutral-900)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { title: [{
                type: Input
            }], userInfo: [{
                type: Input
            }], bulletSize: [{
                type: Input
            }], footer: [{
                type: Input
            }] } });

class HourDateLineComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: HourDateLineComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: HourDateLineComponent, isStandalone: true, selector: "ta-hour-date-line", inputs: { startDate: "startDate", endDate: "endDate" }, ngImport: i0, template: "<div class=\"hour-date-line-container\">\n  @if (this.startDate) {\n    <span class=\"label date mr-space-xs\">\n      {{ this.startDate | date : \"shortDate\" }}\n    </span>\n  }\n\n  <span class=\"label hour\">\n    @if (this.startDate) {\n      <span>{{ this.startDate | date : \"HH:mm\" }}</span>\n    }\n    -\n    @if (this.endDate) {\n      <span>{{ this.endDate | date : \"HH:mm\" }}</span>\n    }\n  </span>\n</div>\n", styles: [".hour-date-line-container{display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start}.hour-date-line-container .label{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight);color:var(--ta-neutral-900)}\n"], dependencies: [{ kind: "pipe", type: DatePipe, name: "date" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: HourDateLineComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-hour-date-line', standalone: true, imports: [NgIf, DatePipe], template: "<div class=\"hour-date-line-container\">\n  @if (this.startDate) {\n    <span class=\"label date mr-space-xs\">\n      {{ this.startDate | date : \"shortDate\" }}\n    </span>\n  }\n\n  <span class=\"label hour\">\n    @if (this.startDate) {\n      <span>{{ this.startDate | date : \"HH:mm\" }}</span>\n    }\n    -\n    @if (this.endDate) {\n      <span>{{ this.endDate | date : \"HH:mm\" }}</span>\n    }\n  </span>\n</div>\n", styles: [".hour-date-line-container{display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start}.hour-date-line-container .label{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight);color:var(--ta-neutral-900)}\n"] }]
        }], propDecorators: { startDate: [{
                type: Input
            }], endDate: [{
                type: Input
            }] } });

class LabelComponent {
    constructor() {
        this.size = 'md';
        this.type = 'default';
    }
    getClass() {
        return `label-${this.type} ${this.size}`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LabelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: LabelComponent, isStandalone: true, selector: "ta-label", inputs: { size: "size", type: "type" }, ngImport: i0, template: "<div class=\"d-flex\">\n  <span class=\"label-container\" [ngClass]=\"this.getClass()\">\n    <ng-content></ng-content>\n  </span>\n</div>\n", styles: [".label-container{padding:var(--ta-space-sm) var(--ta-space-md);font-size:var(--ta-font-body-sm-default-size);line-height:var(--ta-font-body-sm-default-line);font-weight:var(--ta-font-body-sm-default-weight);border-radius:var(--ta-radius-label);border:1px solid transparent}.label-container.xs{padding:var(--ta-space-xs) var(--ta-space-xs);font-size:var(--ta-font-body-xs-default-size);line-height:var(--ta-font-body-xs-default-line);font-weight:var(--ta-font-body-xs-default-weight)}.label-container.sm{padding:var(--ta-space-xs) var(--ta-space-lg);font-size:var(--ta-font-body-sm-default-size);line-height:var(--ta-font-body-sm-default-line);font-weight:var(--ta-font-body-sm-default-weight)}.label-container.lg{padding:var(--ta-space-md) var(--ta-space-lg);font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}.label-default{color:var(--ta-text-brand-primary);background:var(--ta-surface-default);border-color:var(--ta-border-brand)}.label-secondary{color:var(--ta-text-body);background:var(--ta-surface-secondary);border-color:var(--ta-neutral-600)}.label-success{color:var(--ta-text-success);background:var(--ta-surface-success);border-color:var(--ta-border-success)}.label-warning{color:var(--ta-text-warning);background:var(--ta-surface-warning);border-color:var(--ta-border-warning)}.label-alert{color:var(--ta-text-alert);background:var(--ta-surface-alert);border-color:var(--ta-border-alert)}.label-purple{color:var(--ta-semantic-purple-dark);background:var(--ta-semantic-purple-light);border-color:var(--ta-semantic-purple-dark)}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LabelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-label', standalone: true, imports: [NgClass], template: "<div class=\"d-flex\">\n  <span class=\"label-container\" [ngClass]=\"this.getClass()\">\n    <ng-content></ng-content>\n  </span>\n</div>\n", styles: [".label-container{padding:var(--ta-space-sm) var(--ta-space-md);font-size:var(--ta-font-body-sm-default-size);line-height:var(--ta-font-body-sm-default-line);font-weight:var(--ta-font-body-sm-default-weight);border-radius:var(--ta-radius-label);border:1px solid transparent}.label-container.xs{padding:var(--ta-space-xs) var(--ta-space-xs);font-size:var(--ta-font-body-xs-default-size);line-height:var(--ta-font-body-xs-default-line);font-weight:var(--ta-font-body-xs-default-weight)}.label-container.sm{padding:var(--ta-space-xs) var(--ta-space-lg);font-size:var(--ta-font-body-sm-default-size);line-height:var(--ta-font-body-sm-default-line);font-weight:var(--ta-font-body-sm-default-weight)}.label-container.lg{padding:var(--ta-space-md) var(--ta-space-lg);font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}.label-default{color:var(--ta-text-brand-primary);background:var(--ta-surface-default);border-color:var(--ta-border-brand)}.label-secondary{color:var(--ta-text-body);background:var(--ta-surface-secondary);border-color:var(--ta-neutral-600)}.label-success{color:var(--ta-text-success);background:var(--ta-surface-success);border-color:var(--ta-border-success)}.label-warning{color:var(--ta-text-warning);background:var(--ta-surface-warning);border-color:var(--ta-border-warning)}.label-alert{color:var(--ta-text-alert);background:var(--ta-surface-alert);border-color:var(--ta-border-alert)}.label-purple{color:var(--ta-semantic-purple-dark);background:var(--ta-semantic-purple-light);border-color:var(--ta-semantic-purple-dark)}\n"] }]
        }], propDecorators: { size: [{
                type: Input
            }], type: [{
                type: Input
            }] } });

class LinkComponent {
    constructor() {
        this.state = 'classic';
        this.underline = true;
        this.bold = false;
        this.size = 'md';
        this.icon = null;
        this.action = new EventEmitter();
    }
    handleClick() {
        if (this.state === 'classic') {
            this.action.emit();
        }
    }
    getClass() {
        const css = {};
        css[this.state] = true;
        css[this.size] = true;
        return css;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LinkComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: LinkComponent, isStandalone: true, selector: "ta-link", inputs: { state: "state", underline: "underline", bold: "bold", size: "size", icon: "icon" }, outputs: { action: "action" }, ngImport: i0, template: "<a\n  class=\"link pointer\"\n  [ngClass]=\"this.getClass()\"\n  (click)=\"this.handleClick()\"\n  [class.align-center]=\"this.icon\"\n  [class.bold]=\"this.bold\"\n>\n  <div class=\"flex-row g-space-sm\">\n    @if (this.icon) {\n      <ta-font-icon [name]=\"this.icon\"></ta-font-icon>\n    }\n    <div class=\"content\" [class.underline]=\"this.underline\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</a>\n", styles: [".link{justify-content:center;color:var(--ta-text-primary)}.link:hover{color:var(--ta-text-brand-primary)}.link.disabled,.link.inactive{cursor:not-allowed;color:var(--ta-neutral-400)}.link .content.underline{text-decoration:underline}.xs{font-size:var(--ta-font-body-xs-default-size);line-height:var(--ta-font-body-xs-default-line);font-weight:var(--ta-font-body-xs-default-weight)}.sm{font-size:var(--ta-font-body-sm-default-size);line-height:var(--ta-font-body-sm-default-line);font-weight:var(--ta-font-body-sm-default-weight)}.md{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}.bold{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-bold-weight)}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LinkComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-link', standalone: true, imports: [NgIf, NgClass, FontIconComponent], template: "<a\n  class=\"link pointer\"\n  [ngClass]=\"this.getClass()\"\n  (click)=\"this.handleClick()\"\n  [class.align-center]=\"this.icon\"\n  [class.bold]=\"this.bold\"\n>\n  <div class=\"flex-row g-space-sm\">\n    @if (this.icon) {\n      <ta-font-icon [name]=\"this.icon\"></ta-font-icon>\n    }\n    <div class=\"content\" [class.underline]=\"this.underline\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</a>\n", styles: [".link{justify-content:center;color:var(--ta-text-primary)}.link:hover{color:var(--ta-text-brand-primary)}.link.disabled,.link.inactive{cursor:not-allowed;color:var(--ta-neutral-400)}.link .content.underline{text-decoration:underline}.xs{font-size:var(--ta-font-body-xs-default-size);line-height:var(--ta-font-body-xs-default-line);font-weight:var(--ta-font-body-xs-default-weight)}.sm{font-size:var(--ta-font-body-sm-default-size);line-height:var(--ta-font-body-sm-default-line);font-weight:var(--ta-font-body-sm-default-weight)}.md{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}.bold{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-bold-weight)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { state: [{
                type: Input
            }], underline: [{
                type: Input
            }], bold: [{
                type: Input
            }], size: [{
                type: Input
            }], icon: [{
                type: Input
            }], action: [{
                type: Output
            }] } });

class LogoComponent {
    get imageWidth() {
        return this.widthPercentage + '%';
    }
    constructor() {
        /**
         * Set the logo width in %
         */
        this.widthPercentage = 100;
    }
    getImagePath() {
        return `assets/partners/logo/logo${this.type ? `-${this.type}` : ''}${this.color ? `-${this.color}` : ''}.png`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LogoComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: LogoComponent, isStandalone: true, selector: "ta-logo", inputs: { color: "color", type: "type", widthPercentage: "widthPercentage" }, ngImport: i0, template: "<img [src]=\"this.getImagePath()\" [attr.width]=\"this.imageWidth\" />\n", styles: ["img{margin:auto}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LogoComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-logo', standalone: true, template: "<img [src]=\"this.getImagePath()\" [attr.width]=\"this.imageWidth\" />\n", styles: ["img{margin:auto}\n"] }]
        }], ctorParameters: () => [], propDecorators: { color: [{
                type: Input
            }], type: [{
                type: Input
            }], widthPercentage: [{
                type: Input
            }] } });

class MegaoctetComponent {
    constructor() {
        this.icon = false;
        CamTranslationUI.getInstance();
    }
    get megaoctet() {
        return roundToDecimal(octetsToMo(this.octet), 2);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MegaoctetComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: MegaoctetComponent, isStandalone: true, selector: "ta-megaoctet", inputs: { octet: "octet", icon: "icon" }, ngImport: i0, template: "<div class=\"flex-row align-items-center\">\n  @if (this.icon) {\n    <ta-font-icon name=\"database\" size=\"xs\"></ta-font-icon>\n  }\n  <span>{{ 'ui.megaoctet' | translate: { size: this.megaoctet } }}</span>\n</div>\n", styles: ["ta-font-icon{color:var(--ta-icon-brand-primary)}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MegaoctetComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-megaoctet', standalone: true, imports: [NgIf, FontIconComponent, TranslateModule], template: "<div class=\"flex-row align-items-center\">\n  @if (this.icon) {\n    <ta-font-icon name=\"database\" size=\"xs\"></ta-font-icon>\n  }\n  <span>{{ 'ui.megaoctet' | translate: { size: this.megaoctet } }}</span>\n</div>\n", styles: ["ta-font-icon{color:var(--ta-icon-brand-primary)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { octet: [{
                type: Input
            }], icon: [{
                type: Input
            }] } });

class NewComponent {
    constructor() {
        this.visible = false;
        this.isRelative = false;
        this.size = 'md';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: NewComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: NewComponent, isStandalone: true, selector: "ta-new", inputs: { visible: "visible", isRelative: "isRelative", size: "size" }, ngImport: i0, template: "@if (this.visible) {\r\n  <div class=\"bullet\" [class.is-relative]=\"this.isRelative\" [class.is-absolute]=\"!this.isRelative\" [class]=\"this.size\">\r\n    <ta-bullet type=\"new\" [size]=\"this.size\"></ta-bullet>\r\n  </div>\r\n}\r\n", styles: [".bullet.is-relative{position:relative}.bullet.is-absolute{position:absolute}.bullet.xs.is-absolute{top:0;right:0}.bullet.sm.is-absolute{top:-2px;right:-2px}.bullet.md.is-absolute{top:-5px;right:-5px}.bullet.lg.is-absolute{top:-8px;right:-8px}\n"], dependencies: [{ kind: "component", type: BulletComponent, selector: "ta-bullet", inputs: ["size", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: NewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-new', standalone: true, imports: [NgIf, BulletComponent], template: "@if (this.visible) {\r\n  <div class=\"bullet\" [class.is-relative]=\"this.isRelative\" [class.is-absolute]=\"!this.isRelative\" [class]=\"this.size\">\r\n    <ta-bullet type=\"new\" [size]=\"this.size\"></ta-bullet>\r\n  </div>\r\n}\r\n", styles: [".bullet.is-relative{position:relative}.bullet.is-absolute{position:absolute}.bullet.xs.is-absolute{top:0;right:0}.bullet.sm.is-absolute{top:-2px;right:-2px}.bullet.md.is-absolute{top:-5px;right:-5px}.bullet.lg.is-absolute{top:-8px;right:-8px}\n"] }]
        }], propDecorators: { visible: [{
                type: Input
            }], isRelative: [{
                type: Input
            }], size: [{
                type: Input
            }] } });

class NotificationBadgeContainerComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: NotificationBadgeContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: NotificationBadgeContainerComponent, isStandalone: true, selector: "ta-notification-badge-container", ngImport: i0, template: "<div class=\"notification-badge-container\">\n  <ng-content></ng-content>\n  <ng-content select=\"ta-notification-badge\"></ng-content>\n</div>\n", styles: [".notification-badge-container{position:relative}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: NotificationBadgeContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-notification-badge-container', standalone: true, template: "<div class=\"notification-badge-container\">\n  <ng-content></ng-content>\n  <ng-content select=\"ta-notification-badge\"></ng-content>\n</div>\n", styles: [".notification-badge-container{position:relative}\n"] }]
        }] });

class NotificationBadgeComponent {
    constructor() {
        this.fontSize = 'xs';
        this.relative = false;
    }
    getClass() {
        const css = {};
        css[`bgc-${this.style ?? 'semantic-token-info'}`] = true;
        if (this.relative) {
            css['relative'] = true;
        }
        return css;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: NotificationBadgeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: NotificationBadgeComponent, isStandalone: true, selector: "ta-notification-badge", inputs: { number: "number", fontSize: "fontSize", style: "style", relative: "relative" }, ngImport: i0, template: "<div\n  class=\"badge-container notif-{{ this.fontSize }}\"\n  [ngClass]=\"this.getClass()\"\n>\n  <div class=\"pt-space-xs\">{{ this.number }}</div>\n</div>\n", styles: [".badge-container{color:var(--ta-neutral-50)!important;background-color:var(--ta-brand-400);height:15px;position:absolute;top:-8px;right:-8px;display:flex;align-items:center;justify-content:center;border-radius:50px;box-shadow:0 4px 8px #0000001a;padding-bottom:5px;padding-left:3px;padding-right:3px}.badge-container.relative{position:relative;top:0;right:0}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: NotificationBadgeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-notification-badge', standalone: true, imports: [NgClass], template: "<div\n  class=\"badge-container notif-{{ this.fontSize }}\"\n  [ngClass]=\"this.getClass()\"\n>\n  <div class=\"pt-space-xs\">{{ this.number }}</div>\n</div>\n", styles: [".badge-container{color:var(--ta-neutral-50)!important;background-color:var(--ta-brand-400);height:15px;position:absolute;top:-8px;right:-8px;display:flex;align-items:center;justify-content:center;border-radius:50px;box-shadow:0 4px 8px #0000001a;padding-bottom:5px;padding-left:3px;padding-right:3px}.badge-container.relative{position:relative;top:0;right:0}\n"] }]
        }], propDecorators: { number: [{
                type: Input
            }], fontSize: [{
                type: Input
            }], style: [{
                type: Input
            }], relative: [{
                type: Input
            }] } });

class TypedMessageComponent {
    get icon() {
        switch (this.type) {
            case 'danger':
                return 'error_outline';
            case 'success':
                return 'check_circle_outline';
            case 'info':
                return 'help_outline';
            case 'warning':
                return 'warning_amber';
            default:
                return '';
        }
    }
    constructor() {
        CamTranslationUI.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TypedMessageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: TypedMessageComponent, isStandalone: true, selector: "ta-typed-message", inputs: { text: "text", type: "type" }, ngImport: i0, template: "<div class=\"alert alert-{{ this.type }}\" role=\"alert\">\n  <ta-font-icon [type]=\"'md'\">{{ this.icon }}</ta-font-icon>\n  <span class=\"text\">{{ this.text | translate }}</span>\n</div>\n", styles: [".alert{border-radius:8px;display:inline-flex;gap:var(--ta-space-xs);border:none;padding:var(--ta-space-xs)}.text{margin:auto}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TypedMessageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-typed-message', standalone: true, imports: [FontIconComponent, TranslateModule], template: "<div class=\"alert alert-{{ this.type }}\" role=\"alert\">\n  <ta-font-icon [type]=\"'md'\">{{ this.icon }}</ta-font-icon>\n  <span class=\"text\">{{ this.text | translate }}</span>\n</div>\n", styles: [".alert{border-radius:8px;display:inline-flex;gap:var(--ta-space-xs);border:none;padding:var(--ta-space-xs)}.text{margin:auto}\n"] }]
        }], ctorParameters: () => [], propDecorators: { text: [{
                type: Input
            }], type: [{
                type: Input
            }] } });

class PictureInfoMessageComponent {
    get displayedText() {
        return this.text ?? '';
    }
    isFontIcon(icon) {
        return isFontIcon(icon);
    }
    getFontIcon(icon) {
        return getFontIcon(icon);
    }
    isLocalIcon(icon) {
        return isLocalIcon(icon);
    }
    constructor() {
        this.type = 'info';
        CamTranslationUI.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: PictureInfoMessageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: PictureInfoMessageComponent, isStandalone: true, selector: "ta-picture-info-message", inputs: { icon: "icon", iconSize: "iconSize", text: "text", type: "type" }, ngImport: i0, template: "@if (this.icon) {\n  <div class=\"card\">\n    @if (this.isLocalIcon(this.icon)) {\n      <ta-local-icon\n        [type]=\"this.icon\"\n        [size]=\"this.iconSize ?? 'md'\"\n      ></ta-local-icon>\n    } @else if (this.isFontIcon(this.icon)) {\n      <ta-font-icon\n        class=\"font-icon\"\n        [name]=\"this.getFontIcon(this.icon)\"\n        [type]=\"this.iconSize ?? 'md'\"\n      ></ta-font-icon>\n    }\n\n    <div class=\"pt-space-xs\">{{ this.displayedText | translate }}</div>\n  </div>\n} @else {\n  <ta-typed-message [text]=\"this.displayedText\" [type]=\"this.type ?? 'info'\"></ta-typed-message>\n}\n", styles: [".card{padding:var(--ta-space-sm);text-align:center}p{padding-top:var(--ta-space-sm)}ta-font-icon{color:var(--ta-brand-400)}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: LocalIconComponent, selector: "ta-local-icon", inputs: ["type", "size", "rotation"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }, { kind: "component", type: TypedMessageComponent, selector: "ta-typed-message", inputs: ["text", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: PictureInfoMessageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-picture-info-message', standalone: true, imports: [NgIf, FontIconComponent, LocalIconComponent, TranslateModule, TypedMessageComponent], template: "@if (this.icon) {\n  <div class=\"card\">\n    @if (this.isLocalIcon(this.icon)) {\n      <ta-local-icon\n        [type]=\"this.icon\"\n        [size]=\"this.iconSize ?? 'md'\"\n      ></ta-local-icon>\n    } @else if (this.isFontIcon(this.icon)) {\n      <ta-font-icon\n        class=\"font-icon\"\n        [name]=\"this.getFontIcon(this.icon)\"\n        [type]=\"this.iconSize ?? 'md'\"\n      ></ta-font-icon>\n    }\n\n    <div class=\"pt-space-xs\">{{ this.displayedText | translate }}</div>\n  </div>\n} @else {\n  <ta-typed-message [text]=\"this.displayedText\" [type]=\"this.type ?? 'info'\"></ta-typed-message>\n}\n", styles: [".card{padding:var(--ta-space-sm);text-align:center}p{padding-top:var(--ta-space-sm)}ta-font-icon{color:var(--ta-brand-400)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { icon: [{
                type: Input
            }], iconSize: [{
                type: Input
            }], text: [{
                type: Input
            }], type: [{
                type: Input
            }] } });

class InlineProfileDataComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InlineProfileDataComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: InlineProfileDataComponent, isStandalone: true, selector: "ta-inline-profile-data", inputs: { profile: "profile", userLogo: "userLogo" }, ngImport: i0, template: "<div class=\"align-center\">\n  @if (this.userLogo) {\n    <div class=\"mr-space-xs\">\n      <ta-user-logo [userInfo]=\"this.userLogo.userInfo\" [size]=\"this.userLogo.size\"></ta-user-logo>\n    </div>\n  }\n\n  <div class=\"text\">\n    @if (this.profile.title?.second) {\n      <div class=\"text\">\n        {{ this.profile.title?.second }}\n      </div>\n    }\n    @if (this.profile.email) {\n      <div class=\"mail\">\n        {{ this.profile.email }}\n      </div>\n    }\n  </div>\n</div>\n", styles: [".mail{color:var(--ta-neutral-500);font-size:var(--ta-font-body-xs-default-size);line-height:var(--ta-font-body-xs-default-line);font-weight:var(--ta-font-body-xs-default-weight);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.text{font-size:var(--ta-font-body-sm-default-size);line-height:var(--ta-font-body-sm-default-line);font-weight:var(--ta-font-body-sm-default-weight);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}\n"], dependencies: [{ kind: "component", type: UserLogoComponent, selector: "ta-user-logo", inputs: ["userInfo", "user", "size", "forcedSize", "defaultType"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: InlineProfileDataComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-inline-profile-data', standalone: true, imports: [NgIf, UserLogoComponent], template: "<div class=\"align-center\">\n  @if (this.userLogo) {\n    <div class=\"mr-space-xs\">\n      <ta-user-logo [userInfo]=\"this.userLogo.userInfo\" [size]=\"this.userLogo.size\"></ta-user-logo>\n    </div>\n  }\n\n  <div class=\"text\">\n    @if (this.profile.title?.second) {\n      <div class=\"text\">\n        {{ this.profile.title?.second }}\n      </div>\n    }\n    @if (this.profile.email) {\n      <div class=\"mail\">\n        {{ this.profile.email }}\n      </div>\n    }\n  </div>\n</div>\n", styles: [".mail{color:var(--ta-neutral-500);font-size:var(--ta-font-body-xs-default-size);line-height:var(--ta-font-body-xs-default-line);font-weight:var(--ta-font-body-xs-default-weight);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.text{font-size:var(--ta-font-body-sm-default-size);line-height:var(--ta-font-body-sm-default-line);font-weight:var(--ta-font-body-sm-default-weight);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}\n"] }]
        }], propDecorators: { profile: [{
                type: Input
            }], userLogo: [{
                type: Input
            }] } });

/**
 * @deprecated
 */
class ProfileDataComponent {
    constructor() {
        this.callAction = new EventEmitter();
        this.action = new EventEmitter();
        CamTranslationUI.getInstance();
    }
    tel() {
        if (this.profile.phoneNumber) {
            call(this.profile.phoneNumber);
            this.callAction.emit();
        }
    }
    mail() {
        if (this.profile.email) {
            sendMail(this.profile.email);
        }
    }
    launchAction() {
        this.action.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ProfileDataComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: ProfileDataComponent, isStandalone: true, selector: "ta-profile-data", inputs: { profile: "profile", userLogo: "userLogo", sideIcon: "sideIcon" }, outputs: { callAction: "callAction", action: "action" }, ngImport: i0, template: "@if (this.sideIcon) {\n  <div class=\"ta-r pt-space-xl\">\n    <ta-button [options]=\"{ circular: 'small' }\" [style]=\"'secondary'\" (action)=\"this.launchAction()\">\n      <ta-font-icon [name]=\"this.sideIcon\"></ta-font-icon>\n    </ta-button>\n  </div>\n}\n\n<div class=\"profile\">\n  @if (this.userLogo) {\n    <div class=\"ta-c\">\n      <ta-user-logo [userInfo]=\"this.userLogo.userInfo\" size=\"xl\"></ta-user-logo>\n    </div>\n  }\n\n  <div class=\"title\">\n    <div class=\"second text\">{{ this.profile.title?.second }}</div>\n    <div class=\"main text\">{{ this.profile.title?.main }}</div>\n  </div>\n\n  <div class=\"sub-title text\">\n    {{ this.profile.title?.sub ?? '' | translate }}\n  </div>\n\n  <div class=\"ta-c cta-buttons g-space-sm\">\n    @if (this.profile.phoneNumber) {\n      <ta-button\n        [ngClass]=\"{ 'mr-space-xs': this.profile.email }\"\n        [options]=\"{ circular: 'big' }\"\n        (action)=\"this.tel()\"\n      >\n        <ta-font-icon name=\"phone\" type=\"md\"></ta-font-icon>\n      </ta-button>\n    }\n    @if (this.profile.email) {\n      <ta-button [options]=\"{ circular: 'big' }\" (action)=\"this.mail()\">\n        <ta-font-icon name=\"mail\" type=\"md\"></ta-font-icon>\n      </ta-button>\n    }\n  </div>\n</div>\n", styles: [".profile{margin-bottom:var(--ta-space-xl)}.profile .cta-buttons{display:flex;flex-direction:row;justify-content:center}.profile .title{font-size:var(--ta-font-key-xl-default-size);line-height:var(--ta-font-key-xl-default-line);font-weight:var(--ta-font-key-xl-default-weight);text-align:center;line-height:50px;margin-bottom:var(--ta-space-sm)}.profile .title .main{text-transform:uppercase}.profile .sub-title{font-size:var(--ta-font-key-lg-default-size);line-height:var(--ta-font-key-lg-default-line);font-weight:var(--ta-font-key-lg-default-weight);text-align:center;color:var(--ta-neutral-500);margin-bottom:var(--ta-space-md)}.profile .text{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }, { kind: "component", type: UserLogoComponent, selector: "ta-user-logo", inputs: ["userInfo", "user", "size", "forcedSize", "defaultType"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ProfileDataComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-profile-data', standalone: true, imports: [NgIf, NgClass, FontIconComponent, TranslateModule, UserLogoComponent, ButtonComponent], template: "@if (this.sideIcon) {\n  <div class=\"ta-r pt-space-xl\">\n    <ta-button [options]=\"{ circular: 'small' }\" [style]=\"'secondary'\" (action)=\"this.launchAction()\">\n      <ta-font-icon [name]=\"this.sideIcon\"></ta-font-icon>\n    </ta-button>\n  </div>\n}\n\n<div class=\"profile\">\n  @if (this.userLogo) {\n    <div class=\"ta-c\">\n      <ta-user-logo [userInfo]=\"this.userLogo.userInfo\" size=\"xl\"></ta-user-logo>\n    </div>\n  }\n\n  <div class=\"title\">\n    <div class=\"second text\">{{ this.profile.title?.second }}</div>\n    <div class=\"main text\">{{ this.profile.title?.main }}</div>\n  </div>\n\n  <div class=\"sub-title text\">\n    {{ this.profile.title?.sub ?? '' | translate }}\n  </div>\n\n  <div class=\"ta-c cta-buttons g-space-sm\">\n    @if (this.profile.phoneNumber) {\n      <ta-button\n        [ngClass]=\"{ 'mr-space-xs': this.profile.email }\"\n        [options]=\"{ circular: 'big' }\"\n        (action)=\"this.tel()\"\n      >\n        <ta-font-icon name=\"phone\" type=\"md\"></ta-font-icon>\n      </ta-button>\n    }\n    @if (this.profile.email) {\n      <ta-button [options]=\"{ circular: 'big' }\" (action)=\"this.mail()\">\n        <ta-font-icon name=\"mail\" type=\"md\"></ta-font-icon>\n      </ta-button>\n    }\n  </div>\n</div>\n", styles: [".profile{margin-bottom:var(--ta-space-xl)}.profile .cta-buttons{display:flex;flex-direction:row;justify-content:center}.profile .title{font-size:var(--ta-font-key-xl-default-size);line-height:var(--ta-font-key-xl-default-line);font-weight:var(--ta-font-key-xl-default-weight);text-align:center;line-height:50px;margin-bottom:var(--ta-space-sm)}.profile .title .main{text-transform:uppercase}.profile .sub-title{font-size:var(--ta-font-key-lg-default-size);line-height:var(--ta-font-key-lg-default-line);font-weight:var(--ta-font-key-lg-default-weight);text-align:center;color:var(--ta-neutral-500);margin-bottom:var(--ta-space-md)}.profile .text{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}\n"] }]
        }], ctorParameters: () => [], propDecorators: { profile: [{
                type: Input
            }], userLogo: [{
                type: Input
            }], sideIcon: [{
                type: Input
            }], callAction: [{
                type: Output
            }], action: [{
                type: Output
            }] } });

class TitleComponent {
    constructor() {
        /**
         * Title level
         * Higher value means lower title size
         */
        this.level = 1;
        /**
         * Title theme
         * If set to true, title will be themed with CSS
         */
        this.isTheme = false;
        this.isBold = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TitleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: TitleComponent, isStandalone: true, selector: "ta-title", inputs: { level: "level", isTheme: "isTheme", isBold: "isBold" }, ngImport: i0, template: "@switch (this.level) {\n  @case (1) {\n    <h1 [ngClass]=\"{ 'theme-title': this.isTheme, bold: this.isBold }\">\n      <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n    </h1>\n  }\n  @case (2) {\n    <h2 [ngClass]=\"{ 'theme-title': this.isTheme, bold: this.isBold }\">\n      <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n    </h2>\n  }\n  @case (3) {\n    <h3 [ngClass]=\"{ 'theme-title': this.isTheme, bold: this.isBold }\">\n      <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n    </h3>\n  }\n  @case (4) {\n    <h4 [ngClass]=\"{ 'theme-title': this.isTheme, bold: this.isBold }\">\n      <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n    </h4>\n  }\n  @case (5) {\n    <h5 [ngClass]=\"{ 'theme-title': this.isTheme, bold: this.isBold }\">\n      <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n    </h5>\n  }\n  @case (6) {\n    <h6 [ngClass]=\"{ 'theme-title': this.isTheme, bold: this.isBold }\">\n      <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n    </h6>\n  }\n}\n\n<ng-template #contentTemplate>\n  <ng-content></ng-content>\n</ng-template>\n", styles: ["h1{font-size:var(--ta-font-h1-default-size);line-height:var(--ta-font-h1-default-line);font-weight:var(--ta-font-h1-default-weight);margin:0}h2{font-size:var(--ta-font-h2-default-size);line-height:var(--ta-font-h2-default-line);font-weight:var(--ta-font-h2-default-weight);margin:0}.bold h2{font-size:var(--ta-font-h2-default-size);line-height:var(--ta-font-h2-default-line);font-weight:var(--ta-font-h2-bold-weight)}h3{font-size:var(--ta-font-h3-default-size);line-height:var(--ta-font-h3-default-line);font-weight:var(--ta-font-h3-default-weight);margin:0}h4{font-size:var(--ta-font-h4-default-size);line-height:var(--ta-font-h4-default-line);font-weight:var(--ta-font-h4-default-weight);margin:0}.theme-title{color:var(--ta-surface-brand-primary)}.bold h3{font-size:var(--ta-font-h3-default-size);line-height:var(--ta-font-h3-default-line);font-weight:var(--ta-font-h3-bold-weight)}.bold h4{font-size:var(--ta-font-h4-default-size);line-height:var(--ta-font-h4-default-line);font-weight:var(--ta-font-h4-bold-weight)}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TitleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-title', standalone: true, imports: [NgClass, NgTemplateOutlet], template: "@switch (this.level) {\n  @case (1) {\n    <h1 [ngClass]=\"{ 'theme-title': this.isTheme, bold: this.isBold }\">\n      <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n    </h1>\n  }\n  @case (2) {\n    <h2 [ngClass]=\"{ 'theme-title': this.isTheme, bold: this.isBold }\">\n      <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n    </h2>\n  }\n  @case (3) {\n    <h3 [ngClass]=\"{ 'theme-title': this.isTheme, bold: this.isBold }\">\n      <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n    </h3>\n  }\n  @case (4) {\n    <h4 [ngClass]=\"{ 'theme-title': this.isTheme, bold: this.isBold }\">\n      <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n    </h4>\n  }\n  @case (5) {\n    <h5 [ngClass]=\"{ 'theme-title': this.isTheme, bold: this.isBold }\">\n      <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n    </h5>\n  }\n  @case (6) {\n    <h6 [ngClass]=\"{ 'theme-title': this.isTheme, bold: this.isBold }\">\n      <ng-container *ngTemplateOutlet=\"contentTemplate\"></ng-container>\n    </h6>\n  }\n}\n\n<ng-template #contentTemplate>\n  <ng-content></ng-content>\n</ng-template>\n", styles: ["h1{font-size:var(--ta-font-h1-default-size);line-height:var(--ta-font-h1-default-line);font-weight:var(--ta-font-h1-default-weight);margin:0}h2{font-size:var(--ta-font-h2-default-size);line-height:var(--ta-font-h2-default-line);font-weight:var(--ta-font-h2-default-weight);margin:0}.bold h2{font-size:var(--ta-font-h2-default-size);line-height:var(--ta-font-h2-default-line);font-weight:var(--ta-font-h2-bold-weight)}h3{font-size:var(--ta-font-h3-default-size);line-height:var(--ta-font-h3-default-line);font-weight:var(--ta-font-h3-default-weight);margin:0}h4{font-size:var(--ta-font-h4-default-size);line-height:var(--ta-font-h4-default-line);font-weight:var(--ta-font-h4-default-weight);margin:0}.theme-title{color:var(--ta-surface-brand-primary)}.bold h3{font-size:var(--ta-font-h3-default-size);line-height:var(--ta-font-h3-default-line);font-weight:var(--ta-font-h3-bold-weight)}.bold h4{font-size:var(--ta-font-h4-default-size);line-height:var(--ta-font-h4-default-line);font-weight:var(--ta-font-h4-bold-weight)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { level: [{
                type: Input
            }], isTheme: [{
                type: Input
            }], isBold: [{
                type: Input
            }] } });

class UiProfileDisplayComponent {
    constructor() {
        CamTranslationUI.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: UiProfileDisplayComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: UiProfileDisplayComponent, isStandalone: true, selector: "ta-ui-profile-display", inputs: { label: "label", userLogo: "userLogo", ctas: "ctas", sideIcon: "sideIcon" }, ngImport: i0, template: "@if (this.sideIcon) {\n  <div class=\"ta-r\">\n    <ta-button [options]=\"{ circular: 'small' }\" [style]=\"'secondary'\" (action)=\"sideIcon.callback()\">\n      <ta-font-icon [name]=\"this.sideIcon.icon\"></ta-font-icon>\n    </ta-button>\n  </div>\n}\n\n<div class=\"profile\">\n  @if (this.userLogo) {\n    <div class=\"ta-c\">\n      <ta-user-logo class=\"justify-center\" [userInfo]=\"this.userLogo.userInfo\" size=\"lg\"></ta-user-logo>\n    </div>\n  }\n\n  <div class=\"ta-c mx-a\">\n    <ta-title [level]=\"2\">{{ this.label }}</ta-title>\n  </div>\n\n  <ng-content></ng-content>\n\n  @if (this.ctas) {\n    <div class=\"align-center justify-content-around pt-space-xxl\">\n      @for (cta of this.ctas; track cta) {\n        <div>\n          <ta-button (action)=\"cta?.callback()\" size=\"large\">\n            <div class=\"align-center\">\n              @if (cta.icon) {\n                <ta-font-icon [name]=\"cta.icon\" class=\"mr-space-xs\"></ta-font-icon>\n              }\n              @if (cta.label) {\n                <div>\n                  {{ cta.label | translate }}\n                </div>\n              }\n            </div>\n          </ta-button>\n        </div>\n      }\n    </div>\n  }\n</div>\n", styles: [".profile{margin-bottom:var(--ta-space-xl)}.profile .title{font-size:var(--ta-font-key-key-default-size);line-height:var(--ta-font-key-key-default-line);font-weight:var(--ta-font-key-key-default-weight);text-align:center;line-height:32px;margin-bottom:var(--ta-space-sm);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.profile .title .main{text-transform:uppercase}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }, { kind: "component", type: UserLogoComponent, selector: "ta-user-logo", inputs: ["userInfo", "user", "size", "forcedSize", "defaultType"] }, { kind: "component", type: TitleComponent, selector: "ta-title", inputs: ["level", "isTheme", "isBold"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: UiProfileDisplayComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-ui-profile-display', standalone: true, imports: [NgIf, NgFor, FontIconComponent, TranslateModule, UserLogoComponent, TitleComponent, ButtonComponent], template: "@if (this.sideIcon) {\n  <div class=\"ta-r\">\n    <ta-button [options]=\"{ circular: 'small' }\" [style]=\"'secondary'\" (action)=\"sideIcon.callback()\">\n      <ta-font-icon [name]=\"this.sideIcon.icon\"></ta-font-icon>\n    </ta-button>\n  </div>\n}\n\n<div class=\"profile\">\n  @if (this.userLogo) {\n    <div class=\"ta-c\">\n      <ta-user-logo class=\"justify-center\" [userInfo]=\"this.userLogo.userInfo\" size=\"lg\"></ta-user-logo>\n    </div>\n  }\n\n  <div class=\"ta-c mx-a\">\n    <ta-title [level]=\"2\">{{ this.label }}</ta-title>\n  </div>\n\n  <ng-content></ng-content>\n\n  @if (this.ctas) {\n    <div class=\"align-center justify-content-around pt-space-xxl\">\n      @for (cta of this.ctas; track cta) {\n        <div>\n          <ta-button (action)=\"cta?.callback()\" size=\"large\">\n            <div class=\"align-center\">\n              @if (cta.icon) {\n                <ta-font-icon [name]=\"cta.icon\" class=\"mr-space-xs\"></ta-font-icon>\n              }\n              @if (cta.label) {\n                <div>\n                  {{ cta.label | translate }}\n                </div>\n              }\n            </div>\n          </ta-button>\n        </div>\n      }\n    </div>\n  }\n</div>\n", styles: [".profile{margin-bottom:var(--ta-space-xl)}.profile .title{font-size:var(--ta-font-key-key-default-size);line-height:var(--ta-font-key-key-default-line);font-weight:var(--ta-font-key-key-default-weight);text-align:center;line-height:32px;margin-bottom:var(--ta-space-sm);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.profile .title .main{text-transform:uppercase}\n"] }]
        }], ctorParameters: () => [], propDecorators: { label: [{
                type: Input
            }], userLogo: [{
                type: Input
            }], ctas: [{
                type: Input
            }], sideIcon: [{
                type: Input
            }] } });

class ProgressBarComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ProgressBarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: ProgressBarComponent, isStandalone: true, selector: "ta-progress-bar", inputs: { current: "current", max: "max" }, ngImport: i0, template: "<progress\n  class=\"progress-bar\"\n  max=\"{{ this.max }}\"\n  value=\"{{ this.current }}\"\n></progress>\n", styles: [".progress-bar{appearance:none;width:100%;height:2px}progress::-webkit-progress-bar{background-color:var(--ta-neutral-300)}progress::-webkit-progress-value{background-color:var(--ta-surface-brand-primary)}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ProgressBarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-progress-bar', standalone: true, template: "<progress\n  class=\"progress-bar\"\n  max=\"{{ this.max }}\"\n  value=\"{{ this.current }}\"\n></progress>\n", styles: [".progress-bar{appearance:none;width:100%;height:2px}progress::-webkit-progress-bar{background-color:var(--ta-neutral-300)}progress::-webkit-progress-value{background-color:var(--ta-surface-brand-primary)}\n"] }]
        }], propDecorators: { current: [{
                type: Input
            }], max: [{
                type: Input
            }] } });

class ProgressCircleComponent {
    get circumference() {
        return 2 * Math.PI * 45;
    }
    get canDisplayText() {
        return !Number.isNaN(this.progress);
    }
    constructor() {
        /**
         * Progress in percentage
         */
        this.progress = 50;
        CamTranslationUI.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ProgressCircleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: ProgressCircleComponent, isStandalone: true, selector: "ta-progress-circle", inputs: { progress: "progress", upTitle: "upTitle", downTitle: "downTitle" }, ngImport: i0, template: "<div class=\"circle-progress-bar\">\n  @if (this.upTitle) {\n    <div class=\"title\">\n      {{ this.upTitle | translate }}\n    </div>\n  }\n\n  <svg viewBox=\"0 0 100 100\">\n    <circle class=\"circle-progress-bar-bg\" cx=\"50\" cy=\"50\" r=\"45\"></circle>\n\n    <circle\n      class=\"circle-progress-bar-progress\"\n      cx=\"50\"\n      cy=\"50\"\n      r=\"45\"\n      [attr.stroke-dasharray]=\"this.circumference\"\n      [attr.stroke-dashoffset]=\"this.circumference * (1 - this.progress / 100)\"\n    ></circle>\n\n    @if (this.canDisplayText) {\n      <text\n        class=\"circle-progress-bar-text\"\n        x=\"50\"\n        y=\"50\"\n        dominant-baseline=\"middle\"\n        text-anchor=\"middle\"\n      >\n        {{ this.progress | number : \"1.0-0\" }}%\n      </text>\n    }\n  </svg>\n\n  @if (this.downTitle) {\n    <div class=\"title\">\n      {{ this.downTitle | translate }}\n    </div>\n  }\n</div>\n", styles: [".circle-progress-bar .circle-progress-bar-bg{fill:none;stroke:var(--ta-neutral-300);stroke-width:10}.circle-progress-bar .circle-progress-bar-progress{fill:none;stroke:var(--ta-surface-brand-primary);stroke-width:10;stroke-linecap:round;transform:rotate(-90deg);transform-origin:50% 50%;transition:stroke-dashoffset .5s ease-out}.circle-progress-bar .circle-progress-bar-text{font-size:24px}.title{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-bold-weight);text-align:center;padding:5px}\n"], dependencies: [{ kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }, { kind: "pipe", type: DecimalPipe, name: "number" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ProgressCircleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-progress-circle', standalone: true, imports: [NgIf, TranslateModule, DecimalPipe], template: "<div class=\"circle-progress-bar\">\n  @if (this.upTitle) {\n    <div class=\"title\">\n      {{ this.upTitle | translate }}\n    </div>\n  }\n\n  <svg viewBox=\"0 0 100 100\">\n    <circle class=\"circle-progress-bar-bg\" cx=\"50\" cy=\"50\" r=\"45\"></circle>\n\n    <circle\n      class=\"circle-progress-bar-progress\"\n      cx=\"50\"\n      cy=\"50\"\n      r=\"45\"\n      [attr.stroke-dasharray]=\"this.circumference\"\n      [attr.stroke-dashoffset]=\"this.circumference * (1 - this.progress / 100)\"\n    ></circle>\n\n    @if (this.canDisplayText) {\n      <text\n        class=\"circle-progress-bar-text\"\n        x=\"50\"\n        y=\"50\"\n        dominant-baseline=\"middle\"\n        text-anchor=\"middle\"\n      >\n        {{ this.progress | number : \"1.0-0\" }}%\n      </text>\n    }\n  </svg>\n\n  @if (this.downTitle) {\n    <div class=\"title\">\n      {{ this.downTitle | translate }}\n    </div>\n  }\n</div>\n", styles: [".circle-progress-bar .circle-progress-bar-bg{fill:none;stroke:var(--ta-neutral-300);stroke-width:10}.circle-progress-bar .circle-progress-bar-progress{fill:none;stroke:var(--ta-surface-brand-primary);stroke-width:10;stroke-linecap:round;transform:rotate(-90deg);transform-origin:50% 50%;transition:stroke-dashoffset .5s ease-out}.circle-progress-bar .circle-progress-bar-text{font-size:24px}.title{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-bold-weight);text-align:center;padding:5px}\n"] }]
        }], ctorParameters: () => [], propDecorators: { progress: [{
                type: Input
            }], upTitle: [{
                type: Input
            }], downTitle: [{
                type: Input
            }] } });

class ProgressBarDataComponent {
    get progressValue() {
        if ((this.current || this.current === 0) && (this.max || this.max === 0))
            return `${this.current}/${this.max}`;
        return (this.current ?? this.max)?.toString() ?? '';
    }
    constructor() {
        CamTranslationUI.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ProgressBarDataComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: ProgressBarDataComponent, isStandalone: true, selector: "ta-progress-bar-data", inputs: { current: "current", max: "max", title: "title", titleIcon: "titleIcon", description: "description", rightText: "rightText" }, ngImport: i0, template: "<div class=\"progress-container\">\n  <div class=\"title\">\n    <ta-title [level]=\"3\">{{ this.title | translate }}</ta-title>\n    @if (this.titleIcon) {\n      <ta-material-icon [type]=\"'sm'\">{{ this.titleIcon }}</ta-material-icon>\n    }\n  </div>\n\n  <div class=\"right-side\">\n    <span class=\"progress-value\">{{ this.progressValue }}</span>\n    @if (this.description) {\n      <span class=\"description color-grey-600\">{{ this.description | translate }}</span>\n    }\n    @if (this.rightText?.text) {\n      <span class=\"description\" [ngClass]=\"this.rightText?.colorClass ?? ''\">{{\n        this.rightText?.text ?? '' | translate\n      }}</span>\n    }\n  </div>\n</div>\n\n<ta-progress-bar [current]=\"this.current ?? 0\" [max]=\"this.max ?? 0\"></ta-progress-bar>\n", styles: [".progress-container{display:flex;flex-direction:row;justify-content:space-between}.progress-container .title{display:flex;flex-wrap:wrap;justify-content:flex-start;gap:var(--ta-space-xs);color:var(--ta-neutral-900)}.progress-container .right-side{display:flex;gap:var(--ta-space-xs)}.progress-container .right-side .progress-value{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-bold-weight);line-height:calc(var(--ta-font-sm-default-size) * 2);letter-spacing:.05em;text-align:left;color:var(--ta-neutral-900);text-transform:uppercase}.progress-container .right-side .description{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-bold-weight);line-height:calc(var(--ta-font-sm-default-size) * 2);letter-spacing:.05em;text-align:left;text-transform:uppercase}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: MaterialIconComponent, selector: "ta-material-icon", inputs: ["outline", "sharp", "round", "dualTone", "type"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }, { kind: "component", type: TitleComponent, selector: "ta-title", inputs: ["level", "isTheme", "isBold"] }, { kind: "component", type: ProgressBarComponent, selector: "ta-progress-bar", inputs: ["current", "max"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ProgressBarDataComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-progress-bar-data', standalone: true, imports: [NgIf, NgClass, MaterialIconComponent, TranslateModule, TitleComponent, ProgressBarComponent], template: "<div class=\"progress-container\">\n  <div class=\"title\">\n    <ta-title [level]=\"3\">{{ this.title | translate }}</ta-title>\n    @if (this.titleIcon) {\n      <ta-material-icon [type]=\"'sm'\">{{ this.titleIcon }}</ta-material-icon>\n    }\n  </div>\n\n  <div class=\"right-side\">\n    <span class=\"progress-value\">{{ this.progressValue }}</span>\n    @if (this.description) {\n      <span class=\"description color-grey-600\">{{ this.description | translate }}</span>\n    }\n    @if (this.rightText?.text) {\n      <span class=\"description\" [ngClass]=\"this.rightText?.colorClass ?? ''\">{{\n        this.rightText?.text ?? '' | translate\n      }}</span>\n    }\n  </div>\n</div>\n\n<ta-progress-bar [current]=\"this.current ?? 0\" [max]=\"this.max ?? 0\"></ta-progress-bar>\n", styles: [".progress-container{display:flex;flex-direction:row;justify-content:space-between}.progress-container .title{display:flex;flex-wrap:wrap;justify-content:flex-start;gap:var(--ta-space-xs);color:var(--ta-neutral-900)}.progress-container .right-side{display:flex;gap:var(--ta-space-xs)}.progress-container .right-side .progress-value{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-bold-weight);line-height:calc(var(--ta-font-sm-default-size) * 2);letter-spacing:.05em;text-align:left;color:var(--ta-neutral-900);text-transform:uppercase}.progress-container .right-side .description{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-bold-weight);line-height:calc(var(--ta-font-sm-default-size) * 2);letter-spacing:.05em;text-align:left;text-transform:uppercase}\n"] }]
        }], ctorParameters: () => [], propDecorators: { current: [{
                type: Input
            }], max: [{
                type: Input
            }], title: [{
                type: Input
            }], titleIcon: [{
                type: Input
            }], description: [{
                type: Input
            }], rightText: [{
                type: Input
            }] } });

var ENotificationCode;
(function (ENotificationCode) {
    ENotificationCode[ENotificationCode["none"] = 0] = "none";
    ENotificationCode[ENotificationCode["error"] = 1] = "error";
    ENotificationCode[ENotificationCode["warning"] = 2] = "warning";
    ENotificationCode[ENotificationCode["information"] = 3] = "information";
    ENotificationCode[ENotificationCode["success"] = 4] = "success";
})(ENotificationCode || (ENotificationCode = {}));
const getTypeClass = (code) => {
    if (code === ENotificationCode.error) {
        return 'danger';
    }
    else if (code === ENotificationCode.warning) {
        return 'warning';
    }
    else if (code === ENotificationCode.information) {
        return 'info';
    }
    else if (code === ENotificationCode.success) {
        return 'success';
    }
    else {
        return '';
    }
};

class ToastComponent {
    constructor() {
        this.code = ENotificationCode.information;
        this.getTypeClass = getTypeClass;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ToastComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: ToastComponent, isStandalone: true, selector: "ta-toast", inputs: { code: "code" }, ngImport: i0, template: "<div class=\"card\" [ngClass]=\"this.getTypeClass(this.code)\">\n  <ng-content></ng-content>\n</div>\n", styles: [".card{box-shadow:0 4px 8px #0000001a;border-radius:var(--ta-space-md);overflow:hidden;padding:var(--ta-space-lg);background-color:var(--ta-surface-primary);color:var(--ta-text-primary);font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}.card.success{border:1px solid var(--ta-semantic-token-success)}.card.danger{border:1px solid var(--ta-semantic-token-alert)}.card.warning{border:1px solid var(--ta-semantic-token-warning)}.card.info{border:1px solid var(--ta-semantic-token-link)}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ToastComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-toast', standalone: true, imports: [NgClass], template: "<div class=\"card\" [ngClass]=\"this.getTypeClass(this.code)\">\n  <ng-content></ng-content>\n</div>\n", styles: [".card{box-shadow:0 4px 8px #0000001a;border-radius:var(--ta-space-md);overflow:hidden;padding:var(--ta-space-lg);background-color:var(--ta-surface-primary);color:var(--ta-text-primary);font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}.card.success{border:1px solid var(--ta-semantic-token-success)}.card.danger{border:1px solid var(--ta-semantic-token-alert)}.card.warning{border:1px solid var(--ta-semantic-token-warning)}.card.info{border:1px solid var(--ta-semantic-token-link)}\n"] }]
        }], propDecorators: { code: [{
                type: Input
            }] } });

class PwaComponent extends TaBaseComponent {
    constructor(_pwa) {
        super();
        this._pwa = _pwa;
        this.askClose = new EventEmitter();
        this.isShowed = false;
        this.pictureWidth = 29;
        CamTranslationUI.getInstance();
        this._pwa.isPWaCapability$.subscribe(capability => (this.isShowed = capability && !LocalStorage.get('askForPwaAbility')));
    }
    ngOnInit() {
        if (this.breakpoints.isDesktop) {
            this.pictureWidth = 18;
        }
    }
    onNoClick() {
        this.isShowed = false;
    }
    onYesClick() {
        this._pwa.launchInstall();
        this.isShowed = false;
    }
    dontAsk() {
        LocalStorage.set('askForPwaAbility', 'false');
        this.isShowed = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: PwaComponent, deps: [{ token: i1$2.CamPwaService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: PwaComponent, isStandalone: true, selector: "ta-pwa", outputs: { askClose: "askClose" }, usesInheritance: true, ngImport: i0, template: "@if (this.isShowed) {\n  <div class=\"pwa-layout\">\n    <ta-toast>\n      <div class=\"pwa-container\">\n        <div class=\"title-container\">\n          <div class=\"mb-space-lg\">\n            <ta-logo [widthPercentage]=\"this.pictureWidth\" [type]=\"'oneline'\" color=\"black\"></ta-logo>\n          </div>\n          <ta-title [level]=\"3\" class=\"mb-space-xs title\">{{ 'ui.pwa.title' | translate }}</ta-title>\n          {{ 'ui.pwa.description' | translate }}\n        </div>\n        <div class=\"cta col-auto flex-column g-space-md\">\n          <div class=\"cta-button flex-column g-space-md\">\n            <ta-button (action)=\"this.onYesClick()\">\n              <div class=\"button-content\">\n                <ta-font-icon name=\"download\" class=\"mr-space-xs\"></ta-font-icon>\n                {{ 'ui.pwa.install' | translate }}\n              </div>\n            </ta-button>\n            <ta-button [style]=\"'secondary'\" (action)=\"this.onNoClick()\">\n              {{ 'ui.pwa.cancel' | translate }}\n            </ta-button>\n          </div>\n          <div class=\"link-container flex-row g-space-sm\">\n            <ta-font-icon name=\"close-tool\" type=\"sm\"></ta-font-icon>\n            <ta-link (action)=\"this.dontAsk()\">\n              {{ 'ui.pwa.no-more' | translate }}\n            </ta-link>\n          </div>\n        </div>\n      </div>\n    </ta-toast>\n  </div>\n}\n", styles: [".pwa-layout{position:fixed;bottom:calc(24px + env(safe-area-inset-bottom));width:90%;right:5%;z-index:5000}@media screen and (min-width: 768px){.pwa-layout{bottom:calc(50px + env(safe-area-inset-bottom));right:50px;width:800px}}.pwa-container{display:flex;flex-direction:column;gap:var(--ta-space-lg)}@media screen and (min-width: 768px){.pwa-container{display:flex;flex-direction:row;justify-content:space-between}}.pwa-container .title{color:var(--ta-brand-700);font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-bold-weight)}.cta{margin:0}@media screen and (min-width: 768px){.cta{margin:auto}}.cta .cta-button{display:flex;flex-direction:row;justify-content:space-evenly}@media screen and (min-width: 768px){.cta .cta-button{display:flex;flex-direction:column}}.cta .cta-button .button-content{display:flex;align-items:center;margin:auto}.link-container ta-font-icon{color:var(--ta-surface-brand-primary)}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }, { kind: "component", type: LinkComponent, selector: "ta-link", inputs: ["state", "underline", "bold", "size", "icon"], outputs: ["action"] }, { kind: "component", type: TitleComponent, selector: "ta-title", inputs: ["level", "isTheme", "isBold"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "component", type: LogoComponent, selector: "ta-logo", inputs: ["color", "type", "widthPercentage"] }, { kind: "component", type: ToastComponent, selector: "ta-toast", inputs: ["code"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: PwaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-pwa', standalone: true, imports: [
                        NgIf,
                        FontIconComponent,
                        TranslateModule,
                        LinkComponent,
                        TitleComponent,
                        ButtonComponent,
                        LogoComponent,
                        ToastComponent,
                    ], template: "@if (this.isShowed) {\n  <div class=\"pwa-layout\">\n    <ta-toast>\n      <div class=\"pwa-container\">\n        <div class=\"title-container\">\n          <div class=\"mb-space-lg\">\n            <ta-logo [widthPercentage]=\"this.pictureWidth\" [type]=\"'oneline'\" color=\"black\"></ta-logo>\n          </div>\n          <ta-title [level]=\"3\" class=\"mb-space-xs title\">{{ 'ui.pwa.title' | translate }}</ta-title>\n          {{ 'ui.pwa.description' | translate }}\n        </div>\n        <div class=\"cta col-auto flex-column g-space-md\">\n          <div class=\"cta-button flex-column g-space-md\">\n            <ta-button (action)=\"this.onYesClick()\">\n              <div class=\"button-content\">\n                <ta-font-icon name=\"download\" class=\"mr-space-xs\"></ta-font-icon>\n                {{ 'ui.pwa.install' | translate }}\n              </div>\n            </ta-button>\n            <ta-button [style]=\"'secondary'\" (action)=\"this.onNoClick()\">\n              {{ 'ui.pwa.cancel' | translate }}\n            </ta-button>\n          </div>\n          <div class=\"link-container flex-row g-space-sm\">\n            <ta-font-icon name=\"close-tool\" type=\"sm\"></ta-font-icon>\n            <ta-link (action)=\"this.dontAsk()\">\n              {{ 'ui.pwa.no-more' | translate }}\n            </ta-link>\n          </div>\n        </div>\n      </div>\n    </ta-toast>\n  </div>\n}\n", styles: [".pwa-layout{position:fixed;bottom:calc(24px + env(safe-area-inset-bottom));width:90%;right:5%;z-index:5000}@media screen and (min-width: 768px){.pwa-layout{bottom:calc(50px + env(safe-area-inset-bottom));right:50px;width:800px}}.pwa-container{display:flex;flex-direction:column;gap:var(--ta-space-lg)}@media screen and (min-width: 768px){.pwa-container{display:flex;flex-direction:row;justify-content:space-between}}.pwa-container .title{color:var(--ta-brand-700);font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-bold-weight)}.cta{margin:0}@media screen and (min-width: 768px){.cta{margin:auto}}.cta .cta-button{display:flex;flex-direction:row;justify-content:space-evenly}@media screen and (min-width: 768px){.cta .cta-button{display:flex;flex-direction:column}}.cta .cta-button .button-content{display:flex;align-items:center;margin:auto}.link-container ta-font-icon{color:var(--ta-surface-brand-primary)}\n"] }]
        }], ctorParameters: () => [{ type: i1$2.CamPwaService }], propDecorators: { askClose: [{
                type: Output
            }] } });

class TextComponent {
    constructor() {
        /**
         *
         * Add small class to text
         */
        this.size = 'md';
        /**
         *
         * Add bold class to text
         */
        this.isBold = false;
        /**
         *
         * Add bold class to text
         */
        this.color = 'primary';
    }
    getColorClass() {
        return `text-color-text-${this.color}`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TextComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: TextComponent, isStandalone: true, selector: "ta-text", inputs: { size: "size", isBold: "isBold", color: "color" }, ngImport: i0, template: "<div\n  class=\"text\"\n  [class.bold]=\"this.isBold\"\n  [ngClass]=\"this.size + ' ' + this.getColorClass()\"\n>\n  <ng-content></ng-content>\n</div>\n", styles: [".text{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}.sm{font-size:var(--ta-font-body-sm-default-size);line-height:var(--ta-font-body-sm-default-line);font-weight:var(--ta-font-body-sm-default-weight)}.xs{font-size:var(--ta-font-body-xs-default-size);line-height:var(--ta-font-body-xs-default-line);font-weight:var(--ta-font-body-xs-default-weight)}.bold{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-bold-weight)}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TextComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-text', standalone: true, imports: [NgClass], template: "<div\n  class=\"text\"\n  [class.bold]=\"this.isBold\"\n  [ngClass]=\"this.size + ' ' + this.getColorClass()\"\n>\n  <ng-content></ng-content>\n</div>\n", styles: [".text{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}.sm{font-size:var(--ta-font-body-sm-default-size);line-height:var(--ta-font-body-sm-default-line);font-weight:var(--ta-font-body-sm-default-weight)}.xs{font-size:var(--ta-font-body-xs-default-size);line-height:var(--ta-font-body-xs-default-line);font-weight:var(--ta-font-body-xs-default-weight)}.bold{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-bold-weight)}\n"] }]
        }], propDecorators: { size: [{
                type: Input
            }], isBold: [{
                type: Input
            }], color: [{
                type: Input
            }] } });

class TimeAgoComponent {
    get absDays() {
        return Math.abs(this.days);
    }
    get days() {
        return differenceInCalendarDays(new Date(this.date), new Date());
    }
    key() {
        const diffDays = this.days;
        return this._getTranslationKey(diffDays);
    }
    _getTranslationKey(diffDays) {
        if (diffDays === 0) {
            return 'ui.common.today';
        }
        if (diffDays === -1) {
            return 'ui.common.yesterday';
        }
        if (diffDays === 1) {
            return 'ui.common.tomorrow';
        }
        if (diffDays < -1 && diffDays >= -3) {
            return 'ui.common.above';
        }
        if (diffDays > 1 && diffDays <= 3) {
            return 'ui.common.ahead';
        }
        return 'ui.common.to-date';
    }
    constructor() {
        this.withHours = false;
        CamTranslationUI.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TimeAgoComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: TimeAgoComponent, isStandalone: true, selector: "ta-time-ago", inputs: { date: "date", withHours: "withHours" }, ngImport: i0, template: "<div class=\"flex-start g-space-sm\">\n  {{\n    this.key()\n      | translate : { date: this.date | date : \"shortDate\", days: this.absDays }\n  }}\n  @if(this.withHours) {\n  {{ this.date | date : \"shortTime\" }}\n  }\n</div>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }, { kind: "pipe", type: DatePipe, name: "date" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TimeAgoComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-time-ago', standalone: true, imports: [NgIf, TranslateModule, DatePipe], template: "<div class=\"flex-start g-space-sm\">\n  {{\n    this.key()\n      | translate : { date: this.date | date : \"shortDate\", days: this.absDays }\n  }}\n  @if(this.withHours) {\n  {{ this.date | date : \"shortTime\" }}\n  }\n</div>\n" }]
        }], ctorParameters: () => [], propDecorators: { date: [{
                type: Input
            }], withHours: [{
                type: Input
            }] } });

class UsersListComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: UsersListComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: UsersListComponent, isStandalone: true, selector: "ta-users-list", inputs: { users: "users" }, ngImport: i0, template: "<div class=\"flex-row g-space-xs\">\n  @for (user of this.users | async; track user.firstName + ' ' + user.lastName) {\n    <ta-user-logo\n      [user]=\"user\"\n      size=\"md\"\n      defaultType=\"trigram\"\n      [attr.title]=\"user.firstName + ' ' + user.lastName\"\n    ></ta-user-logo>\n  }\n</div>\n", styles: [""], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: UserLogoComponent, selector: "ta-user-logo", inputs: ["userInfo", "user", "size", "forcedSize", "defaultType"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: UsersListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-users-list', standalone: true, imports: [NgFor, AsyncPipe, UserLogoComponent], template: "<div class=\"flex-row g-space-xs\">\n  @for (user of this.users | async; track user.firstName + ' ' + user.lastName) {\n    <ta-user-logo\n      [user]=\"user\"\n      size=\"md\"\n      defaultType=\"trigram\"\n      [attr.title]=\"user.firstName + ' ' + user.lastName\"\n    ></ta-user-logo>\n  }\n</div>\n" }]
        }], propDecorators: { users: [{
                type: Input
            }] } });

register();
/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { CamUiModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { ActionButtonComponent, BadgeComponent, ButtonComponent } from '@ta/library-name';
 */
class CamUiModule {
    constructor() {
        CamTranslationUI.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamUiModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: CamUiModule, imports: [CommonModule, MatBottomSheetModule, MatIconModule, CamDirectivePipeModule, TranslatePipe, CamIconsModule, MatExpansionModule, MatDialogModule, ActionButtonComponent, BadgeComponent, ButtonComponent, CivilityComponent, ContactInformationComponent, DepartmentIconListComponent, DepartmentProfessionsComponent, DepartmentsComponent, HelloUserComponent, HourDateLineComponent, LinkComponent, LogoComponent, ProgressCircleComponent, TitleComponent, TrigramComponent, UserLogoComponent, ProfileDataComponent, TextComponent, ProgressBarDataComponent, ProgressBarComponent, PictureInfoMessageComponent, TypedMessageComponent, CamExpansionPanelComponent, DualButtonComponent, NotificationBadgeContainerComponent, NotificationBadgeComponent, PwaComponent, ExpandableTextComponent, InlineProfileDataComponent, UiProfileDisplayComponent, ToastComponent, LabelComponent, NewComponent, BulletComponent, MegaoctetComponent, FileImageComponent, TimeAgoComponent, DurationComponent, UsersListComponent, ButtonToolComponent, CultureComponent, CriticityComponent], exports: [ActionButtonComponent,
            BadgeComponent,
            ButtonComponent,
            CivilityComponent,
            ContactInformationComponent,
            DepartmentIconListComponent,
            DepartmentProfessionsComponent,
            DepartmentsComponent,
            HelloUserComponent,
            HourDateLineComponent,
            LinkComponent,
            LogoComponent,
            ProgressCircleComponent,
            TitleComponent,
            TrigramComponent,
            UserLogoComponent,
            ProfileDataComponent,
            ProgressBarDataComponent,
            ProgressBarComponent,
            PictureInfoMessageComponent,
            DualButtonComponent,
            CamExpansionPanelComponent,
            NotificationBadgeContainerComponent,
            NotificationBadgeComponent,
            PwaComponent,
            ExpandableTextComponent,
            InlineProfileDataComponent,
            UiProfileDisplayComponent,
            ToastComponent,
            LabelComponent,
            NewComponent,
            TextComponent,
            BulletComponent,
            MegaoctetComponent,
            FileImageComponent,
            TimeAgoComponent,
            CriticityComponent,
            DurationComponent,
            UsersListComponent,
            ButtonToolComponent,
            CultureComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamUiModule, providers: [CamIconsService], imports: [CommonModule, MatBottomSheetModule, MatIconModule, CamDirectivePipeModule, CamIconsModule, MatExpansionModule, MatDialogModule, ActionButtonComponent, BadgeComponent, ButtonComponent, CivilityComponent, ContactInformationComponent, DepartmentProfessionsComponent, DepartmentsComponent, HelloUserComponent, LinkComponent, ProgressCircleComponent, UserLogoComponent, ProfileDataComponent, ProgressBarDataComponent, PictureInfoMessageComponent, TypedMessageComponent, CamExpansionPanelComponent, DualButtonComponent, PwaComponent, ExpandableTextComponent, InlineProfileDataComponent, UiProfileDisplayComponent, MegaoctetComponent, FileImageComponent, TimeAgoComponent, DurationComponent, UsersListComponent, ButtonToolComponent, CultureComponent, CriticityComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamUiModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [CommonModule, MatBottomSheetModule, MatIconModule, CamDirectivePipeModule, TranslatePipe, CamIconsModule, MatExpansionModule, MatDialogModule, ActionButtonComponent, BadgeComponent, ButtonComponent, CivilityComponent, ContactInformationComponent, DepartmentIconListComponent, DepartmentProfessionsComponent, DepartmentsComponent, HelloUserComponent, HourDateLineComponent, LinkComponent, LogoComponent, ProgressCircleComponent, TitleComponent, TrigramComponent, UserLogoComponent, ProfileDataComponent, TextComponent, ProgressBarDataComponent, ProgressBarComponent, PictureInfoMessageComponent, TypedMessageComponent, CamExpansionPanelComponent, DualButtonComponent, NotificationBadgeContainerComponent, NotificationBadgeComponent, PwaComponent, ExpandableTextComponent, InlineProfileDataComponent, UiProfileDisplayComponent, ToastComponent, LabelComponent, NewComponent, BulletComponent, MegaoctetComponent, FileImageComponent, TimeAgoComponent, DurationComponent, UsersListComponent, ButtonToolComponent, CultureComponent, CriticityComponent],
                    exports: [
                        ActionButtonComponent,
                        BadgeComponent,
                        ButtonComponent,
                        CivilityComponent,
                        ContactInformationComponent,
                        DepartmentIconListComponent,
                        DepartmentProfessionsComponent,
                        DepartmentsComponent,
                        HelloUserComponent,
                        HourDateLineComponent,
                        LinkComponent,
                        LogoComponent,
                        ProgressCircleComponent,
                        TitleComponent,
                        TrigramComponent,
                        UserLogoComponent,
                        ProfileDataComponent,
                        ProgressBarDataComponent,
                        ProgressBarComponent,
                        PictureInfoMessageComponent,
                        DualButtonComponent,
                        CamExpansionPanelComponent,
                        NotificationBadgeContainerComponent,
                        NotificationBadgeComponent,
                        PwaComponent,
                        ExpandableTextComponent,
                        InlineProfileDataComponent,
                        UiProfileDisplayComponent,
                        ToastComponent,
                        LabelComponent,
                        NewComponent,
                        TextComponent,
                        BulletComponent,
                        MegaoctetComponent,
                        FileImageComponent,
                        TimeAgoComponent,
                        CriticityComponent,
                        DurationComponent,
                        UsersListComponent,
                        ButtonToolComponent,
                        CultureComponent,
                    ],
                    providers: [CamIconsService],
                }]
        }], ctorParameters: () => [] });

class CamTreeChildrenComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamTreeChildrenComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: CamTreeChildrenComponent, isStandalone: true, selector: "ta-tree-children", ngImport: i0, template: "<div class=\"children\">\r\n  <ng-content></ng-content>\r\n</div>\r\n", styles: [".children{position:relative;margin-left:var(--ta-space-xl)}.children:before{content:\"\";background-color:var(--ta-surface-brand-primary);width:2px;position:absolute;top:0;left:calc(var(--ta-space-xl) * -.5);bottom:18px}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamTreeChildrenComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-tree-children', standalone: true, imports: [], template: "<div class=\"children\">\r\n  <ng-content></ng-content>\r\n</div>\r\n", styles: [".children{position:relative;margin-left:var(--ta-space-xl)}.children:before{content:\"\";background-color:var(--ta-surface-brand-primary);width:2px;position:absolute;top:0;left:calc(var(--ta-space-xl) * -.5);bottom:18px}\n"] }]
        }] });

class CamTreeContainerComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamTreeContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: CamTreeContainerComponent, isStandalone: true, selector: "ta-tree-container", ngImport: i0, template: "<div>\r\n  <ng-content></ng-content>\r\n</div>\r\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamTreeContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-tree-container', standalone: true, imports: [], template: "<div>\r\n  <ng-content></ng-content>\r\n</div>\r\n" }]
        }] });

class CamTreeItemComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamTreeItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: CamTreeItemComponent, isStandalone: true, selector: "ta-tree-item", ngImport: i0, template: "<div class=\"item\">\r\n  <ng-content></ng-content>\r\n</div>\r\n", styles: [".item{position:relative}.item:before{content:\"\";position:absolute;top:20px;left:calc(var(--ta-space-xl) * -.5);border-bottom-left-radius:5px;height:5px;width:calc(var(--ta-space-xl) * .5 - 3px);border:2px solid var(--ta-surface-brand-primary);border-top:none;border-right:none}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamTreeItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-tree-item', standalone: true, imports: [], template: "<div class=\"item\">\r\n  <ng-content></ng-content>\r\n</div>\r\n", styles: [".item{position:relative}.item:before{content:\"\";position:absolute;top:20px;left:calc(var(--ta-space-xl) * -.5);border-bottom-left-radius:5px;height:5px;width:calc(var(--ta-space-xl) * .5 - 3px);border:2px solid var(--ta-surface-brand-primary);border-top:none;border-right:none}\n"] }]
        }] });

class BannerComponent extends TaBaseComponent {
    constructor() {
        super();
        CamTranslationUI.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BannerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: BannerComponent, isStandalone: true, selector: "ta-banner", inputs: { message: "message" }, usesInheritance: true, ngImport: i0, template: "<div class=\"banner\">\n  {{ this.message | translate }}\n</div>\n", styles: [".banner{position:fixed;top:0;left:0;right:0;background-color:var(--ta-semantic-yellow-light);color:var(--ta-semantic-yellow-dark);padding:var(--ta-space-xs) var(--ta-space-md);text-align:center;box-shadow:var(--ta-shadow-black-sm)}\n"], dependencies: [{ kind: "pipe", type: TranslatePipe, name: "translate" }, { kind: "ngmodule", type: TranslateModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BannerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-banner', standalone: true, imports: [TranslatePipe, TranslateModule], template: "<div class=\"banner\">\n  {{ this.message | translate }}\n</div>\n", styles: [".banner{position:fixed;top:0;left:0;right:0;background-color:var(--ta-semantic-yellow-light);color:var(--ta-semantic-yellow-dark);padding:var(--ta-space-xs) var(--ta-space-md);text-align:center;box-shadow:var(--ta-shadow-black-sm)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { message: [{
                type: Input
            }] } });

/**
 * Common component
 */

class LayoutContentComponent {
    constructor() {
        this.autoHeight = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LayoutContentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: LayoutContentComponent, isStandalone: true, selector: "ta-layout-content", inputs: { autoHeight: "autoHeight" }, ngImport: i0, template: "<div class=\"layout-content\" [class.auto]=\"this.autoHeight\">\n  <ng-content></ng-content>\n</div>\n", styles: [".layout-content{position:relative;margin:8px;min-height:calc(100vh - 80px)}.layout-content.auto{min-height:auto;margin:0}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LayoutContentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-layout-content', standalone: true, template: "<div class=\"layout-content\" [class.auto]=\"this.autoHeight\">\n  <ng-content></ng-content>\n</div>\n", styles: [".layout-content{position:relative;margin:8px;min-height:calc(100vh - 80px)}.layout-content.auto{min-height:auto;margin:0}\n"] }]
        }], ctorParameters: () => [], propDecorators: { autoHeight: [{
                type: Input
            }] } });

class LayoutTitleComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LayoutTitleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: LayoutTitleComponent, isStandalone: true, selector: "ta-layout-title", ngImport: i0, template: "<div class=\"title\">\n  <ng-content></ng-content>\n</div>\n", styles: [".title{padding:0 var(--ta-space-sm)}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LayoutTitleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-layout-title', standalone: true, template: "<div class=\"title\">\n  <ng-content></ng-content>\n</div>\n", styles: [".title{padding:0 var(--ta-space-sm)}\n"] }]
        }] });

class CamTranslationLayout extends CamLazyTranslationService {
    constructor() {
        super('layout');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamTranslationLayout, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamTranslationLayout, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamTranslationLayout, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

class LayoutHeaderComponent {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LayoutHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: LayoutHeaderComponent, isStandalone: true, selector: "ta-layout-header", ngImport: i0, template: "<div class=\"header\">\n  <ng-content></ng-content>\n</div>\n", styles: ["@media screen and (max-width: 767px){.header{color:var(--ta-text-primary);padding:var(--ta-space-sm)}}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LayoutHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-layout-header', standalone: true, template: "<div class=\"header\">\n  <ng-content></ng-content>\n</div>\n", styles: ["@media screen and (max-width: 767px){.header{color:var(--ta-text-primary);padding:var(--ta-space-sm)}}\n"] }]
        }], ctorParameters: () => [] });

class LayoutFullPanelComponent extends TaBaseComponent {
    constructor() {
        super();
        this.width = '400px';
        this.title = '';
        this.closeEvent = new EventEmitter();
        CamTranslationLayout.getInstance();
    }
    askClose() {
        this.closeEvent.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LayoutFullPanelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: LayoutFullPanelComponent, isStandalone: true, selector: "ta-layout-full-panel", inputs: { width: "width", title: "title" }, outputs: { closeEvent: "closeEvent" }, usesInheritance: true, ngImport: i0, template: "<div class=\"side-panel-background\" (click)=\"this.askClose()\"></div>\n<div class=\"side-panel\" [style.width]=\"this.width\">\n  <ta-layout-header>\n    <div class=\"flex-row justify-content-between\">\n      <ta-title [level]=\"3\" [isBold]=\"true\">{{ this.title | translate }}</ta-title>\n      <div (click)=\"this.askClose()\">\n        <ta-font-icon name=\"close\"></ta-font-icon>\n      </div>\n    </div>\n  </ta-layout-header>\n  <div class=\"layout-content\">\n    <ng-content></ng-content>\n  </div>\n</div>\n", styles: ["ta-layout-header{text-align:right}ta-layout-header ta-title{padding:var(--ta-space-md) 0 0 var(--ta-space-md)}ta-layout-header ta-font-icon{cursor:pointer}.side-panel-background{position:fixed;inset:0;z-index:999;opacity:.5;background-color:var(--ta-surface-invert)}.side-panel{position:fixed;top:0;right:0;width:400px;height:100vh;background-color:var(--ta-surface-primary);box-shadow:0 0 10px #0003;z-index:1000;overflow-y:auto;display:flex;flex-flow:column}.side-panel .layout-content{display:flex;flex:1}.side-panel .layout-content>div{flex:1}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }, { kind: "component", type: LayoutHeaderComponent, selector: "ta-layout-header" }, { kind: "component", type: TitleComponent, selector: "ta-title", inputs: ["level", "isTheme", "isBold"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LayoutFullPanelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-layout-full-panel', standalone: true, imports: [FontIconComponent, TranslateModule, LayoutTitleComponent, LayoutHeaderComponent, TitleComponent], template: "<div class=\"side-panel-background\" (click)=\"this.askClose()\"></div>\n<div class=\"side-panel\" [style.width]=\"this.width\">\n  <ta-layout-header>\n    <div class=\"flex-row justify-content-between\">\n      <ta-title [level]=\"3\" [isBold]=\"true\">{{ this.title | translate }}</ta-title>\n      <div (click)=\"this.askClose()\">\n        <ta-font-icon name=\"close\"></ta-font-icon>\n      </div>\n    </div>\n  </ta-layout-header>\n  <div class=\"layout-content\">\n    <ng-content></ng-content>\n  </div>\n</div>\n", styles: ["ta-layout-header{text-align:right}ta-layout-header ta-title{padding:var(--ta-space-md) 0 0 var(--ta-space-md)}ta-layout-header ta-font-icon{cursor:pointer}.side-panel-background{position:fixed;inset:0;z-index:999;opacity:.5;background-color:var(--ta-surface-invert)}.side-panel{position:fixed;top:0;right:0;width:400px;height:100vh;background-color:var(--ta-surface-primary);box-shadow:0 0 10px #0003;z-index:1000;overflow-y:auto;display:flex;flex-flow:column}.side-panel .layout-content{display:flex;flex:1}.side-panel .layout-content>div{flex:1}\n"] }]
        }], ctorParameters: () => [], propDecorators: { width: [{
                type: Input
            }], title: [{
                type: Input
            }], closeEvent: [{
                type: Output
            }] } });

class LayoutFlexComponent extends TaBaseComponent {
    constructor() {
        super();
        this.allowClose = false;
        this.view = ['left', 'right', 'center'];
        this._registerSubscription(this.breakpoints.isLessThanLG$.subscribe(value => {
            if (value) {
                this.view = ['left'];
            }
            else {
                this.view = ['left', 'right', 'center'];
            }
        }));
    }
    state(panel) {
        if (!this.onlyOne()) {
            return 'classic';
        }
        return this.has(panel) ? 'disabled' : 'classic';
    }
    onlyOne() {
        return this.view.length === 1;
    }
    has(panel) {
        return this.view.findIndex(v => v === panel) > -1;
    }
    toggle(panel) {
        const index = this.view.findIndex(v => v === panel);
        if (index === -1) {
            this.view.push(panel);
        }
        else {
            this.view.splice(index, 1);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LayoutFlexComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: LayoutFlexComponent, isStandalone: true, selector: "ta-layout-flex", inputs: { allowClose: "allowClose" }, usesInheritance: true, ngImport: i0, template: "@if (this.breakpoints.isTablette$ | async) {\n  <div class=\"mobile-control full-width\">\n    <div class=\"space-between\">\n      <ta-button (action)=\"this.toggle('center')\" type=\"secondary\" [options]=\"{ circular: 'small' }\">\n        <ta-font-icon name=\"mail\" size=\"sm\"></ta-font-icon>\n      </ta-button>\n      <ta-button (action)=\"this.toggle('right')\" type=\"secondary\" [options]=\"{ circular: 'small' }\">\n        <ta-font-icon name=\"task-todo\" size=\"sm\"></ta-font-icon>\n      </ta-button>\n    </div>\n  </div>\n}\n<div class=\"flex-container\">\n  <div class=\"main\">\n    <div class=\"left\">\n      @if (this.allowClose) {\n        <div class=\"control\">\n          @if (this.has('left')) {\n            <ng-content select=\"[header-left]\"></ng-content>\n          }\n          <ta-button\n            (action)=\"this.toggle('left')\"\n            [style]=\"'secondary'\"\n            [options]=\"{ circular: 'small' }\"\n            [state]=\"this.state('left')\"\n          >\n            @if (this.has('left')) {\n              <ta-font-icon name=\"expand-horizontal\" size=\"sm\"></ta-font-icon>\n            } @else {\n              <ta-font-icon name=\"collapse-horizontal\" size=\"sm\"></ta-font-icon>\n            }\n          </ta-button>\n        </div>\n      }\n\n      @if (this.has('left')) {\n        <div class=\"content\">\n          <ng-template [ngTemplateOutlet]=\"leftTemplate\"></ng-template>\n        </div>\n      }\n    </div>\n\n    <div class=\"center\">\n      @if (this.allowClose) {\n        <div class=\"control\">\n          @if (this.has('center')) {\n            <ng-content select=\"[header-center]\"></ng-content>\n          }\n          <ta-button\n            (action)=\"this.toggle('center')\"\n            [style]=\"'secondary'\"\n            [options]=\"{ circular: 'small' }\"\n            [state]=\"this.state('center')\"\n          >\n            @if (this.has('center')) {\n              <ta-font-icon name=\"expand-horizontal\" size=\"sm\"></ta-font-icon>\n            } @else {\n              <ta-font-icon name=\"collapse-horizontal\" size=\"sm\"></ta-font-icon>\n            }\n          </ta-button>\n        </div>\n      }\n      @if (this.has('center') && !(this.breakpoints.isTablette$ | async)) {\n        <div class=\"content\">\n          <ng-template [ngTemplateOutlet]=\"centerTemplate\"></ng-template>\n        </div>\n      }\n    </div>\n  </div>\n\n  @if (!(this.breakpoints.isTablette$ | async)) {\n    <div class=\"second\">\n      <div class=\"right\">\n        @if (this.allowClose) {\n          <div class=\"control\">\n            @if (this.has('right')) {\n              <ng-content select=\"[header-right]\"></ng-content>\n            }\n            <ta-button\n              (action)=\"this.toggle('right')\"\n              [style]=\"'secondary'\"\n              [options]=\"{ circular: 'small' }\"\n              [state]=\"this.state('right')\"\n            >\n              @if (this.has('right')) {\n                <ta-font-icon name=\"expand-horizontal\" size=\"sm\"></ta-font-icon>\n              } @else {\n                <ta-font-icon name=\"collapse-horizontal\" size=\"sm\"></ta-font-icon>\n              }\n            </ta-button>\n          </div>\n        }\n        @if (this.has('right')) {\n          <div class=\"content\">\n            <ng-template [ngTemplateOutlet]=\"rightTemplate\"></ng-template>\n          </div>\n        }\n      </div>\n    </div>\n  }\n</div>\n\n@if (this.breakpoints.isTablette$ | async) {\n  @if (this.has('center')) {\n    <ta-layout-full-panel (closeEvent)=\"this.toggle('center')\" width=\"100%\">\n      <ng-template [ngTemplateOutlet]=\"centerTemplate\"></ng-template>\n    </ta-layout-full-panel>\n  }\n\n  @if (this.has('right')) {\n    <ta-layout-full-panel (closeEvent)=\"this.toggle('right')\">\n      <div class=\"full-width\">\n        <ng-template [ngTemplateOutlet]=\"rightTemplate\"></ng-template>\n      </div>\n    </ta-layout-full-panel>\n  }\n}\n\n<ng-template #leftTemplate>\n  <ng-content select=\"[left]\"></ng-content>\n</ng-template>\n\n<ng-template #centerTemplate>\n  <ng-content select=\"[center]\"></ng-content>\n</ng-template>\n\n<ng-template #rightTemplate>\n  <ng-content select=\"[right]\"></ng-content>\n</ng-template>\n", styles: [".flex-container{display:flex;flex-direction:row}.main{display:flex;flex-direction:column;width:100%}.main .left,.main .center{width:100%}.main .center{border-top:1px solid var(--ta-border-primary);padding-top:var(--ta-space-md)}@media screen and (min-width: 1400px){.main{display:flex;flex-direction:row}.main .left,.main .center{width:50%}.main .center{border-top:none;padding-top:none;border-left:1px solid var(--ta-border-primary)}}.second{display:flex;border-left:1px solid var(--ta-border-primary)}.second .right{max-width:300px}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "component", type: LayoutFullPanelComponent, selector: "ta-layout-full-panel", inputs: ["width", "title"], outputs: ["closeEvent"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LayoutFlexComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-layout-flex', standalone: true, imports: [NgIf, AsyncPipe, FontIconComponent, ButtonComponent, LayoutFullPanelComponent], template: "@if (this.breakpoints.isTablette$ | async) {\n  <div class=\"mobile-control full-width\">\n    <div class=\"space-between\">\n      <ta-button (action)=\"this.toggle('center')\" type=\"secondary\" [options]=\"{ circular: 'small' }\">\n        <ta-font-icon name=\"mail\" size=\"sm\"></ta-font-icon>\n      </ta-button>\n      <ta-button (action)=\"this.toggle('right')\" type=\"secondary\" [options]=\"{ circular: 'small' }\">\n        <ta-font-icon name=\"task-todo\" size=\"sm\"></ta-font-icon>\n      </ta-button>\n    </div>\n  </div>\n}\n<div class=\"flex-container\">\n  <div class=\"main\">\n    <div class=\"left\">\n      @if (this.allowClose) {\n        <div class=\"control\">\n          @if (this.has('left')) {\n            <ng-content select=\"[header-left]\"></ng-content>\n          }\n          <ta-button\n            (action)=\"this.toggle('left')\"\n            [style]=\"'secondary'\"\n            [options]=\"{ circular: 'small' }\"\n            [state]=\"this.state('left')\"\n          >\n            @if (this.has('left')) {\n              <ta-font-icon name=\"expand-horizontal\" size=\"sm\"></ta-font-icon>\n            } @else {\n              <ta-font-icon name=\"collapse-horizontal\" size=\"sm\"></ta-font-icon>\n            }\n          </ta-button>\n        </div>\n      }\n\n      @if (this.has('left')) {\n        <div class=\"content\">\n          <ng-template [ngTemplateOutlet]=\"leftTemplate\"></ng-template>\n        </div>\n      }\n    </div>\n\n    <div class=\"center\">\n      @if (this.allowClose) {\n        <div class=\"control\">\n          @if (this.has('center')) {\n            <ng-content select=\"[header-center]\"></ng-content>\n          }\n          <ta-button\n            (action)=\"this.toggle('center')\"\n            [style]=\"'secondary'\"\n            [options]=\"{ circular: 'small' }\"\n            [state]=\"this.state('center')\"\n          >\n            @if (this.has('center')) {\n              <ta-font-icon name=\"expand-horizontal\" size=\"sm\"></ta-font-icon>\n            } @else {\n              <ta-font-icon name=\"collapse-horizontal\" size=\"sm\"></ta-font-icon>\n            }\n          </ta-button>\n        </div>\n      }\n      @if (this.has('center') && !(this.breakpoints.isTablette$ | async)) {\n        <div class=\"content\">\n          <ng-template [ngTemplateOutlet]=\"centerTemplate\"></ng-template>\n        </div>\n      }\n    </div>\n  </div>\n\n  @if (!(this.breakpoints.isTablette$ | async)) {\n    <div class=\"second\">\n      <div class=\"right\">\n        @if (this.allowClose) {\n          <div class=\"control\">\n            @if (this.has('right')) {\n              <ng-content select=\"[header-right]\"></ng-content>\n            }\n            <ta-button\n              (action)=\"this.toggle('right')\"\n              [style]=\"'secondary'\"\n              [options]=\"{ circular: 'small' }\"\n              [state]=\"this.state('right')\"\n            >\n              @if (this.has('right')) {\n                <ta-font-icon name=\"expand-horizontal\" size=\"sm\"></ta-font-icon>\n              } @else {\n                <ta-font-icon name=\"collapse-horizontal\" size=\"sm\"></ta-font-icon>\n              }\n            </ta-button>\n          </div>\n        }\n        @if (this.has('right')) {\n          <div class=\"content\">\n            <ng-template [ngTemplateOutlet]=\"rightTemplate\"></ng-template>\n          </div>\n        }\n      </div>\n    </div>\n  }\n</div>\n\n@if (this.breakpoints.isTablette$ | async) {\n  @if (this.has('center')) {\n    <ta-layout-full-panel (closeEvent)=\"this.toggle('center')\" width=\"100%\">\n      <ng-template [ngTemplateOutlet]=\"centerTemplate\"></ng-template>\n    </ta-layout-full-panel>\n  }\n\n  @if (this.has('right')) {\n    <ta-layout-full-panel (closeEvent)=\"this.toggle('right')\">\n      <div class=\"full-width\">\n        <ng-template [ngTemplateOutlet]=\"rightTemplate\"></ng-template>\n      </div>\n    </ta-layout-full-panel>\n  }\n}\n\n<ng-template #leftTemplate>\n  <ng-content select=\"[left]\"></ng-content>\n</ng-template>\n\n<ng-template #centerTemplate>\n  <ng-content select=\"[center]\"></ng-content>\n</ng-template>\n\n<ng-template #rightTemplate>\n  <ng-content select=\"[right]\"></ng-content>\n</ng-template>\n", styles: [".flex-container{display:flex;flex-direction:row}.main{display:flex;flex-direction:column;width:100%}.main .left,.main .center{width:100%}.main .center{border-top:1px solid var(--ta-border-primary);padding-top:var(--ta-space-md)}@media screen and (min-width: 1400px){.main{display:flex;flex-direction:row}.main .left,.main .center{width:50%}.main .center{border-top:none;padding-top:none;border-left:1px solid var(--ta-border-primary)}}.second{display:flex;border-left:1px solid var(--ta-border-primary)}.second .right{max-width:300px}\n"] }]
        }], ctorParameters: () => [], propDecorators: { allowClose: [{
                type: Input
            }] } });

class LayoutHeaderDefaultComponent extends TaBaseComponent {
    constructor() {
        super();
        this.showBack = true;
        this.backEvent = new EventEmitter();
        CamTranslationLayout.getInstance();
    }
    showBackAction() {
        this._location.back();
        this.backEvent.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LayoutHeaderDefaultComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: LayoutHeaderDefaultComponent, isStandalone: true, selector: "ta-layout-header-default", inputs: { showBack: "showBack", menuTemplate: "menuTemplate", title: "title" }, outputs: { backEvent: "backEvent" }, usesInheritance: true, ngImport: i0, template: "<div class=\"icons space-between\">\n  <div class=\"back\">\n    @if (this.showBack) {\n      <ta-font-icon class=\"close\" (click)=\"this.showBackAction()\" name=\"arrow-big-left\" type=\"md\">\n      </ta-font-icon>\n    }\n  </div>\n\n  <div class=\"title\">\n    @if (this.title) {\n      {{ this.title | translate }}\n    }\n  </div>\n\n  <div class=\"more\" [matMenuTriggerFor]=\"menu\">\n    @if (this.menuTemplate) {\n      <ta-font-icon class=\"more\" name=\"more\" type=\"md\"></ta-font-icon>\n    }\n  </div>\n</div>\n\n<mat-menu #menu=\"matMenu\">\n  @if (this.menuTemplate) {\n    <ng-template *ngTemplateOutlet=\"this.menuTemplate; context: { element: menu }\"></ng-template>\n  }\n</mat-menu>\n", styles: [".more,.back{width:32px}.icons{-webkit-user-select:none;user-select:none}.icons .back{text-align:left}.icons .title{margin:auto;font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-bold-weight);text-align:center}.icons .more{text-align:right}ta-font-icon{padding:var(--ta-space-xs);cursor:pointer;display:block}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }, { kind: "ngmodule", type: MatMenuModule }, { kind: "component", type: i2.MatMenu, selector: "mat-menu", inputs: ["backdropClass", "aria-label", "aria-labelledby", "aria-describedby", "xPosition", "yPosition", "overlapTrigger", "hasBackdrop", "class", "classList"], outputs: ["closed", "close"], exportAs: ["matMenu"] }, { kind: "directive", type: i2.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", inputs: ["mat-menu-trigger-for", "matMenuTriggerFor", "matMenuTriggerData", "matMenuTriggerRestoreFocus"], outputs: ["menuOpened", "onMenuOpen", "menuClosed", "onMenuClose"], exportAs: ["matMenuTrigger"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LayoutHeaderDefaultComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-layout-header-default', standalone: true, imports: [NgIf, FontIconComponent, TranslateModule, MatMenuModule], template: "<div class=\"icons space-between\">\n  <div class=\"back\">\n    @if (this.showBack) {\n      <ta-font-icon class=\"close\" (click)=\"this.showBackAction()\" name=\"arrow-big-left\" type=\"md\">\n      </ta-font-icon>\n    }\n  </div>\n\n  <div class=\"title\">\n    @if (this.title) {\n      {{ this.title | translate }}\n    }\n  </div>\n\n  <div class=\"more\" [matMenuTriggerFor]=\"menu\">\n    @if (this.menuTemplate) {\n      <ta-font-icon class=\"more\" name=\"more\" type=\"md\"></ta-font-icon>\n    }\n  </div>\n</div>\n\n<mat-menu #menu=\"matMenu\">\n  @if (this.menuTemplate) {\n    <ng-template *ngTemplateOutlet=\"this.menuTemplate; context: { element: menu }\"></ng-template>\n  }\n</mat-menu>\n", styles: [".more,.back{width:32px}.icons{-webkit-user-select:none;user-select:none}.icons .back{text-align:left}.icons .title{margin:auto;font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-bold-weight);text-align:center}.icons .more{text-align:right}ta-font-icon{padding:var(--ta-space-xs);cursor:pointer;display:block}\n"] }]
        }], ctorParameters: () => [], propDecorators: { showBack: [{
                type: Input
            }], menuTemplate: [{
                type: Input
            }], title: [{
                type: Input
            }], backEvent: [{
                type: Output
            }] } });

class LayoutModalComponent extends TaBaseComponent {
    constructor(dialogRef) {
        super();
        this.dialogRef = dialogRef;
        this.style = 'classic';
        this.title = '';
        CamTranslationLayout.getInstance();
    }
    ngOnInit() {
        this.dialogRef.addPanelClass(this.style + '-modal');
    }
    close() {
        this.dialogRef.close();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LayoutModalComponent, deps: [{ token: i1$3.MatDialogRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: LayoutModalComponent, isStandalone: true, selector: "ta-layout-modal", inputs: { style: "style", title: "title" }, usesInheritance: true, ngImport: i0, template: "<div class=\"modal-container\">\n  <ta-layout-header>\n    <div class=\"header flex-row justify-content-between\">\n      <ta-title [level]=\"3\" [isBold]=\"true\">{{ this.title | translate }}</ta-title>\n      <div (click)=\"this.close()\">\n        <ta-font-icon name=\"close\" type=\"md\"></ta-font-icon>\n      </div>\n    </div>\n  </ta-layout-header>\n  <ta-layout-content [autoHeight]=\"true\">\n    <ng-content></ng-content>\n  </ta-layout-content>\n</div>\n", styles: [".modal-container{padding:var(--ta-space-md);background-color:var(--ta-surface-primary)}.modal-container .header{padding-bottom:var(--ta-space-sm)}.modal-container ta-font-icon{cursor:pointer}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }, { kind: "component", type: LayoutHeaderComponent, selector: "ta-layout-header" }, { kind: "component", type: TitleComponent, selector: "ta-title", inputs: ["level", "isTheme", "isBold"] }, { kind: "component", type: LayoutContentComponent, selector: "ta-layout-content", inputs: ["autoHeight"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LayoutModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-layout-modal', standalone: true, imports: [
                        FontIconComponent,
                        TranslateModule,
                        LayoutTitleComponent,
                        LayoutHeaderComponent,
                        TitleComponent,
                        LayoutContentComponent,
                    ], template: "<div class=\"modal-container\">\n  <ta-layout-header>\n    <div class=\"header flex-row justify-content-between\">\n      <ta-title [level]=\"3\" [isBold]=\"true\">{{ this.title | translate }}</ta-title>\n      <div (click)=\"this.close()\">\n        <ta-font-icon name=\"close\" type=\"md\"></ta-font-icon>\n      </div>\n    </div>\n  </ta-layout-header>\n  <ta-layout-content [autoHeight]=\"true\">\n    <ng-content></ng-content>\n  </ta-layout-content>\n</div>\n", styles: [".modal-container{padding:var(--ta-space-md);background-color:var(--ta-surface-primary)}.modal-container .header{padding-bottom:var(--ta-space-sm)}.modal-container ta-font-icon{cursor:pointer}\n"] }]
        }], ctorParameters: () => [{ type: i1$3.MatDialogRef }], propDecorators: { style: [{
                type: Input
            }], title: [{
                type: Input
            }] } });

class TemplateModalContainer extends CamBaseModal {
    get style() {
        return this.data.style ?? 'full';
    }
    constructor(data, dialogRef) {
        super();
        this.data = data;
        this.dialogRef = dialogRef;
        if (this.data.askClosing$) {
            this._registerSubscription(this.data.askClosing$.subscribe(_ => this.dialogRef.close()));
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TemplateModalContainer, deps: [{ token: MAT_DIALOG_DATA }, { token: i1$3.MatDialogRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: TemplateModalContainer, isStandalone: true, selector: "ng-component", usesInheritance: true, ngImport: i0, template: '<ta-layout-modal [style]="this.style"><ng-template [ngTemplateOutlet]="this.data.template"></ng-template></ta-layout-modal>', isInline: true, dependencies: [{ kind: "component", type: LayoutModalComponent, selector: "ta-layout-modal", inputs: ["style", "title"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TemplateModalContainer, decorators: [{
            type: Component,
            args: [{
                    selector: '',
                    template: '<ta-layout-modal [style]="this.style"><ng-template [ngTemplateOutlet]="this.data.template"></ng-template></ta-layout-modal>',
                    standalone: true,
                    imports: [LayoutModalComponent, NgTemplateOutlet],
                }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }, { type: i1$3.MatDialogRef }] });

class LayoutHeaderLogoComponent extends TaBaseComponent {
    constructor(_modal) {
        super();
        this._modal = _modal;
        this.profile = null;
        this.notificationTemplate = null;
    }
    userInfo() {
        if (!this.profile) {
            return {
                naming: null,
                profilePictureUrl: '',
            };
        }
        return {
            naming: this.profile.user.naming,
            profilePictureUrl: this.profile.user.profilePictureUrl,
        };
    }
    goToHome() {
        this._router.navigateByUrl('/');
    }
    openProfile() {
        if (!this.profile?.template) {
            return;
        }
        this._modal.open(TemplateModalContainer, {
            data: {
                template: this.profile?.template,
                askClosing$: this.askClosing$,
            },
        });
    }
    openNotification() {
        if (!this.notificationTemplate) {
            return;
        }
        this._modal.open(TemplateModalContainer, {
            data: {
                template: this.notificationTemplate,
                askClosing$: this.askClosing$,
            },
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LayoutHeaderLogoComponent, deps: [{ token: i1$3.MatDialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: LayoutHeaderLogoComponent, isStandalone: true, selector: "ta-layout-header-logo", inputs: { profile: "profile", notificationTemplate: "notificationTemplate", askClosing$: "askClosing$" }, usesInheritance: true, ngImport: i0, template: "<div class=\"icons row align-items-center\">\n  <div class=\"image col-2\">\n    <ta-user-logo [userInfo]=\"this.userInfo()\" size=\"lg\" (click)=\"this.openProfile()\"></ta-user-logo>\n  </div>\n\n  <div class=\"title col-8\">\n    <ta-logo (click)=\"this.goToHome()\" color=\"black\"></ta-logo>\n  </div>\n\n  <div class=\"notif col-2\">\n    <ta-font-icon\n      name=\"notifications\"\n      type=\"lg\"\n      [class.disabled]=\"!this.notificationTemplate\"\n      (click)=\"this.openNotification()\"\n    ></ta-font-icon>\n  </div>\n</div>\n\n<mat-menu #showNotificationTemplate=\"matMenu\">\n  @if (this.notificationTemplate) {\n    <ng-template *ngTemplateOutlet=\"this.notificationTemplate\"></ng-template>\n  }\n</mat-menu>\n\n<mat-menu #showProfileTemplate=\"matMenu\">\n  @if (this.profile) {\n    <ng-template *ngTemplateOutlet=\"this.profile.template\"></ng-template>\n  }\n</mat-menu>\n", styles: [".icons{-webkit-user-select:none;user-select:none}.icons .image{text-align:left}.icons .image img{width:28px;height:auto;border-radius:100px}.icons .title{text-align:center}.icons .title ta-logo{display:block;width:60px;height:auto;border-radius:5px;margin:auto}.icons .notif{text-align:right}.icons .notif.disabled{color:var(--ta-icon-disabled)}ta-font-icon{padding:var(--ta-space-xs);cursor:pointer;display:block}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "ngmodule", type: MatMenuModule }, { kind: "component", type: i2.MatMenu, selector: "mat-menu", inputs: ["backdropClass", "aria-label", "aria-labelledby", "aria-describedby", "xPosition", "yPosition", "overlapTrigger", "hasBackdrop", "class", "classList"], outputs: ["closed", "close"], exportAs: ["matMenu"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LayoutHeaderLogoComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-layout-header-logo', standalone: true, imports: [NgIf, FontIconComponent, MatMenuModule], schemas: [CUSTOM_ELEMENTS_SCHEMA], template: "<div class=\"icons row align-items-center\">\n  <div class=\"image col-2\">\n    <ta-user-logo [userInfo]=\"this.userInfo()\" size=\"lg\" (click)=\"this.openProfile()\"></ta-user-logo>\n  </div>\n\n  <div class=\"title col-8\">\n    <ta-logo (click)=\"this.goToHome()\" color=\"black\"></ta-logo>\n  </div>\n\n  <div class=\"notif col-2\">\n    <ta-font-icon\n      name=\"notifications\"\n      type=\"lg\"\n      [class.disabled]=\"!this.notificationTemplate\"\n      (click)=\"this.openNotification()\"\n    ></ta-font-icon>\n  </div>\n</div>\n\n<mat-menu #showNotificationTemplate=\"matMenu\">\n  @if (this.notificationTemplate) {\n    <ng-template *ngTemplateOutlet=\"this.notificationTemplate\"></ng-template>\n  }\n</mat-menu>\n\n<mat-menu #showProfileTemplate=\"matMenu\">\n  @if (this.profile) {\n    <ng-template *ngTemplateOutlet=\"this.profile.template\"></ng-template>\n  }\n</mat-menu>\n", styles: [".icons{-webkit-user-select:none;user-select:none}.icons .image{text-align:left}.icons .image img{width:28px;height:auto;border-radius:100px}.icons .title{text-align:center}.icons .title ta-logo{display:block;width:60px;height:auto;border-radius:5px;margin:auto}.icons .notif{text-align:right}.icons .notif.disabled{color:var(--ta-icon-disabled)}ta-font-icon{padding:var(--ta-space-xs);cursor:pointer;display:block}\n"] }]
        }], ctorParameters: () => [{ type: i1$3.MatDialog }], propDecorators: { profile: [{
                type: Input
            }], notificationTemplate: [{
                type: Input
            }], askClosing$: [{
                type: Input
            }] } });

class LayoutSideCtaComponent {
    constructor() {
        this.background = true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LayoutSideCtaComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: LayoutSideCtaComponent, isStandalone: true, selector: "ta-layout-side-cta", inputs: { background: "background" }, ngImport: i0, template: "<div class=\"side-cta-container\" [class.background]=\"this.background\">\n  <ng-content></ng-content>\n</div>\n", styles: [".side-cta-container{padding:var(--ta-space-md);padding-bottom:calc(var(--ta-space-md) + env(safe-area-inset-bottom))}.side-cta-container.background{background-color:var(--ta-surface-brand-tertiary)}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LayoutSideCtaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-layout-side-cta', standalone: true, template: "<div class=\"side-cta-container\" [class.background]=\"this.background\">\n  <ng-content></ng-content>\n</div>\n", styles: [".side-cta-container{padding:var(--ta-space-md);padding-bottom:calc(var(--ta-space-md) + env(safe-area-inset-bottom))}.side-cta-container.background{background-color:var(--ta-surface-brand-tertiary)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { background: [{
                type: Input
            }] } });

class LayoutSideComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LayoutSideComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: LayoutSideComponent, isStandalone: true, selector: "ta-layout-side", ngImport: i0, template: "<div class=\"side-container\">\n  <div class=\"side-content\">\n    <ng-content select=\"ta-layout-side-content\"></ng-content>\n  </div>\n  <div class=\"side-cta\">\n    <ng-content select=\"ta-layout-side-cta\"></ng-content>\n  </div>\n</div>\n", styles: [".side-container{display:flex;flex-flow:column;flex:1}.side-container .side-content{flex:1;overflow-y:auto}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LayoutSideComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-layout-side', standalone: true, template: "<div class=\"side-container\">\n  <div class=\"side-content\">\n    <ng-content select=\"ta-layout-side-content\"></ng-content>\n  </div>\n  <div class=\"side-cta\">\n    <ng-content select=\"ta-layout-side-cta\"></ng-content>\n  </div>\n</div>\n", styles: [".side-container{display:flex;flex-flow:column;flex:1}.side-container .side-content{flex:1;overflow-y:auto}\n"] }]
        }] });

class LayoutSideContentComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LayoutSideContentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: LayoutSideContentComponent, isStandalone: true, selector: "ta-layout-side-content", ngImport: i0, template: "<div class=\"form-container\">\n  <ng-content></ng-content>\n</div>\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LayoutSideContentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-layout-side-content', standalone: true, template: "<div class=\"form-container\">\n  <ng-content></ng-content>\n</div>\n" }]
        }] });

class LayoutNavComponent {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LayoutNavComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: LayoutNavComponent, isStandalone: true, selector: "ta-layout-nav", ngImport: i0, template: "<ng-content></ng-content>\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LayoutNavComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-layout-nav', standalone: true, template: "<ng-content></ng-content>\n" }]
        }], ctorParameters: () => [] });

class LayoutPanelComponent {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LayoutPanelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: LayoutPanelComponent, isStandalone: true, selector: "ta-layout-panel", ngImport: i0, template: "<ng-content></ng-content>\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LayoutPanelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-layout-panel', standalone: true, template: "<ng-content></ng-content>\n" }]
        }], ctorParameters: () => [] });

class LayoutWithBottomNavComponent extends TaBaseComponent {
    constructor() {
        super();
        this.sharedMenu = inject(CamSharedMenuService);
        this.isMinimized$ = combineLatest([
            this.sharedMenu.isMinimized$.pipe(startWith(false)),
            this.breakpoints.isDesktop$,
        ]).pipe(map(data => ({
            isMinimized: data[0],
            isDesktop: data[1],
        })), map(({ isMinimized, isDesktop }) => isMinimized && isDesktop));
    }
    ngAfterViewChecked() {
        const clientHeight = this._bottomNav.nativeElement.clientHeight;
        const clientWidth = this._bottomNav.nativeElement.clientWidth;
        this._layoutContent.nativeElement.setAttribute('style', `padding-bottom: ${clientHeight + 10}px`);
        this._layoutContent.nativeElement.setAttribute('style', `width: ${window.screen.width - clientWidth}px`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LayoutWithBottomNavComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: LayoutWithBottomNavComponent, isStandalone: true, selector: "ta-layout-with-bottom-nav", inputs: { type: "type" }, viewQueries: [{ propertyName: "_bottomNav", first: true, predicate: ["bottomNavContainer"], descendants: true }, { propertyName: "_layoutContent", first: true, predicate: ["bottomLayoutContainer"], descendants: true }], usesInheritance: true, ngImport: i0, template: "<div class=\"layout-container\" [class.is-menu-minimized]=\"this.isMinimized$ | async\">\n  <div class=\"layout-content-container\" #bottomLayoutContainer>\n    <div class=\"container\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n  <div class=\"bottom-nav-container\" #bottomNavContainer>\n    <ng-content select=\"ta-layout-nav\"></ng-content>\n  </div>\n</div>\n", styles: [".layout-container{display:flex;flex-direction:column;margin:0}.layout-container .layout-content-container{width:100%;overflow:hidden}@media screen and (min-width: 576px){.layout-container .layout-content-container{order:2}}.layout-container .layout-content-container .container{width:auto}@media screen and (min-width: 576px){.layout-container .layout-content-container .container{padding:var(--ta-components-header-top) var(--ta-space-md) 0 var(--ta-space-md);padding-bottom:var(--ta-space-sm)!important}}.layout-container .bottom-nav-container{width:100%}@media screen and (max-width: 575px){.layout-container .bottom-nav-container{position:fixed;bottom:0;left:0;right:0;z-index:2}}@media screen and (min-width: 576px){.layout-container .bottom-nav-container{position:sticky;width:100px;order:1}}@media screen and (min-width: 992px){.layout-container .bottom-nav-container{width:220px}}.layout-container.is-menu-minimized .bottom-nav-container{width:100px!important}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LayoutWithBottomNavComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-layout-with-bottom-nav', standalone: true, imports: [AsyncPipe], template: "<div class=\"layout-container\" [class.is-menu-minimized]=\"this.isMinimized$ | async\">\n  <div class=\"layout-content-container\" #bottomLayoutContainer>\n    <div class=\"container\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n  <div class=\"bottom-nav-container\" #bottomNavContainer>\n    <ng-content select=\"ta-layout-nav\"></ng-content>\n  </div>\n</div>\n", styles: [".layout-container{display:flex;flex-direction:column;margin:0}.layout-container .layout-content-container{width:100%;overflow:hidden}@media screen and (min-width: 576px){.layout-container .layout-content-container{order:2}}.layout-container .layout-content-container .container{width:auto}@media screen and (min-width: 576px){.layout-container .layout-content-container .container{padding:var(--ta-components-header-top) var(--ta-space-md) 0 var(--ta-space-md);padding-bottom:var(--ta-space-sm)!important}}.layout-container .bottom-nav-container{width:100%}@media screen and (max-width: 575px){.layout-container .bottom-nav-container{position:fixed;bottom:0;left:0;right:0;z-index:2}}@media screen and (min-width: 576px){.layout-container .bottom-nav-container{position:sticky;width:100px;order:1}}@media screen and (min-width: 992px){.layout-container .bottom-nav-container{width:220px}}.layout-container.is-menu-minimized .bottom-nav-container{width:100px!important}\n"] }]
        }], ctorParameters: () => [], propDecorators: { type: [{
                type: Input
            }], _bottomNav: [{
                type: ViewChild,
                args: ['bottomNavContainer']
            }], _layoutContent: [{
                type: ViewChild,
                args: ['bottomLayoutContainer']
            }] } });

class LayoutWithPanelComponent {
    constructor() {
        this.drawer = null;
    }
    ngAfterViewInit() {
        this.manageDrawer();
    }
    ngOnChanges(changes) {
        this.manageDrawer();
    }
    manageDrawer() {
        if (this.open === true) {
            this.drawer?.open();
        }
        else {
            this.drawer?.close();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LayoutWithPanelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: LayoutWithPanelComponent, isStandalone: true, selector: "ta-layout-with-panel", inputs: { open: "open" }, viewQueries: [{ propertyName: "drawer", first: true, predicate: ["drawer"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<mat-drawer-container hasBackdrop [ngClass]=\"{ isOpen: this.open }\">\n  <mat-drawer #drawer [position]=\"'end'\" class=\"drawer\">\n    <ng-content select=\"ta-layout-panel\"></ng-content>\n  </mat-drawer>\n\n  <div class=\"ta-layout-content-container\">\n    <ng-content select=\"ta-layout-content\"></ng-content>\n  </div>\n</mat-drawer-container>\n", styles: [".drawer{width:100%}mat-drawer-container{background:transparent}.isOpen .app-layout-content-container{height:calc(100vh - 80px)}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: MatDrawer, selector: "mat-drawer", inputs: ["position", "mode", "disableClose", "autoFocus", "opened"], outputs: ["openedChange", "opened", "openedStart", "closed", "closedStart", "positionChanged"], exportAs: ["matDrawer"] }, { kind: "component", type: MatDrawerContainer, selector: "mat-drawer-container", inputs: ["autosize", "hasBackdrop"], outputs: ["backdropClick"], exportAs: ["matDrawerContainer"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LayoutWithPanelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-layout-with-panel', standalone: true, imports: [NgClass, MatDrawer, MatDrawerContainer], template: "<mat-drawer-container hasBackdrop [ngClass]=\"{ isOpen: this.open }\">\n  <mat-drawer #drawer [position]=\"'end'\" class=\"drawer\">\n    <ng-content select=\"ta-layout-panel\"></ng-content>\n  </mat-drawer>\n\n  <div class=\"ta-layout-content-container\">\n    <ng-content select=\"ta-layout-content\"></ng-content>\n  </div>\n</mat-drawer-container>\n", styles: [".drawer{width:100%}mat-drawer-container{background:transparent}.isOpen .app-layout-content-container{height:calc(100vh - 80px)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { open: [{
                type: Input
            }], drawer: [{
                type: ViewChild,
                args: ['drawer']
            }] } });

class LayoutPageComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LayoutPageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: LayoutPageComponent, isStandalone: true, selector: "ta-layout-page", ngImport: i0, template: "<ta-layout-with-bottom-nav>\n  <div class=\"layout-page-header\">\n    <ng-content select=\"ta-layout-header\"></ng-content>\n  </div>\n  <div class=\"layout-page-title\">\n    <ng-content select=\"ta-layout-title\"></ng-content>\n  </div>\n  <div class=\"layout-page-content\">\n    <ng-content></ng-content>\n  </div>\n  <ta-layout-nav>\n    <ng-content select=\"ta-layout-nav\"></ng-content>\n  </ta-layout-nav>\n</ta-layout-with-bottom-nav>\n", styles: [".layout-page-content{padding:0}\n"], dependencies: [{ kind: "component", type: LayoutWithBottomNavComponent, selector: "ta-layout-with-bottom-nav", inputs: ["type"] }, { kind: "component", type: LayoutNavComponent, selector: "ta-layout-nav" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LayoutPageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-layout-page', standalone: true, imports: [LayoutWithBottomNavComponent, LayoutNavComponent], template: "<ta-layout-with-bottom-nav>\n  <div class=\"layout-page-header\">\n    <ng-content select=\"ta-layout-header\"></ng-content>\n  </div>\n  <div class=\"layout-page-title\">\n    <ng-content select=\"ta-layout-title\"></ng-content>\n  </div>\n  <div class=\"layout-page-content\">\n    <ng-content></ng-content>\n  </div>\n  <ta-layout-nav>\n    <ng-content select=\"ta-layout-nav\"></ng-content>\n  </ta-layout-nav>\n</ta-layout-with-bottom-nav>\n", styles: [".layout-page-content{padding:0}\n"] }]
        }] });

class LayoutNotFoundComponent extends TaBaseComponent {
    constructor() {
        super();
        CamTranslationLayout.getInstance();
    }
    goToHome() {
        this._router.navigateByUrl('/');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LayoutNotFoundComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: LayoutNotFoundComponent, isStandalone: true, selector: "ta-layout-not-found", usesInheritance: true, ngImport: i0, template: "<div class=\"not-found-container\">\n  <div class=\"icon\">\n    <ta-font-icon name=\"close-tool\" size=\"lg\"></ta-font-icon>\n  </div>\n  <div class=\"title\">\n    {{ 'layout.notfound.title' | translate }}\n  </div>\n  <div class=\"content\">\n    {{ 'layout.notfound.content' | translate }}\n  </div>\n  <div class=\"button\">\n    <ta-button (action)=\"this.goToHome()\">{{ 'layout.notfound.cta' | translate }}</ta-button>\n  </div>\n</div>\n", styles: [".not-found-container{text-align:center}.not-found-container ta-font-icon{color:var(--ta-brand-400)}.not-found-container .title{font-size:var(--ta-font-key-key-default-size);line-height:var(--ta-font-key-key-default-line);font-weight:var(--ta-font-key-key-default-weight);margin:var(--ta-space-md) 0}.not-found-container .content{font-size:var(--ta-font-key-key-default-size);line-height:var(--ta-font-key-key-default-line);font-weight:var(--ta-font-key-key-default-weight);margin-bottom:var(--ta-space-md)}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LayoutNotFoundComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-layout-not-found', standalone: true, imports: [FontIconComponent, TranslateModule, ButtonComponent], template: "<div class=\"not-found-container\">\n  <div class=\"icon\">\n    <ta-font-icon name=\"close-tool\" size=\"lg\"></ta-font-icon>\n  </div>\n  <div class=\"title\">\n    {{ 'layout.notfound.title' | translate }}\n  </div>\n  <div class=\"content\">\n    {{ 'layout.notfound.content' | translate }}\n  </div>\n  <div class=\"button\">\n    <ta-button (action)=\"this.goToHome()\">{{ 'layout.notfound.cta' | translate }}</ta-button>\n  </div>\n</div>\n", styles: [".not-found-container{text-align:center}.not-found-container ta-font-icon{color:var(--ta-brand-400)}.not-found-container .title{font-size:var(--ta-font-key-key-default-size);line-height:var(--ta-font-key-key-default-line);font-weight:var(--ta-font-key-key-default-weight);margin:var(--ta-space-md) 0}.not-found-container .content{font-size:var(--ta-font-key-key-default-size);line-height:var(--ta-font-key-key-default-line);font-weight:var(--ta-font-key-key-default-weight);margin-bottom:var(--ta-space-md)}\n"] }]
        }], ctorParameters: () => [] });

/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { CamLayoutModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { LayoutFlexComponent, LayoutContentComponent, LayoutHeaderComponent } from '@ta/library-name';
 */
class CamLayoutModule {
    constructor() {
        CamTranslationLayout.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamLayoutModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: CamLayoutModule, imports: [CommonModule, MatSidenavModule, CamUiModule, CamIconsModule, MatMenuModule, CamDirectivePipeModule, MatDialogModule, TranslatePipe, LayoutContentComponent, LayoutHeaderComponent, LayoutNavComponent, LayoutPanelComponent, LayoutWithBottomNavComponent, LayoutWithPanelComponent, LayoutPageComponent, LayoutTitleComponent, LayoutHeaderDefaultComponent, LayoutModalComponent, LayoutHeaderLogoComponent, LayoutFullPanelComponent, LayoutSideCtaComponent, LayoutSideComponent, LayoutSideContentComponent, TemplateModalContainer, LayoutNotFoundComponent, LayoutFlexComponent], exports: [LayoutFlexComponent,
            LayoutContentComponent,
            LayoutHeaderComponent,
            LayoutNavComponent,
            LayoutPanelComponent,
            LayoutWithBottomNavComponent,
            LayoutWithPanelComponent,
            LayoutPageComponent,
            LayoutTitleComponent,
            LayoutHeaderDefaultComponent,
            LayoutModalComponent,
            LayoutHeaderLogoComponent,
            LayoutNotFoundComponent,
            TemplateModalContainer,
            LayoutFullPanelComponent,
            LayoutSideCtaComponent,
            LayoutSideComponent,
            LayoutSideContentComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamLayoutModule, imports: [CommonModule, MatSidenavModule, CamUiModule, CamIconsModule, MatMenuModule, CamDirectivePipeModule, MatDialogModule, LayoutWithPanelComponent, LayoutHeaderDefaultComponent, LayoutModalComponent, LayoutHeaderLogoComponent, LayoutFullPanelComponent, TemplateModalContainer, LayoutNotFoundComponent, LayoutFlexComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamLayoutModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [CommonModule, MatSidenavModule, CamUiModule, CamIconsModule, MatMenuModule, CamDirectivePipeModule, MatDialogModule, TranslatePipe, LayoutContentComponent, LayoutHeaderComponent, LayoutNavComponent, LayoutPanelComponent, LayoutWithBottomNavComponent, LayoutWithPanelComponent, LayoutPageComponent, LayoutTitleComponent, LayoutHeaderDefaultComponent, LayoutModalComponent, LayoutHeaderLogoComponent, LayoutFullPanelComponent, LayoutSideCtaComponent, LayoutSideComponent, LayoutSideContentComponent, TemplateModalContainer, LayoutNotFoundComponent, LayoutFlexComponent],
                    exports: [
                        LayoutFlexComponent,
                        LayoutContentComponent,
                        LayoutHeaderComponent,
                        LayoutNavComponent,
                        LayoutPanelComponent,
                        LayoutWithBottomNavComponent,
                        LayoutWithPanelComponent,
                        LayoutPageComponent,
                        LayoutTitleComponent,
                        LayoutHeaderDefaultComponent,
                        LayoutModalComponent,
                        LayoutHeaderLogoComponent,
                        LayoutNotFoundComponent,
                        TemplateModalContainer,
                        LayoutFullPanelComponent,
                        LayoutSideCtaComponent,
                        LayoutSideComponent,
                        LayoutSideContentComponent,
                    ],
                }]
        }], ctorParameters: () => [] });

class CardImageComponent {
    constructor() {
        this.src = '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CardImageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: CardImageComponent, isStandalone: true, selector: "ta-card-image", inputs: { src: "src" }, ngImport: i0, template: "<div class=\"img-container\">\n  <img [src]=\"this.src\" class=\"img\" />\n</div>\n", styles: [".img-container{aspect-ratio:16/9;overflow:hidden;border-radius:var(--ta-radius-rounded)}.img-container .img{width:100%}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CardImageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-card-image', standalone: true, template: "<div class=\"img-container\">\n  <img [src]=\"this.src\" class=\"img\" />\n</div>\n", styles: [".img-container{aspect-ratio:16/9;overflow:hidden;border-radius:var(--ta-radius-rounded)}.img-container .img{width:100%}\n"] }]
        }], ctorParameters: () => [], propDecorators: { src: [{
                type: Input
            }] } });

class CardComponent {
    ngOnInit() {
        this.hasHandler = this.click.observers.length > 0;
    }
    constructor() {
        this.highlight = false;
        this.shadow = true;
        this.fullHeight = false;
        this.noContent = false;
        this.isNew = false;
        this.click = new EventEmitter();
        this.hasHandler = false;
    }
    clickTrigger() {
        this.click.emit(null);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: CardComponent, isStandalone: true, selector: "ta-card", inputs: { highlight: "highlight", shadow: "shadow", fullHeight: "fullHeight", noContent: "noContent", isNew: "isNew" }, outputs: { click: "click" }, ngImport: i0, template: "<div\n  class=\"card flex-column\"\n  [ngClass]=\"{\n    'card-shadow': this.shadow,\n    'highlight': this.highlight,\n    'full-height': this.fullHeight,\n    'no-card-border': this.noContent,\n  }\"\n  [class.hover]=\"this.hasHandler\"\n  (click)=\"this.clickTrigger()\"\n>\n  <ta-new [visible]=\"this.isNew\"></ta-new>\n  <div class=\"responsive-content\">\n    <div class=\"img-container\">\n      <div class=\"card-img-container\">\n        <ng-content select=\"ta-card-image\"></ng-content>\n      </div>\n    </div>\n    <div class=\"content-container flex-column flex-full\">\n      <div class=\"card-header-container\">\n        <ng-content select=\"ta-card-header\"></ng-content>\n      </div>\n      <div class=\"card-content-container flex-full\">\n        <ng-content select=\"ta-card-content\" class=\"flex-full\"></ng-content>\n      </div>\n      <div class=\"card-cta-container\">\n        <ng-content select=\"ta-card-cta\"></ng-content>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".card{border-radius:var(--ta-space-md);position:relative;padding:var(--ta-space-md);background-color:var(--ta-surface-primary);color:var(--ta-text-primary);font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}.card.hover{cursor:pointer}.card.hover:hover{background-color:var(--ta-surface-hover-primary)}.card.full-height{height:calc(100% - var(--ta-space-md) * 2)}.card.highlight{background-color:var(--ta-surface-hover-secondary);border-color:1px solid var(--ta-border-secondary)}.card.card-shadow{box-shadow:0 4px 8px #0000001a}.card .responsive-content{display:flex;flex-direction:column}@media screen and (min-width: 768px){.card .responsive-content{display:flex;flex-direction:row}.card .responsive-content .img-container{order:2}}.card-force-mobile .card .responsive-content{display:flex;flex-direction:column}.card-force-mobile .card .responsive-content .img-container{order:0}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: NewComponent, selector: "ta-new", inputs: ["visible", "isRelative", "size"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-card', standalone: true, imports: [NgClass, NewComponent], template: "<div\n  class=\"card flex-column\"\n  [ngClass]=\"{\n    'card-shadow': this.shadow,\n    'highlight': this.highlight,\n    'full-height': this.fullHeight,\n    'no-card-border': this.noContent,\n  }\"\n  [class.hover]=\"this.hasHandler\"\n  (click)=\"this.clickTrigger()\"\n>\n  <ta-new [visible]=\"this.isNew\"></ta-new>\n  <div class=\"responsive-content\">\n    <div class=\"img-container\">\n      <div class=\"card-img-container\">\n        <ng-content select=\"ta-card-image\"></ng-content>\n      </div>\n    </div>\n    <div class=\"content-container flex-column flex-full\">\n      <div class=\"card-header-container\">\n        <ng-content select=\"ta-card-header\"></ng-content>\n      </div>\n      <div class=\"card-content-container flex-full\">\n        <ng-content select=\"ta-card-content\" class=\"flex-full\"></ng-content>\n      </div>\n      <div class=\"card-cta-container\">\n        <ng-content select=\"ta-card-cta\"></ng-content>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".card{border-radius:var(--ta-space-md);position:relative;padding:var(--ta-space-md);background-color:var(--ta-surface-primary);color:var(--ta-text-primary);font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}.card.hover{cursor:pointer}.card.hover:hover{background-color:var(--ta-surface-hover-primary)}.card.full-height{height:calc(100% - var(--ta-space-md) * 2)}.card.highlight{background-color:var(--ta-surface-hover-secondary);border-color:1px solid var(--ta-border-secondary)}.card.card-shadow{box-shadow:0 4px 8px #0000001a}.card .responsive-content{display:flex;flex-direction:column}@media screen and (min-width: 768px){.card .responsive-content{display:flex;flex-direction:row}.card .responsive-content .img-container{order:2}}.card-force-mobile .card .responsive-content{display:flex;flex-direction:column}.card-force-mobile .card .responsive-content .img-container{order:0}\n"] }]
        }], ctorParameters: () => [], propDecorators: { highlight: [{
                type: Input
            }], shadow: [{
                type: Input
            }], fullHeight: [{
                type: Input
            }], noContent: [{
                type: Input
            }], isNew: [{
                type: Input
            }], click: [{
                type: Output
            }] } });

class CardContentComponent {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CardContentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: CardContentComponent, isStandalone: true, selector: "ta-card-content", ngImport: i0, template: "<div class=\"card-content flex-full\">\n  <ng-content></ng-content>\n</div>\n", styles: [".card-content{padding:var(--ta-space-xs) 0}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CardContentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-card-content', standalone: true, template: "<div class=\"card-content flex-full\">\n  <ng-content></ng-content>\n</div>\n", styles: [".card-content{padding:var(--ta-space-xs) 0}\n"] }]
        }], ctorParameters: () => [] });

class CardCtaComponent {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CardCtaComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: CardCtaComponent, isStandalone: true, selector: "ta-card-cta", ngImport: i0, template: "<div class=\"cta\">\n  <ng-content></ng-content>\n</div>\n", styles: [".cta{border-top:1px solid var(--ta-neutral-main);padding-top:var(--ta-space-md)}.no-card-border .cta{border-width:0px}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CardCtaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-card-cta', standalone: true, template: "<div class=\"cta\">\n  <ng-content></ng-content>\n</div>\n", styles: [".cta{border-top:1px solid var(--ta-neutral-main);padding-top:var(--ta-space-md)}.no-card-border .cta{border-width:0px}\n"] }]
        }], ctorParameters: () => [] });

class DashboardCardComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: DashboardCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: DashboardCardComponent, isStandalone: true, selector: "ta-dashboard-card", inputs: { icon: "icon" }, ngImport: i0, template: "<ta-card [fullHeight]=\"true\">\n  <ta-card-content class=\"flex-full\">\n    <div class=\"background\">\n      <ta-font-icon [name]=\"this.icon\" type=\"big\"></ta-font-icon>\n    </div>\n    <div class=\"dashboard-content flex-full\">\n      <div class=\"icon-container\">\n        <ta-font-icon class=\"icon-color-icon-brand-primary\" [name]=\"this.icon\" type=\"lg\"></ta-font-icon>\n      </div>\n      <div class=\"flex-column g-space-md flex-full\">\n        <div class=\"title\">\n          <ta-title [level]=\"2\" [isBold]=\"true\">\n            <ng-content select=\"ta-card-title\"></ng-content>\n          </ta-title>\n        </div>\n        <div class=\"subtitle\">\n          <ta-text size=\"sm\">\n            <ng-content select=\"ta-card-subtitle\"></ng-content>\n          </ta-text>\n        </div>\n        <div class=\"flex-full flex-column\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n    </div>\n  </ta-card-content>\n</ta-card>\n", styles: [".dashboard-content{position:relative;z-index:1;gap:var(--ta-space-md);display:flex;flex-direction:column}@media screen and (min-width: 768px){.dashboard-content{display:flex;flex-direction:row}}.dashboard-content .icon-container{margin-top:-7px}@media screen and (min-width: 1200px){.dashboard-content .title,.dashboard-content .subtitle{width:calc(100% - 170px)}}.dashboard-content .subtitle{display:none}@media screen and (min-width: 768px){.dashboard-content .subtitle{display:block}}.background{position:absolute;z-index:0;overflow:hidden;top:0;right:0;height:200px;width:170px;color:var(--ta-brand-100)}.background ta-font-icon{position:absolute;bottom:0}\n"], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: TextComponent, selector: "ta-text", inputs: ["size", "isBold", "color"] }, { kind: "component", type: TitleComponent, selector: "ta-title", inputs: ["level", "isTheme", "isBold"] }, { kind: "component", type: CardComponent, selector: "ta-card", inputs: ["highlight", "shadow", "fullHeight", "noContent", "isNew"], outputs: ["click"] }, { kind: "component", type: CardContentComponent, selector: "ta-card-content" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: DashboardCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-dashboard-card', standalone: true, imports: [FontIconComponent, TextComponent, TitleComponent, CardComponent, CardContentComponent], template: "<ta-card [fullHeight]=\"true\">\n  <ta-card-content class=\"flex-full\">\n    <div class=\"background\">\n      <ta-font-icon [name]=\"this.icon\" type=\"big\"></ta-font-icon>\n    </div>\n    <div class=\"dashboard-content flex-full\">\n      <div class=\"icon-container\">\n        <ta-font-icon class=\"icon-color-icon-brand-primary\" [name]=\"this.icon\" type=\"lg\"></ta-font-icon>\n      </div>\n      <div class=\"flex-column g-space-md flex-full\">\n        <div class=\"title\">\n          <ta-title [level]=\"2\" [isBold]=\"true\">\n            <ng-content select=\"ta-card-title\"></ng-content>\n          </ta-title>\n        </div>\n        <div class=\"subtitle\">\n          <ta-text size=\"sm\">\n            <ng-content select=\"ta-card-subtitle\"></ng-content>\n          </ta-text>\n        </div>\n        <div class=\"flex-full flex-column\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n    </div>\n  </ta-card-content>\n</ta-card>\n", styles: [".dashboard-content{position:relative;z-index:1;gap:var(--ta-space-md);display:flex;flex-direction:column}@media screen and (min-width: 768px){.dashboard-content{display:flex;flex-direction:row}}.dashboard-content .icon-container{margin-top:-7px}@media screen and (min-width: 1200px){.dashboard-content .title,.dashboard-content .subtitle{width:calc(100% - 170px)}}.dashboard-content .subtitle{display:none}@media screen and (min-width: 768px){.dashboard-content .subtitle{display:block}}.background{position:absolute;z-index:0;overflow:hidden;top:0;right:0;height:200px;width:170px;color:var(--ta-brand-100)}.background ta-font-icon{position:absolute;bottom:0}\n"] }]
        }], propDecorators: { icon: [{
                type: Input
            }] } });

class CardHeaderComponent {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CardHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: CardHeaderComponent, isStandalone: true, selector: "ta-card-header", ngImport: i0, template: "<div class=\"header\">\n  <div class=\"header-tag\">\n    <ng-content select=\"ta-card-tag\"></ng-content>\n  </div>\n  <div class=\"header-title\">\n    <div class=\"title\">\n      <ng-content select=\"ta-card-title\"></ng-content>\n    </div>\n    <div class=\"subtitle\">\n      <ng-content select=\"ta-card-subtitle\"></ng-content>\n    </div>\n  </div>\n</div>\n", styles: [".header-tag{margin-bottom:var(--ta-space-md)}.header-title{border-bottom:1px solid var(--ta-neutral-main);padding-bottom:var(--ta-space-xs)}.header-title .title{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-bold-weight)}.header-title .subtitle{font-size:var(--ta-font-body-xs-default-size);line-height:var(--ta-font-body-xs-default-line);font-weight:var(--ta-font-body-xs-default-weight)}.no-card-border .header-title{border-width:0px}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CardHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-card-header', standalone: true, template: "<div class=\"header\">\n  <div class=\"header-tag\">\n    <ng-content select=\"ta-card-tag\"></ng-content>\n  </div>\n  <div class=\"header-title\">\n    <div class=\"title\">\n      <ng-content select=\"ta-card-title\"></ng-content>\n    </div>\n    <div class=\"subtitle\">\n      <ng-content select=\"ta-card-subtitle\"></ng-content>\n    </div>\n  </div>\n</div>\n", styles: [".header-tag{margin-bottom:var(--ta-space-md)}.header-title{border-bottom:1px solid var(--ta-neutral-main);padding-bottom:var(--ta-space-xs)}.header-title .title{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-bold-weight)}.header-title .subtitle{font-size:var(--ta-font-body-xs-default-size);line-height:var(--ta-font-body-xs-default-line);font-weight:var(--ta-font-body-xs-default-weight)}.no-card-border .header-title{border-width:0px}\n"] }]
        }], ctorParameters: () => [] });

class CardSubtitleComponent {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CardSubtitleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: CardSubtitleComponent, isStandalone: true, selector: "ta-card-subtitle", ngImport: i0, template: "<ng-content></ng-content>\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CardSubtitleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-card-subtitle', standalone: true, template: "<ng-content></ng-content>\n" }]
        }], ctorParameters: () => [] });

class CardTagComponent {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CardTagComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: CardTagComponent, isStandalone: true, selector: "ta-card-tag", ngImport: i0, template: "<ng-content></ng-content>\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CardTagComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-card-tag', standalone: true, template: "<ng-content></ng-content>\n" }]
        }], ctorParameters: () => [] });

class CardTitleComponent {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CardTitleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: CardTitleComponent, isStandalone: true, selector: "ta-card-title", ngImport: i0, template: "<ng-content></ng-content>\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CardTitleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-card-title', standalone: true, template: "<ng-content></ng-content>\n" }]
        }], ctorParameters: () => [] });

const exports = [
    CardComponent,
    CardHeaderComponent,
    CardTitleComponent,
    CardSubtitleComponent,
    CardCtaComponent,
    CardTagComponent,
    CardContentComponent,
    DashboardCardComponent,
    CardImageComponent,
];
const declarations = [];
/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 */
class CamCardModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamCardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: CamCardModule, imports: [CommonModule, CamUiModule, CamIconsModule, CardComponent,
            CardHeaderComponent,
            CardTitleComponent,
            CardSubtitleComponent,
            CardCtaComponent,
            CardTagComponent,
            CardContentComponent,
            DashboardCardComponent,
            CardImageComponent], exports: [CardComponent,
            CardHeaderComponent,
            CardTitleComponent,
            CardSubtitleComponent,
            CardCtaComponent,
            CardTagComponent,
            CardContentComponent,
            DashboardCardComponent,
            CardImageComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamCardModule, imports: [CommonModule, CamUiModule, CamIconsModule, DashboardCardComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamCardModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: declarations,
                    imports: [CommonModule, CamUiModule, CamIconsModule, ...exports],
                    exports: exports,
                }]
        }] });

class SwiperComponent {
    constructor() {
        this.slidesPerPage = 3.5;
        this.slidesPerGroup = 1;
        this.isFreeMode = true;
        this.startAt = 1;
        this.onSlideChanged = new EventEmitter();
    }
    ngAfterViewInit() {
        if (this.startAt) {
            this.swiperContainer.nativeElement.swiper.slideTo(this.startAt);
        }
    }
    trackByKey(_, item) {
        return item.key;
    }
    slideChanged($event) {
        if ($event.detail)
            this.onSlideChanged.emit($event.detail[0].activeIndex);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SwiperComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: SwiperComponent, isStandalone: true, selector: "ta-swiper", inputs: { swipeTemplate: "swipeTemplate", slides: "slides", slidesPerPage: "slidesPerPage", slidesPerGroup: "slidesPerGroup", isFreeMode: "isFreeMode", startAt: "startAt" }, outputs: { onSlideChanged: "onSlideChanged" }, viewQueries: [{ propertyName: "swiperContainer", first: true, predicate: ["swiperContainer"], descendants: true }], ngImport: i0, template: "<swiper-container\n  #swiperContainer\n  [attr.slides-per-view]=\"this.slidesPerPage\"\n  (transitionend)=\"this.slideChanged($event)\"\n  [attr.free-mode]=\"this.isFreeMode\"\n  [attr.slides-per-group]=\"this.slidesPerGroup\"\n  [attr.zoom]=\"true\"\n  [attr.pagination]=\"{\n    type: 'bullets',\n  }\"\n  watch-slides-progress=\"true\"\n  init=\"true\"\n  class=\"w-full\"\n  active-index=\"3\"\n>\n  @for (element of this.slides; track this.trackByKey($index, element)) {\n    @if (element.visible$ | async) {\n      <swiper-slide>\n        <ng-container\n          [ngTemplateOutlet]=\"this.swipeTemplate\"\n          [ngTemplateOutletContext]=\"{\n            element: element\n          }\"\n        >\n        </ng-container>\n      </swiper-slide>\n    }\n  }\n</swiper-container>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$4.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "pipe", type: i1$4.AsyncPipe, name: "async" }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SwiperComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-swiper', standalone: true, schemas: [CUSTOM_ELEMENTS_SCHEMA], encapsulation: ViewEncapsulation.None, imports: [CommonModule], template: "<swiper-container\n  #swiperContainer\n  [attr.slides-per-view]=\"this.slidesPerPage\"\n  (transitionend)=\"this.slideChanged($event)\"\n  [attr.free-mode]=\"this.isFreeMode\"\n  [attr.slides-per-group]=\"this.slidesPerGroup\"\n  [attr.zoom]=\"true\"\n  [attr.pagination]=\"{\n    type: 'bullets',\n  }\"\n  watch-slides-progress=\"true\"\n  init=\"true\"\n  class=\"w-full\"\n  active-index=\"3\"\n>\n  @for (element of this.slides; track this.trackByKey($index, element)) {\n    @if (element.visible$ | async) {\n      <swiper-slide>\n        <ng-container\n          [ngTemplateOutlet]=\"this.swipeTemplate\"\n          [ngTemplateOutletContext]=\"{\n            element: element\n          }\"\n        >\n        </ng-container>\n      </swiper-slide>\n    }\n  }\n</swiper-container>\n" }]
        }], ctorParameters: () => [], propDecorators: { swipeTemplate: [{
                type: Input
            }], slides: [{
                type: Input
            }], slidesPerPage: [{
                type: Input
            }], slidesPerGroup: [{
                type: Input
            }], isFreeMode: [{
                type: Input
            }], startAt: [{
                type: Input
            }], onSlideChanged: [{
                type: Output
            }], swiperContainer: [{
                type: ViewChild,
                args: ['swiperContainer', { static: false }]
            }] } });

/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { CamSwiperModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { SwiperComponent } from '@ta/library-name';
 */
class CamSwiperModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamSwiperModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: CamSwiperModule, imports: [SwiperComponent], exports: [SwiperComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamSwiperModule, imports: [SwiperComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamSwiperModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [SwiperComponent],
                    exports: [SwiperComponent],
                    providers: [],
                }]
        }] });

class CamTranslationContainer extends CamLazyTranslationService {
    constructor() {
        super('container');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamTranslationContainer, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamTranslationContainer, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamTranslationContainer, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

class ValidationModal {
    get title() {
        return this.data?.title ?? 'validation.modal.title';
    }
    get subtitle() {
        return this.data?.subtitle ?? 'validation.modal.content';
    }
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        CamTranslationContainer.getInstance();
    }
    onNoClick() {
        this.dialogRef.close(false);
    }
    onYesClick() {
        this.dialogRef.close(true);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ValidationModal, deps: [{ token: i1$3.MatDialogRef }, { token: MAT_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: ValidationModal, isStandalone: true, selector: "ng-component", ngImport: i0, template: "<ta-layout-modal [style]=\"'classic'\" [title]=\"this.title\">\n  <div class=\"subtitle\">\n    {{ this.subtitle | translate }}\n  </div>\n\n  <div class=\"align-end flex-start g-space-md ml-a\">\n    <div>\n      <ta-button [type]=\"'danger'\" (action)=\"this.onNoClick()\">\n        {{ 'container.validation.modal.cta.cancel' | translate }}\n      </ta-button>\n    </div>\n\n    <div>\n      <ta-button (action)=\"this.onYesClick()\">\n        {{ 'container.validation.modal.cta.ok' | translate }}\n      </ta-button>\n    </div>\n  </div>\n</ta-layout-modal>\n", styles: [".container{padding-top:10px;padding-bottom:10px}.container .subtitle{padding-top:.7em;padding-bottom:1.3em}\n"], dependencies: [{ kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "component", type: LayoutModalComponent, selector: "ta-layout-modal", inputs: ["style", "title"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ValidationModal, decorators: [{
            type: Component,
            args: [{ selector: '', standalone: true, imports: [TranslateModule, ButtonComponent, LayoutModalComponent], template: "<ta-layout-modal [style]=\"'classic'\" [title]=\"this.title\">\n  <div class=\"subtitle\">\n    {{ this.subtitle | translate }}\n  </div>\n\n  <div class=\"align-end flex-start g-space-md ml-a\">\n    <div>\n      <ta-button [type]=\"'danger'\" (action)=\"this.onNoClick()\">\n        {{ 'container.validation.modal.cta.cancel' | translate }}\n      </ta-button>\n    </div>\n\n    <div>\n      <ta-button (action)=\"this.onYesClick()\">\n        {{ 'container.validation.modal.cta.ok' | translate }}\n      </ta-button>\n    </div>\n  </div>\n</ta-layout-modal>\n", styles: [".container{padding-top:10px;padding-bottom:10px}.container .subtitle{padding-top:.7em;padding-bottom:1.3em}\n"] }]
        }], ctorParameters: () => [{ type: i1$3.MatDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }] });

const openModal = (dialog, data) => {
    const dialogRef = dialog.open(ValidationModal, {
        data: data,
    });
    return dialogRef.afterClosed();
};

class ContainerValidationComponent extends TaBaseComponent {
    constructor(dialog) {
        super();
        this.dialog = dialog;
        this.disabled = false;
        this.validated = new EventEmitter();
    }
    openModal() {
        if (this.disabled) {
            return;
        }
        openModal(this.dialog).subscribe(result => {
            if (result) {
                this.validated.emit();
            }
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ContainerValidationComponent, deps: [{ token: i1$3.MatDialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: ContainerValidationComponent, isStandalone: true, selector: "ta-container-validation", inputs: { disabled: "disabled" }, outputs: { validated: "validated" }, usesInheritance: true, ngImport: i0, template: "<div stopPropagationActivation (click)=\"this.openModal()\">\n  <ng-content></ng-content>\n</div>\n" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ContainerValidationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-container-validation', standalone: true, template: "<div stopPropagationActivation (click)=\"this.openModal()\">\n  <ng-content></ng-content>\n</div>\n" }]
        }], ctorParameters: () => [{ type: i1$3.MatDialog }], propDecorators: { disabled: [{
                type: Input
            }], validated: [{
                type: Output
            }] } });

class EmptyComponent {
    constructor() {
        this.isEmpty = true;
        this.isLight = true;
        this.showMessage = true;
        this.text = 'container.empty.light-message';
        this.type = 'info';
        this.icon = 'ghost';
        this.iconSize = 'lg';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: EmptyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: EmptyComponent, isStandalone: true, selector: "ta-empty", inputs: { isEmpty: "isEmpty", isLight: "isLight", showMessage: "showMessage", text: "text", type: "type", icon: "icon", iconSize: "iconSize" }, ngImport: i0, template: "@if (this.isEmpty) {\n  <div class=\"empty-container\">\n    @if (this.showMessage) {\n      @if (this.isLight) {\n        <ta-picture-info-message [type]=\"this.type\" [text]=\"this.text\"> </ta-picture-info-message>\n      } @else {\n        <ta-picture-info-message [icon]=\"this.icon\" [iconSize]=\"this.iconSize\" [type]=\"this.type\" [text]=\"this.text\">\n        </ta-picture-info-message>\n      }\n    }\n  </div>\n} @else {\n  <ng-content></ng-content>\n}\n", styles: [".empty-container{margin:var(--ta-space-sm) auto;text-align:center}\n"], dependencies: [{ kind: "component", type: PictureInfoMessageComponent, selector: "ta-picture-info-message", inputs: ["icon", "iconSize", "text", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: EmptyComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-empty', standalone: true, imports: [NgIf, PictureInfoMessageComponent], template: "@if (this.isEmpty) {\n  <div class=\"empty-container\">\n    @if (this.showMessage) {\n      @if (this.isLight) {\n        <ta-picture-info-message [type]=\"this.type\" [text]=\"this.text\"> </ta-picture-info-message>\n      } @else {\n        <ta-picture-info-message [icon]=\"this.icon\" [iconSize]=\"this.iconSize\" [type]=\"this.type\" [text]=\"this.text\">\n        </ta-picture-info-message>\n      }\n    }\n  </div>\n} @else {\n  <ng-content></ng-content>\n}\n", styles: [".empty-container{margin:var(--ta-space-sm) auto;text-align:center}\n"] }]
        }], propDecorators: { isEmpty: [{
                type: Input
            }], isLight: [{
                type: Input
            }], showMessage: [{
                type: Input
            }], text: [{
                type: Input
            }], type: [{
                type: Input
            }], icon: [{
                type: Input
            }], iconSize: [{
                type: Input
            }] } });

class ErrorComponent {
    constructor() {
        this.message = '';
        this.code = 200;
        CamTranslationContainer.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ErrorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: ErrorComponent, isStandalone: true, selector: "ta-error", inputs: { message: "message", code: "code" }, ngImport: i0, template: "@if (this.message === '') {\n  <ng-content></ng-content>\n} @else {\n  <ta-picture-info-message icon=\"sad\" iconSize=\"lg\" type=\"danger\" text=\"container.error.title\">\n  </ta-picture-info-message>\n  <p>{{ this.message | translate }}</p>\n}\n", styles: [""], dependencies: [{ kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }, { kind: "component", type: PictureInfoMessageComponent, selector: "ta-picture-info-message", inputs: ["icon", "iconSize", "text", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ErrorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-error', standalone: true, imports: [NgIf, TranslateModule, PictureInfoMessageComponent], template: "@if (this.message === '') {\n  <ng-content></ng-content>\n} @else {\n  <ta-picture-info-message icon=\"sad\" iconSize=\"lg\" type=\"danger\" text=\"container.error.title\">\n  </ta-picture-info-message>\n  <p>{{ this.message | translate }}</p>\n}\n" }]
        }], ctorParameters: () => [], propDecorators: { message: [{
                type: Input
            }], code: [{
                type: Input
            }] } });

const cardPlaceholder = {
    type: 'item',
    children: [
        {
            type: 'col',
            children: [
                {
                    type: 'row',
                    children: [
                        {
                            type: 'col',
                            gridSize: 8,
                            attributes: ['big'],
                            repeat: 1,
                        },
                        {
                            type: 'col',
                            gridSize: 4,
                            attributes: ['empty', 'big'],
                            repeat: 1,
                        },
                        {
                            type: 'col',
                            gridSize: 4,
                            repeat: 1,
                        },
                    ],
                    repeat: 1,
                },
            ],
            repeat: 1,
        },
        {
            type: 'col',
            gridSize: 2,
            children: [
                {
                    type: 'avatar',
                    repeat: 1,
                },
            ],
            repeat: 1,
        },
        {
            type: 'col',
            gridSize: 12,
            children: [
                {
                    type: 'row',
                    children: [
                        {
                            type: 'col',
                            gridSize: 8,
                            repeat: 1,
                        },
                        {
                            type: 'col',
                            gridSize: 4,
                            attributes: ['empty'],
                            repeat: 1,
                        },
                    ],
                    repeat: 2,
                },
            ],
            repeat: 1,
        },
        {
            type: 'row',
            children: [
                {
                    type: 'col',
                    gridSize: 12,
                    repeat: 6,
                },
            ],
            repeat: 1,
        },
    ],
    repeat: 1,
};
const menuPlaceholder = {
    type: 'row',
    children: [
        {
            type: 'col',
            gridSize: 3,
            attributes: ['big'],
            repeat: 1,
        },
        {
            type: 'col',
            gridSize: 1,
            attributes: ['big', 'empty'],
            repeat: 1,
        },
        {
            type: 'col',
            gridSize: 4,
            attributes: ['big'],
            repeat: 1,
        },
        {
            type: 'col',
            gridSize: 1,
            attributes: ['big', 'empty'],
            repeat: 1,
        },
        {
            type: 'col',
            gridSize: 3,
            attributes: ['big'],
            repeat: 1,
        },
    ],
    repeat: 3,
};
const morePlaceholder = {
    type: 'row',
    children: [
        {
            type: 'col',
            gridSize: 4,
            attributes: ['big', 'empty'],
            repeat: 1,
        },
        {
            type: 'col',
            gridSize: 4,
            attributes: ['big'],
            repeat: 1,
        },
        {
            type: 'col',
            gridSize: 4,
            attributes: ['big', 'empty'],
            repeat: 1,
        },
        {
            type: 'col',
            gridSize: 12,
            attributes: ['empty'],
            repeat: 1,
        },
    ],
    repeat: 3,
};
const fileListPlaceholder = {
    type: 'container',
    attributes: ['block'],
    children: [
        {
            type: 'item',
            attributes: ['no-shadow'],
            gridSize: 3,
            repeat: 1,
            children: [
                {
                    type: 'col',
                    gridSize: 4,
                    repeat: 9,
                    children: [
                        {
                            type: 'picture',
                            repeat: 1,
                        },
                    ],
                },
            ],
        },
    ],
    repeat: 1,
};
const cardListPlaceholder = {
    type: 'container',
    children: [
        {
            type: 'container',
            children: [cardPlaceholder],
            repeat: 3,
        },
        {
            type: 'container',
            children: [morePlaceholder],
            repeat: 3,
        },
    ],
    repeat: 1,
};
const detailPlaceholder = {
    type: 'container',
    children: [
        {
            type: 'container',
            children: [cardPlaceholder],
            repeat: 2,
        },
    ],
    repeat: 1,
};
const getPlaceholderConfig = (placeHolder) => {
    switch (placeHolder) {
        case 'cardList':
            return cardListPlaceholder;
        case 'detail':
            return detailPlaceholder;
        case 'fileList':
            return fileListPlaceholder;
        default:
            return cardPlaceholder;
    }
};

class PlaceholderComponent {
    constructor() { }
    getFakeArray(num) {
        return createRange(num);
    }
    getColClass(gridSize) {
        return gridSize ? `ph-col-${gridSize}` : '';
    }
    getAttributesClass(attributes) {
        return attributes ? attributes.join(' ') : '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: PlaceholderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: PlaceholderComponent, isStandalone: true, selector: "ta-placeholder", inputs: { placeholder: "placeholder" }, ngImport: i0, template: "<div class=\"placeholder-container\">\n  <ng-template\n    [ngTemplateOutlet]=\"Item\"\n    [ngTemplateOutletContext]=\"{ placeholder: this.placeholder }\"\n  ></ng-template>\n</div>\n\n<ng-template #Item let-placeholderItem=\"placeholder\">\n  @for (index of this.getFakeArray(placeholderItem.repeat); track index) {\n    @switch (placeholderItem.type) {\n      @case ('container') {\n        <ng-template\n          [ngTemplateOutlet]=\"Children\"\n          [ngTemplateOutletContext]=\"{\n            children: placeholderItem.children\n          }\"\n        ></ng-template>\n      }\n      @case ('row') {\n        <div\n          class=\"ph-row\"\n          [ngClass]=\"this.getAttributesClass(placeholderItem.attributes)\"\n        >\n          <ng-template\n            [ngTemplateOutlet]=\"Children\"\n            [ngTemplateOutletContext]=\"{\n              children: placeholderItem.children\n            }\"\n          ></ng-template>\n        </div>\n      }\n      @case ('item') {\n        <div\n          class=\"ph-item\"\n          [ngClass]=\"this.getAttributesClass(placeholderItem.attributes)\"\n        >\n          <ng-template\n            [ngTemplateOutlet]=\"Children\"\n            [ngTemplateOutletContext]=\"{\n              children: placeholderItem.children\n            }\"\n          ></ng-template>\n        </div>\n      }\n      @case ('col') {\n        <div\n          [ngClass]=\"\n            this.getColClass(placeholderItem.gridSize) +\n            ' ' +\n            this.getAttributesClass(placeholderItem.attributes)\n          \"\n        >\n          <ng-template\n            [ngTemplateOutlet]=\"Children\"\n            [ngTemplateOutletContext]=\"{\n              children: placeholderItem.children\n            }\"\n          ></ng-template>\n        </div>\n      }\n      @case ('picture') {\n        <div\n          class=\"ph-picture\"\n          [ngClass]=\"this.getColClass(placeholderItem.gridSize)\"\n        ></div>\n      }\n      @case ('avatar') {\n        <div\n          class=\"ph-avatar\"\n          [ngClass]=\"this.getColClass(placeholderItem.gridSize)\"\n        ></div>\n      }\n      @default {\n        <ng-template\n          [ngTemplateOutlet]=\"Children\"\n          [ngTemplateOutletContext]=\"{\n            children: placeholderItem.children\n          }\"\n        ></ng-template>\n      }\n    }\n  }\n</ng-template>\n\n<ng-template #Children let-children=\"children\">\n  @for (child of children; track child) {\n    <ng-template\n      [ngTemplateOutlet]=\"Item\"\n      [ngTemplateOutletContext]=\"{ placeholder: child }\"\n    ></ng-template>\n  }\n</ng-template>\n", styles: [""], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: PlaceholderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-placeholder', standalone: true, imports: [NgFor, NgClass], template: "<div class=\"placeholder-container\">\n  <ng-template\n    [ngTemplateOutlet]=\"Item\"\n    [ngTemplateOutletContext]=\"{ placeholder: this.placeholder }\"\n  ></ng-template>\n</div>\n\n<ng-template #Item let-placeholderItem=\"placeholder\">\n  @for (index of this.getFakeArray(placeholderItem.repeat); track index) {\n    @switch (placeholderItem.type) {\n      @case ('container') {\n        <ng-template\n          [ngTemplateOutlet]=\"Children\"\n          [ngTemplateOutletContext]=\"{\n            children: placeholderItem.children\n          }\"\n        ></ng-template>\n      }\n      @case ('row') {\n        <div\n          class=\"ph-row\"\n          [ngClass]=\"this.getAttributesClass(placeholderItem.attributes)\"\n        >\n          <ng-template\n            [ngTemplateOutlet]=\"Children\"\n            [ngTemplateOutletContext]=\"{\n              children: placeholderItem.children\n            }\"\n          ></ng-template>\n        </div>\n      }\n      @case ('item') {\n        <div\n          class=\"ph-item\"\n          [ngClass]=\"this.getAttributesClass(placeholderItem.attributes)\"\n        >\n          <ng-template\n            [ngTemplateOutlet]=\"Children\"\n            [ngTemplateOutletContext]=\"{\n              children: placeholderItem.children\n            }\"\n          ></ng-template>\n        </div>\n      }\n      @case ('col') {\n        <div\n          [ngClass]=\"\n            this.getColClass(placeholderItem.gridSize) +\n            ' ' +\n            this.getAttributesClass(placeholderItem.attributes)\n          \"\n        >\n          <ng-template\n            [ngTemplateOutlet]=\"Children\"\n            [ngTemplateOutletContext]=\"{\n              children: placeholderItem.children\n            }\"\n          ></ng-template>\n        </div>\n      }\n      @case ('picture') {\n        <div\n          class=\"ph-picture\"\n          [ngClass]=\"this.getColClass(placeholderItem.gridSize)\"\n        ></div>\n      }\n      @case ('avatar') {\n        <div\n          class=\"ph-avatar\"\n          [ngClass]=\"this.getColClass(placeholderItem.gridSize)\"\n        ></div>\n      }\n      @default {\n        <ng-template\n          [ngTemplateOutlet]=\"Children\"\n          [ngTemplateOutletContext]=\"{\n            children: placeholderItem.children\n          }\"\n        ></ng-template>\n      }\n    }\n  }\n</ng-template>\n\n<ng-template #Children let-children=\"children\">\n  @for (child of children; track child) {\n    <ng-template\n      [ngTemplateOutlet]=\"Item\"\n      [ngTemplateOutletContext]=\"{ placeholder: child }\"\n    ></ng-template>\n  }\n</ng-template>\n" }]
        }], ctorParameters: () => [], propDecorators: { placeholder: [{
                type: Input
            }] } });

class LoaderComponent {
    constructor() {
        this.isLoading = false;
        this.skeleton = null;
        this.isLoading = true;
    }
    getPlaceholder() {
        return getPlaceholderConfig(this.skeleton || 'default');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LoaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: LoaderComponent, isStandalone: true, selector: "ta-loader", inputs: { isLoading: "isLoading", skeleton: "skeleton" }, ngImport: i0, template: "@if (this.isLoading) {\n  @if (!this.skeleton) {\n    <div class=\"pt-space-15\">\n      <mat-spinner style=\"margin: 0 auto\" [diameter]=\"20\"></mat-spinner>\n    </div>\n  } @else {\n    <ta-placeholder [placeholder]=\"this.getPlaceholder()\"></ta-placeholder>\n  }\n} @else {\n  <ng-content></ng-content>\n}\n", styles: [""], dependencies: [{ kind: "ngmodule", type: MatProgressSpinnerModule }, { kind: "component", type: i1$5.MatProgressSpinner, selector: "mat-progress-spinner, mat-spinner", inputs: ["color", "mode", "value", "diameter", "strokeWidth"], exportAs: ["matProgressSpinner"] }, { kind: "component", type: PlaceholderComponent, selector: "ta-placeholder", inputs: ["placeholder"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LoaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-loader', standalone: true, imports: [NgIf, MatProgressSpinnerModule, PlaceholderComponent], template: "@if (this.isLoading) {\n  @if (!this.skeleton) {\n    <div class=\"pt-space-15\">\n      <mat-spinner style=\"margin: 0 auto\" [diameter]=\"20\"></mat-spinner>\n    </div>\n  } @else {\n    <ta-placeholder [placeholder]=\"this.getPlaceholder()\"></ta-placeholder>\n  }\n} @else {\n  <ng-content></ng-content>\n}\n" }]
        }], ctorParameters: () => [], propDecorators: { isLoading: [{
                type: Input
            }], skeleton: [{
                type: Input
            }] } });

class SwiperLightComponent extends TaBaseComponent {
    constructor(_deviceInfoService) {
        super();
        this._deviceInfoService = _deviceInfoService;
        this.swiperClasses = 'g-space-sm';
        this.forced = false;
        this.classes = '';
        this.track = (_, item) => {
            if (item.hasOwnProperty('id')) {
                return this.trackById(_, item);
            }
            if (item.hasOwnProperty('key')) {
                return this.trackByKey(_, item);
            }
            return item;
        };
    }
    ngOnInit() {
        if (this.forced) {
            this.classes = `items ${this.swiperClasses ?? ''}`;
        }
        else {
            this._registerSubscription(this._deviceInfoService.os$.subscribe(os => {
                this.classes = this._deviceInfoService.isMobileOs(os)
                    ? `items ${this.swiperClasses ?? ''}`
                    : (this.containerClasses ?? '');
            }));
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SwiperLightComponent, deps: [{ token: i1$2.CamDeviceInfoService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: SwiperLightComponent, isStandalone: true, selector: "ta-swiper-light", inputs: { items: "items", template: "template", swiperClasses: "swiperClasses", containerClasses: "containerClasses", forced: "forced" }, usesInheritance: true, ngImport: i0, template: "<div class=\"swiper-container\" [ngClass]=\"this.classes\">\n  @for (item of this.items; track this.track($index, item)) {\n    @if ((item.visible$ | async) !== false) {\n      <ng-container *ngTemplateOutlet=\"this.template; context: { element: item }\"></ng-container>\n    }\n  }\n</div>\n", styles: [".items{display:flex;justify-content:flex-start;align-items:flex-start;position:relative;width:100%;-webkit-user-select:none;user-select:none;cursor:pointer;overflow-x:auto;overflow-y:hidden;flex-wrap:nowrap}@media screen and (max-width: 767px){.items::-webkit-scrollbar{display:none}}@media screen and (min-width: 768px){.items::-webkit-scrollbar{height:var(--ta-space-xs)}}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "pipe", type: AsyncPipe, name: "async" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SwiperLightComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-swiper-light', standalone: true, imports: [NgIf, NgFor, NgClass, AsyncPipe], template: "<div class=\"swiper-container\" [ngClass]=\"this.classes\">\n  @for (item of this.items; track this.track($index, item)) {\n    @if ((item.visible$ | async) !== false) {\n      <ng-container *ngTemplateOutlet=\"this.template; context: { element: item }\"></ng-container>\n    }\n  }\n</div>\n", styles: [".items{display:flex;justify-content:flex-start;align-items:flex-start;position:relative;width:100%;-webkit-user-select:none;user-select:none;cursor:pointer;overflow-x:auto;overflow-y:hidden;flex-wrap:nowrap}@media screen and (max-width: 767px){.items::-webkit-scrollbar{display:none}}@media screen and (min-width: 768px){.items::-webkit-scrollbar{height:var(--ta-space-xs)}}\n"] }]
        }], ctorParameters: () => [{ type: i1$2.CamDeviceInfoService }], propDecorators: { items: [{
                type: Input
            }], template: [{
                type: Input
            }], swiperClasses: [{
                type: Input
            }], containerClasses: [{
                type: Input
            }], forced: [{
                type: Input
            }] } });

/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { CamContainerModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { ContainerValidationComponent, EmptyComponent, ErrorComponent } from '@ta/library-name';
 */
class CamContainerModule {
    constructor() {
        CamTranslationContainer.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamContainerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: CamContainerModule, imports: [CommonModule, MatIconModule, MatProgressSpinnerModule, CamDirectivePipeModule, CamUiModule, CamIconsModule, TranslatePipe, CamLayoutModule, ContainerValidationComponent, ValidationModal, EmptyComponent, ErrorComponent, LoaderComponent, PlaceholderComponent, SwiperLightComponent], exports: [ContainerValidationComponent, EmptyComponent, ErrorComponent, LoaderComponent, SwiperLightComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamContainerModule, imports: [CommonModule, MatIconModule, MatProgressSpinnerModule, CamDirectivePipeModule, CamUiModule, CamIconsModule, CamLayoutModule, ValidationModal, EmptyComponent, ErrorComponent, LoaderComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamContainerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, MatIconModule, MatProgressSpinnerModule, CamDirectivePipeModule, CamUiModule, CamIconsModule, TranslatePipe, CamLayoutModule, ContainerValidationComponent, ValidationModal, EmptyComponent, ErrorComponent, LoaderComponent, PlaceholderComponent, SwiperLightComponent],
                    declarations: [],
                    exports: [ContainerValidationComponent, EmptyComponent, ErrorComponent, LoaderComponent, SwiperLightComponent],
                }]
        }], ctorParameters: () => [] });

class ListElementComponent {
    constructor() {
        this.withSeparator = true;
        this.flexColumn = false;
        this.action = new EventEmitter();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ListElementComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: ListElementComponent, isStandalone: true, selector: "ta-list-element", inputs: { withSeparator: "withSeparator", flexColumn: "flexColumn" }, outputs: { action: "action" }, ngImport: i0, template: "<div class=\"list-element\" [class.list-border]=\"this.withSeparator\" [class.responsive-container]=\"this.flexColumn\">\n  <div class=\"titles-container\" (click)=\"this.action.emit()\">\n    <div class=\"list-title-container\">\n      <ng-content select=\"ta-list-title\"></ng-content>\n    </div>\n    <div class=\"list-sub-title-container\">\n      <ng-content select=\"ta-list-sub-title\"></ng-content>\n    </div>\n  </div>\n  <div class=\"tag-container align-center\">\n    <div class=\"list-tag-container\">\n      <ng-content select=\"ta-list-tag\"></ng-content>\n    </div>\n  </div>\n  <div class=\"list-extra-information\" (click)=\"this.action.emit()\">\n    <ng-content select=\"ta-list-extra-information\"></ng-content>\n  </div>\n</div>\n", styles: [".list-element{display:flex;flex-direction:row;justify-content:space-between;padding-top:var(--ta-space-xs);padding-bottom:var(--ta-space-xs)}.list-element .titles-container{margin:auto 0}.list-element .tag-container{margin-left:auto}.list-element .tag-container .list-tag-container{text-align:right;margin-left:auto}.list-element:hover{background-color:var(--ta-surface-brand-tertiary);cursor:pointer}.responsive-container{display:flex;flex-direction:column}@media screen and (min-width: 768px){.responsive-container{display:flex;flex-direction:row}}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ListElementComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-list-element', standalone: true, template: "<div class=\"list-element\" [class.list-border]=\"this.withSeparator\" [class.responsive-container]=\"this.flexColumn\">\n  <div class=\"titles-container\" (click)=\"this.action.emit()\">\n    <div class=\"list-title-container\">\n      <ng-content select=\"ta-list-title\"></ng-content>\n    </div>\n    <div class=\"list-sub-title-container\">\n      <ng-content select=\"ta-list-sub-title\"></ng-content>\n    </div>\n  </div>\n  <div class=\"tag-container align-center\">\n    <div class=\"list-tag-container\">\n      <ng-content select=\"ta-list-tag\"></ng-content>\n    </div>\n  </div>\n  <div class=\"list-extra-information\" (click)=\"this.action.emit()\">\n    <ng-content select=\"ta-list-extra-information\"></ng-content>\n  </div>\n</div>\n", styles: [".list-element{display:flex;flex-direction:row;justify-content:space-between;padding-top:var(--ta-space-xs);padding-bottom:var(--ta-space-xs)}.list-element .titles-container{margin:auto 0}.list-element .tag-container{margin-left:auto}.list-element .tag-container .list-tag-container{text-align:right;margin-left:auto}.list-element:hover{background-color:var(--ta-surface-brand-tertiary);cursor:pointer}.responsive-container{display:flex;flex-direction:column}@media screen and (min-width: 768px){.responsive-container{display:flex;flex-direction:row}}\n"] }]
        }], propDecorators: { withSeparator: [{
                type: Input
            }], flexColumn: [{
                type: Input
            }], action: [{
                type: Output
            }] } });

class ListExtraInformationComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ListExtraInformationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: ListExtraInformationComponent, isStandalone: true, selector: "ta-list-extra-information", ngImport: i0, template: "<ng-content></ng-content>\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ListExtraInformationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-list-extra-information', standalone: true, template: "<ng-content></ng-content>\n" }]
        }] });

class ListContainerComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ListContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: ListContainerComponent, isStandalone: true, selector: "ta-list-container", ngImport: i0, template: "<div class=\"list-container\">\n  <ng-content></ng-content>\n</div>\n", styles: [":host ::ng-deep .list-container ta-list-element{display:block}:host ::ng-deep .list-container ta-list-element .list-border{border-bottom:1px solid var(--ta-border-primary)}:host ::ng-deep .list-container ta-list-element:last-child{border:none}:host ::ng-deep .list-container ta-list-element:first-child{padding-top:none}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ListContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-list-container', standalone: true, template: "<div class=\"list-container\">\n  <ng-content></ng-content>\n</div>\n", styles: [":host ::ng-deep .list-container ta-list-element{display:block}:host ::ng-deep .list-container ta-list-element .list-border{border-bottom:1px solid var(--ta-border-primary)}:host ::ng-deep .list-container ta-list-element:last-child{border:none}:host ::ng-deep .list-container ta-list-element:first-child{padding-top:none}\n"] }]
        }] });

class ListSubTitleComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ListSubTitleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: ListSubTitleComponent, isStandalone: true, selector: "ta-list-sub-title", ngImport: i0, template: "<ng-content></ng-content>\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ListSubTitleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-list-sub-title', standalone: true, template: "<ng-content></ng-content>\n" }]
        }] });

class ListTagComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ListTagComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: ListTagComponent, isStandalone: true, selector: "ta-list-tag", ngImport: i0, template: "<ng-content></ng-content>\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ListTagComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-list-tag', standalone: true, template: "<ng-content></ng-content>\n" }]
        }] });

class ListTitleComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ListTitleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: ListTitleComponent, isStandalone: true, selector: "ta-list-title", ngImport: i0, template: "<ng-content></ng-content>\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ListTitleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-list-title', standalone: true, template: "<ng-content></ng-content>\n" }]
        }] });

/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { CamListModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { ListTitleComponent, ListElementComponent, ListContainerComponent } from '@ta/library-name';
 */
class CamListModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamListModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: CamListModule, imports: [ListTitleComponent, ListElementComponent, ListContainerComponent, ListSubTitleComponent, ListTagComponent, ListExtraInformationComponent], exports: [ListTitleComponent,
            ListElementComponent,
            ListContainerComponent,
            ListSubTitleComponent,
            ListTagComponent,
            ListExtraInformationComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamListModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamListModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [ListTitleComponent, ListElementComponent, ListContainerComponent, ListSubTitleComponent, ListTagComponent, ListExtraInformationComponent],
                    exports: [
                        ListTitleComponent,
                        ListElementComponent,
                        ListContainerComponent,
                        ListSubTitleComponent,
                        ListTagComponent,
                        ListExtraInformationComponent,
                    ],
                    providers: [],
                }]
        }] });

const MENU_TEMPLATE = new InjectionToken('MENU_TEMPLATE');
const MENU_MAX_HEIGHT = new InjectionToken('MENU_MAX_HEIGHT');
class OverlayService extends CamBaseService {
    constructor(overlay, injector) {
        super();
        this.overlay = overlay;
        this.injector = injector;
        this._onCloseSubject = new Subject();
        this.onClose$ = this._onCloseSubject.asObservable();
        this.defaultPositions = [
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'top',
            },
            {
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'bottom',
            },
            {
                originX: 'end',
                originY: 'bottom',
                overlayX: 'end',
                overlayY: 'top',
            },
            {
                originX: 'end',
                originY: 'top',
                overlayX: 'end',
                overlayY: 'bottom',
            },
        ];
    }
    openMenu(config) {
        const { menuComponent, triggerElement, template, onClose, matchTriggerWidth = true, positions = this.defaultPositions, offsetX = 2, offsetY = 2, maxHeight, } = config;
        if (!triggerElement) {
            console.log('OverlayService: triggerElement is required.');
            return;
        }
        if (!menuComponent) {
            console.log('OverlayService: menuComponent is required.');
            return;
        }
        this._overlayRef?.dispose();
        this._onCloseCallback = onClose;
        const positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo(triggerElement)
            .withFlexibleDimensions(true)
            .withPush(true)
            .withDefaultOffsetX(offsetX)
            .withDefaultOffsetY(offsetY)
            .withPositions(positions);
        this._overlayRef = this.overlay.create({
            positionStrategy,
            hasBackdrop: true,
            backdropClass: 'cdk-overlay-transparent-backdrop',
            scrollStrategy: this.overlay.scrollStrategies.close(),
            width: matchTriggerWidth ? triggerElement.clientWidth : undefined,
        });
        this._registerSubscription(this._overlayRef.backdropClick().subscribe(() => this.closeMenu()));
        const portalInjector = Injector.create({
            providers: [
                { provide: OverlayRef, useValue: this._overlayRef },
                { provide: MENU_TEMPLATE, useValue: template },
                { provide: MENU_MAX_HEIGHT, useValue: maxHeight },
            ],
            parent: this.injector,
        });
        const portal = new ComponentPortal(menuComponent, null, portalInjector);
        this._overlayRef.attach(portal);
    }
    closeMenu() {
        if (this._overlayRef) {
            this._overlayRef.dispose();
            this._overlayRef = undefined;
        }
        this._onCloseSubject.next();
        if (this._onCloseCallback) {
            this._onCloseCallback();
            this._onCloseCallback = undefined;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: OverlayService, deps: [{ token: i1$6.Overlay }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: OverlayService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: OverlayService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1$6.Overlay }, { type: i0.Injector }] });

class CamDefaultPanelComponent {
    constructor(templateRef, maxHeight) {
        this.templateRef = templateRef;
        this.maxHeight = maxHeight;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamDefaultPanelComponent, deps: [{ token: MENU_TEMPLATE, optional: true }, { token: MENU_MAX_HEIGHT, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: CamDefaultPanelComponent, isStandalone: true, selector: "ta-default-panel", inputs: { template: "template" }, host: { styleAttribute: "display: block; width: 100%;" }, ngImport: i0, template: "<div class=\"menu-panel\" [style.max-height.px]=\"this.maxHeight\">\n  @if (this.templateRef) {\n    <ng-container *ngTemplateOutlet=\"this.templateRef\"></ng-container>\n  } @else {\n    <ng-template> Ceci est le template par defaut. Il faut renseigner un template. </ng-template>\n  }\n</div>\n", styles: [".menu-panel{width:100%;box-sizing:border-box;background:var(--ta-neutral-white);border-radius:var(--ta-radius-rounded);box-shadow:var(--ta-shadow-black-md);overflow-y:auto}.custom-panel-header{flex:0 0 auto;padding:var(--ta-space-md);border-bottom:1px solid var(--ta-neutral-200)}.custom-panel-content{flex:1 1 auto;overflow-y:auto;padding:var(--ta-space-md)}.custom-panel-cta{flex:0 0 auto;padding:var(--ta-space-md);border-top:1px solid var(--ta-neutral-200);background:var(--ta-neutral-white)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$4.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamDefaultPanelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-default-panel', standalone: true, host: {
                        style: 'display: block; width: 100%;',
                    }, imports: [CommonModule], template: "<div class=\"menu-panel\" [style.max-height.px]=\"this.maxHeight\">\n  @if (this.templateRef) {\n    <ng-container *ngTemplateOutlet=\"this.templateRef\"></ng-container>\n  } @else {\n    <ng-template> Ceci est le template par defaut. Il faut renseigner un template. </ng-template>\n  }\n</div>\n", styles: [".menu-panel{width:100%;box-sizing:border-box;background:var(--ta-neutral-white);border-radius:var(--ta-radius-rounded);box-shadow:var(--ta-shadow-black-md);overflow-y:auto}.custom-panel-header{flex:0 0 auto;padding:var(--ta-space-md);border-bottom:1px solid var(--ta-neutral-200)}.custom-panel-content{flex:1 1 auto;overflow-y:auto;padding:var(--ta-space-md)}.custom-panel-cta{flex:0 0 auto;padding:var(--ta-space-md);border-top:1px solid var(--ta-neutral-200);background:var(--ta-neutral-white)}\n"] }]
        }], ctorParameters: () => [{ type: i0.TemplateRef, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [MENU_TEMPLATE]
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [MENU_MAX_HEIGHT]
                }] }], propDecorators: { template: [{
                type: Input
            }] } });

class CamOverlayPanelComponent extends TaBaseComponent {
    constructor(overlayService) {
        super();
        this.overlayService = overlayService;
        this.closed = new EventEmitter();
    }
    ngAfterViewInit() {
        if (!this.panelConfig) {
            console.log('Missing panelConfig');
            return;
        }
        if (!this.contentTpl) {
            console.log('Missing panelContent');
            return;
        }
        if (!this.triggerTpl) {
            console.log('Missing panelTrigger');
            return;
        }
        const configWithDefaults = {
            ...this.panelConfig,
            menuComponent: this.panelConfig.menuComponent ?? CamDefaultPanelComponent,
            triggerElement: this.triggerHostRef?.nativeElement,
            template: this.contentTpl,
        };
        if (!configWithDefaults.triggerElement) {
            console.log('OverlayPanel: no trigger element resolved');
            return;
        }
        this.triggerHostRef.nativeElement.addEventListener('click', () => {
            this.overlayService.openMenu(configWithDefaults);
        });
        this._registerSubscription(this.overlayService.onClose$.subscribe(() => {
            this.closed.emit();
        }));
    }
    close() {
        this.overlayService.closeMenu();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamOverlayPanelComponent, deps: [{ token: OverlayService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: CamOverlayPanelComponent, isStandalone: true, selector: "ta-overlay-panel", inputs: { panelConfig: "panelConfig" }, outputs: { closed: "closed" }, queries: [{ propertyName: "triggerTpl", first: true, predicate: ["panelTrigger"], descendants: true }, { propertyName: "contentTpl", first: true, predicate: ["panelContent"], descendants: true }], viewQueries: [{ propertyName: "triggerHostRef", first: true, predicate: ["triggerHost"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "<div #triggerHost>\n  <ng-container *ngTemplateOutlet=\"this.triggerTpl\"></ng-container>\n</div>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$4.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamOverlayPanelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-overlay-panel', standalone: true, imports: [CommonModule], encapsulation: ViewEncapsulation.None, template: "<div #triggerHost>\n  <ng-container *ngTemplateOutlet=\"this.triggerTpl\"></ng-container>\n</div>\n" }]
        }], ctorParameters: () => [{ type: OverlayService }], propDecorators: { triggerTpl: [{
                type: ContentChild,
                args: ['panelTrigger']
            }], contentTpl: [{
                type: ContentChild,
                args: ['panelContent']
            }], triggerHostRef: [{
                type: ViewChild,
                args: ['triggerHost', { static: true }]
            }], panelConfig: [{
                type: Input
            }], closed: [{
                type: Output
            }] } });

/*
 * Public API Surface of ui
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ActionButtonComponent, BadgeComponent, BannerComponent, BulletComponent, ButtonComponent, ButtonToolComponent, CamCardModule, CamContainerModule, CamDefaultPanelComponent, CamExpansionPanelComponent, CamLayoutModule, CamListModule, CamOverlayPanelComponent, CamSwiperModule, CamTreeChildrenComponent, CamTreeContainerComponent, CamTreeItemComponent, CamUiModule, CardComponent, CardContentComponent, CardCtaComponent, CardHeaderComponent, CardImageComponent, CardSubtitleComponent, CardTagComponent, CardTitleComponent, CivilityComponent, ContactInformationComponent, ContainerValidationComponent, CriticityComponent, CriticityStatus, CultureComponent, DashboardCardComponent, DepartmentIconListComponent, DepartmentProfessionsComponent, DepartmentsComponent, DualButtonComponent, DurationComponent, EmptyComponent, ErrorComponent, ExpandableTextComponent, FileImageComponent, HelloUserComponent, HourDateLineComponent, InlineProfileDataComponent, LabelComponent, LayoutContentComponent, LayoutFlexComponent, LayoutFullPanelComponent, LayoutHeaderComponent, LayoutHeaderDefaultComponent, LayoutHeaderLogoComponent, LayoutModalComponent, LayoutNavComponent, LayoutNotFoundComponent, LayoutPageComponent, LayoutPanelComponent, LayoutSideComponent, LayoutSideContentComponent, LayoutSideCtaComponent, LayoutTitleComponent, LayoutWithBottomNavComponent, LayoutWithPanelComponent, LinkComponent, ListContainerComponent, ListElementComponent, ListExtraInformationComponent, ListSubTitleComponent, ListTagComponent, ListTitleComponent, LoaderComponent, LogoComponent, MENU_MAX_HEIGHT, MENU_TEMPLATE, MegaoctetComponent, NewComponent, NotificationBadgeComponent, NotificationBadgeContainerComponent, OverlayService, PictureInfoMessageComponent, ProfileDataComponent, ProgressBarComponent, ProgressBarDataComponent, ProgressCircleComponent, PwaComponent, SwiperComponent, SwiperLightComponent, TemplateModalContainer, TextComponent, TimeAgoComponent, TitleComponent, ToastComponent, TrigramComponent, TypedMessageComponent, UiProfileDisplayComponent, UserLogoComponent, UsersListComponent, ValidationModal, criticityLabel, openModal };
//# sourceMappingURL=ta-ui.mjs.map
