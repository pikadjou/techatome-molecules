import { BehaviorSubject, Observable } from "rxjs";
import { InputCheckBox, InputChoices, InputChoicesOption, InputTextBox } from "@ta/form-model";
import { TaOverlayPanelComponent } from "@ta/ui";
import { TaAbstractInputComponent } from "../../abstract.component";
import * as i0 from "@angular/core";
export declare class InputChoicesComponent extends TaAbstractInputComponent<InputChoices> {
    overlayPanelRef: TaOverlayPanelComponent;
    inputSearch: InputTextBox<string>;
    inputNullable: InputCheckBox;
    filteredOptions$: Observable<{
        id: string;
        name: string;
        disabled?: boolean;
        data: any;
    }[]> | null;
    bOptions$: BehaviorSubject<InputChoicesOption[]>;
    readonly searchFocus: BehaviorSubject<void>;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    getName$(id: string): Observable<string>;
    refresh: () => void;
    selectNullable(select: boolean): void;
    select: (option: {
        id: string;
    }) => void;
    isSelected: (option: {
        id: string;
    }) => boolean;
    clear(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputChoicesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputChoicesComponent, "ta-input-choices", never, {}, {}, never, never, true, never>;
}
