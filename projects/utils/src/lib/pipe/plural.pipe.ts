import { LOCALE_ID, Pipe, PipeTransform, inject } from "@angular/core";

@Pipe({
  name: "pluralTranslate",
  pure: false,
  standalone: true,
})
export class PluralTranslatePipe implements PipeTransform {
  /**
   * Le pluriel suit la langue affichée : zéro est un singulier en français (« 0 résultat »),
   * un pluriel en anglais, néerlandais et allemand (« 0 results »).
   */
  private readonly _rules = this._rulesOf(inject(LOCALE_ID));

  transform(key: string, number: number): string {
    return `${key}.${this._rules.select(Number(number)) === "one" ? "one" : "plural"}`;
  }

  private _rulesOf(locale: string): Intl.PluralRules {
    try {
      return new Intl.PluralRules(locale);
    } catch {
      return new Intl.PluralRules("en");
    }
  }
}
