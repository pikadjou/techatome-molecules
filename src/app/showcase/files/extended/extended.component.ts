import { ChangeDetectionStrategy, Component } from "@angular/core";

import { TextComponent, TitleComponent } from "@ta/ui";

@Component({
  selector: "app-files-extended",
  template: `
    <div class="sections">
      <section>
        <ta-title [level]="2">Coming Soon</ta-title>
        <ta-text size="sm">FilesDisplay, FilesUpload — Phase 5</ta-text>
      </section>
    </div>
  `,
  styles: [`.sections { padding: 32px; display: flex; flex-direction: column; gap: 32px; } section { display: flex; flex-direction: column; gap: 16px; }`],
  standalone: true,
  imports: [TitleComponent, TextComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilesExtendedComponent {}
