import { NgFor, NgTemplateOutlet, AsyncPipe, NgIf, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Input, Component, inject, LOCALE_ID, Injectable, Optional, Inject, EventEmitter, Output, NgModule } from '@angular/core';
import { GraphSchema, baseStrapiProps, Apollo_gql, TaBaseStrapiService, HandleComplexRequest, TENANT_CONFIG_TOKEN } from '@ta/server';
import { LinkComponent as LinkComponent$1, TitleComponent, LoaderComponent, ErrorComponent, EmptyComponent, TaUiModule, TaContainerModule } from '@ta/ui';
import { TaBaseComponent, TaDirectivePipeModule } from '@ta/utils';
import { map, of } from 'rxjs';
import { ToggleComponent, TaFormInputsModule } from '@ta/form-input';
import { InputCheckBox } from '@ta/form-model';
import { TaLazyTranslationService } from '@ta/translation';

class TextComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TextComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: TextComponent, isStandalone: true, selector: "ta-rich-paragraph-text", inputs: { text: "text" }, ngImport: i0, template: "<span\n  [class.is-bold]=\"text.bold\"\n  [class.is-underline]=\"text.underline\"\n  [class.is-italic]=\"text.italic\"\n>\n  {{ text.text }}\n</span>\n", styles: [".is-bold{font-weight:var(--ta-font-body-md-bold-weight)}.is-underline{text-decoration:underline}.is-italic{font-style:italic}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TextComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-rich-paragraph-text', standalone: true, template: "<span\n  [class.is-bold]=\"text.bold\"\n  [class.is-underline]=\"text.underline\"\n  [class.is-italic]=\"text.italic\"\n>\n  {{ text.text }}\n</span>\n", styles: [".is-bold{font-weight:var(--ta-font-body-md-bold-weight)}.is-underline{text-decoration:underline}.is-italic{font-style:italic}\n"] }]
        }], propDecorators: { text: [{
                type: Input
            }] } });

class LinkComponent {
    goTo() {
        window.open(this.link.url);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LinkComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: LinkComponent, isStandalone: true, selector: "ta-rich-paragraph-link", inputs: { link: "link" }, ngImport: i0, template: "@for (entity of this.link.children; track entity) {\n  <ta-link (action)=\"this.goTo()\">\n    @switch (entity.type) {\n      @case ('text') {\n        <ta-rich-paragraph-text [text]=\"$any(entity)\"></ta-rich-paragraph-text>\n      }\n    }\n  </ta-link>\n}\n", styles: ["ta-link{display:inline-block}\n"], dependencies: [{ kind: "component", type: LinkComponent$1, selector: "ta-link", inputs: ["state", "underline", "bold", "size", "icon"], outputs: ["action"] }, { kind: "component", type: TextComponent, selector: "ta-rich-paragraph-text", inputs: ["text"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LinkComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-rich-paragraph-link', standalone: true, imports: [NgFor, LinkComponent$1, TextComponent], template: "@for (entity of this.link.children; track entity) {\n  <ta-link (action)=\"this.goTo()\">\n    @switch (entity.type) {\n      @case ('text') {\n        <ta-rich-paragraph-text [text]=\"$any(entity)\"></ta-rich-paragraph-text>\n      }\n    }\n  </ta-link>\n}\n", styles: ["ta-link{display:inline-block}\n"] }]
        }], propDecorators: { link: [{
                type: Input
            }] } });

class RichTextComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: RichTextComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: RichTextComponent, isStandalone: true, selector: "ta-rich-text", inputs: { richText: "richText" }, ngImport: i0, template: "@for (rich of this.richText; track rich) {\n  @switch (rich.type) {\n    @case ('heading') {\n      <ta-title [level]=\"rich.level\">\n        <ng-container *ngTemplateOutlet=\"textTemplate; context: { childrenText: rich.children }\"></ng-container>\n      </ta-title>\n    }\n    @case ('paragraph') {\n      <div class=\"paragraph\">\n        <ng-container *ngTemplateOutlet=\"textTemplate; context: { childrenText: rich.children }\"></ng-container>\n      </div>\n    }\n  }\n}\n\n<ng-template #textTemplate let-childrenText=\"childrenText\" [typedTemplate]=\"this.typeToken\">\n  @for (entity of childrenText; track entity) {\n    @switch (entity.type) {\n      @case ('text') {\n        <ta-rich-paragraph-text [text]=\"$any(entity)\"></ta-rich-paragraph-text>\n      }\n      @case ('link') {\n        <ta-rich-paragraph-link [link]=\"$any(entity)\"></ta-rich-paragraph-link>\n      }\n    }\n  }\n</ng-template>\n", styles: [".paragraph{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight);margin:var(--ta-space-md) 0}\n"], dependencies: [{ kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: TitleComponent, selector: "ta-title", inputs: ["level", "isTheme", "isBold"] }, { kind: "component", type: TextComponent, selector: "ta-rich-paragraph-text", inputs: ["text"] }, { kind: "component", type: LinkComponent, selector: "ta-rich-paragraph-link", inputs: ["link"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: RichTextComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-rich-text', standalone: true, imports: [NgFor, NgTemplateOutlet, TitleComponent, TextComponent, LinkComponent], template: "@for (rich of this.richText; track rich) {\n  @switch (rich.type) {\n    @case ('heading') {\n      <ta-title [level]=\"rich.level\">\n        <ng-container *ngTemplateOutlet=\"textTemplate; context: { childrenText: rich.children }\"></ng-container>\n      </ta-title>\n    }\n    @case ('paragraph') {\n      <div class=\"paragraph\">\n        <ng-container *ngTemplateOutlet=\"textTemplate; context: { childrenText: rich.children }\"></ng-container>\n      </div>\n    }\n  }\n}\n\n<ng-template #textTemplate let-childrenText=\"childrenText\" [typedTemplate]=\"this.typeToken\">\n  @for (entity of childrenText; track entity) {\n    @switch (entity.type) {\n      @case ('text') {\n        <ta-rich-paragraph-text [text]=\"$any(entity)\"></ta-rich-paragraph-text>\n      }\n      @case ('link') {\n        <ta-rich-paragraph-link [link]=\"$any(entity)\"></ta-rich-paragraph-link>\n      }\n    }\n  }\n</ng-template>\n", styles: [".paragraph{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight);margin:var(--ta-space-md) 0}\n"] }]
        }], propDecorators: { richText: [{
                type: Input
            }] } });

