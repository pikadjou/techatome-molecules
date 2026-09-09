import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
  standalone: true,
  selector: "app-page-layout",
  template: `
    <header class="page-header">
      @if (this.eyebrow()) {
        <span class="page-eyebrow">{{ this.eyebrow() }}</span>
      }
      <h1>{{ this.title() }}</h1>
      @if (this.description()) {
        <p class="page-description">{{ this.description() }}</p>
      }
    </header>
    <div class="page-body">
      <ng-content></ng-content>
    </div>
  `,
  styleUrl: "./page-layout.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageLayoutComponent {
  title = input.required<string>();

  /** Paquet ou famille dont relève la page, affiché au-dessus du titre. */
  eyebrow = input<string>("");

  /** Une phrase pour situer ce que la page démontre. */
  description = input<string>("");
}
