import * as i0 from '@angular/core';
import { HostListener, Input, Directive, EventEmitter, Output, Pipe, NgModule, inject, signal, Component, Injectable, InjectionToken } from '@angular/core';
import * as i1 from '@angular/platform-browser';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, Router, convertToParamMap } from '@angular/router';
import { TaIconType } from '@ta/icons';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { differenceInMinutes, parseISO, isValid } from 'date-fns';
import { Camera } from '@capacitor/camera';
import Compressor from 'compressorjs';
import slugify from 'slugify';
import { BehaviorSubject } from 'rxjs';

class StopPropagationDirective {
    constructor() {
        this.stopPropagationActivation = true;
    }
    onClick(event) {
        if (event && this.stopPropagationActivation) {
            event.stopPropagation();
            event.preventDefault();
        }
        return false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: StopPropagationDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.14", type: StopPropagationDirective, isStandalone: true, selector: "[appStopPropagation]", inputs: { stopPropagationActivation: "stopPropagationActivation" }, host: { listeners: { "click": "onClick($event)" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: StopPropagationDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[appStopPropagation]",
                    standalone: true,
                }]
        }], propDecorators: { stopPropagationActivation: [{
                type: Input
            }], onClick: [{
                type: HostListener,
                args: ["click", ["$event"]]
            }] } });

class TypedTemplateDirective {
    // @ts-ignore
    constructor(contentTemplate) {
        this.contentTemplate = contentTemplate;
    }
    static ngTemplateContextGuard(dir, ctx) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TypedTemplateDirective, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.14", type: TypedTemplateDirective, isStandalone: true, selector: "ng-template[typedTemplate]", inputs: { typedTemplate: "typedTemplate" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TypedTemplateDirective, decorators: [{
            type: Directive,
            args: [{ selector: "ng-template[typedTemplate]", standalone: true }]
        }], ctorParameters: () => [{ type: i0.TemplateRef }], propDecorators: { typedTemplate: [{
                type: Input
            }] } });

class LetDirective {
    constructor(_viewContainer, _templateRef) {
        this._viewContainer = _viewContainer;
        this._templateRef = _templateRef;
        this._context = { ngLet: null, $implicit: null };
        this._hasView = false;
    }
    set ngLet(value) {
        this._context.$implicit = this._context.ngLet = value;
        if (!this._hasView) {
            this._viewContainer.createEmbeddedView(this._templateRef, this._context);
            this._hasView = true;
        }
    }
    /**
     * Asserts the correct type of the context for the template that `NgLet` will render.
     *
     * The presence of this method is a signal to the Ivy template type-check compiler that the
     * `NgLet` structural directive renders its template with a specific context type.
     */
    static ngTemplateContextGuard(dir, ctx) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LetDirective, deps: [{ token: i0.ViewContainerRef }, { token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.14", type: LetDirective, selector: "[ngLet]", inputs: { ngLet: "ngLet" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: LetDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: "[ngLet]",
                }]
        }], ctorParameters: () => [{ type: i0.ViewContainerRef }, { type: i0.TemplateRef }], propDecorators: { ngLet: [{
                type: Input
            }] } });

class OnRenderDirective {
    constructor() {
        this.rendered = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes["onRender"].previousValue !== changes["onRender"].currentValue) {
            this.rendered.emit();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: OnRenderDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.14", type: OnRenderDirective, selector: "[TaOnRender]", inputs: { onRender: "onRender" }, outputs: { rendered: "rendered" }, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: OnRenderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[TaOnRender]",
                }]
        }], propDecorators: { onRender: [{
                type: Input
            }], rendered: [{
                type: Output
            }] } });

const FILE_SIZE_UNITS = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
const FILE_SIZE_UNITS_LONG = [
    "Bytes",
    "Kilobytes",
    "Megabytes",
    "Gigabytes",
    "Pettabytes",
    "Exabytes",
    "Zettabytes",
    "Yottabytes",
];
class FileSizePipe {
    transform(sizeInBytes, longForm = false) {
        if (sizeInBytes === null) {
            return "";
        }
        const units = longForm ? FILE_SIZE_UNITS_LONG : FILE_SIZE_UNITS;
        let power = Math.round(Math.log(sizeInBytes) / Math.log(1024));
        power = Math.min(power, units.length - 1);
        const size = sizeInBytes / Math.pow(1024, power);
        const formattedSize = Math.round(size * 100) / 100;
        const unit = units[power];
        return `${formattedSize} ${unit}`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FileSizePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: FileSizePipe, name: "fileSize" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FileSizePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: "fileSize",
                }]
        }] });

