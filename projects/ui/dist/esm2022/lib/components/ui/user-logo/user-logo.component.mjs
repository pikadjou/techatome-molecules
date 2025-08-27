import { NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontIconComponent } from '@ta/icons';
import { TrigramComponent } from '../trigram/trigram.component';
import * as i0 from "@angular/core";
export class UserLogoComponent {
    constructor() {
        /**
         * Size of user logo desired
         */
        this.size = 'lg';
        this.defaultType = 'font';
        this._trigram = (name) => {
            if (!name)
                return '';
            if (name.length < 4)
                return name;
            return (name[0] + name[2] + name[3]).toUpperCase();
        };
    }
    get sizeValue() {
        if (this.forcedSize) {
            return this.forcedSize;
        }
        switch (this.size) {
            case 'sm':
                return 16;
            case 'md':
                return 24;
            case 'lg':
                return 48;
            case 'xl':
                return 70;
            default:
                return 48;
        }
    }
    getTrigram() {
        const trigram = this.user?.trigram || this.userInfo?.naming?.trigram;
        if (trigram) {
            return trigram;
        }
        return this._trigram(this.user?.firstName || this.userInfo?.naming?.trigram);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: UserLogoComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: UserLogoComponent, isStandalone: true, selector: "ta-user-logo", inputs: { userInfo: "userInfo", user: "user", size: "size", forcedSize: "forcedSize", defaultType: "defaultType" }, ngImport: i0, template: "@if (this.user?.picture || this.userInfo?.profilePictureUrl) {\n  <div class=\"img-container\">\n    <img\n      [src]=\"this.user?.picture || this.userInfo?.profilePictureUrl\"\n      [ngStyle]=\"{ 'width.px': this.sizeValue, 'height.px': this.sizeValue }\"\n      class=\"user-image\"\n    />\n  </div>\n} @else if (this.defaultType === 'trigram') {\n  <ta-trigram [value]=\"this.getTrigram()\" [size]=\"this.sizeValue\"></ta-trigram>\n} @else if (this.defaultType === 'font') {\n  <div\n    class=\"profile-icon\"\n    [ngStyle]=\"{ 'width.px': this.sizeValue, 'height.px': this.sizeValue }\"\n  >\n    <ta-font-icon name=\"profil-picture\" [type]=\"this.size ?? 'lg'\"></ta-font-icon>\n  </div>\n}\n", styles: [".user-image{border-radius:100%}.img-container{display:flex;justify-content:center;align-items:center}.profile-icon{display:flex;justify-content:center;align-items:center;border-radius:50%;background-color:var(--ta-brand-200);overflow:hidden}.profile-icon ta-font-icon{color:var(--ta-brand-700)}\n"], dependencies: [{ kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: TrigramComponent, selector: "ta-trigram", inputs: ["value", "size"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: UserLogoComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-user-logo', standalone: true, imports: [NgIf, NgStyle, FontIconComponent, TrigramComponent], template: "@if (this.user?.picture || this.userInfo?.profilePictureUrl) {\n  <div class=\"img-container\">\n    <img\n      [src]=\"this.user?.picture || this.userInfo?.profilePictureUrl\"\n      [ngStyle]=\"{ 'width.px': this.sizeValue, 'height.px': this.sizeValue }\"\n      class=\"user-image\"\n    />\n  </div>\n} @else if (this.defaultType === 'trigram') {\n  <ta-trigram [value]=\"this.getTrigram()\" [size]=\"this.sizeValue\"></ta-trigram>\n} @else if (this.defaultType === 'font') {\n  <div\n    class=\"profile-icon\"\n    [ngStyle]=\"{ 'width.px': this.sizeValue, 'height.px': this.sizeValue }\"\n  >\n    <ta-font-icon name=\"profil-picture\" [type]=\"this.size ?? 'lg'\"></ta-font-icon>\n  </div>\n}\n", styles: [".user-image{border-radius:100%}.img-container{display:flex;justify-content:center;align-items:center}.profile-icon{display:flex;justify-content:center;align-items:center;border-radius:50%;background-color:var(--ta-brand-200);overflow:hidden}.profile-icon ta-font-icon{color:var(--ta-brand-700)}\n"] }]
        }], propDecorators: { userInfo: [{
                type: Input
            }], user: [{
                type: Input
            }], size: [{
                type: Input
            }], forcedSize: [{
                type: Input
            }], defaultType: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1sb2dvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS91c2VyLWxvZ28vdXNlci1sb2dvLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy91aS91c2VyLWxvZ28vdXNlci1sb2dvLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRzlDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQXFCaEUsTUFBTSxPQUFPLGlCQUFpQjtJQVA5QjtRQXFCRTs7V0FFRztRQUVILFNBQUksR0FBYSxJQUFJLENBQUM7UUFNdEIsZ0JBQVcsR0FBdUIsTUFBTSxDQUFDO1FBNkJqQyxhQUFRLEdBQUcsQ0FBQyxJQUErQixFQUFFLEVBQUU7WUFDckQsSUFBSSxDQUFDLElBQUk7Z0JBQUUsT0FBTyxFQUFFLENBQUM7WUFDckIsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQUUsT0FBTyxJQUFJLENBQUM7WUFFakMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckQsQ0FBQyxDQUFDO0tBQ0g7SUFqQ0MsSUFBSSxTQUFTO1FBQ1gsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDcEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3pCLENBQUM7UUFDRCxRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNsQixLQUFLLElBQUk7Z0JBQ1AsT0FBTyxFQUFFLENBQUM7WUFDWixLQUFLLElBQUk7Z0JBQ1AsT0FBTyxFQUFFLENBQUM7WUFDWixLQUFLLElBQUk7Z0JBQ1AsT0FBTyxFQUFFLENBQUM7WUFDWixLQUFLLElBQUk7Z0JBQ1AsT0FBTyxFQUFFLENBQUM7WUFDWjtnQkFDRSxPQUFPLEVBQUUsQ0FBQztRQUNkLENBQUM7SUFDSCxDQUFDO0lBRU0sVUFBVTtRQUNmLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQztRQUNyRSxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBQ1osT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQztRQUVELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMvRSxDQUFDOytHQW5EVSxpQkFBaUI7bUdBQWpCLGlCQUFpQiw0TEMzQjlCLGlzQkFrQkEsa1dET2tCLE9BQU8sMkVBQUUsaUJBQWlCLG1GQUFFLGdCQUFnQjs7NEZBRWpELGlCQUFpQjtrQkFQN0IsU0FBUzsrQkFDRSxjQUFjLGNBR1osSUFBSSxXQUNQLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsQ0FBQzs4QkFRN0QsUUFBUTtzQkFEUCxLQUFLO2dCQU9OLElBQUk7c0JBREgsS0FBSztnQkFPTixJQUFJO3NCQURILEtBQUs7Z0JBSU4sVUFBVTtzQkFEVCxLQUFLO2dCQUlOLFdBQVc7c0JBRFYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nSWYsIE5nU3R5bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGb250SWNvbkNvbXBvbmVudCB9IGZyb20gJ0B0YS9pY29ucyc7XG5pbXBvcnQgeyBUYVNpemVzIH0gZnJvbSAnQHRhL3N0eWxlcyc7XG5cbmltcG9ydCB7IFRyaWdyYW1Db21wb25lbnQgfSBmcm9tICcuLi90cmlncmFtL3RyaWdyYW0uY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyTG9nb05hbWluZyB7XG4gIG5hbWU6IHN0cmluZztcbiAgZmlyc3ROYW1lOiBzdHJpbmcgfCBudWxsO1xuICB0cmlncmFtOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckxvZ29EYXRhIHtcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIHRyaWdyYW0/OiBzdHJpbmc7XG4gIHBpY3R1cmU/OiBzdHJpbmc7XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS11c2VyLWxvZ28nLFxuICB0ZW1wbGF0ZVVybDogJy4vdXNlci1sb2dvLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdXNlci1sb2dvLmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0lmLCBOZ1N0eWxlLCBGb250SWNvbkNvbXBvbmVudCwgVHJpZ3JhbUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJMb2dvQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkXG4gICAqIFVzZXIgaW5mb3JtYXRpb24gY29udGFpbmluZyBoaXMgcHJvZmlsZSBwaWN0dXJlIGFuZCBoaXMgbmFtaW5nXG4gICAqL1xuICBASW5wdXQoKVxuICB1c2VySW5mbz86IHsgcHJvZmlsZVBpY3R1cmVVcmw/OiBzdHJpbmc7IG5hbWluZzogVXNlckxvZ29OYW1pbmcgfCBudWxsIH07XG5cbiAgLyoqXG4gICAqIFVzZXIgaW5mb3JtYXRpb24gY29udGFpbmluZyBoaXMgcHJvZmlsZSBwaWN0dXJlIGFuZCBoaXMgbmFtaW5nXG4gICAqL1xuICBASW5wdXQoKVxuICB1c2VyPzogVXNlckxvZ29EYXRhO1xuXG4gIC8qKlxuICAgKiBTaXplIG9mIHVzZXIgbG9nbyBkZXNpcmVkXG4gICAqL1xuICBASW5wdXQoKVxuICBzaXplPzogVGFTaXplcyA9ICdsZyc7XG5cbiAgQElucHV0KClcbiAgZm9yY2VkU2l6ZT86IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBkZWZhdWx0VHlwZTogJ2ZvbnQnIHwgJ3RyaWdyYW0nID0gJ2ZvbnQnO1xuXG4gIGdldCBzaXplVmFsdWUoKSB7XG4gICAgaWYgKHRoaXMuZm9yY2VkU2l6ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZm9yY2VkU2l6ZTtcbiAgICB9XG4gICAgc3dpdGNoICh0aGlzLnNpemUpIHtcbiAgICAgIGNhc2UgJ3NtJzpcbiAgICAgICAgcmV0dXJuIDE2O1xuICAgICAgY2FzZSAnbWQnOlxuICAgICAgICByZXR1cm4gMjQ7XG4gICAgICBjYXNlICdsZyc6XG4gICAgICAgIHJldHVybiA0ODtcbiAgICAgIGNhc2UgJ3hsJzpcbiAgICAgICAgcmV0dXJuIDcwO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDQ4O1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRUcmlncmFtKCkge1xuICAgIGNvbnN0IHRyaWdyYW0gPSB0aGlzLnVzZXI/LnRyaWdyYW0gfHwgdGhpcy51c2VySW5mbz8ubmFtaW5nPy50cmlncmFtO1xuICAgIGlmICh0cmlncmFtKSB7XG4gICAgICByZXR1cm4gdHJpZ3JhbTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fdHJpZ3JhbSh0aGlzLnVzZXI/LmZpcnN0TmFtZSB8fCB0aGlzLnVzZXJJbmZvPy5uYW1pbmc/LnRyaWdyYW0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfdHJpZ3JhbSA9IChuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgaWYgKCFuYW1lKSByZXR1cm4gJyc7XG4gICAgaWYgKG5hbWUubGVuZ3RoIDwgNCkgcmV0dXJuIG5hbWU7XG5cbiAgICByZXR1cm4gKG5hbWVbMF0gKyBuYW1lWzJdICsgbmFtZVszXSkudG9VcHBlckNhc2UoKTtcbiAgfTtcbn1cbiIsIkBpZiAodGhpcy51c2VyPy5waWN0dXJlIHx8IHRoaXMudXNlckluZm8/LnByb2ZpbGVQaWN0dXJlVXJsKSB7XG4gIDxkaXYgY2xhc3M9XCJpbWctY29udGFpbmVyXCI+XG4gICAgPGltZ1xuICAgICAgW3NyY109XCJ0aGlzLnVzZXI/LnBpY3R1cmUgfHwgdGhpcy51c2VySW5mbz8ucHJvZmlsZVBpY3R1cmVVcmxcIlxuICAgICAgW25nU3R5bGVdPVwieyAnd2lkdGgucHgnOiB0aGlzLnNpemVWYWx1ZSwgJ2hlaWdodC5weCc6IHRoaXMuc2l6ZVZhbHVlIH1cIlxuICAgICAgY2xhc3M9XCJ1c2VyLWltYWdlXCJcbiAgICAvPlxuICA8L2Rpdj5cbn0gQGVsc2UgaWYgKHRoaXMuZGVmYXVsdFR5cGUgPT09ICd0cmlncmFtJykge1xuICA8dGEtdHJpZ3JhbSBbdmFsdWVdPVwidGhpcy5nZXRUcmlncmFtKClcIiBbc2l6ZV09XCJ0aGlzLnNpemVWYWx1ZVwiPjwvdGEtdHJpZ3JhbT5cbn0gQGVsc2UgaWYgKHRoaXMuZGVmYXVsdFR5cGUgPT09ICdmb250Jykge1xuICA8ZGl2XG4gICAgY2xhc3M9XCJwcm9maWxlLWljb25cIlxuICAgIFtuZ1N0eWxlXT1cInsgJ3dpZHRoLnB4JzogdGhpcy5zaXplVmFsdWUsICdoZWlnaHQucHgnOiB0aGlzLnNpemVWYWx1ZSB9XCJcbiAgPlxuICAgIDx0YS1mb250LWljb24gbmFtZT1cInByb2ZpbC1waWN0dXJlXCIgW3R5cGVdPVwidGhpcy5zaXplID8/ICdsZydcIj48L3RhLWZvbnQtaWNvbj5cbiAgPC9kaXY+XG59XG4iXX0=