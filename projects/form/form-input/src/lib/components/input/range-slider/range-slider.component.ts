import { Component, computed, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { InputRangeSlider, RangeSliderValue } from "@ta/form-model";
import { TranslatePipe } from "@ta/translation";
import { percentage } from "@ta/utils";

import { TaAbstractInputComponent } from "../../abstract.component";
import { InputLayoutComponent } from "../../input-layout/input-layout.component";

@Component({
  selector: "ta-input-range-slider",
  templateUrl: "./range-slider.component.html",
  styleUrls: ["./range-slider.component.scss"],
  standalone: true,
  imports: [FormsModule, InputLayoutComponent, TranslatePipe],
})
export class RangeSliderComponent extends TaAbstractInputComponent<InputRangeSlider, RangeSliderValue> {
  public readonly low = computed(() => this.input.value?.min ?? this.input.min);
  public readonly high = computed(() => this.input.value?.max ?? this.input.max);

  public readonly lowPercent = computed(() => this._percent(this.low()));
  public readonly highPercent = computed(() => this._percent(this.high()));

  public readonly lowLabel = computed(() => this.input.format(this.low(), this.low() <= this.input.min));
  public readonly highLabel = computed(() => this.input.format(this.high(), this.high() >= this.input.max));

  // Position propre à chaque curseur : ils peuvent se croiser, la valeur reste triée.
  private readonly _first = signal<number | null>(null);
  private readonly _second = signal<number | null>(null);

  public readonly first = computed(() => (this._isInSync() ? this._first()! : this.low()));
  public readonly second = computed(() => (this._isInSync() ? this._second()! : this.high()));

  public onFirst(value: number) {
    this._move(value, this.second());
  }

  public onSecond(value: number) {
    this._move(this.first(), value);
  }

  private _move(first: number, second: number) {
    this._first.set(first);
    this._second.set(second);
    this.input.value = { max: Math.max(first, second), min: Math.min(first, second) };
  }

  private _isInSync() {
    const first = this._first();
    const second = this._second();
    return (
      first !== null &&
      second !== null &&
      Math.min(first, second) === this.low() &&
      Math.max(first, second) === this.high()
    );
  }

  private _percent(value: number) {
    const span = this.input.max - this.input.min;
    return span > 0 ? percentage(value - this.input.min, span) : 0;
  }
}
