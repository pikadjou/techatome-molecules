import { ChangeDetectionStrategy, Component } from "@angular/core";

import { TextComponent } from "@ta/ui";
import { TaTestIdDirective } from "@ta/utils";

@Component({
  standalone: true,
  selector: "app-case-ui-text",
  imports: [TextComponent, TaTestIdDirective],
  template: `<ta-text taTestId="ta-text" size="md">Harness Text</ta-text>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTextCase {}
