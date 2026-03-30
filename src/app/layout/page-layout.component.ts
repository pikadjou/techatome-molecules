import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
  standalone: true,
  selector: "app-page-layout",
  template: `
    <div class="page-header">
      <h1>{{ this.title() }}</h1>
    </div>
    <div class="page-body">
      <ng-content></ng-content>
    </div>
  `,
  styleUrl: "./page-layout.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageLayoutComponent {
  title = input.required<string>();
}
