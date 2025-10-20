import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
const FILE_SIZE_UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
const FILE_SIZE_UNITS_LONG = [
    'Bytes',
    'Kilobytes',
    'Megabytes',
    'Gigabytes',
    'Pettabytes',
    'Exabytes',
    'Zettabytes',
    'Yottabytes',
];
export class FileSizePipe {
    transform(sizeInBytes, longForm = false) {
        if (sizeInBytes === null) {
            return '';
        }
        const units = longForm ? FILE_SIZE_UNITS_LONG : FILE_SIZE_UNITS;
        let power = Math.round(Math.log(sizeInBytes) / Math.log(1024));
        power = Math.min(power, units.length - 1);
        const size = sizeInBytes / Math.pow(1024, power);
        const formattedSize = Math.round(size * 100) / 100;
        const unit = units[power];
        return `${formattedSize} ${unit}`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FileSizePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: FileSizePipe, name: "fileSize" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FileSizePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'fileSize',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1zaXplLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3BpcGUvZmlsZS1zaXplLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBRXBELE1BQU0sZUFBZSxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM5RSxNQUFNLG9CQUFvQixHQUFHO0lBQzNCLE9BQU87SUFDUCxXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0NBQ2IsQ0FBQztBQUtGLE1BQU0sT0FBTyxZQUFZO0lBQ3ZCLFNBQVMsQ0FBQyxXQUEwQixFQUFFLFdBQW9CLEtBQUs7UUFDN0QsSUFBSSxXQUFXLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDekIsT0FBTyxFQUFFLENBQUM7UUFDWixDQUFDO1FBQ0QsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO1FBRWhFLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDL0QsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFMUMsTUFBTSxJQUFJLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pELE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNuRCxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFMUIsT0FBTyxHQUFHLGFBQWEsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUNwQyxDQUFDOytHQWZVLFlBQVk7NkdBQVosWUFBWTs7NEZBQVosWUFBWTtrQkFIeEIsSUFBSTttQkFBQztvQkFDSixJQUFJLEVBQUUsVUFBVTtpQkFDakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmNvbnN0IEZJTEVfU0laRV9VTklUUyA9IFsnQicsICdLQicsICdNQicsICdHQicsICdUQicsICdQQicsICdFQicsICdaQicsICdZQiddO1xuY29uc3QgRklMRV9TSVpFX1VOSVRTX0xPTkcgPSBbXG4gICdCeXRlcycsXG4gICdLaWxvYnl0ZXMnLFxuICAnTWVnYWJ5dGVzJyxcbiAgJ0dpZ2FieXRlcycsXG4gICdQZXR0YWJ5dGVzJyxcbiAgJ0V4YWJ5dGVzJyxcbiAgJ1pldHRhYnl0ZXMnLFxuICAnWW90dGFieXRlcycsXG5dO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdmaWxlU2l6ZScsXG59KVxuZXhwb3J0IGNsYXNzIEZpbGVTaXplUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oc2l6ZUluQnl0ZXM6IG51bWJlciB8IG51bGwsIGxvbmdGb3JtOiBib29sZWFuID0gZmFsc2UpOiBzdHJpbmcge1xuICAgIGlmIChzaXplSW5CeXRlcyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBjb25zdCB1bml0cyA9IGxvbmdGb3JtID8gRklMRV9TSVpFX1VOSVRTX0xPTkcgOiBGSUxFX1NJWkVfVU5JVFM7XG5cbiAgICBsZXQgcG93ZXIgPSBNYXRoLnJvdW5kKE1hdGgubG9nKHNpemVJbkJ5dGVzKSAvIE1hdGgubG9nKDEwMjQpKTtcbiAgICBwb3dlciA9IE1hdGgubWluKHBvd2VyLCB1bml0cy5sZW5ndGggLSAxKTtcblxuICAgIGNvbnN0IHNpemUgPSBzaXplSW5CeXRlcyAvIE1hdGgucG93KDEwMjQsIHBvd2VyKTtcbiAgICBjb25zdCBmb3JtYXR0ZWRTaXplID0gTWF0aC5yb3VuZChzaXplICogMTAwKSAvIDEwMDtcbiAgICBjb25zdCB1bml0ID0gdW5pdHNbcG93ZXJdO1xuXG4gICAgcmV0dXJuIGAke2Zvcm1hdHRlZFNpemV9ICR7dW5pdH1gO1xuICB9XG59XG4iXX0=