class JoinPipe {
    transform(input, sep = ", ") {
        return input.join(sep);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: JoinPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: JoinPipe, isStandalone: true, name: "join" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: JoinPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: "join",
                    standalone: true,
                }]
        }] });

class PluralTranslatePipe {
    transform(key, number) {
        return `${key}.${number == 0 || number == 1 ? "one" : "plural"}`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: PluralTranslatePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: PluralTranslatePipe, isStandalone: true, name: "pluralTranslate", pure: false }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: PluralTranslatePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: "pluralTranslate",
                    pure: false,
                    standalone: true,
                }]
        }] });

class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, type) {
        switch (type) {
            case "html":
                return this.sanitizer.bypassSecurityTrustHtml(value);
            case "style":
                return this.sanitizer.bypassSecurityTrustStyle(value);
            case "script":
                return this.sanitizer.bypassSecurityTrustScript(value);
            case "url":
                return this.sanitizer.bypassSecurityTrustUrl(value);
            case "resourceUrl":
                return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                throw new Error(`Invalid safe type specified: ${type}`);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SafePipe, deps: [{ token: i1.DomSanitizer }], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: SafePipe, isStandalone: true, name: "safe" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SafePipe, decorators: [{
            type: Pipe,
            args: [{ name: "safe", standalone: true }]
        }], ctorParameters: () => [{ type: i1.DomSanitizer }] });

/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { TaDirectivePipeModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { FileSizePipe, JoinPipe, LetDirective } from '@ta/library-name';
 */
class TaDirectivePipeModule {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaDirectivePipeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: TaDirectivePipeModule, declarations: [FileSizePipe, LetDirective, OnRenderDirective], imports: [CommonModule,
            SafePipe,
            PluralTranslatePipe,
            StopPropagationDirective,
            JoinPipe,
            TypedTemplateDirective], exports: [FileSizePipe,
            LetDirective,
            PluralTranslatePipe,
            StopPropagationDirective,
            OnRenderDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaDirectivePipeModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaDirectivePipeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [FileSizePipe, LetDirective, OnRenderDirective],
                    imports: [
                        CommonModule,
                        SafePipe,
                        PluralTranslatePipe,
                        StopPropagationDirective,
                        JoinPipe,
                        TypedTemplateDirective,
                    ],
                    exports: [
                        FileSizePipe,
                        LetDirective,
                        PluralTranslatePipe,
                        StopPropagationDirective,
                        OnRenderDirective,
                    ],
                }]
        }], ctorParameters: () => [] });

var EFileExtension;
(function (EFileExtension) {
    EFileExtension[EFileExtension["Unknown"] = 0] = "Unknown";
    EFileExtension[EFileExtension["PDF"] = 1] = "PDF";
    EFileExtension[EFileExtension["Excel"] = 2] = "Excel";
    EFileExtension[EFileExtension["Word"] = 3] = "Word";
    EFileExtension[EFileExtension["Image"] = 4] = "Image";
})(EFileExtension || (EFileExtension = {}));

class TemporaryFile {
    constructor() {
        this.files = [];
    }
    addFiles(files) {
        const fileData = this._convertToFileData(files);
        this.files = this.files.concat(fileData);
    }
    removeFiles(files) {
        const urls = files.map((file) => file.localUrl);
        this.files = this.files.filter((file) => !urls.includes(file.url));
    }
    removeAll() {
        this.files = [];
    }
    _convertToFileData(files) {
        return files.map((file, index) => ({
            isLoading: true,
            id: index,
            type: "Image",
            url: file.localUrl || "",
        }));
    }
}

var Civility;
(function (Civility) {
    Civility[Civility["Unknown"] = 0] = "Unknown";
    Civility[Civility["Sir"] = 1] = "Sir";
    Civility[Civility["Madame"] = 2] = "Madame";
    Civility[Civility["Dear"] = 3] = "Dear";
})(Civility || (Civility = {}));

