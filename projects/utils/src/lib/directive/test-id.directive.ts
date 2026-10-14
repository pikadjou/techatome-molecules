import { Directive, input } from "@angular/core";

@Directive({
  selector: "[taTestId]",
  standalone: true,
  host: { "[attr.data-testid]": "attr" },
})
export class TaTestIdDirective {
  readonly taTestId = input.required<string>();

  get attr(): string {
    return this.taTestId();
  }
}
