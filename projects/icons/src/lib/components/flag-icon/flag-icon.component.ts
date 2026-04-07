import { Component, computed, input } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

import { TaSizes } from "@ta/styles";

const FLAG_SVGS: Record<string, string> = {
  fr: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><rect width="213.3" height="480" fill="#002654"/><rect x="213.3" width="213.4" height="480" fill="#fff"/><rect x="426.7" width="213.3" height="480" fill="#ce1126"/></svg>',
  en: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><path fill="#012169" d="M0 0h640v480H0z"/><path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z"/><path fill="#C8102E" d="m424 281 216 159v40L369 281zm-184 20 6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z"/><path fill="#FFF" d="M241 0v480h160V0zM0 160v160h640V160z"/><path fill="#C8102E" d="M0 193v96h640v-96zM273 0v480h96V0z"/></svg>',
  nl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><rect width="640" height="160" fill="#AE1C28"/><rect y="160" width="640" height="160" fill="#FFF"/><rect y="320" width="640" height="160" fill="#21468B"/></svg>',
  es: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><path fill="#AA151B" d="M0 0h640v480H0z"/><path fill="#F1BF00" d="M0 120h640v240H0z"/></svg>',
  de: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><rect width="640" height="160" fill="#000"/><rect y="160" width="640" height="160" fill="#D00"/><rect y="320" width="640" height="160" fill="#FFCE00"/></svg>',
  it: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><rect width="213.3" height="480" fill="#009246"/><rect x="213.3" width="213.4" height="480" fill="#fff"/><rect x="426.7" width="213.3" height="480" fill="#ce2b37"/></svg>',
  pt: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><rect width="256" height="480" fill="#006600"/><rect x="256" width="384" height="480" fill="#FF0000"/><circle cx="256" cy="240" r="64" fill="#FFCC00"/></svg>',
};

const SIZE_MAP: Record<string, string> = {
  xs: "20px",
  sm: "24px",
  md: "32px",
  lg: "48px",
};

@Component({
  selector: "ta-flag-icon",
  template: `
    @if (this.svgContent()) {
      <div
        [innerHTML]="this.svgContent()"
        [style.width]="this.getWidth()"
        class="flag-icon"
      ></div>
    }
  `,
  styles: `
    :host {
      display: inline-flex;
    }
    .flag-icon {
      display: flex;
      border-radius: 2px;
      overflow: hidden;
      line-height: 0;

      ::ng-deep svg {
        width: 100%;
        height: auto;
      }
    }
  `,
  standalone: true,
})
export class FlagIconComponent {
  code = input.required<string>();
  size = input<TaSizes>("sm");

  constructor(private _sanitizer: DomSanitizer) {}

  svgContent = computed(() => {
    const svg = FLAG_SVGS[this.code().toLowerCase()];
    if (!svg) return null;
    return this._sanitizer.bypassSecurityTrustHtml(svg);
  });

  getWidth(): string {
    return SIZE_MAP[this.size()] ?? "24px";
  }
}
