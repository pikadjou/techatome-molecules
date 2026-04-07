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
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: FileSizePipe, isStandalone: true, name: "fileSize" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FileSizePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: "fileSize",
                    standalone: true,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1zaXplLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3BpcGUvZmlsZS1zaXplLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBRXBELE1BQU0sZUFBZSxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM5RSxNQUFNLG9CQUFvQixHQUFHO0lBQzNCLE9BQU87SUFDUCxXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0NBQ2IsQ0FBQztBQU1GLE1BQU0sT0FBTyxZQUFZO0lBQ3ZCLFNBQVMsQ0FBQyxXQUEwQixFQUFFLFdBQW9CLEtBQUs7UUFDN0QsSUFBSSxXQUFXLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDekIsT0FBTyxFQUFFLENBQUM7UUFDWixDQUFDO1FBQ0QsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO1FBRWhFLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDL0QsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFMUMsTUFBTSxJQUFJLEdBQUcsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pELE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNuRCxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFMUIsT0FBTyxHQUFHLGFBQWEsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUNwQyxDQUFDOytHQWZVLFlBQVk7NkdBQVosWUFBWTs7NEZBQVosWUFBWTtrQkFKeEIsSUFBSTttQkFBQztvQkFDSixJQUFJLEVBQUUsVUFBVTtvQkFDaEIsVUFBVSxFQUFFLElBQUk7aUJBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmNvbnN0IEZJTEVfU0laRV9VTklUUyA9IFtcIkJcIiwgXCJLQlwiLCBcIk1CXCIsIFwiR0JcIiwgXCJUQlwiLCBcIlBCXCIsIFwiRUJcIiwgXCJaQlwiLCBcIllCXCJdO1xuY29uc3QgRklMRV9TSVpFX1VOSVRTX0xPTkcgPSBbXG4gIFwiQnl0ZXNcIixcbiAgXCJLaWxvYnl0ZXNcIixcbiAgXCJNZWdhYnl0ZXNcIixcbiAgXCJHaWdhYnl0ZXNcIixcbiAgXCJQZXR0YWJ5dGVzXCIsXG4gIFwiRXhhYnl0ZXNcIixcbiAgXCJaZXR0YWJ5dGVzXCIsXG4gIFwiWW90dGFieXRlc1wiLFxuXTtcblxuQFBpcGUoe1xuICBuYW1lOiBcImZpbGVTaXplXCIsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIEZpbGVTaXplUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oc2l6ZUluQnl0ZXM6IG51bWJlciB8IG51bGwsIGxvbmdGb3JtOiBib29sZWFuID0gZmFsc2UpOiBzdHJpbmcge1xuICAgIGlmIChzaXplSW5CeXRlcyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIGNvbnN0IHVuaXRzID0gbG9uZ0Zvcm0gPyBGSUxFX1NJWkVfVU5JVFNfTE9ORyA6IEZJTEVfU0laRV9VTklUUztcblxuICAgIGxldCBwb3dlciA9IE1hdGgucm91bmQoTWF0aC5sb2coc2l6ZUluQnl0ZXMpIC8gTWF0aC5sb2coMTAyNCkpO1xuICAgIHBvd2VyID0gTWF0aC5taW4ocG93ZXIsIHVuaXRzLmxlbmd0aCAtIDEpO1xuXG4gICAgY29uc3Qgc2l6ZSA9IHNpemVJbkJ5dGVzIC8gTWF0aC5wb3coMTAyNCwgcG93ZXIpO1xuICAgIGNvbnN0IGZvcm1hdHRlZFNpemUgPSBNYXRoLnJvdW5kKHNpemUgKiAxMDApIC8gMTAwO1xuICAgIGNvbnN0IHVuaXQgPSB1bml0c1twb3dlcl07XG5cbiAgICByZXR1cm4gYCR7Zm9ybWF0dGVkU2l6ZX0gJHt1bml0fWA7XG4gIH1cbn1cbiJdfQ==