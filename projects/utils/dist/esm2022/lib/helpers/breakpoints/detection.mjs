import { BreakpointObserver } from '@angular/cdk/layout';
import { inject } from '@angular/core';
import { map } from 'rxjs/operators';
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0ZWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9oZWxwZXJzL2JyZWFrcG9pbnRzL2RldGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsa0JBQWtCLEVBQW1CLE1BQU0scUJBQXFCLENBQUM7QUFDMUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDO0FBQzVCLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQztBQUMzQixNQUFNLGFBQWEsR0FBRyxHQUFHLENBQUM7QUFDMUIsTUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDO0FBQzFCLE1BQU0sYUFBYSxHQUFHLEdBQUcsQ0FBQztBQUMxQixNQUFNLGFBQWEsR0FBRyxDQUFDLENBQUM7QUFFeEIsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHO0lBQ3pCLE1BQU0sRUFBRSxlQUFlLGFBQWEsdUJBQ2xDLGFBQWEsR0FBRyxDQUNsQixLQUFLO0lBQ0wsS0FBSyxFQUFFLGVBQWUsYUFBYSx1QkFDakMsYUFBYSxHQUFHLENBQ2xCLEtBQUs7SUFDTCxNQUFNLEVBQUUsZUFBZSxhQUFhLHVCQUNsQyxhQUFhLEdBQUcsQ0FDbEIsS0FBSztJQUNMLEtBQUssRUFBRSxlQUFlLGFBQWEsdUJBQ2pDLGFBQWEsR0FBRyxDQUNsQixLQUFLO0lBQ0wsTUFBTSxFQUFFLGVBQWUsYUFBYSx1QkFDbEMsY0FBYyxHQUFHLENBQ25CLEtBQUs7SUFDTCxPQUFPLEVBQUUsZUFBZSxjQUFjLEtBQUs7SUFDM0MsT0FBTyxFQUNMLGVBQWUsYUFBYSxHQUFHLENBQUMsbUNBQW1DO1FBQ25FLGVBQWUsYUFBYSxHQUFHLENBQUMsa0NBQWtDO0lBQ3BFLE1BQU0sRUFDSixlQUFlLGFBQWEsNkRBQTZEO1FBQ3pG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QUcsQ0FBQyxDQUFDLEtBQXNCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFTyxVQUFVLENBQUMsTUFBZ0I7UUFDakMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25ELENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJyZWFrcG9pbnRPYnNlcnZlciwgQnJlYWtwb2ludFN0YXRlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5jb25zdCBicmVha3BvaW50X3h4bCA9IDE0MDA7XG5jb25zdCBicmVha3BvaW50X3hsID0gMTIwMDtcbmNvbnN0IGJyZWFrcG9pbnRfbGcgPSA5OTI7XG5jb25zdCBicmVha3BvaW50X21kID0gNzY4O1xuY29uc3QgYnJlYWtwb2ludF9zbSA9IDU3NjtcbmNvbnN0IGJyZWFrcG9pbnRfeHMgPSAwO1xuXG5leHBvcnQgY29uc3QgQnJlYWtwb2ludHMgPSB7XG4gIFhTbWFsbDogYChtaW4td2lkdGg6ICR7YnJlYWtwb2ludF94c31weCkgYW5kIChtYXgtd2lkdGg6ICR7XG4gICAgYnJlYWtwb2ludF9zbSAtIDFcbiAgfXB4KWAsXG4gIFNtYWxsOiBgKG1pbi13aWR0aDogJHticmVha3BvaW50X3NtfXB4KSBhbmQgKG1heC13aWR0aDogJHtcbiAgICBicmVha3BvaW50X21kIC0gMVxuICB9cHgpYCxcbiAgTWVkaXVtOiBgKG1pbi13aWR0aDogJHticmVha3BvaW50X21kfXB4KSBhbmQgKG1heC13aWR0aDogJHtcbiAgICBicmVha3BvaW50X2xnIC0gMVxuICB9cHgpYCxcbiAgTGFyZ2U6IGAobWluLXdpZHRoOiAke2JyZWFrcG9pbnRfbGd9cHgpIGFuZCAobWF4LXdpZHRoOiAke1xuICAgIGJyZWFrcG9pbnRfeGwgLSAxXG4gIH1weClgLFxuICBYTGFyZ2U6IGAobWluLXdpZHRoOiAke2JyZWFrcG9pbnRfeGx9cHgpIGFuZCAobWF4LXdpZHRoOiAke1xuICAgIGJyZWFrcG9pbnRfeHhsIC0gMVxuICB9cHgpYCxcbiAgWFhMYXJnZTogYChtaW4td2lkdGg6ICR7YnJlYWtwb2ludF94eGx9cHgpYCxcbiAgSGFuZHNldDpcbiAgICBgKG1heC13aWR0aDogJHticmVha3BvaW50X3NtIC0gMX1weCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpLCBgICtcbiAgICBgKG1heC13aWR0aDogJHticmVha3BvaW50X21kIC0gMX1weCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKWAsXG4gIFRhYmxldDpcbiAgICBgKG1pbi13aWR0aDogJHticmVha3BvaW50X3NtfXB4KSBhbmQgKG1heC13aWR0aDogODM5Ljk4cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSwgYCArXG4gICAgYChtaW4td2lkdGg6ICR7YnJlYWtwb2ludF9tZH1weCkgYW5kIChtYXgtd2lkdGg6ICR7XG4gICAgICBicmVha3BvaW50X2xnIC0gMVxuICAgIH1weCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKWAsXG4gIFdlYjpcbiAgICBgKG1pbi13aWR0aDogODQwcHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSwgYCArXG4gICAgYChtaW4td2lkdGg6ICR7YnJlYWtwb2ludF9sZ31weCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKWAsXG4gIEhhbmRzZXRQb3J0cmFpdDogYChtYXgtd2lkdGg6ICR7XG4gICAgYnJlYWtwb2ludF9zbSAtIDFcbiAgfXB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClgLFxuICBUYWJsZXRQb3J0cmFpdDogYChtaW4td2lkdGg6ICR7YnJlYWtwb2ludF9zbX1weCkgYW5kIChtYXgtd2lkdGg6IDgzOS45OHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClgLFxuICBXZWJQb3J0cmFpdDogYChtaW4td2lkdGg6IDg0MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClgLFxuICBIYW5kc2V0TGFuZHNjYXBlOiBgKG1heC13aWR0aDogJHtcbiAgICBicmVha3BvaW50X21kIC0gMVxuICB9cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlgLFxuICBUYWJsZXRMYW5kc2NhcGU6IGAobWluLXdpZHRoOiAke2JyZWFrcG9pbnRfbWR9cHgpIGFuZCAobWF4LXdpZHRoOiAke1xuICAgIGJyZWFrcG9pbnRfbGcgLSAxXG4gIH1weCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKWAsXG4gIFdlYkxhbmRzY2FwZTogYChtaW4td2lkdGg6ICR7YnJlYWtwb2ludF9sZ31weCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKWAsXG59O1xuXG5leHBvcnQgY2xhc3MgQnJlYWtwb2ludERldGVjdGlvbiB7XG4gIHB1YmxpYyBicmVha3BvaW50T2JzZXJ2ZXIgPSBpbmplY3QoQnJlYWtwb2ludE9ic2VydmVyKTtcblxuICBwdWJsaWMgaXNMZXNzVGhhblhTID0gdGhpcy5faXNNYXRjaGVkKFtCcmVha3BvaW50cy5YU21hbGxdKTtcbiAgcHVibGljIGlzTGVzc1RoYW5TTSA9IHRoaXMuX2lzTWF0Y2hlZChbXG4gICAgQnJlYWtwb2ludHMuWFNtYWxsLFxuICAgIEJyZWFrcG9pbnRzLlNtYWxsLFxuICBdKTtcbiAgcHVibGljIGlzTGVzc1RoYW5NRCA9IHRoaXMuX2lzTWF0Y2hlZChbXG4gICAgQnJlYWtwb2ludHMuWFNtYWxsLFxuICAgIEJyZWFrcG9pbnRzLlNtYWxsLFxuICAgIEJyZWFrcG9pbnRzLk1lZGl1bSxcbiAgXSk7XG4gIHB1YmxpYyBpc0xlc3NUaGFuTEcgPSB0aGlzLl9pc01hdGNoZWQoW1xuICAgIEJyZWFrcG9pbnRzLlhTbWFsbCxcbiAgICBCcmVha3BvaW50cy5TbWFsbCxcbiAgICBCcmVha3BvaW50cy5NZWRpdW0sXG4gICAgQnJlYWtwb2ludHMuTGFyZ2UsXG4gIF0pO1xuXG4gIHB1YmxpYyBpc01vcmVUaGFuWFMgPSAhdGhpcy5faXNNYXRjaGVkKFtCcmVha3BvaW50cy5YU21hbGxdKTtcbiAgcHVibGljIGlzTW9yZVRoYW5TTSA9ICF0aGlzLl9pc01hdGNoZWQoW1xuICAgIEJyZWFrcG9pbnRzLlhTbWFsbCxcbiAgICBCcmVha3BvaW50cy5TbWFsbCxcbiAgXSk7XG4gIHB1YmxpYyBpc01vcmVUaGFuTUQgPSAhdGhpcy5faXNNYXRjaGVkKFtcbiAgICBCcmVha3BvaW50cy5YU21hbGwsXG4gICAgQnJlYWtwb2ludHMuU21hbGwsXG4gICAgQnJlYWtwb2ludHMuTWVkaXVtLFxuICBdKTtcbiAgcHVibGljIGlzTW9yZVRoYW5MRyA9ICF0aGlzLl9pc01hdGNoZWQoW1xuICAgIEJyZWFrcG9pbnRzLlhTbWFsbCxcbiAgICBCcmVha3BvaW50cy5TbWFsbCxcbiAgICBCcmVha3BvaW50cy5NZWRpdW0sXG4gICAgQnJlYWtwb2ludHMuTGFyZ2UsXG4gIF0pO1xuXG4gIHB1YmxpYyBpc0xlc3NUaGFuWFMkID0gdGhpcy5faXNNYXRjaGVkJChbQnJlYWtwb2ludHMuWFNtYWxsXSk7XG4gIHB1YmxpYyBpc0xlc3NUaGFuU00kID0gdGhpcy5faXNNYXRjaGVkJChbXG4gICAgQnJlYWtwb2ludHMuWFNtYWxsLFxuICAgIEJyZWFrcG9pbnRzLlNtYWxsLFxuICBdKTtcbiAgcHVibGljIGlzTGVzc1RoYW5NRCQgPSB0aGlzLl9pc01hdGNoZWQkKFtcbiAgICBCcmVha3BvaW50cy5YU21hbGwsXG4gICAgQnJlYWtwb2ludHMuU21hbGwsXG4gICAgQnJlYWtwb2ludHMuTWVkaXVtLFxuICBdKTtcbiAgcHVibGljIGlzTGVzc1RoYW5MRyQgPSB0aGlzLl9pc01hdGNoZWQkKFtcbiAgICBCcmVha3BvaW50cy5YU21hbGwsXG4gICAgQnJlYWtwb2ludHMuU21hbGwsXG4gICAgQnJlYWtwb2ludHMuTWVkaXVtLFxuICAgIEJyZWFrcG9pbnRzLkxhcmdlLFxuICBdKTtcblxuICBwdWJsaWMgaXNNb3JlVGhhblhTJCA9IHRoaXMuX2lzTWF0Y2hlZCQoW0JyZWFrcG9pbnRzLlhTbWFsbF0pLnBpcGUoXG4gICAgbWFwKCh2YWx1ZSkgPT4gIXZhbHVlKVxuICApO1xuICBwdWJsaWMgaXNNb3JlVGhhblNNJCA9IHRoaXMuX2lzTWF0Y2hlZCQoW1xuICAgIEJyZWFrcG9pbnRzLlhTbWFsbCxcbiAgICBCcmVha3BvaW50cy5TbWFsbCxcbiAgXSkucGlwZShtYXAoKHZhbHVlKSA9PiAhdmFsdWUpKTtcbiAgcHVibGljIGlzTW9yZVRoYW5NRCQgPSB0aGlzLl9pc01hdGNoZWQkKFtcbiAgICBCcmVha3BvaW50cy5YU21hbGwsXG4gICAgQnJlYWtwb2ludHMuU21hbGwsXG4gICAgQnJlYWtwb2ludHMuTWVkaXVtLFxuICBdKS5waXBlKG1hcCgodmFsdWUpID0+ICF2YWx1ZSkpO1xuICBwdWJsaWMgaXNNb3JlVGhhbkxHJCA9IHRoaXMuX2lzTWF0Y2hlZCQoW1xuICAgIEJyZWFrcG9pbnRzLlhTbWFsbCxcbiAgICBCcmVha3BvaW50cy5TbWFsbCxcbiAgICBCcmVha3BvaW50cy5NZWRpdW0sXG4gICAgQnJlYWtwb2ludHMuTGFyZ2UsXG4gIF0pLnBpcGUobWFwKCh2YWx1ZSkgPT4gIXZhbHVlKSk7XG5cbiAgcHVibGljIGlzTW9iaWxlID0gdGhpcy5pc0xlc3NUaGFuWFM7XG4gIHB1YmxpYyBpc01vYmlsZSQgPSB0aGlzLmlzTGVzc1RoYW5YUyQ7XG5cbiAgcHVibGljIGlzVGFibGV0dGUgPSB0aGlzLmlzTGVzc1RoYW5NRDtcbiAgcHVibGljIGlzVGFibGV0dGUkID0gdGhpcy5pc0xlc3NUaGFuTUQkO1xuXG4gIHB1YmxpYyBpc0Rlc2t0b3AgPSB0aGlzLmlzTW9yZVRoYW5MRztcbiAgcHVibGljIGlzRGVza3RvcCQgPSB0aGlzLmlzTW9yZVRoYW5MRyQ7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHByaXZhdGUgX2lzTWF0Y2hlZCQodmFsdWVzOiBzdHJpbmdbXSkge1xuICAgIHJldHVybiB0aGlzLmJyZWFrcG9pbnRPYnNlcnZlclxuICAgICAgLm9ic2VydmUodmFsdWVzKVxuICAgICAgLnBpcGUobWFwKChzdGF0ZTogQnJlYWtwb2ludFN0YXRlKSA9PiBzdGF0ZS5tYXRjaGVzKSk7XG4gIH1cblxuICBwcml2YXRlIF9pc01hdGNoZWQodmFsdWVzOiBzdHJpbmdbXSkge1xuICAgIHJldHVybiB0aGlzLmJyZWFrcG9pbnRPYnNlcnZlci5pc01hdGNoZWQodmFsdWVzKTtcbiAgfVxufVxuIl19