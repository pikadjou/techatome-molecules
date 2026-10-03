import { signal } from '@angular/core';
/** État partagé entre un parent et une modale : entrée `T` poussée à l'ouverture, résultat `U` rendu à la fermeture. */
export class ModalState {
    constructor() {
        this.open = signal(false);
        this.input = signal(null);
        this.output = signal(null);
    }
    asked(input) {
        this.input.set(input);
        this.output.set(null);
        this.open.set(true);
    }
    completed(output) {
        this.output.set(output);
        this.open.set(false);
    }
    /** Fermeture sans résultat. */
    dismissed() {
        this.open.set(false);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2hlbHBlcnMvbW9kYWwvc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2Qyx3SEFBd0g7QUFDeEgsTUFBTSxPQUFPLFVBQVU7SUFBdkI7UUFDUyxTQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLFVBQUssR0FBRyxNQUFNLENBQXVCLElBQUksQ0FBQyxDQUFDO1FBQzNDLFdBQU0sR0FBRyxNQUFNLENBQVcsSUFBSSxDQUFDLENBQUM7SUFpQnpDLENBQUM7SUFmUSxLQUFLLENBQUMsS0FBUTtRQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRU0sU0FBUyxDQUFDLE1BQVM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELCtCQUErQjtJQUN4QixTQUFTO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2lnbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKiogw4l0YXQgcGFydGFnw6kgZW50cmUgdW4gcGFyZW50IGV0IHVuZSBtb2RhbGUgOiBlbnRyw6llIGBUYCBwb3Vzc8OpZSDDoCBsJ291dmVydHVyZSwgcsOpc3VsdGF0IGBVYCByZW5kdSDDoCBsYSBmZXJtZXR1cmUuICovXHJcbmV4cG9ydCBjbGFzcyBNb2RhbFN0YXRlPFQsIFU+IHtcclxuICBwdWJsaWMgb3BlbiA9IHNpZ25hbChmYWxzZSk7XHJcbiAgcHVibGljIGlucHV0ID0gc2lnbmFsPFQgfCBudWxsIHwgdW5kZWZpbmVkPihudWxsKTtcclxuICBwdWJsaWMgb3V0cHV0ID0gc2lnbmFsPFUgfCBudWxsPihudWxsKTtcclxuXHJcbiAgcHVibGljIGFza2VkKGlucHV0OiBUKSB7XHJcbiAgICB0aGlzLmlucHV0LnNldChpbnB1dCk7XHJcbiAgICB0aGlzLm91dHB1dC5zZXQobnVsbCk7XHJcbiAgICB0aGlzLm9wZW4uc2V0KHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbXBsZXRlZChvdXRwdXQ6IFUpIHtcclxuICAgIHRoaXMub3V0cHV0LnNldChvdXRwdXQpO1xyXG4gICAgdGhpcy5vcGVuLnNldChmYWxzZSk7XHJcbiAgfVxyXG5cclxuICAvKiogRmVybWV0dXJlIHNhbnMgcsOpc3VsdGF0LiAqL1xyXG4gIHB1YmxpYyBkaXNtaXNzZWQoKSB7XHJcbiAgICB0aGlzLm9wZW4uc2V0KGZhbHNlKTtcclxuICB9XHJcbn1cclxuIl19