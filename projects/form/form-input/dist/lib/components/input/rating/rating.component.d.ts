import { OnInit } from '@angular/core';
import { InputRating } from '@ta/form-model';
import { TaAbstractInputComponent } from '../../abstract.component';
import * as i0 from "@angular/core";
export declare class RatingComponent extends TaAbstractInputComponent<InputRating, number> implements OnInit {
    constructor();
    ngOnInit(): void;
    onRatingChange(value: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RatingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RatingComponent, "ta-input-rating", never, {}, {}, never, never, true, never>;
}
