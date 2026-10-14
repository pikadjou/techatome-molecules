import {
  Directive,
  SimpleChanges,
  input,
  output,
} from "@angular/core";

@Directive({
  selector: "[TaOnRender]",
  standalone: true,
})
export class OnRenderDirective {
  onRender = input.required<boolean>();

  rendered = output<void>();

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes["onRender"].previousValue !== changes["onRender"].currentValue
    ) {
      this.rendered.emit();
    }
  }
}