var Culture;
(function (Culture) {
    Culture[Culture["Unknown"] = 0] = "Unknown";
    Culture[Culture["FR_FR"] = 10] = "FR_FR";
    Culture[Culture["FR_BE"] = 11] = "FR_BE";
    Culture[Culture["NL_NL"] = 20] = "NL_NL";
    Culture[Culture["EN_EN"] = 30] = "EN_EN";
    Culture[Culture["ES_ES"] = 40] = "ES_ES";
})(Culture || (Culture = {}));

const breakpoint_xxl = 1400;
const breakpoint_xl = 1200;
const breakpoint_lg = 992;
const breakpoint_md = 768;
const breakpoint_sm = 576;
const breakpoint_xs = 0;
const Breakpoints = {
    XSmall: `(min-width: ${breakpoint_xs}px) and (max-width: ${breakpoint_sm - 1}px)`,
    Small: `(min-width: ${breakpoint_sm}px) and (max-width: ${breakpoint_md - 1}px)`,
    Medium: `(min-width: ${breakpoint_md}px) and (max-width: ${breakpoint_lg - 1}px)`,
    Large: `(min-width: ${breakpoint_lg}px) and (max-width: ${breakpoint_xl - 1}px)`,
    XLarge: `(min-width: ${breakpoint_xl}px) and (max-width: ${breakpoint_xxl - 1}px)`,
    XXLarge: `(min-width: ${breakpoint_xxl}px)`,
    Handset: `(max-width: ${breakpoint_sm - 1}px) and (orientation: portrait), ` +
        `(max-width: ${breakpoint_md - 1}px) and (orientation: landscape)`,
    Tablet: `(min-width: ${breakpoint_sm}px) and (max-width: 839.98px) and (orientation: portrait), ` +
        `(min-width: ${breakpoint_md}px) and (max-width: ${breakpoint_lg - 1}px) and (orientation: landscape)`,
    Web: `(min-width: 840px) and (orientation: portrait), ` +
        `(min-width: ${breakpoint_lg}px) and (orientation: landscape)`,
    HandsetPortrait: `(max-width: ${breakpoint_sm - 1}px) and (orientation: portrait)`,
    TabletPortrait: `(min-width: ${breakpoint_sm}px) and (max-width: 839.98px) and (orientation: portrait)`,
    WebPortrait: `(min-width: 840px) and (orientation: portrait)`,
    HandsetLandscape: `(max-width: ${breakpoint_md - 1}px) and (orientation: landscape)`,
    TabletLandscape: `(min-width: ${breakpoint_md}px) and (max-width: ${breakpoint_lg - 1}px) and (orientation: landscape)`,
    WebLandscape: `(min-width: ${breakpoint_lg}px) and (orientation: landscape)`,
};
class BreakpointDetection {
    constructor() {
        this.breakpointObserver = inject(BreakpointObserver);
        this.isLessThanXS = this._isMatched([Breakpoints.XSmall]);
        this.isLessThanSM = this._isMatched([
            Breakpoints.XSmall,
            Breakpoints.Small,
        ]);
        this.isLessThanMD = this._isMatched([
            Breakpoints.XSmall,
            Breakpoints.Small,
            Breakpoints.Medium,
        ]);
        this.isLessThanLG = this._isMatched([
            Breakpoints.XSmall,
            Breakpoints.Small,
            Breakpoints.Medium,
            Breakpoints.Large,
        ]);
        this.isMoreThanXS = !this._isMatched([Breakpoints.XSmall]);
        this.isMoreThanSM = !this._isMatched([
            Breakpoints.XSmall,
            Breakpoints.Small,
        ]);
        this.isMoreThanMD = !this._isMatched([
            Breakpoints.XSmall,
            Breakpoints.Small,
            Breakpoints.Medium,
        ]);
        this.isMoreThanLG = !this._isMatched([
            Breakpoints.XSmall,
            Breakpoints.Small,
            Breakpoints.Medium,
            Breakpoints.Large,
        ]);
        this.isLessThanXS$ = this._isMatched$([Breakpoints.XSmall]);
        this.isLessThanSM$ = this._isMatched$([
            Breakpoints.XSmall,
            Breakpoints.Small,
        ]);
        this.isLessThanMD$ = this._isMatched$([
            Breakpoints.XSmall,
            Breakpoints.Small,
            Breakpoints.Medium,
        ]);
        this.isLessThanLG$ = this._isMatched$([
            Breakpoints.XSmall,
            Breakpoints.Small,
            Breakpoints.Medium,
            Breakpoints.Large,
        ]);
        this.isMoreThanXS$ = this._isMatched$([Breakpoints.XSmall]).pipe(map((value) => !value));
        this.isMoreThanSM$ = this._isMatched$([
            Breakpoints.XSmall,
            Breakpoints.Small,
        ]).pipe(map((value) => !value));
        this.isMoreThanMD$ = this._isMatched$([
            Breakpoints.XSmall,
            Breakpoints.Small,
            Breakpoints.Medium,
        ]).pipe(map((value) => !value));
        this.isMoreThanLG$ = this._isMatched$([
            Breakpoints.XSmall,
            Breakpoints.Small,
            Breakpoints.Medium,
            Breakpoints.Large,
        ]).pipe(map((value) => !value));
        this.isMobile = this.isLessThanXS;
        this.isMobile$ = this.isLessThanXS$;
        this.isTablette = this.isLessThanMD;
        this.isTablette$ = this.isLessThanMD$;
        this.isDesktop = this.isMoreThanLG;
        this.isDesktop$ = this.isMoreThanLG$;
    }
    _isMatched$(values) {
        return this.breakpointObserver
            .observe(values)
            .pipe(map((state) => state.matches));
    }
    _isMatched(values) {
        return this.breakpointObserver.isMatched(values);
    }
}