const props$1 = ['Title', 'Description', 'Tenant', 'Type'];
const cmsProps = new GraphSchema(props$1.concat(baseStrapiProps));

const props = ['Content'];
const saleProps = new GraphSchema(props.concat(baseStrapiProps));

function GET_CMS_CONTENT(type, locale, uid) {
    return {
        query: Apollo_gql `
      query CmsContents($type: String!, $locale: I18NLocaleCode!, $uid: String!) {
        contents(locale: $locale, filters: { Type: { eq: $type }, partner: { UID: { eq: $uid } } } ) {
          data {
            id
            attributes {
              ${cmsProps.get('Title')}
              ${cmsProps.get('Description')}
              ${cmsProps.get('Type')}
              ${cmsProps.get('createdAt')}
              ${cmsProps.get('updatedAt')}
              ${cmsProps.get('publishedAt')}
            }
          }
        }
      }
    `,
        variables: {
            type: type,
            locale: locale,
            uid: uid,
        },
    };
}
function GET_SALE_CONTENT(uid, locale) {
    return {
        query: Apollo_gql `
      query Sale($locale: I18NLocaleCode!, $uid: String!) {
        sales(locale: $locale, filters: { partner: { UID: { eq: $uid } } } ) {
          data {
            id
            attributes {
              ${saleProps.get('Content')}
            }
          }
        }
      }
    `,
        variables: {
            locale: locale,
            uid: uid,
        },
    };
}

