import { Pipe } from "@angular/core";
import * as i0 from "@angular/core";
const FILE_SIZE_UNITS = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
const FILE_SIZE_UNITS_LONG = [
    "Bytes",
    "Kilobytes",
    "Megabytes",
    "Gigabytes",
    "Pettabytes",
    "Exabytes",
    "Zettabytes",
    "Yottabytes",
];
export class FileSizePipe {
    transform(sizeInBytes, longForm = false) {
        if (sizeInBytes === null) {
            return "";
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
                    name: "fileSize",
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1zaXplLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3BpcGUvZmlsZS1zaXplLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBRXBELE1BQU0sZUFBZSxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM5RSxNQUFNLG9CQUFvQixHQUFHO0lBQzNCLE9BQU87SUFDUCxXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0NBQ2IsQ0FBQztBQUtGLE1BQU0sT0FBTyxZQUFZO0lBQ3ZCLFNBQVMsQ0FBQyxXQUEwQixFQUFFLFdBQW9CLEtBQUs7UUFDN0QsSUFBSSxXQUFXLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDekIsT0FBTyxFQUFFLENBQUM7UUFDWixDQUFDO1FBQ0QsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO1FBRWhFLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDL0QsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFMUMsTUFBTSxJQUFJLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pELE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNuRCxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFMUIsT0FBTyxHQUFHLGFBQWEsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUNwQyxDQUFDOytHQWZVLFlBQVk7NkdBQVosWUFBWTs7NEZBQVosWUFBWTtrQkFIeEIsSUFBSTttQkFBQztvQkFDSixJQUFJLEVBQUUsVUFBVTtpQkFDakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuY29uc3QgRklMRV9TSVpFX1VOSVRTID0gW1wiQlwiLCBcIktCXCIsIFwiTUJcIiwgXCJHQlwiLCBcIlRCXCIsIFwiUEJcIiwgXCJFQlwiLCBcIlpCXCIsIFwiWUJcIl07XG5jb25zdCBGSUxFX1NJWkVfVU5JVFNfTE9ORyA9IFtcbiAgXCJCeXRlc1wiLFxuICBcIktpbG9ieXRlc1wiLFxuICBcIk1lZ2FieXRlc1wiLFxuICBcIkdpZ2FieXRlc1wiLFxuICBcIlBldHRhYnl0ZXNcIixcbiAgXCJFeGFieXRlc1wiLFxuICBcIlpldHRhYnl0ZXNcIixcbiAgXCJZb3R0YWJ5dGVzXCIsXG5dO1xuXG5AUGlwZSh7XG4gIG5hbWU6IFwiZmlsZVNpemVcIixcbn0pXG5leHBvcnQgY2xhc3MgRmlsZVNpemVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShzaXplSW5CeXRlczogbnVtYmVyIHwgbnVsbCwgbG9uZ0Zvcm06IGJvb2xlYW4gPSBmYWxzZSk6IHN0cmluZyB7XG4gICAgaWYgKHNpemVJbkJ5dGVzID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgY29uc3QgdW5pdHMgPSBsb25nRm9ybSA/IEZJTEVfU0laRV9VTklUU19MT05HIDogRklMRV9TSVpFX1VOSVRTO1xuXG4gICAgbGV0IHBvd2VyID0gTWF0aC5yb3VuZChNYXRoLmxvZyhzaXplSW5CeXRlcykgLyBNYXRoLmxvZygxMDI0KSk7XG4gICAgcG93ZXIgPSBNYXRoLm1pbihwb3dlciwgdW5pdHMubGVuZ3RoIC0gMSk7XG5cbiAgICBjb25zdCBzaXplID0gc2l6ZUluQnl0ZXMgLyBNYXRoLnBvdygxMDI0LCBwb3dlcik7XG4gICAgY29uc3QgZm9ybWF0dGVkU2l6ZSA9IE1hdGgucm91bmQoc2l6ZSAqIDEwMCkgLyAxMDA7XG4gICAgY29uc3QgdW5pdCA9IHVuaXRzW3Bvd2VyXTtcblxuICAgIHJldHVybiBgJHtmb3JtYXR0ZWRTaXplfSAke3VuaXR9YDtcbiAgfVxufVxuIl19