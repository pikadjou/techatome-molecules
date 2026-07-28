import { ChangeDetectionStrategy, Component } from "@angular/core";

import { TitleComponent } from "@ta/ui";
import { TaTestIdDirective } from "@ta/utils";

@Component({
  standalone: true,
  selector: "app-case-ui-title",
  imports: [TitleComponent, TaTestIdDirective],
  template: `<ta-title taTestId="ta-title" [level]="2">Harness Title</ta-title>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTitleCase {}