class TaCmsService extends TaBaseStrapiService {
    constructor() {
        super();
        this.local = inject(LOCALE_ID);
        this.cmsContents = new HandleComplexRequest();
    }
    fetchCmsContents$(type, tenantId) {
        return this.cmsContents.fetch(type, this._strapiService
            .fetchQueryList$(GET_CMS_CONTENT(type, this.local, tenantId), 'contents')
            .pipe(map(list => list[0])));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaCmsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaCmsService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaCmsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

class CmsComponent extends TaBaseComponent {
    get content$() {
        return this.cmsService.cmsContents.get$(this.contentType);
    }
    constructor(cmsService, tenantConfig) {
        super();
        this.cmsService = cmsService;
        this.tenantConfig = tenantConfig;
    }
    ngOnInit() {
        const tenantId = this.tenantConfig.tenantId ?? 0;
        this.requestState.asked();
        this.cmsService.fetchCmsContents$(this.contentType, tenantId.toString()).subscribe({
            complete: () => this.requestState.completed(),
            error: (error) => {
                this.requestState.onError(error.status, error.statusText);
            },
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CmsComponent, deps: [{ token: TaCmsService }, { token: TENANT_CONFIG_TOKEN, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: CmsComponent, isStandalone: true, selector: "ta-cms", inputs: { contentType: "contentType" }, usesInheritance: true, ngImport: i0, template: "@if (this.content$ | async; as content) {\n  <ta-loader [isLoading]=\"this.requestState.isLoading()\">\n    <ta-error [message]=\"this.requestState.getErrorMessage()\" [code]=\"this.requestState.getErrorStatus()\">\n      <ta-empty [isEmpty]=\"!content\">\n        @if (content) {\n          <ta-title>\n            {{ content.Title }}\n          </ta-title>\n\n          <ta-rich-text [richText]=\"content.Description\"></ta-rich-text>\n        }\n      </ta-empty>\n    </ta-error>\n  </ta-loader>\n}\n", styles: [""], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton"] }, { kind: "component", type: ErrorComponent, selector: "ta-error", inputs: ["message", "code"] }, { kind: "component", type: EmptyComponent, selector: "ta-empty", inputs: ["isEmpty", "isLight", "showMessage", "text", "type", "icon", "iconSize"] }, { kind: "component", type: TitleComponent, selector: "ta-title", inputs: ["level", "isTheme", "isBold"] }, { kind: "component", type: RichTextComponent, selector: "ta-rich-text", inputs: ["richText"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CmsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-cms', standalone: true, imports: [NgIf, AsyncPipe, LoaderComponent, ErrorComponent, EmptyComponent, TitleComponent, RichTextComponent], template: "@if (this.content$ | async; as content) {\n  <ta-loader [isLoading]=\"this.requestState.isLoading()\">\n    <ta-error [message]=\"this.requestState.getErrorMessage()\" [code]=\"this.requestState.getErrorStatus()\">\n      <ta-empty [isEmpty]=\"!content\">\n        @if (content) {\n          <ta-title>\n            {{ content.Title }}\n          </ta-title>\n\n          <ta-rich-text [richText]=\"content.Description\"></ta-rich-text>\n        }\n      </ta-empty>\n    </ta-error>\n  </ta-loader>\n}\n" }]
        }], ctorParameters: () => [{ type: TaCmsService }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [TENANT_CONFIG_TOKEN]
                }] }], propDecorators: { contentType: [{
                type: Input
            }] } });

