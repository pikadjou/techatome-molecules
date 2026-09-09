import { ChangeDetectionStrategy, Component } from "@angular/core";

import { BadgeComponent } from "@ta/ui";
import { TaTestIdDirective } from "@ta/utils";

@Component({
  standalone: true,
  selector: "app-case-ui-badge",
  imports: [BadgeComponent, TaTestIdDirective],
  template: `<ta-badge taTestId="ta-badge" value="Harness" type="primary"></ta-badge>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiBadgeCase {}
