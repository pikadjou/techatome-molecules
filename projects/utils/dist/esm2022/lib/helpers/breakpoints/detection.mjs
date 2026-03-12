import { BreakpointObserver } from "@angular/cdk/layout";
import { Injectable, inject } from "@angular/core";
import { map } from "rxjs/operators";
import * as i0 from "@angular/core";
const breakpoint_xxl = 1400;
const breakpoint_xl = 1200;
const breakpoint_lg = 992;
const breakpoint_md = 768;
const breakpoint_sm = 576;
const breakpoint_xs = 0;
export const Breakpoints = {
    XSmall: `(min-width: ${breakpoint_xs}px) and (max-width: ${breakpoint_sm - 1}px)`,
    Small: `(min-width: ${breakpoint_sm}px) and (max-width: ${breakpoint_md - 1}px)`,
    Medium: `(min-width: ${breakpoint_md}px) and (max-width: ${breakpoint_lg - 1}px)`,
    Large: `(min-width: ${breakpoint_lg}px) and (max-width: ${breakpoint_xl - 1}px)`,
    XLarge: `(min-width: ${breakpoint_xl}px) and (max-width: ${breakpoint_xxl - 1}px)`,
    XXLarge: `(min-width: ${breakpoint_xxl}px)`,
    Handset: `(max-width: ${breakpoint_sm - 1}px) and (orientation: portrait), ` +
        `(max-width: ${breakpoint_md - 1}px) and (orientation: landscape)`,
    Tablet: `(min-width: ${breakpoint_sm}px) and (max-width: 839.98px) and (orientation: portrait), ` +
        `(min-width: ${breakpoint_md}px) and (max-width: ${breakpoint_lg - 1}px) and (orientation: landscape)`,
    Web: `(min-width: 840px) and (orientation: portrait), ` +
        `(min-width: ${breakpoint_lg}px) and (orientation: landscape)`,
    HandsetPortrait: `(max-width: ${breakpoint_sm - 1}px) and (orientation: portrait)`,
    TabletPortrait: `(min-width: ${breakpoint_sm}px) and (max-width: 839.98px) and (orientation: portrait)`,
    WebPortrait: `(min-width: 840px) and (orientation: portrait)`,
    HandsetLandscape: `(max-width: ${breakpoint_md - 1}px) and (orientation: landscape)`,
    TabletLandscape: `(min-width: ${breakpoint_md}px) and (max-width: ${breakpoint_lg - 1}px) and (orientation: landscape)`,
    WebLandscape: `(min-width: ${breakpoint_lg}px) and (orientation: landscape)`,
};
export class BreakpointDetection {
    constructor() {
        this.breakpointObserver = inject(BreakpointObserver);
        this.isLessThanXS = this._isMatched([Breakpoints.XSmall]);
        this.isLessThanSM = this._isMatched([
            Breakpoints.XSmall,
            Breakpoints.Small,
        ]);
        this.isLessThanMD = this._isMatched([
            Breakpoints.XSmall,
            Breakpoints.Small,
            Breakpoints.Medium,
        ]);
        this.isLessThanLG = this._isMatched([
            Breakpoints.XSmall,
            Breakpoints.Small,
            Breakpoints.Medium,
            Breakpoints.Large,
        ]);
        this.isMoreThanXS = !this._isMatched([Breakpoints.XSmall]);
        this.isMoreThanSM = !this._isMatched([
            Breakpoints.XSmall,
            Breakpoints.Small,
        ]);
        this.isMoreThanMD = !this._isMatched([
            Breakpoints.XSmall,
            Breakpoints.Small,
            Breakpoints.Medium,
        ]);
        this.isMoreThanLG = !this._isMatched([
            Breakpoints.XSmall,
            Breakpoints.Small,
            Breakpoints.Medium,
            Breakpoints.Large,
        ]);
        this.isLessThanXS$ = this._isMatched$([Breakpoints.XSmall]);
        this.isLessThanSM$ = this._isMatched$([
            Breakpoints.XSmall,
            Breakpoints.Small,
        ]);
        this.isLessThanMD$ = this._isMatched$([
            Breakpoints.XSmall,
            Breakpoints.Small,
            Breakpoints.Medium,
        ]);
        this.isLessThanLG$ = this._isMatched$([
            Breakpoints.XSmall,
            Breakpoints.Small,
            Breakpoints.Medium,
            Breakpoints.Large,
        ]);
        this.isMoreThanXS$ = this._isMatched$([Breakpoints.XSmall]).pipe(map((value) => !value));
        this.isMoreThanSM$ = this._isMatched$([
            Breakpoints.XSmall,
            Breakpoints.Small,
        ]).pipe(map((value) => !value));
        this.isMoreThanMD$ = this._isMatched$([
            Breakpoints.XSmall,
            Breakpoints.Small,
            Breakpoints.Medium,
        ]).pipe(map((value) => !value));
        this.isMoreThanLG$ = this._isMatched$([
            Breakpoints.XSmall,
            Breakpoints.Small,
            Breakpoints.Medium,
            Breakpoints.Large,
        ]).pipe(map((value) => !value));
        this.isMobile = this.isLessThanXS;
        this.isMobile$ = this.isLessThanXS$;
        this.isTablette = this.isLessThanMD;
        this.isTablette$ = this.isLessThanMD$;
        this.isDesktop = this.isMoreThanLG;
        this.isDesktop$ = this.isMoreThanLG$;
    }
    _isMatched$(values) {
        return this.breakpointObserver
            .observe(values)
            .pipe(map((state) => state.matches));
    }
    _isMatched(values) {
        return this.breakpointObserver.isMatched(values);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BreakpointDetection, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BreakpointDetection, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BreakpointDetection, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0ZWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9oZWxwZXJzL2JyZWFrcG9pbnRzL2RldGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsa0JBQWtCLEVBQW1CLE1BQU0scUJBQXFCLENBQUM7QUFDMUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUVyQyxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUM7QUFDNUIsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDO0FBQzNCLE1BQU0sYUFBYSxHQUFHLEdBQUcsQ0FBQztBQUMxQixNQUFNLGFBQWEsR0FBRyxHQUFHLENBQUM7QUFDMUIsTUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDO0FBQzFCLE1BQU0sYUFBYSxHQUFHLENBQUMsQ0FBQztBQUV4QixNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUc7SUFDekIsTUFBTSxFQUFFLGVBQWUsYUFBYSx1QkFDbEMsYUFBYSxHQUFHLENBQ2xCLEtBQUs7SUFDTCxLQUFLLEVBQUUsZUFBZSxhQUFhLHVCQUNqQyxhQUFhLEdBQUcsQ0FDbEIsS0FBSztJQUNMLE1BQU0sRUFBRSxlQUFlLGFBQWEsdUJBQ2xDLGFBQWEsR0FBRyxDQUNsQixLQUFLO0lBQ0wsS0FBSyxFQUFFLGVBQWUsYUFBYSx1QkFDakMsYUFBYSxHQUFHLENBQ2xCLEtBQUs7SUFDTCxNQUFNLEVBQUUsZUFBZSxhQUFhLHVCQUNsQyxjQUFjLEdBQUcsQ0FDbkIsS0FBSztJQUNMLE9BQU8sRUFBRSxlQUFlLGNBQWMsS0FBSztJQUMzQyxPQUFPLEVBQ0wsZUFBZSxhQUFhLEdBQUcsQ0FBQyxtQ0FBbUM7UUFDbkUsZUFBZSxhQUFhLEdBQUcsQ0FBQyxrQ0FBa0M7SUFDcEUsTUFBTSxFQUNKLGVBQWUsYUFBYSw2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QUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBc0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVPLFVBQVUsQ0FBQyxNQUFnQjtRQUNqQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkQsQ0FBQzsrR0E1RlUsbUJBQW1CO21IQUFuQixtQkFBbUIsY0FETixNQUFNOzs0RkFDbkIsbUJBQW1CO2tCQUQvQixVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJyZWFrcG9pbnRPYnNlcnZlciwgQnJlYWtwb2ludFN0YXRlIH0gZnJvbSBcIkBhbmd1bGFyL2Nkay9sYXlvdXRcIjtcbmltcG9ydCB7IEluamVjdGFibGUsIGluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuXG5jb25zdCBicmVha3BvaW50X3h4bCA9IDE0MDA7XG5jb25zdCBicmVha3BvaW50X3hsID0gMTIwMDtcbmNvbnN0IGJyZWFrcG9pbnRfbGcgPSA5OTI7XG5jb25zdCBicmVha3BvaW50X21kID0gNzY4O1xuY29uc3QgYnJlYWtwb2ludF9zbSA9IDU3NjtcbmNvbnN0IGJyZWFrcG9pbnRfeHMgPSAwO1xuXG5leHBvcnQgY29uc3QgQnJlYWtwb2ludHMgPSB7XG4gIFhTbWFsbDogYChtaW4td2lkdGg6ICR7YnJlYWtwb2ludF94c31weCkgYW5kIChtYXgtd2lkdGg6ICR7XG4gICAgYnJlYWtwb2ludF9zbSAtIDFcbiAgfXB4KWAsXG4gIFNtYWxsOiBgKG1pbi13aWR0aDogJHticmVha3BvaW50X3NtfXB4KSBhbmQgKG1heC13aWR0aDogJHtcbiAgICBicmVha3BvaW50X21kIC0gMVxuICB9cHgpYCxcbiAgTWVkaXVtOiBgKG1pbi13aWR0aDogJHticmVha3BvaW50X21kfXB4KSBhbmQgKG1heC13aWR0aDogJHtcbiAgICBicmVha3BvaW50X2xnIC0gMVxuICB9cHgpYCxcbiAgTGFyZ2U6IGAobWluLXdpZHRoOiAke2JyZWFrcG9pbnRfbGd9cHgpIGFuZCAobWF4LXdpZHRoOiAke1xuICAgIGJyZWFrcG9pbnRfeGwgLSAxXG4gIH1weClgLFxuICBYTGFyZ2U6IGAobWluLXdpZHRoOiAke2JyZWFrcG9pbnRfeGx9cHgpIGFuZCAobWF4LXdpZHRoOiAke1xuICAgIGJyZWFrcG9pbnRfeHhsIC0gMVxuICB9cHgpYCxcbiAgWFhMYXJnZTogYChtaW4td2lkdGg6ICR7YnJlYWtwb2ludF94eGx9cHgpYCxcbiAgSGFuZHNldDpcbiAgICBgKG1heC13aWR0aDogJHticmVha3BvaW50X3NtIC0gMX1weCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpLCBgICtcbiAgICBgKG1heC13aWR0aDogJHticmVha3BvaW50X21kIC0gMX1weCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKWAsXG4gIFRhYmxldDpcbiAgICBgKG1pbi13aWR0aDogJHticmVha3BvaW50X3NtfXB4KSBhbmQgKG1heC13aWR0aDogODM5Ljk4cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSwgYCArXG4gICAgYChtaW4td2lkdGg6ICR7YnJlYWtwb2ludF9tZH1weCkgYW5kIChtYXgtd2lkdGg6ICR7XG4gICAgICBicmVha3BvaW50X2xnIC0gMVxuICAgIH1weCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKWAsXG4gIFdlYjpcbiAgICBgKG1pbi13aWR0aDogODQwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSwgYCArXG4gICAgYChtaW4td2lkdGg6ICR7YnJlYWtwb2ludF9sZ31weCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKWAsXG4gIEhhbmRzZXRQb3J0cmFpdDogYChtYXgtd2lkdGg6ICR7XG4gICAgYnJlYWtwb2ludF9zbSAtIDFcbiAgfXB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClgLFxuICBUYWJsZXRQb3J0cmFpdDogYChtaW4td2lkdGg6ICR7YnJlYWtwb2ludF9zbX1weCkgYW5kIChtYXgtd2lkdGg6IDgzOS45OHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClgLFxuICBXZWJQb3J0cmFpdDogYChtaW4td2lkdGg6IDg0MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClgLFxuICBIYW5kc2V0TGFuZHNjYXBlOiBgKG1heC13aWR0aDogJHtcbiAgICBicmVha3BvaW50X21kIC0gMVxuICB9cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlgLFxuICBUYWJsZXRMYW5kc2NhcGU6IGAobWluLXdpZHRoOiAke2JyZWFrcG9pbnRfbWR9cHgpIGFuZCAobWF4LXdpZHRoOiAke1xuICAgIGJyZWFrcG9pbnRfbGcgLSAxXG4gIH1weCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKWAsXG4gIFdlYkxhbmRzY2FwZTogYChtaW4td2lkdGg6ICR7YnJlYWtwb2ludF9sZ31weCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKWAsXG59O1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEJyZWFrcG9pbnREZXRlY3Rpb24ge1xuICBwdWJsaWMgYnJlYWtwb2ludE9ic2VydmVyID0gaW5qZWN0KEJyZWFrcG9pbnRPYnNlcnZlcik7XG5cbiAgcHVibGljIGlzTGVzc1RoYW5YUyA9IHRoaXMuX2lzTWF0Y2hlZChbQnJlYWtwb2ludHMuWFNtYWxsXSk7XG4gIHB1YmxpYyBpc0xlc3NUaGFuU00gPSB0aGlzLl9pc01hdGNoZWQoW1xuICAgIEJyZWFrcG9pbnRzLlhTbWFsbCxcbiAgICBCcmVha3BvaW50cy5TbWFsbCxcbiAgXSk7XG4gIHB1YmxpYyBpc0xlc3NUaGFuTUQgPSB0aGlzLl9pc01hdGNoZWQoW1xuICAgIEJyZWFrcG9pbnRzLlhTbWFsbCxcbiAgICBCcmVha3BvaW50cy5TbWFsbCxcbiAgICBCcmVha3BvaW50cy5NZWRpdW0sXG4gIF0pO1xuICBwdWJsaWMgaXNMZXNzVGhhbkxHID0gdGhpcy5faXNNYXRjaGVkKFtcbiAgICBCcmVha3BvaW50cy5YU21hbGwsXG4gICAgQnJlYWtwb2ludHMuU21hbGwsXG4gICAgQnJlYWtwb2ludHMuTWVkaXVtLFxuICAgIEJyZWFrcG9pbnRzLkxhcmdlLFxuICBdKTtcblxuICBwdWJsaWMgaXNNb3JlVGhhblhTID0gIXRoaXMuX2lzTWF0Y2hlZChbQnJlYWtwb2ludHMuWFNtYWxsXSk7XG4gIHB1YmxpYyBpc01vcmVUaGFuU00gPSAhdGhpcy5faXNNYXRjaGVkKFtcbiAgICBCcmVha3BvaW50cy5YU21hbGwsXG4gICAgQnJlYWtwb2ludHMuU21hbGwsXG4gIF0pO1xuICBwdWJsaWMgaXNNb3JlVGhhbk1EID0gIXRoaXMuX2lzTWF0Y2hlZChbXG4gICAgQnJlYWtwb2ludHMuWFNtYWxsLFxuICAgIEJyZWFrcG9pbnRzLlNtYWxsLFxuICAgIEJyZWFrcG9pbnRzLk1lZGl1bSxcbiAgXSk7XG4gIHB1YmxpYyBpc01vcmVUaGFuTEcgPSAhdGhpcy5faXNNYXRjaGVkKFtcbiAgICBCcmVha3BvaW50cy5YU21hbGwsXG4gICAgQnJlYWtwb2ludHMuU21hbGwsXG4gICAgQnJlYWtwb2ludHMuTWVkaXVtLFxuICAgIEJyZWFrcG9pbnRzLkxhcmdlLFxuICBdKTtcblxuICBwdWJsaWMgaXNMZXNzVGhhblhTJCA9IHRoaXMuX2lzTWF0Y2hlZCQoW0JyZWFrcG9pbnRzLlhTbWFsbF0pO1xuICBwdWJsaWMgaXNMZXNzVGhhblNNJCA9IHRoaXMuX2lzTWF0Y2hlZCQoW1xuICAgIEJyZWFrcG9pbnRzLlhTbWFsbCxcbiAgICBCcmVha3BvaW50cy5TbWFsbCxcbiAgXSk7XG4gIHB1YmxpYyBpc0xlc3NUaGFuTUQkID0gdGhpcy5faXNNYXRjaGVkJChbXG4gICAgQnJlYWtwb2ludHMuWFNtYWxsLFxuICAgIEJyZWFrcG9pbnRzLlNtYWxsLFxuICAgIEJyZWFrcG9pbnRzLk1lZGl1bSxcbiAgXSk7XG4gIHB1YmxpYyBpc0xlc3NUaGFuTEckID0gdGhpcy5faXNNYXRjaGVkJChbXG4gICAgQnJlYWtwb2ludHMuWFNtYWxsLFxuICAgIEJyZWFrcG9pbnRzLlNtYWxsLFxuICAgIEJyZWFrcG9pbnRzLk1lZGl1bSxcbiAgICBCcmVha3BvaW50cy5MYXJnZSxcbiAgXSk7XG5cbiAgcHVibGljIGlzTW9yZVRoYW5YUyQgPSB0aGlzLl9pc01hdGNoZWQkKFtCcmVha3BvaW50cy5YU21hbGxdKS5waXBlKFxuICAgIG1hcCgodmFsdWUpID0+ICF2YWx1ZSlcbiAgKTtcbiAgcHVibGljIGlzTW9yZVRoYW5TTSQgPSB0aGlzLl9pc01hdGNoZWQkKFtcbiAgICBCcmVha3BvaW50cy5YU21hbGwsXG4gICAgQnJlYWtwb2ludHMuU21hbGwsXG4gIF0pLnBpcGUobWFwKCh2YWx1ZSkgPT4gIXZhbHVlKSk7XG4gIHB1YmxpYyBpc01vcmVUaGFuTUQkID0gdGhpcy5faXNNYXRjaGVkJChbXG4gICAgQnJlYWtwb2ludHMuWFNtYWxsLFxuICAgIEJyZWFrcG9pbnRzLlNtYWxsLFxuICAgIEJyZWFrcG9pbnRzLk1lZGl1bSxcbiAgXSkucGlwZShtYXAoKHZhbHVlKSA9PiAhdmFsdWUpKTtcbiAgcHVibGljIGlzTW9yZVRoYW5MRyQgPSB0aGlzLl9pc01hdGNoZWQkKFtcbiAgICBCcmVha3BvaW50cy5YU21hbGwsXG4gICAgQnJlYWtwb2ludHMuU21hbGwsXG4gICAgQnJlYWtwb2ludHMuTWVkaXVtLFxuICAgIEJyZWFrcG9pbnRzLkxhcmdlLFxuICBdKS5waXBlKG1hcCgodmFsdWUpID0+ICF2YWx1ZSkpO1xuXG4gIHB1YmxpYyBpc01vYmlsZSA9IHRoaXMuaXNMZXNzVGhhblhTO1xuICBwdWJsaWMgaXNNb2JpbGUkID0gdGhpcy5pc0xlc3NUaGFuWFMkO1xuXG4gIHB1YmxpYyBpc1RhYmxldHRlID0gdGhpcy5pc0xlc3NUaGFuTUQ7XG4gIHB1YmxpYyBpc1RhYmxldHRlJCA9IHRoaXMuaXNMZXNzVGhhbk1EJDtcblxuICBwdWJsaWMgaXNEZXNrdG9wID0gdGhpcy5pc01vcmVUaGFuTEc7XG4gIHB1YmxpYyBpc0Rlc2t0b3AkID0gdGhpcy5pc01vcmVUaGFuTEckO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBwcml2YXRlIF9pc01hdGNoZWQkKHZhbHVlczogc3RyaW5nW10pIHtcbiAgICByZXR1cm4gdGhpcy5icmVha3BvaW50T2JzZXJ2ZXJcbiAgICAgIC5vYnNlcnZlKHZhbHVlcylcbiAgICAgIC5waXBlKG1hcCgoc3RhdGU6IEJyZWFrcG9pbnRTdGF0ZSkgPT4gc3RhdGUubWF0Y2hlcykpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaXNNYXRjaGVkKHZhbHVlczogc3RyaW5nW10pIHtcbiAgICByZXR1cm4gdGhpcy5icmVha3BvaW50T2JzZXJ2ZXIuaXNNYXRjaGVkKHZhbHVlcyk7XG4gIH1cbn1cbiJdfQ==