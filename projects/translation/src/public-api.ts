/*
 * Public API Surface of translation
 */
export { TranslateDirective, TranslatePipe } from "@ngx-translate/core";

export * from "./lib/abstract/abstractTranslationModule";
export * from "./lib/services/translation.service";
export * from "./lib/services/translation-registry.service";

export * from "./lib/services/lazy-translation.service";
export * from "./lib/services/translation-source.config";

export * from "./lib/provider";
