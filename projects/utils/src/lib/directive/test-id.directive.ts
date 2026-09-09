import { Directive, HostBinding, input } from "@angular/core";

@Directive({
  selector: "[taTestId]",
  standalone: true,
})
export class TaTestIdDirective {
  readonly taTestId = input.required<string>();

  @HostBinding("attr.data-testid")
  get attr(): string {
    return this.taTestId();
  }
}
