import { Directive, TemplateRef, input } from "@angular/core";

@Directive({ selector: "ng-template[typedTemplate]", standalone: true })
export class TypedTemplateDirective<TypeToken> {
  typedTemplate = input.required<TypeToken>();

  // @ts-ignore
  constructor(private contentTemplate: TemplateRef<TypeToken>) {}

  static ngTemplateContextGuard<TypeToken>(
    dir: TypedTemplateDirective<TypeToken>,
    ctx: unknown
  ): ctx is TypeToken {
    return true;
  }
}
