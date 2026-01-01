import { AsyncPipe } from "@angular/common";
import {
  Component,
  EventEmitter,
  input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";

import deepEqual from "fast-deep-equal";
import { Observable, distinctUntilChanged } from "rxjs";

import { IInputsError, InputBase } from "@ta/form-model";
import {
  ENotificationCode,
  NotificationInlineComponent,
} from "@ta/notification";
import { TranslatePipe } from "@ta/translation";
import { ButtonComponent, LoaderComponent } from "@ta/ui";
import { TaBaseComponent } from "@ta/utils";

import { InputsComponent } from "./inputs/inputs.component";

@Component({
  selector: "ta-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
  standalone: true,
  imports: [
    AsyncPipe,
    ReactiveFormsModule,
    NotificationInlineComponent,
    LoaderComponent,
    ButtonComponent,
    TranslatePipe,
    InputsComponent,
  ],
})
export class FormComponent
  extends TaBaseComponent
  implements OnInit, OnChanges, OnDestroy
{
  inputs = input.required<InputBase<any>[]>();

  askValidation$ = input<Observable<null>>();

  askOnDestroy = input<boolean>();

  loader = input<boolean>(false);
  error = input<IInputsError>({ status: ENotificationCode.none, message: "" });

  border = input<boolean>(true);

  canDisplayButton = input<boolean>(true);
  buttonTitle = input<string>("form.save");
  onLive = input<boolean>(false);

  @Output()
  valid: EventEmitter<{}> = new EventEmitter();

  @Output()
  isFormValid = new EventEmitter<boolean>();

  public form!: FormGroup;

  constructor() {
    super();
  }

  ngOnInit() {
    this.form = this.toFormGroup(this.inputs());

    this._registerSubscription(
      this.form.statusChanges.subscribe(() =>
        this.isFormValid.emit(this.isValid())
      )
    );

    if (this.onLive()) {
      this._registerSubscription(
        this.form.valueChanges
          .pipe(distinctUntilChanged((prev, curr) => deepEqual(prev, curr)))
          .subscribe(() => this.onSubmit())
      );
    }

    const askValidation = this.askValidation$();
    if (askValidation) {
      this._registerSubscription(
        askValidation.subscribe((_) => this.onSubmit())
      );
    }
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges["inputs"] && !simpleChanges["inputs"].firstChange) {
      this.form = this.toFormGroup(this.inputs());
    }
  }

  override ngOnDestroy() {
    super.ngOnDestroy();
    this.inputs().forEach((inputItem) => {
      inputItem.destroy();
    });
    if (this.askOnDestroy()) {
      this.onSubmit();
    }
  }

  public onSubmit() {
    if (!this.isValid()) {
      return;
    }
    this.valid.emit(this.form.value);
  }

  public isValid(): boolean {
    return this.form.valid && !this.loader();
  }

  public toFormGroup(inputs: InputBase<any>[]): FormGroup {
    const group = new FormGroup({});
    if (inputs === null || inputs.length === 0) {
      return group;
    }
    inputs.forEach((input) => {
      input.createFormControl(group);
    });
    return group;
  }
}
