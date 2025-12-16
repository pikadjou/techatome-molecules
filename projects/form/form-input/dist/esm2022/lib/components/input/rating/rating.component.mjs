import { Component } from '@angular/core';
import { StarRatingModule } from 'angular-star-rating';
import { TaAbstractInputComponent } from '../../abstract.component';
import * as i0 from "@angular/core";
import * as i1 from "angular-star-rating";
export class RatingComponent extends TaAbstractInputComponent {
    constructor() {
        super();
    }
    ngOnInit() {
        super.ngOnInit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: RatingComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: RatingComponent, isStandalone: true, selector: "ta-input-rating", usesInheritance: true, ngImport: i0, template: "<star-rating [starType]=\"'svg'\" [rating]=\"2.63\"></star-rating>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: StarRatingModule }, { kind: "component", type: i1.StarRatingComponent, selector: "star-rating", inputs: ["getHalfStarVisible", "getColor"], outputs: ["starClickChange", "ratingChange", "hoverRatingChange"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: RatingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-input-rating', standalone: true, imports: [StarRatingModule], template: "<star-rating [starType]=\"'svg'\" [rating]=\"2.63\"></star-rating>\n" }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFJdkQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7OztBQVNwRSxNQUFNLE9BQU8sZUFBZ0IsU0FBUSx3QkFBcUM7SUFDeEU7UUFDRSxLQUFLLEVBQUUsQ0FBQztJQUNWLENBQUM7SUFFUSxRQUFRO1FBQ2YsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ25CLENBQUM7K0dBUFUsZUFBZTttR0FBZixlQUFlLGtHQ2Y1QixzRUFDQSx5RERZWSxnQkFBZ0I7OzRGQUVmLGVBQWU7a0JBUDNCLFNBQVM7K0JBQ0UsaUJBQWlCLGNBR2YsSUFBSSxXQUNQLENBQUMsZ0JBQWdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdGFyUmF0aW5nTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1zdGFyLXJhdGluZyc7XG5cbmltcG9ydCB7IElucHV0UmF0aW5nIH0gZnJvbSAnQHRhL2Zvcm0tbW9kZWwnO1xuXG5pbXBvcnQgeyBUYUFic3RyYWN0SW5wdXRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9hYnN0cmFjdC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS1pbnB1dC1yYXRpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmF0aW5nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmF0aW5nLmNvbXBvbmVudC5zY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtTdGFyUmF0aW5nTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgUmF0aW5nQ29tcG9uZW50IGV4dGVuZHMgVGFBYnN0cmFjdElucHV0Q29tcG9uZW50PElucHV0UmF0aW5nPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBvdmVycmlkZSBuZ09uSW5pdCgpIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICB9XG59XG4iLCI8c3Rhci1yYXRpbmcgW3N0YXJUeXBlXT1cIidzdmcnXCIgW3JhdGluZ109XCIyLjYzXCI+PC9zdGFyLXJhdGluZz5cbiJdfQ==