class TaSaleService extends TaBaseStrapiService {
    constructor() {
        super();
        this.local = inject(LOCALE_ID);
        this.saleContents = new HandleComplexRequest();
    }
    fetchSaleContents$(tenantId) {
        return this.saleContents.fetch(tenantId, this._strapiService
            .fetchQueryList$(GET_SALE_CONTENT(tenantId, this.local), 'sales')
            .pipe(map(list => list[0])));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaSaleService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaSaleService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaSaleService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

class SaleComponent extends TaBaseComponent {
    get content$() {
        if (!this.tenantConfig.tenantId) {
            return of();
        }
        return this.saleService.saleContents.get$(this.tenantConfig.tenantId?.toString());
    }
    constructor(saleService, tenantConfig) {
        super();
        this.saleService = saleService;
        this.tenantConfig = tenantConfig;
        this.acceptation = new EventEmitter();
        this.checkbox = new InputCheckBox({
            label: 'strapi.sale.cguAcceptation',
            toggle: true,
        });
        this.checkbox.createFormControl();
        this._registerSubscription(this.checkbox.changeValue$.subscribe({
            next: value => this.acceptation.emit(value),
        }));
    }
    ngOnInit() {
        const tenantId = this.tenantConfig.tenantId ?? 0;
        this.requestState.asked();
        this.saleService.fetchSaleContents$(tenantId.toString()).subscribe({
            complete: () => this.requestState.completed(),
            error: (error) => {
                this.requestState.onError(error.status, error.statusText);
            },
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaleComponent, deps: [{ token: TaSaleService }, { token: TENANT_CONFIG_TOKEN, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: SaleComponent, isStandalone: true, selector: "ta-sale", outputs: { acceptation: "acceptation" }, usesInheritance: true, ngImport: i0, template: "@if (this.content$ | async; as content) {\n  <ta-loader [isLoading]=\"this.requestState.isLoading()\">\n    <ta-error [message]=\"this.requestState.getErrorMessage()\" [code]=\"this.requestState.getErrorStatus()\">\n      <ta-empty [isEmpty]=\"!content\">\n        @if (content) {\n          <ta-rich-text [richText]=\"content.Content\"></ta-rich-text>\n\n          <div class=\"checkbox ta-r\">\n            <ta-input-toggle [input]=\"this.checkbox\"></ta-input-toggle>\n          </div>\n        }\n      </ta-empty>\n    </ta-error>\n  </ta-loader>\n}\n", styles: [""], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton"] }, { kind: "component", type: ErrorComponent, selector: "ta-error", inputs: ["message", "code"] }, { kind: "component", type: EmptyComponent, selector: "ta-empty", inputs: ["isEmpty", "isLight", "showMessage", "text", "type", "icon", "iconSize"] }, { kind: "component", type: RichTextComponent, selector: "ta-rich-text", inputs: ["richText"] }, { kind: "component", type: ToggleComponent, selector: "ta-input-toggle" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SaleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-sale', standalone: true, imports: [NgIf, AsyncPipe, LoaderComponent, ErrorComponent, EmptyComponent, RichTextComponent, ToggleComponent], template: "@if (this.content$ | async; as content) {\n  <ta-loader [isLoading]=\"this.requestState.isLoading()\">\n    <ta-error [message]=\"this.requestState.getErrorMessage()\" [code]=\"this.requestState.getErrorStatus()\">\n      <ta-empty [isEmpty]=\"!content\">\n        @if (content) {\n          <ta-rich-text [richText]=\"content.Content\"></ta-rich-text>\n\n          <div class=\"checkbox ta-r\">\n            <ta-input-toggle [input]=\"this.checkbox\"></ta-input-toggle>\n          </div>\n        }\n      </ta-empty>\n    </ta-error>\n  </ta-loader>\n}\n" }]
        }], ctorParameters: () => [{ type: TaSaleService }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [TENANT_CONFIG_TOKEN]
                }] }], propDecorators: { acceptation: [{
                type: Output
            }] } });

class TaTranslationStrapi extends TaLazyTranslationService {
    constructor() {
        super('strapi');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaTranslationStrapi, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaTranslationStrapi, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaTranslationStrapi, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { TaStrapiModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { CmsComponent, SaleComponent } from '@ta/library-name';
 */
class TaStrapiModule {
    constructor() {
        TaTranslationStrapi.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaStrapiModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: TaStrapiModule, imports: [CommonModule,
            TaUiModule,
            TaDirectivePipeModule,
            TaContainerModule,
            TaFormInputsModule,
            CmsComponent,
            RichTextComponent,
            LinkComponent,
            TextComponent,
            SaleComponent], exports: [CmsComponent, SaleComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaStrapiModule, imports: [CommonModule,
            TaUiModule,
            TaDirectivePipeModule,
            TaContainerModule,
            TaFormInputsModule,
            CmsComponent,
            RichTextComponent,
            LinkComponent,
            SaleComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaStrapiModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule,
                        TaUiModule,
                        TaDirectivePipeModule,
                        TaContainerModule,
                        TaFormInputsModule,
                        CmsComponent,
                        RichTextComponent,
                        LinkComponent,
                        TextComponent,
                        SaleComponent,
                    ],
                    exports: [CmsComponent, SaleComponent],
                }]
        }], ctorParameters: () => [] });

/*
 * Public API Surface of cms
 */

/*
 * Public API Surface of cms
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CmsComponent, SaleComponent, TaCmsService, TaStrapiModule };
//# sourceMappingURL=ta-cms.mjs.map