class RequestState {
    constructor() {
        this.loading = signal(false);
        this.error = { status: -1, message: "" };
        this.alreadyAsked = false;
    }
    isLoading() {
        return this.loading();
    }
    getErrorStatus() {
        return this.error.status;
    }
    getErrorMessage() {
        return this.error.message;
    }
    clean() {
        this.alreadyAsked = false;
        this.loading.set(false);
        this.resetError();
    }
    asked() {
        this.alreadyAsked = true;
        this.loading.set(true);
        this.resetError();
    }
    completed() {
        this.loading.set(false);
    }
    resetError() {
        this.error = { status: -1, message: "" };
    }
    onError(status, message) {
        this.loading.set(false);
        this.error = { status, message };
    }
}

class SubscriberHandler {
    constructor() {
        this._subscriptionList = [];
    }
    destroy() {
        this._subscriptionList.forEach((subscription) => subscription.unsubscribe());
    }
    registerSubscription(subscription) {
        this._subscriptionList.push(subscription);
    }
}

class TaAbstractComponent {
    get isMobile() {
        return this.breakpoints.isMobile;
    }
    get isDesktop() {
        return this.breakpoints.isDesktop;
    }
    constructor() {
        this.breakpoints = new BreakpointDetection();
        this.requestState = new RequestState();
        this.icon = TaIconType;
        this._subscriberHandler = new SubscriberHandler();
        /* Routing */
        this._route = inject(ActivatedRoute);
        this._router = inject(Router);
        this._location = inject(Location);
    }
    ngOnDestroy() {
        this._subscriberHandler.destroy();
    }
    _registerSubscription(subscription) {
        this._subscriberHandler.registerSubscription(subscription);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaAbstractComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TaAbstractComponent, selector: "ng-component", ngImport: i0, template: "", isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaAbstractComponent, decorators: [{
            type: Component,
            args: [{ template: "" }]
        }], ctorParameters: () => [] });

class TaBaseComponent extends TaAbstractComponent {
    constructor() {
        super();
    }
    trackById(_, item) {
        return item.id;
    }
    trackByKey(_, item) {
        return item.key;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaBaseComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TaBaseComponent, selector: "ng-component", usesInheritance: true, ngImport: i0, template: "", isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaBaseComponent, decorators: [{
            type: Component,
            args: [{ template: "" }]
        }], ctorParameters: () => [] });

const isObject = (variable) => {
    return (typeof variable === "object" &&
        variable !== null &&
        !Array.isArray(variable));
};
const isNotEmptyObject = (variable) => {
    return Object.keys(variable).length > 0;
};
/**
 * Performs a deep merge of objects and returns new object. Does not modify
 * objects (immutable) and merges arrays via concatenation.
 * @param init object - Initial Object
 * @param {...object} objects - Objects to merge
 * @returns {object} New object with merged key/values
 */
