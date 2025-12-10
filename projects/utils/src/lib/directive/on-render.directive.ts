import {
  Directive,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from "@angular/core";

@Directive({
  selector: "[TaOnRender]",
})
export class OnRenderDirective {
  @Input() onRender!: boolean;

  @Output() rendered = new EventEmitter();

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes["onRender"].previousValue !== changes["onRender"].currentValue
    ) {
      this.rendered.emit();
    }
  }
}
