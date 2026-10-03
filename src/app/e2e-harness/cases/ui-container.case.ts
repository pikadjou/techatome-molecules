import { ChangeDetectionStrategy, Component } from "@angular/core";

import {
  ContainerValidationComponent,
  EmptyComponent,
  ErrorComponent,
  LoaderComponent,
  SwiperComponent,
  SwiperLightComponent,
} from "@ta/ui";
import { TaTestIdDirective } from "@ta/utils";

/**
 * Galerie « container » @ta/ui — états et conteneurs.
 * Route: /e2e-harness/ui-container
 */
@Component({
  standalone: true,
  selector: "app-case-ui-container",
  imports: [
    ContainerValidationComponent,
    EmptyComponent,
    ErrorComponent,
    LoaderComponent,
    SwiperComponent,
    SwiperLightComponent,
    TaTestIdDirective,
  ],
  template: `
    <ta-loader taTestId="ta-loader" [isLoading]="false">Contenu</ta-loader>
    <ta-empty taTestId="ta-empty"></ta-empty>
    <ta-error taTestId="ta-error"></ta-error>
    <ta-container-validation taTestId="ta-container-validation">Validation</ta-container-validation>
    <ta-swiper-light taTestId="ta-swiper-light" [items]="items" [template]="itemTpl"></ta-swiper-light>
    <ng-template #itemTpl let-item>{{ item }}</ng-template>
    <ta-swiper taTestId="ta-swiper">
      <div>Slide 1</div>
      <div>Slide 2</div>
      <div>Slide 3</div>
    </ta-swiper>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiContainerCase {
  readonly items = ["A", "B", "C"];
}
