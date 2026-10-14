import { Directive, input } from "@angular/core";

@Directive({
  selector: "[appStopPropagation]",
  standalone: true,
  host: { "(click)": "onClick($event)" },
})
export class StopPropagationDirective {
  stopPropagationActivation = input<boolean>(true);

  public onClick(event: any): boolean {
    if (event && this.stopPropagationActivation()) {
      event.stopPropagation();
      event.preventDefault();
    }

    return false;
  }
}
