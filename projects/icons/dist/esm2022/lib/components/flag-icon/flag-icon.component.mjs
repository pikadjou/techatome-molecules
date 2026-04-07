import { Component, computed, input } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
const FLAG_SVGS = {
    fr: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><rect width="213.3" height="480" fill="#002654"/><rect x="213.3" width="213.4" height="480" fill="#fff"/><rect x="426.7" width="213.3" height="480" fill="#ce1126"/></svg>',
    en: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><path fill="#012169" d="M0 0h640v480H0z"/><path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z"/><path fill="#C8102E" d="m424 281 216 159v40L369 281zm-184 20 6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z"/><path fill="#FFF" d="M241 0v480h160V0zM0 160v160h640V160z"/><path fill="#C8102E" d="M0 193v96h640v-96zM273 0v480h96V0z"/></svg>',
    nl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><rect width="640" height="160" fill="#AE1C28"/><rect y="160" width="640" height="160" fill="#FFF"/><rect y="320" width="640" height="160" fill="#21468B"/></svg>',
    es: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><path fill="#AA151B" d="M0 0h640v480H0z"/><path fill="#F1BF00" d="M0 120h640v240H0z"/></svg>',
    de: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><rect width="640" height="160" fill="#000"/><rect y="160" width="640" height="160" fill="#D00"/><rect y="320" width="640" height="160" fill="#FFCE00"/></svg>',
    it: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><rect width="213.3" height="480" fill="#009246"/><rect x="213.3" width="213.4" height="480" fill="#fff"/><rect x="426.7" width="213.3" height="480" fill="#ce2b37"/></svg>',
    pt: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><rect width="256" height="480" fill="#006600"/><rect x="256" width="384" height="480" fill="#FF0000"/><circle cx="256" cy="240" r="64" fill="#FFCC00"/></svg>',
};
const SIZE_MAP = {
    xs: "20px",
    sm: "24px",
    md: "32px",
    lg: "48px",
};
export class FlagIconComponent {
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
        this.code = input.required();
        this.size = input("sm");
        this.svgContent = computed(() => {
            const svg = FLAG_SVGS[this.code().toLowerCase()];
            if (!svg)
                return null;
            return this._sanitizer.bypassSecurityTrustHtml(svg);
        });
    }
    getWidth() {
        return SIZE_MAP[this.size()] ?? "24px";
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FlagIconComponent, deps: [{ token: i1.DomSanitizer }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: FlagIconComponent, isStandalone: true, selector: "ta-flag-icon", inputs: { code: { classPropertyName: "code", publicName: "code", isSignal: true, isRequired: true, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: `
    @if (this.svgContent()) {
      <div
        [innerHTML]="this.svgContent()"
        [style.width]="this.getWidth()"
        class="flag-icon"
      ></div>
    }
  `, isInline: true, styles: [":host{display:inline-flex}.flag-icon{display:flex;border-radius:2px;overflow:hidden;line-height:0;::ng-deep svg{width:100%;height:auto}}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FlagIconComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-flag-icon", template: `
    @if (this.svgContent()) {
      <div
        [innerHTML]="this.svgContent()"
        [style.width]="this.getWidth()"
        class="flag-icon"
      ></div>
    }
  `, standalone: true, styles: [":host{display:inline-flex}.flag-icon{display:flex;border-radius:2px;overflow:hidden;line-height:0;::ng-deep svg{width:100%;height:auto}}\n"] }]
        }], ctorParameters: () => [{ type: i1.DomSanitizer }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhZy1pY29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9mbGFnLWljb24vZmxhZy1pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUszRCxNQUFNLFNBQVMsR0FBMkI7SUFDeEMsRUFBRSxFQUFFLDBPQUEwTztJQUM5TyxFQUFFLEVBQUUsc2RBQXNkO0lBQzFkLEVBQUUsRUFBRSxnT0FBZ087SUFDcE8sRUFBRSxFQUFFLDRKQUE0SjtJQUNoSyxFQUFFLEVBQUUsNk5BQTZOO0lBQ2pPLEVBQUUsRUFBRSwwT0FBME87SUFDOU8sRUFBRSxFQUFFLDZOQUE2TjtDQUNsTyxDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQTJCO0lBQ3ZDLEVBQUUsRUFBRSxNQUFNO0lBQ1YsRUFBRSxFQUFFLE1BQU07SUFDVixFQUFFLEVBQUUsTUFBTTtJQUNWLEVBQUUsRUFBRSxNQUFNO0NBQ1gsQ0FBQztBQStCRixNQUFNLE9BQU8saUJBQWlCO0lBSTVCLFlBQW9CLFVBQXdCO1FBQXhCLGVBQVUsR0FBVixVQUFVLENBQWM7UUFINUMsU0FBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQVUsQ0FBQztRQUNoQyxTQUFJLEdBQUcsS0FBSyxDQUFVLElBQUksQ0FBQyxDQUFDO1FBSTVCLGVBQVUsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFO1lBQ3pCLE1BQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsR0FBRztnQkFBRSxPQUFPLElBQUksQ0FBQztZQUN0QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEQsQ0FBQyxDQUFDLENBQUM7SUFONEMsQ0FBQztJQVFoRCxRQUFRO1FBQ04sT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksTUFBTSxDQUFDO0lBQ3pDLENBQUM7K0dBZFUsaUJBQWlCO21HQUFqQixpQkFBaUIsNlRBM0JsQjs7Ozs7Ozs7R0FRVDs7NEZBbUJVLGlCQUFpQjtrQkE3QjdCLFNBQVM7K0JBQ0UsY0FBYyxZQUNkOzs7Ozs7OztHQVFULGNBaUJXLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGNvbXB1dGVkLCBpbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xuXG5pbXBvcnQgeyBUYVNpemVzIH0gZnJvbSBcIkB0YS9zdHlsZXNcIjtcblxuY29uc3QgRkxBR19TVkdTOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBmcjogJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNjQwIDQ4MFwiPjxyZWN0IHdpZHRoPVwiMjEzLjNcIiBoZWlnaHQ9XCI0ODBcIiBmaWxsPVwiIzAwMjY1NFwiLz48cmVjdCB4PVwiMjEzLjNcIiB3aWR0aD1cIjIxMy40XCIgaGVpZ2h0PVwiNDgwXCIgZmlsbD1cIiNmZmZcIi8+PHJlY3QgeD1cIjQyNi43XCIgd2lkdGg9XCIyMTMuM1wiIGhlaWdodD1cIjQ4MFwiIGZpbGw9XCIjY2UxMTI2XCIvPjwvc3ZnPicsXG4gIGVuOiAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA2NDAgNDgwXCI+PHBhdGggZmlsbD1cIiMwMTIxNjlcIiBkPVwiTTAgMGg2NDB2NDgwSDB6XCIvPjxwYXRoIGZpbGw9XCIjRkZGXCIgZD1cIm03NSAwIDI0NCAxODFMNTYyIDBoNzh2NjJMNDAwIDI0MWwyNDAgMTc4djYxaC04MEwzMjAgMzAxIDgxIDQ4MEgwdi02MGwyMzktMTc4TDAgNjRWMHpcIi8+PHBhdGggZmlsbD1cIiNDODEwMkVcIiBkPVwibTQyNCAyODEgMjE2IDE1OXY0MEwzNjkgMjgxem0tMTg0IDIwIDYgMzVMNTQgNDgwSDB6TTY0MCAwdjNMMzkxIDE5MWwyLTQ0TDU5MCAwek0wIDBsMjM5IDE3NmgtNjBMMCA0MnpcIi8+PHBhdGggZmlsbD1cIiNGRkZcIiBkPVwiTTI0MSAwdjQ4MGgxNjBWMHpNMCAxNjB2MTYwaDY0MFYxNjB6XCIvPjxwYXRoIGZpbGw9XCIjQzgxMDJFXCIgZD1cIk0wIDE5M3Y5Nmg2NDB2LTk2ek0yNzMgMHY0ODBoOTZWMHpcIi8+PC9zdmc+JyxcbiAgbmw6ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDY0MCA0ODBcIj48cmVjdCB3aWR0aD1cIjY0MFwiIGhlaWdodD1cIjE2MFwiIGZpbGw9XCIjQUUxQzI4XCIvPjxyZWN0IHk9XCIxNjBcIiB3aWR0aD1cIjY0MFwiIGhlaWdodD1cIjE2MFwiIGZpbGw9XCIjRkZGXCIvPjxyZWN0IHk9XCIzMjBcIiB3aWR0aD1cIjY0MFwiIGhlaWdodD1cIjE2MFwiIGZpbGw9XCIjMjE0NjhCXCIvPjwvc3ZnPicsXG4gIGVzOiAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA2NDAgNDgwXCI+PHBhdGggZmlsbD1cIiNBQTE1MUJcIiBkPVwiTTAgMGg2NDB2NDgwSDB6XCIvPjxwYXRoIGZpbGw9XCIjRjFCRjAwXCIgZD1cIk0wIDEyMGg2NDB2MjQwSDB6XCIvPjwvc3ZnPicsXG4gIGRlOiAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA2NDAgNDgwXCI+PHJlY3Qgd2lkdGg9XCI2NDBcIiBoZWlnaHQ9XCIxNjBcIiBmaWxsPVwiIzAwMFwiLz48cmVjdCB5PVwiMTYwXCIgd2lkdGg9XCI2NDBcIiBoZWlnaHQ9XCIxNjBcIiBmaWxsPVwiI0QwMFwiLz48cmVjdCB5PVwiMzIwXCIgd2lkdGg9XCI2NDBcIiBoZWlnaHQ9XCIxNjBcIiBmaWxsPVwiI0ZGQ0UwMFwiLz48L3N2Zz4nLFxuICBpdDogJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNjQwIDQ4MFwiPjxyZWN0IHdpZHRoPVwiMjEzLjNcIiBoZWlnaHQ9XCI0ODBcIiBmaWxsPVwiIzAwOTI0NlwiLz48cmVjdCB4PVwiMjEzLjNcIiB3aWR0aD1cIjIxMy40XCIgaGVpZ2h0PVwiNDgwXCIgZmlsbD1cIiNmZmZcIi8+PHJlY3QgeD1cIjQyNi43XCIgd2lkdGg9XCIyMTMuM1wiIGhlaWdodD1cIjQ4MFwiIGZpbGw9XCIjY2UyYjM3XCIvPjwvc3ZnPicsXG4gIHB0OiAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA2NDAgNDgwXCI+PHJlY3Qgd2lkdGg9XCIyNTZcIiBoZWlnaHQ9XCI0ODBcIiBmaWxsPVwiIzAwNjYwMFwiLz48cmVjdCB4PVwiMjU2XCIgd2lkdGg9XCIzODRcIiBoZWlnaHQ9XCI0ODBcIiBmaWxsPVwiI0ZGMDAwMFwiLz48Y2lyY2xlIGN4PVwiMjU2XCIgY3k9XCIyNDBcIiByPVwiNjRcIiBmaWxsPVwiI0ZGQ0MwMFwiLz48L3N2Zz4nLFxufTtcblxuY29uc3QgU0laRV9NQVA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIHhzOiBcIjIwcHhcIixcbiAgc206IFwiMjRweFwiLFxuICBtZDogXCIzMnB4XCIsXG4gIGxnOiBcIjQ4cHhcIixcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YS1mbGFnLWljb25cIixcbiAgdGVtcGxhdGU6IGBcbiAgICBAaWYgKHRoaXMuc3ZnQ29udGVudCgpKSB7XG4gICAgICA8ZGl2XG4gICAgICAgIFtpbm5lckhUTUxdPVwidGhpcy5zdmdDb250ZW50KClcIlxuICAgICAgICBbc3R5bGUud2lkdGhdPVwidGhpcy5nZXRXaWR0aCgpXCJcbiAgICAgICAgY2xhc3M9XCJmbGFnLWljb25cIlxuICAgICAgPjwvZGl2PlxuICAgIH1cbiAgYCxcbiAgc3R5bGVzOiBgXG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgfVxuICAgIC5mbGFnLWljb24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBsaW5lLWhlaWdodDogMDtcblxuICAgICAgOjpuZy1kZWVwIHN2ZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICB9XG4gICAgfVxuICBgLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBGbGFnSWNvbkNvbXBvbmVudCB7XG4gIGNvZGUgPSBpbnB1dC5yZXF1aXJlZDxzdHJpbmc+KCk7XG4gIHNpemUgPSBpbnB1dDxUYVNpemVzPihcInNtXCIpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Nhbml0aXplcjogRG9tU2FuaXRpemVyKSB7fVxuXG4gIHN2Z0NvbnRlbnQgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3Qgc3ZnID0gRkxBR19TVkdTW3RoaXMuY29kZSgpLnRvTG93ZXJDYXNlKCldO1xuICAgIGlmICghc3ZnKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gdGhpcy5fc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHN2Zyk7XG4gIH0pO1xuXG4gIGdldFdpZHRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFNJWkVfTUFQW3RoaXMuc2l6ZSgpXSA/PyBcIjI0cHhcIjtcbiAgfVxufVxuIl19