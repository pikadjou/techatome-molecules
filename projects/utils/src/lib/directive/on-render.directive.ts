import {
  Directive,
  EventEmitter,
  Output,
  SimpleChanges,
  input,
} from "@angular/core";

@Directive({
  selector: "[TaOnRender]",
})
export class OnRenderDirective {
  onRender = input.required<boolean>();

  @Output() rendered = new EventEmitter();

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes["onRender"].previousValue !== changes["onRender"].currentValue
    ) {
      this.rendered.emit();
    }
  }
}
