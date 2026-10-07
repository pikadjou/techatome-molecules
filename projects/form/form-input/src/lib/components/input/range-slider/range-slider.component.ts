import { Component, OnInit, computed, inject, signal } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";

import { merge } from "rxjs";

import { InputRangeSlider, RangeSliderValue } from "@ta/form-model";
import { TaTranslationService, TranslatePipe } from "@ta/translation";
import { percentage } from "@ta/utils";

import { TaAbstractInputComponent } from "../../abstract.component";
import { InputLayoutComponent } from "../../input-layout/input-layout.component";

@Component({
  selector: "ta-input-range-slider",
  templateUrl: "./range-slider.component.html",
  styleUrls: ["./range-slider.component.scss"],
  standalone: true,
  imports: [InputLayoutComponent, TranslatePipe],
})
export class RangeSliderComponent
  extends TaAbstractInputComponent<InputRangeSlider, RangeSliderValue>
  implements OnInit
{
  public low = signal(0);
  public high = signal(0);
  public disabled = signal(false);

  public readonly lowPercent = computed(() => this._percent(this.low()));
  public readonly highPercent = computed(() => this._percent(this.high()));

  // En butée droite, le curseur bas doit passer devant pour rester déplaçable.
  public readonly lowOnTop = computed(() => this.low() >= this.input.max);

  // `format` peut traduire : les libellés se recalculent quand les traductions changent.
  private readonly _translationService = inject(TaTranslationService);
  private readonly _translations = toSignal(
    merge(this._translationService.onLangChange$, this._translationService.onTranslationChange$),
    { initialValue: null }
  );

  public readonly lowLabel = computed(() => {
    this._translations();
    return this.input.format(this.low(), this.low() <= this.input.min);
  });
  public readonly highLabel = computed(() => {
    this._translations();
    return this.input.format(this.high(), this.high() >= this.input.max);
  });

  override ngOnInit() {
    super.ngOnInit();
    const control = this.input.formControl;
    this._read(control?.value ?? this.input.value);
    this.disabled.set(this.input.disabled || control?.disabled === true);
    if (control) {
      // Deux curseurs ne peuvent pas partager un `[formControl]`.
      this._registerSubscription(control.valueChanges.subscribe((value) => this._read(value)));
      this._registerSubscription(
        control.statusChanges.subscribe(() => this.disabled.set(control.disabled))
      );
    }
  }

  public onLow(event: Event) {
    const value = Math.min(this._valueOf(event), this.high());
    (event.target as HTMLInputElement).value = String(value);
    this._write({ max: this.high(), min: value });
  }

  public onHigh(event: Event) {
    const value = Math.max(this._valueOf(event), this.low());
    (event.target as HTMLInputElement).value = String(value);
    this._write({ max: value, min: this.low() });
  }

  public onBlur() {
    this.input.formControl?.markAsTouched();
  }

  private _write(value: RangeSliderValue) {
    this.low.set(value.min);
    this.high.set(value.max);
    const control = this.input.formControl;
    if (control) {
      control.setValue(value);
      control.markAsDirty();
      return;
    }
    this.onChange(value);
  }

  private _read(value: RangeSliderValue | null | undefined) {
    this.low.set(value?.min ?? this.input.min);
    this.high.set(value?.max ?? this.input.max);
  }

  private _valueOf(event: Event) {
    return Number((event.target as HTMLInputElement).value);
  }

  private _percent(value: number) {
    const span = this.input.max - this.input.min;
    return span > 0 ? percentage(value - this.input.min, span) : 0;
  }
}
