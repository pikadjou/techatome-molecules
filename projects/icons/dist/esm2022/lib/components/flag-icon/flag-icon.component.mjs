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
  `, isInline: true, styles: [":host{display:inline-flex}.flag-icon{display:flex;border-radius:2px;overflow:hidden;line-height:0}\n"] }); }
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
  `, standalone: true, styles: [":host{display:inline-flex}.flag-icon{display:flex;border-radius:2px;overflow:hidden;line-height:0}\n"] }]
        }], ctorParameters: () => [{ type: i1.DomSanitizer }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhZy1pY29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9mbGFnLWljb24vZmxhZy1pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUszRCxNQUFNLFNBQVMsR0FBMkI7SUFDeEMsRUFBRSxFQUFFLDBPQUEwTztJQUM5TyxFQUFFLEVBQUUsc2RBQXNkO0lBQzFkLEVBQUUsRUFBRSxnT0FBZ087SUFDcE8sRUFBRSxFQUFFLDRKQUE0SjtJQUNoSyxFQUFFLEVBQUUsNk5BQTZOO0lBQ2pPLEVBQUUsRUFBRSwwT0FBME87SUFDOU8sRUFBRSxFQUFFLDZOQUE2TjtDQUNsTyxDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQTJCO0lBQ3ZDLEVBQUUsRUFBRSxNQUFNO0lBQ1YsRUFBRSxFQUFFLE1BQU07SUFDVixFQUFFLEVBQUUsTUFBTTtJQUNWLEVBQUUsRUFBRSxNQUFNO0NBQ1gsQ0FBQztBQTBCRixNQUFNLE9BQU8saUJBQWlCO0lBSTVCLFlBQW9CLFVBQXdCO1FBQXhCLGVBQVUsR0FBVixVQUFVLENBQWM7UUFINUMsU0FBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQVUsQ0FBQztRQUNoQyxTQUFJLEdBQUcsS0FBSyxDQUFVLElBQUksQ0FBQyxDQUFDO1FBSTVCLGVBQVUsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFO1lBQ3pCLE1BQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsR0FBRztnQkFBRSxPQUFPLElBQUksQ0FBQztZQUN0QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEQsQ0FBQyxDQUFDLENBQUM7SUFONEMsQ0FBQztJQVFoRCxRQUFRO1FBQ04sT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksTUFBTSxDQUFDO0lBQ3pDLENBQUM7K0dBZFUsaUJBQWlCO21HQUFqQixpQkFBaUIsNlRBdEJsQjs7Ozs7Ozs7R0FRVDs7NEZBY1UsaUJBQWlCO2tCQXhCN0IsU0FBUzsrQkFDRSxjQUFjLFlBQ2Q7Ozs7Ozs7O0dBUVQsY0FZVyxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBjb21wdXRlZCwgaW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcblxuaW1wb3J0IHsgVGFTaXplcyB9IGZyb20gXCJAdGEvc3R5bGVzXCI7XG5cbmNvbnN0IEZMQUdfU1ZHUzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgZnI6ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDY0MCA0ODBcIj48cmVjdCB3aWR0aD1cIjIxMy4zXCIgaGVpZ2h0PVwiNDgwXCIgZmlsbD1cIiMwMDI2NTRcIi8+PHJlY3QgeD1cIjIxMy4zXCIgd2lkdGg9XCIyMTMuNFwiIGhlaWdodD1cIjQ4MFwiIGZpbGw9XCIjZmZmXCIvPjxyZWN0IHg9XCI0MjYuN1wiIHdpZHRoPVwiMjEzLjNcIiBoZWlnaHQ9XCI0ODBcIiBmaWxsPVwiI2NlMTEyNlwiLz48L3N2Zz4nLFxuICBlbjogJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNjQwIDQ4MFwiPjxwYXRoIGZpbGw9XCIjMDEyMTY5XCIgZD1cIk0wIDBoNjQwdjQ4MEgwelwiLz48cGF0aCBmaWxsPVwiI0ZGRlwiIGQ9XCJtNzUgMCAyNDQgMTgxTDU2MiAwaDc4djYyTDQwMCAyNDFsMjQwIDE3OHY2MWgtODBMMzIwIDMwMSA4MSA0ODBIMHYtNjBsMjM5LTE3OEwwIDY0VjB6XCIvPjxwYXRoIGZpbGw9XCIjQzgxMDJFXCIgZD1cIm00MjQgMjgxIDIxNiAxNTl2NDBMMzY5IDI4MXptLTE4NCAyMCA2IDM1TDU0IDQ4MEgwek02NDAgMHYzTDM5MSAxOTFsMi00NEw1OTAgMHpNMCAwbDIzOSAxNzZoLTYwTDAgNDJ6XCIvPjxwYXRoIGZpbGw9XCIjRkZGXCIgZD1cIk0yNDEgMHY0ODBoMTYwVjB6TTAgMTYwdjE2MGg2NDBWMTYwelwiLz48cGF0aCBmaWxsPVwiI0M4MTAyRVwiIGQ9XCJNMCAxOTN2OTZoNjQwdi05NnpNMjczIDB2NDgwaDk2VjB6XCIvPjwvc3ZnPicsXG4gIG5sOiAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA2NDAgNDgwXCI+PHJlY3Qgd2lkdGg9XCI2NDBcIiBoZWlnaHQ9XCIxNjBcIiBmaWxsPVwiI0FFMUMyOFwiLz48cmVjdCB5PVwiMTYwXCIgd2lkdGg9XCI2NDBcIiBoZWlnaHQ9XCIxNjBcIiBmaWxsPVwiI0ZGRlwiLz48cmVjdCB5PVwiMzIwXCIgd2lkdGg9XCI2NDBcIiBoZWlnaHQ9XCIxNjBcIiBmaWxsPVwiIzIxNDY4QlwiLz48L3N2Zz4nLFxuICBlczogJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNjQwIDQ4MFwiPjxwYXRoIGZpbGw9XCIjQUExNTFCXCIgZD1cIk0wIDBoNjQwdjQ4MEgwelwiLz48cGF0aCBmaWxsPVwiI0YxQkYwMFwiIGQ9XCJNMCAxMjBoNjQwdjI0MEgwelwiLz48L3N2Zz4nLFxuICBkZTogJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNjQwIDQ4MFwiPjxyZWN0IHdpZHRoPVwiNjQwXCIgaGVpZ2h0PVwiMTYwXCIgZmlsbD1cIiMwMDBcIi8+PHJlY3QgeT1cIjE2MFwiIHdpZHRoPVwiNjQwXCIgaGVpZ2h0PVwiMTYwXCIgZmlsbD1cIiNEMDBcIi8+PHJlY3QgeT1cIjMyMFwiIHdpZHRoPVwiNjQwXCIgaGVpZ2h0PVwiMTYwXCIgZmlsbD1cIiNGRkNFMDBcIi8+PC9zdmc+JyxcbiAgaXQ6ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDY0MCA0ODBcIj48cmVjdCB3aWR0aD1cIjIxMy4zXCIgaGVpZ2h0PVwiNDgwXCIgZmlsbD1cIiMwMDkyNDZcIi8+PHJlY3QgeD1cIjIxMy4zXCIgd2lkdGg9XCIyMTMuNFwiIGhlaWdodD1cIjQ4MFwiIGZpbGw9XCIjZmZmXCIvPjxyZWN0IHg9XCI0MjYuN1wiIHdpZHRoPVwiMjEzLjNcIiBoZWlnaHQ9XCI0ODBcIiBmaWxsPVwiI2NlMmIzN1wiLz48L3N2Zz4nLFxuICBwdDogJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNjQwIDQ4MFwiPjxyZWN0IHdpZHRoPVwiMjU2XCIgaGVpZ2h0PVwiNDgwXCIgZmlsbD1cIiMwMDY2MDBcIi8+PHJlY3QgeD1cIjI1NlwiIHdpZHRoPVwiMzg0XCIgaGVpZ2h0PVwiNDgwXCIgZmlsbD1cIiNGRjAwMDBcIi8+PGNpcmNsZSBjeD1cIjI1NlwiIGN5PVwiMjQwXCIgcj1cIjY0XCIgZmlsbD1cIiNGRkNDMDBcIi8+PC9zdmc+Jyxcbn07XG5cbmNvbnN0IFNJWkVfTUFQOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICB4czogXCIyMHB4XCIsXG4gIHNtOiBcIjI0cHhcIixcbiAgbWQ6IFwiMzJweFwiLFxuICBsZzogXCI0OHB4XCIsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwidGEtZmxhZy1pY29uXCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgQGlmICh0aGlzLnN2Z0NvbnRlbnQoKSkge1xuICAgICAgPGRpdlxuICAgICAgICBbaW5uZXJIVE1MXT1cInRoaXMuc3ZnQ29udGVudCgpXCJcbiAgICAgICAgW3N0eWxlLndpZHRoXT1cInRoaXMuZ2V0V2lkdGgoKVwiXG4gICAgICAgIGNsYXNzPVwiZmxhZy1pY29uXCJcbiAgICAgID48L2Rpdj5cbiAgICB9XG4gIGAsXG4gIHN0eWxlczogYFxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIH1cbiAgICAuZmxhZy1pY29uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgfVxuICBgLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBGbGFnSWNvbkNvbXBvbmVudCB7XG4gIGNvZGUgPSBpbnB1dC5yZXF1aXJlZDxzdHJpbmc+KCk7XG4gIHNpemUgPSBpbnB1dDxUYVNpemVzPihcInNtXCIpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Nhbml0aXplcjogRG9tU2FuaXRpemVyKSB7fVxuXG4gIHN2Z0NvbnRlbnQgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3Qgc3ZnID0gRkxBR19TVkdTW3RoaXMuY29kZSgpLnRvTG93ZXJDYXNlKCldO1xuICAgIGlmICghc3ZnKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gdGhpcy5fc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHN2Zyk7XG4gIH0pO1xuXG4gIGdldFdpZHRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFNJWkVfTUFQW3RoaXMuc2l6ZSgpXSA/PyBcIjI0cHhcIjtcbiAgfVxufVxuIl19