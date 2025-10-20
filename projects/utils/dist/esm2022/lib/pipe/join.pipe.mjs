import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class JoinPipe {
    transform(input, sep = ', ') {
        return input.join(sep);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: JoinPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: JoinPipe, isStandalone: true, name: "join" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: JoinPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'join',
                    standalone: true,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9pbi5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9waXBlL2pvaW4ucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFNcEQsTUFBTSxPQUFPLFFBQVE7SUFDbkIsU0FBUyxDQUFDLEtBQWlCLEVBQUUsR0FBRyxHQUFHLElBQUk7UUFDckMsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7K0dBSFUsUUFBUTs2R0FBUixRQUFROzs0RkFBUixRQUFRO2tCQUpwQixJQUFJO21CQUFDO29CQUNKLElBQUksRUFBRSxNQUFNO29CQUNaLFVBQVUsRUFBRSxJQUFJO2lCQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnam9pbicsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIEpvaW5QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShpbnB1dDogQXJyYXk8YW55Piwgc2VwID0gJywgJyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGlucHV0LmpvaW4oc2VwKTtcbiAgfVxufVxuIl19