const merge = (override = true) => (init, ...objects) => {
    // RecursivePartial<T>
    const isObject = (obj) => obj && typeof obj === "object";
    return objects.reduce((prev, obj) => {
        Object.keys(obj).forEach((key) => {
            const pVal = prev[key];
            const oVal = obj[key];
            if (Array.isArray(pVal) && Array.isArray(oVal)) {
                prev[key] = pVal.concat(...oVal);
            }
            else if (isObject(pVal) && isObject(oVal)) {
                prev[key] = merge(override)(pVal, oVal);
            }
            else {
                if (!pVal || (pVal && override)) {
                    prev[key] = oVal;
                }
            }
        });
        return prev;
    }, init);
};
const getPropertyTypes = (obj) => {
    const propertyTypes = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            propertyTypes[key] = typeof obj[key];
        }
    }
    return propertyTypes;
};
const ObjectKeys = (object) => object instanceof Object ? Object.keys(object) : [];
const ObjectKeysReOrder = (base, keysOrder) => {
    return keysOrder.reduce((final, key) => {
        if (base.hasOwnProperty(key)) {
            final[key] = base[key];
        }
        return final;
    }, {});
};
const removeObjectKeys = (obj, keysToRemove) => {
    return Object.keys(obj).reduce((acc, key) => {
        if (!keysToRemove.includes(key)) {
            acc[key] = obj[key];
        }
        return acc;
    }, {});
};
const compareObjectsByKeys = (obj1, obj2, keys) => {
    return keys.every((key) => obj1[key] === obj2[key]);
};

class TaBasePage extends TaAbstractComponent {
    constructor() {
        super();
    }
    _getPathParams(data) {
        return this._filterParams(this._route.params, getPropertyTypes(data));
    }
    _getQueryParams(data) {
        return this._filterParams(this._route.queryParams, getPropertyTypes(data));
    }
    _filterParams(routeParams, paramsAsked) {
        return routeParams.pipe(map((params) => convertToParamMap(params)), map((params) => this._getParamsTyped(paramsAsked, params)), distinctUntilChanged());
    }
    _getParamsTyped(paramsAsked, params) {
        let paramObject = {};
        for (let param in paramsAsked) {
            const value = params.get(param);
            if (value)
                paramObject[param] =
                    paramsAsked[param] === "number" ? Number(value) : value;
        }
        return paramObject;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaBasePage, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TaBasePage, selector: "ng-component", usesInheritance: true, ngImport: i0, template: "", isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaBasePage, decorators: [{
            type: Component,
            args: [{ template: "" }]
        }], ctorParameters: () => [] });

class TaBaseModal extends TaAbstractComponent {
    constructor() {
        super();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaBaseModal, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TaBaseModal, selector: "ng-component", usesInheritance: true, ngImport: i0, template: "", isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaBaseModal, decorators: [{
            type: Component,
            args: [{ template: "" }]
        }], ctorParameters: () => [] });

const isArray = (variable) => {
    return Array.isArray(variable);
};
const getUniqueValues = (inputArray, propName) => {
    return [...new Map(inputArray.map((x) => [propName(x), x])).values()];
};
const getUniqueArray = (array) => {
    return [...new Set(array)].filter(isNonNullable);
};
const isNonNullable = (value) => {
    return value !== null && value !== undefined;
};
const filterNonNullableItems = (list) => {
    return list.filter((value) => value !== null && value !== undefined);
};
const toArray = (value) => {
    return Array.isArray(value) ? value : [value];
};
const keepUniqueObjectByProperty = (list, property) => {
    const unique = getUniqueArray(list.map(property));
    return unique
        .map((u) => list.find((item) => property(item) === u))
        .filter(isNonNullable);
};
/**
 * @deprecated
 */
const removeElementsWithSameProperty = (arrayA, arrayB, property) => {
    const idsToDelete = arrayB.map(property);
    return arrayA.filter((item) => !idsToDelete.includes(property(item)));
};
/**
 * @deprecated
 */
const removeElement = (array, elementToRemove) => {
    let indexOfElement = array.indexOf(elementToRemove);
    if (indexOfElement > -1)
        array.splice(indexOfElement, 1);
    return array;
};

