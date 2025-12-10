import { NgModule } from "@angular/core";
import { ListElementComponent } from "./element/list-element.component";
import { ListExtraInformationComponent } from "./extra-information/list-extra-information.component";
import { ListContainerComponent } from "./list-container/list-container.component";
import { ListSubTitleComponent } from "./sub-title/list-sub-title.component";
import { ListTagComponent } from "./tag/list-tag.component";
import { ListTitleComponent } from "./title/list-title.component";
import * as i0 from "@angular/core";
/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { TaListModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { ListTitleComponent, ListElementComponent, ListContainerComponent } from '@ta/library-name';
 */
export class TaListModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaListModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: TaListModule, imports: [ListTitleComponent,
            ListElementComponent,
            ListContainerComponent,
            ListSubTitleComponent,
            ListTagComponent,
            ListExtraInformationComponent], exports: [ListTitleComponent,
            ListElementComponent,
            ListContainerComponent,
            ListSubTitleComponent,
            ListTagComponent,
            ListExtraInformationComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaListModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaListModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        ListTitleComponent,
                        ListElementComponent,
                        ListContainerComponent,
                        ListSubTitleComponent,
                        ListTagComponent,
                        ListExtraInformationComponent,
                    ],
                    exports: [
                        ListTitleComponent,
                        ListElementComponent,
                        ListContainerComponent,
                        ListSubTitleComponent,
                        ListTagComponent,
                        ListExtraInformationComponent,
                    ],
                    providers: [],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvbGlzdC9saXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQUVsRTs7Ozs7Ozs7OztHQVVHO0FBcUJILE1BQU0sT0FBTyxZQUFZOytHQUFaLFlBQVk7Z0hBQVosWUFBWSxZQWpCckIsa0JBQWtCO1lBQ2xCLG9CQUFvQjtZQUNwQixzQkFBc0I7WUFDdEIscUJBQXFCO1lBQ3JCLGdCQUFnQjtZQUNoQiw2QkFBNkIsYUFHN0Isa0JBQWtCO1lBQ2xCLG9CQUFvQjtZQUNwQixzQkFBc0I7WUFDdEIscUJBQXFCO1lBQ3JCLGdCQUFnQjtZQUNoQiw2QkFBNkI7Z0hBSXBCLFlBQVk7OzRGQUFaLFlBQVk7a0JBcEJ4QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUU7d0JBQ1Asa0JBQWtCO3dCQUNsQixvQkFBb0I7d0JBQ3BCLHNCQUFzQjt3QkFDdEIscUJBQXFCO3dCQUNyQixnQkFBZ0I7d0JBQ2hCLDZCQUE2QjtxQkFDOUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGtCQUFrQjt3QkFDbEIsb0JBQW9CO3dCQUNwQixzQkFBc0I7d0JBQ3RCLHFCQUFxQjt3QkFDckIsZ0JBQWdCO3dCQUNoQiw2QkFBNkI7cUJBQzlCO29CQUNELFNBQVMsRUFBRSxFQUFFO2lCQUNkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBMaXN0RWxlbWVudENvbXBvbmVudCB9IGZyb20gXCIuL2VsZW1lbnQvbGlzdC1lbGVtZW50LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTGlzdEV4dHJhSW5mb3JtYXRpb25Db21wb25lbnQgfSBmcm9tIFwiLi9leHRyYS1pbmZvcm1hdGlvbi9saXN0LWV4dHJhLWluZm9ybWF0aW9uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTGlzdENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gXCIuL2xpc3QtY29udGFpbmVyL2xpc3QtY29udGFpbmVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTGlzdFN1YlRpdGxlQ29tcG9uZW50IH0gZnJvbSBcIi4vc3ViLXRpdGxlL2xpc3Qtc3ViLXRpdGxlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTGlzdFRhZ0NvbXBvbmVudCB9IGZyb20gXCIuL3RhZy9saXN0LXRhZy5jb21wb25lbnRcIjtcbmltcG9ydCB7IExpc3RUaXRsZUNvbXBvbmVudCB9IGZyb20gXCIuL3RpdGxlL2xpc3QtdGl0bGUuY29tcG9uZW50XCI7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHN0YW5kYWxvbmUgY29tcG9uZW50cyBpbnN0ZWFkLlxuICogVGhpcyBtb2R1bGUgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHZlcnNpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEluc3RlYWQgb2YgaW1wb3J0aW5nIHRoZSBtb2R1bGU6XG4gKiAvLyBpbXBvcnQgeyBUYUxpc3RNb2R1bGUgfSBmcm9tICdAdGEvbGlicmFyeS1uYW1lJztcbiAqXG4gKiAvLyBJbXBvcnQgdGhlIHN0YW5kYWxvbmUgY29tcG9uZW50cyBkaXJlY3RseTpcbiAqIGltcG9ydCB7IExpc3RUaXRsZUNvbXBvbmVudCwgTGlzdEVsZW1lbnRDb21wb25lbnQsIExpc3RDb250YWluZXJDb21wb25lbnQgfSBmcm9tICdAdGEvbGlicmFyeS1uYW1lJztcbiAqL1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgaW1wb3J0czogW1xuICAgIExpc3RUaXRsZUNvbXBvbmVudCxcbiAgICBMaXN0RWxlbWVudENvbXBvbmVudCxcbiAgICBMaXN0Q29udGFpbmVyQ29tcG9uZW50LFxuICAgIExpc3RTdWJUaXRsZUNvbXBvbmVudCxcbiAgICBMaXN0VGFnQ29tcG9uZW50LFxuICAgIExpc3RFeHRyYUluZm9ybWF0aW9uQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTGlzdFRpdGxlQ29tcG9uZW50LFxuICAgIExpc3RFbGVtZW50Q29tcG9uZW50LFxuICAgIExpc3RDb250YWluZXJDb21wb25lbnQsXG4gICAgTGlzdFN1YlRpdGxlQ29tcG9uZW50LFxuICAgIExpc3RUYWdDb21wb25lbnQsXG4gICAgTGlzdEV4dHJhSW5mb3JtYXRpb25Db21wb25lbnQsXG4gIF0sXG4gIHByb3ZpZGVyczogW10sXG59KVxuZXhwb3J0IGNsYXNzIFRhTGlzdE1vZHVsZSB7fVxuIl19