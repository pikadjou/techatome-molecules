import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

import { Observable, delay } from "rxjs";

import { InputBase } from "@ta/form-model";
import { TaBaseComponent } from "@ta/utils";

@Component({ template: "" })
export abstract class TaAbstractInputComponent<
    C extends InputBase<any>,
    V = unknown
  >
  extends TaBaseComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  inputModel = input.required<C>({ alias: 'input' });

  matcher = input<ErrorStateMatcher>(new ErrorStateMatcher());

  standaloneMode = input<boolean>(false, { alias: 'standalone' });

  onFocusObs = input<Observable<void>>({ alias: 'onFocus' });

  @Output()
  valueChanged = new EventEmitter<V>();

  // Getter for backward compatibility with subclasses
  get input(): C {
    return this.inputModel();
  }

  // Getter for backward compatibility
  get standalone(): boolean {
    return this.standaloneMode();
  }

  // Getter for backward compatibility
  get onFocus(): Observable<void> | undefined {
    return this.onFocusObs();
  }

  @ViewChild("focusedElement", { read: ElementRef })
  focusedElement!: ElementRef;

  readonly validators = Validators;

  constructor() {
    super();
  }

  ngOnInit() {
    if (this.standalone) {
      this.input.createFormControl();
    }
    this._registerSubscription(
      this.input.changeValue$.subscribe({
        next: (value) => this.onChange(value),
      })
    );
  }

  ngAfterViewInit() {
    if (this.onFocus) {
      this._registerSubscription(
        this.onFocus.pipe(delay(1)).subscribe({
          next: () => {
            if (this.focusedElement) {
              this.focusedElement.nativeElement.click();
              this.focusedElement.nativeElement.focus();
            }
          },
        })
      );
    }
  }

  override ngOnDestroy() {
    super.ngOnDestroy();
    if (this.standalone) {
      this.input.destroy();
    }
  }

  public onChange(value: V) {
    this.valueChanged.emit(value);
  }
}