const isLight = (color) => {
    const hex = color.replace("#", "");
    const c_r = parseInt(hex.substring(0, 0 + 2), 16);
    const c_g = parseInt(hex.substring(2, 2 + 2), 16);
    const c_b = parseInt(hex.substring(4, 4 + 2), 16);
    const brightness = (c_r * 299 + c_g * 587 + c_b * 114) / 1000;
    return brightness > 155;
};

const compare = (a, b, isAsc) => {
    let compare = 0;
    if (!a) {
        compare = 1;
    }
    else if (!b) {
        compare = -1;
    }
    else {
        compare = a < b ? -1 : 1;
    }
    return compare * (isAsc ? 1 : -1);
};
const compareHour = (a, b, isAsc) => {
    if (a.getHours() === b.getHours()) {
        if (a.getMinutes() === b.getMinutes()) {
            if (a.getSeconds() === b.getSeconds()) {
                return 0;
            }
            return (a.getSeconds() - b.getSeconds()) * (isAsc ? 1 : -1);
        }
        return (a.getMinutes() - b.getMinutes()) * (isAsc ? 1 : -1);
    }
    return (a.getHours() - b.getHours()) * (isAsc ? 1 : -1);
};

const toLocalDateString = (utcDateString) => {
    return toLocalDate(utcDateString).toString();
};
const toLocalDate = (utcDateString) => {
    const utcDate = new Date(utcDateString);
    return new Date(utcDate.getTime() - utcDate.getTimezoneOffset() * 60 * 1000);
};
const toUtcDate = (localDateString) => {
    return new Date(localDateString.getTime() - localDateString.getTimezoneOffset() * 60 * 1000);
};
const diffInHourAndMinutes = (start, end) => {
    const diff = differenceInMinutes(new Date(end), new Date(start));
    const hours = Math.floor(diff / 60);
    const minutes = Math.round(diff - hours * 60);
    return {
        h: hours.toString().padStart(2, "0"),
        m: minutes.toString().padStart(2, "0"),
    };
};
const isStrictISODateString = (value) => {
    // Vérifie le format complet ISO 8601 (YYYY-MM-DD ou YYYY-MM-DDTHH:mm:ss.sssZ)
    const isoRegex = /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d{3})?(Z|([+-]\d{2}:\d{2})))?$/;
    if (!isoRegex.test(value))
        return false;
    const date = parseISO(value);
    return isValid(date) && value === date.toISOString().slice(0, value.length);
};

const extractEnum = (allEnum, backendOne = false) => {
    const keys = Object.keys(allEnum).filter((k) => typeof allEnum[k] === "number");
    return keys
        .map((key) => {
        return { value: allEnum[key], name: key };
    })
        .filter((item) => (backendOne ? item.value !== 0 : true));
};

const newGuid = () => {
    return (s4() +
        s4() +
        "-" +
        s4() +
        "-" +
        s4() +
        "-" +
        s4() +
        "-" +
        s4() +
        s4() +
        s4());
};
const newId = () => {
    return Math.floor(Math.random() * 1000000 + 1);
};
const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
};

const octetsToMo = (octets) => {
    return octets / (1024 * 1024);
};
const extractExtension = (name) => {
    // Séparer le nom du fichier en parties en fonction du point (.)
    var parties = name.split(".");
    // Récupérer la dernière partie (qui est l'extension)
    var extension = parties[parties.length - 1];
    return extension;
};
const getBase64FromFile = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            if (reader.result) {
                resolve(reader.result.toString());
            }
            reject(null);
        };
        reader.readAsDataURL(file);
    });
};
const getBlobImage = async (base64) => {
    const blob = await fetch(base64).then((res) => res.blob());
    return await compressImage(blob);
};
const compressImage = async (blob) => {
    return new Promise((resolve, reject) => {
        new Compressor(blob, {
            quality: 0.4,
            convertSize: 1000000, // 1MB
            success: (blob) => {
                resolve(blob);
            },
            error: (error) => {
                reject(error);
            },
        });
    });
};
const downloadFile = (url) => {
    const imageRegex = /\.(jpg|jpeg|png|gif|bmp|webp|svg)$/i;
    if (imageRegex.test(url)) {
        window.open(url, "_blank");
    }
    else {
        window.open("https://docs.google.com/a/google.com/viewer?url=" +
            url.replaceAll("&", "%26") +
            "&embedded=false", "_blank");
    }
};
const pickImages = async () => {
    const gallery = await Camera.pickImages({
        quality: 60,
    });
    const pics = [];
    for (let pic of gallery.photos) {
        const file = {
            file: await pathToFile(pic),
            localUrl: pic.webPath,
        };
        if (!file.file) {
            continue;
        }
        pics.push(file);
    }
    return pics;
};
const pathToFile = async (pic) => {
    if (!pic.webPath)
        return null;
    const response = await fetch(pic.webPath);
    const blob = await compressImage(await response.blob());
    return new File([blob], newGuid(), { type: blob.type });
};
/**
 * Calculates the proper height of an image with a custom width, preserving the original aspect ratio.
 *
 * @param originalHeight
 * @param originalWidth
 * @param newWidth
 */
