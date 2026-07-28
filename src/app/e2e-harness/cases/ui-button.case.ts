import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ButtonComponent } from "@ta/ui";
import { TaTestIdDirective } from "@ta/utils";

@Component({
  standalone: true,
  selector: "app-case-ui-button",
  imports: [ButtonComponent, TaTestIdDirective],
  template: `<ta-button taTestId="ta-button">Harness Button</ta-button>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiButtonCase {}
