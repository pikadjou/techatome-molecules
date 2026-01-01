import { Directive, HostListener, input } from "@angular/core";

@Directive({
  selector: "[appStopPropagation]",
  standalone: true,
})
export class StopPropagationDirective {
  stopPropagationActivation = input<boolean>(true);

  @HostListener("click", ["$event"])
  public onClick(event: any): boolean {
    if (event && this.stopPropagationActivation()) {
      event.stopPropagation();
      event.preventDefault();
    }

    return false;
  }
}
