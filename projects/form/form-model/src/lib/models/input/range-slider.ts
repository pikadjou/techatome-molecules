import { IInputBase, InputBase } from "./base";

/** Valeur d'une jauge à deux curseurs : la borne basse et la borne haute, toujours `min ≤ max`. */
export interface RangeSliderValue {
  min: number;
  max: number;
}

export interface IInputRangeSlider extends IInputBase<RangeSliderValue> {
  /** Début de la piste. */
  min?: number;
  /** Fin de la piste. */
  max?: number;
  step?: number;
  /**
   * Mise en forme d'une valeur affichée au-dessus de la piste (« 800 € », « 90 m² »). `end` vaut
   * `true` quand le curseur est en butée : à l'application de dire « et + » si la butée ne borne rien.
   */
  format?: (value: number, end: boolean) => string;
}

/** Jauge à deux curseurs : un intervalle saisi sur une seule piste, sans croisement possible. */
export class InputRangeSlider extends InputBase<RangeSliderValue> {
  public min: number;
  public max: number;
  public step: number;
  public format: (value: number, end: boolean) => string;

  override controlType = "rangeSlider";

  constructor(options: IInputRangeSlider = {}) {
    super(options);

    this.min = options.min ?? 0;
    this.max = options.max ?? 100;
    this.step = options.step ?? 1;
    // Pas de valeur par défaut ici : une valeur posée bloquerait `value$`. Sans valeur, le composant
    // place les curseurs aux extrémités de la piste.
    this.format = options.format ?? ((value) => String(value));
  }
}
