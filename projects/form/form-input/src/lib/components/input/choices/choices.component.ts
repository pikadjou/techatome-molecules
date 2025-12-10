import { AsyncPipe, NgTemplateOutlet } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { TranslateModule } from "@ngx-translate/core";
import {
  BehaviorSubject,
  Observable,
  combineLatest,
  concatMap,
  debounceTime,
  filter,
  map,
  of,
  startWith,
  take,
  tap,
} from "rxjs";

import {
  InputCheckBox,
  InputChoices,
  InputChoicesOption,
  InputTextBox,
} from "@ta/form-model";
import { FontIconComponent } from "@ta/icons";
import {
  ButtonComponent,
  EmptyComponent,
  LabelComponent,
  LayoutSideComponent,
  LayoutSideContentComponent,
  LayoutSideCtaComponent,
  LinkComponent,
  LoaderComponent,
  TextComponent,
} from "@ta/ui";
import { TaOverlayPanelComponent } from "@ta/ui";
import { StopPropagationDirective, isNonNullable } from "@ta/utils";
import { getUniqueArray, toArray } from "@ta/utils";

import { TaAbstractInputComponent } from "../../abstract.component";
import { InputLayoutComponent } from "../../input-layout/input-layout.component";
import { CheckboxComponent } from "../checkbox/checkbox.component";
import { SearchFieldComponent } from "../search-field/search-field.component";

@Component({
  selector: "ta-input-choices",
  templateUrl: "./choices.component.html",
  styleUrls: ["./choices.component.scss"],
  standalone: true,
  imports: [
    AsyncPipe,
    FontIconComponent,
    StopPropagationDirective,
    TranslateModule,
    ButtonComponent,
    LinkComponent,
    TaOverlayPanelComponent,
    EmptyComponent,
    LoaderComponent,
    LayoutSideCtaComponent,
    LayoutSideContentComponent,
    LayoutSideComponent,
    SearchFieldComponent,
    LabelComponent,
    TextComponent,
    CheckboxComponent,
    ReactiveFormsModule,
    InputLayoutComponent,
    NgTemplateOutlet,
  ],
})
export class InputChoicesComponent extends TaAbstractInputComponent<InputChoices> {
  @ViewChild(TaOverlayPanelComponent) overlayPanelRef!: TaOverlayPanelComponent;

  public inputSearch = new InputTextBox();
  public inputNullable = new InputCheckBox({
    label: "form.input.choices.nullable.label",
  });

  public filteredOptions$: Observable<
    {
      id: string;
      name: string;
      disabled?: boolean;
      data: any;
    }[]
  > | null = null;

  public bOptions$ = new BehaviorSubject<InputChoicesOption[]>([]);

  readonly searchFocus = new BehaviorSubject<void>(undefined);

  constructor() {
    super();
  }

  override ngOnInit() {
    super.ngOnInit();
    if (!this.input.advancedSearch$) {
      this.requestState.asked();
      this._registerSubscription(
        this.input.options$.subscribe({
          next: (data) => {
            this.bOptions$.next(data);
            this.requestState.completed();
          },
        })
      );

      this.filteredOptions$ = combineLatest([
        this.inputSearch.changeValue$.pipe(
          startWith(""),
          filter(isNonNullable)
        ),
        this.bOptions$,
      ]).pipe(
        map((data) => ({
          search: data[0],
          list: data[1],
        })),
        map(({ search, list }) =>
          list.filter((item) =>
            item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          )
        )
      );
    } else {
      this.filteredOptions$ = this.bOptions$;

      this.refresh();
      this._registerSubscription(
        this.inputSearch.changeValue$
          .pipe(
            debounceTime(500),
            filter(isNonNullable),
            tap(() => this.requestState.asked()),
            concatMap((search) =>
              this.input.advancedSearch$
                ? this.input.advancedSearch$(search)
                : of()
            )
          )
          .subscribe({
            next: (data) => {
              const prevData = this.bOptions$.getValue();
              this.bOptions$.next(
                getUniqueArray([
                  ...prevData.filter((item) =>
                    this.input.value?.includes(item.id)
                  ),
                  ...data,
                ])
              );
              this.requestState.completed();
            },
          })
      );
    }
  }

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();

    this.searchFocus.next();
  }

  public getName$(id: string) {
    return this.bOptions$.pipe(
      map((values) => values.find((value) => value.id === id)?.name ?? null),
      map((name) => name ?? id)
    );
  }

  public refresh = () => {
    (this.input.advancedSearch$ ? this.input.advancedSearch$() : of())
      .pipe(take(1))
      .subscribe({
        next: (data) => {
          this.bOptions$.next(data);
        },
      });
  };

  public selectNullable(select: boolean) {
    if (!select) {
      this.input.value = [];
      return;
    }
    this.input.value = [""];
  }
  public select = (option: { id: string }) => {
    const values = this.input.value ?? [];

    if (values.includes(option.id)) {
      this.input.value = values.filter((val: string) => val !== option.id);
      return;
    }
    if (!this.input.multiple) {
      this.input.value = [option.id];
      this.close();
      return;
    }
    this.input.value = [...values, option.id];
  };
  public isSelected = (option: { id: string }) => {
    const values = toArray(this.input.value);

    return values.includes(option.id);
  };

  public clear() {
    this.input.formControl?.setValue([]);
    this.close();
  }
  public close() {
    this.focusedElement.nativeElement.click();
    this.overlayPanelRef.close();
  }
}