const determineNewHeight = (originalHeight, originalWidth, newWidth) => {
    return (originalHeight / originalWidth) * newWidth;
};
/**
 * Calculates the proper width of an image with a custom height, preserving the original aspect ratio.
 *
 * @param originalWidth
 * @param originalHeight
 * @param newWidth
 */
const determineNewWidth = (originalWidth, originalHeight, newHeight) => {
    return (originalWidth / originalHeight) * newHeight;
};
/**
 * Calculates the proper height of an image with a custom width, preserving the original aspect ratio.
 *
 * @param originalHeight
 * @param originalWidth
 * @param newWidth
 */
const determineNewSize = (originalHeight, originalWidth, newWidth, newHeight) => {
    if (newHeight < originalHeight || newWidth < originalWidth) {
        var ratio = Math.min(newWidth / originalWidth, newHeight / originalHeight);
        return { width: originalWidth * ratio, height: originalHeight * ratio };
    }
    return { width: originalWidth, height: originalHeight };
};

const searchOptions = {
    replacement: " ",
    lower: true,
    trim: true,
};
const search = (array, term) => {
    const searchTerm = slugify(term, searchOptions);
    for (let item of array) {
        const slugItem = slugify(item, searchOptions);
        if (slugItem.includes(searchTerm)) {
            return true;
        }
    }
    return false;
};

const sendMail = (mail) => {
    window.open(`mailto:${mail}`);
};
const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
};

const openMap = (query) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`);
};

const createRange = (number) => {
    return new Array(number).fill(0).map((n, index) => index + 1);
};
const roundToDecimal = (number, precision) => {
    return Math.round(number * Math.pow(10, precision)) / Math.pow(10, precision);
};
const percentage = (partialValue, totalValue) => {
    return (100 * partialValue) / totalValue;
};

const getCivilityIcon = (civility) => {
    if (!civility) {
        return null;
    }
    switch (civility) {
        case Civility.Dear:
            return TaIconType.Profile;
        case Civility.Madame:
            return TaIconType.Women;
        case Civility.Sir:
            return TaIconType.Men;
        default:
            return null;
    }
};
const getCivility = (person) => {
    return person.naming && person.naming.hasOwnProperty("civility")
        ? person.naming.civility
        : null;
};
const fullName = (naming) => {
    return `${naming?.firstname} ${naming?.lastname}`;
};

const call = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`);
};

const sort = (array, options) => {
    if (!options) {
        return array;
    }
    return array.sort((a, b) => {
        return compare(a[options.active], b[options.active], options.direction === "asc");
    });
};

const getFileExtension = (filePath) => {
    const extension = getFullFileNameFromUrl(filePath)?.split(".").pop()?.toLowerCase() || null;
    switch (extension) {
        case "pdf":
            return EFileExtension.PDF;
        case "docx":
            return EFileExtension.Word;
        case "xls":
        case "xlsx":
            return EFileExtension.Excel;
        case "jpg":
        case "jpeg":
        case "png":
            return EFileExtension.Image;
    }
    return EFileExtension.Unknown;
};
const getFullFileNameFromUrl = (url) => {
    return url.split("/").pop() || null;
};
const trigram = (name) => {
    if (!name) {
        return "";
    }
    if (name.length < 4) {
        return name;
    }
    return (name[0] + name[2] + name[3]).toUpperCase();
};
const capitalizeFirstLetter = (value) => {
    if (value.length === 0)
        return value;
    return value.charAt(0).toUpperCase() + value.slice(1);
};
const convertToNumber = (values) => values?.map((value) => Number(value)) || [];
const isURL = (str) => {
    // Expression régulière pour vérifier une URL
    const pattern = /^https?:\/\//; // Fragment d'URL
    return !!pattern.test(str);
};

