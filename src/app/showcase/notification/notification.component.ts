import { ChangeDetectionStrategy, Component } from "@angular/core";

import { TextComponent, TitleComponent } from "@ta/ui";

import { PageLayoutComponent } from "../../layout/page-layout.component";

@Component({
  selector: "app-notification",
  template: `
    <app-page-layout title="@ta/notification">
      <div class="sections">
        <section>
          <ta-title [level]="2">Coming Soon</ta-title>
          <ta-text size="sm">NotificationBox, NotificationInline, NotificationBadge, Bullet, Toast — Phase 4</ta-text>

        </section>
      </div>
    </app-page-layout>
  `,
  styles: [`.sections { padding: 32px; display: flex; flex-direction: column; gap: 32px; } section { display: flex; flex-direction: column; gap: 16px; }`],
  standalone: true,
  imports: [PageLayoutComponent, TitleComponent, TextComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent {}
