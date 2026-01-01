import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  signal,
} from "@angular/core";

import { NgIf, NgClass } from "@angular/common";
import { StopPropagationDirective } from "@ta/utils";
import { InputBase } from "@ta/form-model";
import { LoaderComponent } from "@ta/ui";
import { TaBaseComponent } from "@ta/utils";
import { BehaviorSubject, Observable } from "rxjs";
import { InputsComponent } from "../inputs/inputs.component";

export type Layout = "row" | "column";

@Component({
  selector: "ta-edit-field",
  templateUrl: "./edit-field.component.html",
  styleUrls: ["./edit-field.component.scss"],
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    StopPropagationDirective,
    LoaderComponent,
    InputsComponent,
  ],
})
export class EditFieldComponent
  extends TaBaseComponent
  implements OnInit, OnChanges
{
  getInput = input.required<() => InputBase<any>>();

  changeEditMode$ = input<Observable<boolean> | null>(null);

  isLoading = input<boolean>(false);

  withBorder = input<boolean>(true);

  disabled = input<boolean>(false);

  @Output()
  newValue: EventEmitter<unknown> = new EventEmitter();

  readonly onFocusBehavior = new BehaviorSubject<void>(undefined);
  readonly renderInput = signal<InputBase<null> | null>(null);
  public editMode = signal(false);

  @HostListener("document:click", ["$event.target"])
  onDocumentClick(targetElement: HTMLElement): void {
    if (!this.editMode()) {
      return;
    }
    if (
      targetElement.tagName === "INPUT" &&
      (targetElement as HTMLInputElement).type === "file"
    ) {
      return;
    }
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.validation();
    }
  }

  constructor(private elementRef: ElementRef) {
    super();
  }
  ngOnInit() {
    const changeEditMode = this.changeEditMode$();
    if (changeEditMode) {
      this._registerSubscription(
        changeEditMode.subscribe((value) => this.editMode.set(value))
      );
    }
    this._setInput();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes["isLoading"] &&
      changes["isLoading"].currentValue !==
        changes["isLoading"].previousValue &&
      changes["isLoading"].currentValue === false
    ) {
      this._setInput();
      this.editMode.set(false);
    }
  }

  public toggleEditMode() {
    this.editMode.set(!this.editMode());

    if (this.editMode()) {
      this.onFocusBehavior.next();
    }
  }

  public validation() {
    const input = this.renderInput();
    if (!input) {
      return;
    }
    this.newValue.emit(input.value);

    this.toggleEditMode();
  }

  private _setInput() {
    this.renderInput.set(this.getInput()());
  }
}