const copyTextToClipboard = async (text, success, error) => {
    try {
        await navigator.clipboard.writeText(text);
        success("ui.clipboard.success");
    }
    catch (err) {
        error("ui.clipboard.error");
    }
};

const openExternalUrl = (url) => {
    window.open(url);
};

function getModifiedValues(current, initial) {
    return Object.keys(current).reduce((result, key) => {
        const typedKey = key;
        if (current[typedKey] !== initial[typedKey]) {
            result[typedKey] = current[typedKey];
        }
        return result;
    }, {});
}

/**
 * Must be used after ngAfterViewInit
 */
class HorizontalScroll {
    constructor(element) {
        this._isDown = false;
        this.mouseDown = (event) => {
            this._isDown = true;
            this._startX = event.pageX - this._elementRef.offsetLeft;
            this._scrollLeft = this._elementRef.scrollLeft;
        };
        this.mouseLeft = () => {
            this._isDown = false;
        };
        this.mouseMove = (event) => {
            if (!this._isDown)
                return;
            event.preventDefault();
            const horizontalOffset = event.pageX - this._elementRef.offsetLeft;
            const walk = horizontalOffset - this._startX;
            this._elementRef.scrollLeft = this._scrollLeft - walk;
        };
        this._elementRef = element;
        this._elementRef.addEventListener("mousedown", this.mouseDown);
        this._elementRef.addEventListener("mousemove", this.mouseMove);
        this._elementRef.addEventListener("mouseleave", this.mouseLeft);
        this._elementRef.addEventListener("mouseup", this.mouseLeft);
    }
}

class ReadOnlyContextService {
    constructor() {
        this._readonly$ = new BehaviorSubject(false);
        this.isReadOnly$ = this._readonly$.asObservable();
    }
    setReadonly(value) {
        this._readonly$.next(value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ReadOnlyContextService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ReadOnlyContextService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ReadOnlyContextService, decorators: [{
            type: Injectable
        }] });

const LOCAL = "config_local";
const APPLICATION_CONFIG = new InjectionToken("config_application");
const DEFAULT_USER_LANGUAGE = new InjectionToken("default_user_language");

/*
 * Public API Surface of utils
 */

/**
 * Generated bundle index. Do not edit.
 */

export { APPLICATION_CONFIG, Civility, Culture, DEFAULT_USER_LANGUAGE, EFileExtension, FileSizePipe, HorizontalScroll, JoinPipe, LOCAL, LetDirective, ObjectKeys, ObjectKeysReOrder, OnRenderDirective, PluralTranslatePipe, ReadOnlyContextService, RequestState, SafePipe, StopPropagationDirective, SubscriberHandler, TaAbstractComponent, TaBaseComponent, TaBaseModal, TaBasePage, TaDirectivePipeModule, TemporaryFile, TypedTemplateDirective, call, capitalizeFirstLetter, compare, compareHour, compareObjectsByKeys, compressImage, convertToNumber, copyTextToClipboard, createRange, determineNewHeight, determineNewSize, determineNewWidth, diffInHourAndMinutes, downloadFile, extractEnum, extractExtension, filterNonNullableItems, fullName, getBase64FromFile, getBlobImage, getCivility, getCivilityIcon, getFileExtension, getFullFileNameFromUrl, getModifiedValues, getPropertyTypes, getUniqueArray, getUniqueValues, isArray, isLight, isNonNullable, isNotEmptyObject, isObject, isStrictISODateString, isURL, isValidEmail, keepUniqueObjectByProperty, merge, newGuid, newId, octetsToMo, openExternalUrl, openMap, pathToFile, percentage, pickImages, removeElement, removeElementsWithSameProperty, removeObjectKeys, roundToDecimal, s4, search, sendMail, sort, toArray, toLocalDate, toLocalDateString, toUtcDate, trigram };
//# sourceMappingURL=ta-utils.mjs.map
