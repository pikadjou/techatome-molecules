import { NgModule } from '@angular/core';
import { ListElementComponent } from './element/list-element.component';
import { ListExtraInformationComponent } from './extra-information/list-extra-information.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { ListSubTitleComponent } from './sub-title/list-sub-title.component';
import { ListTagComponent } from './tag/list-tag.component';
import { ListTitleComponent } from './title/list-title.component';
import * as i0 from "@angular/core";
/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { CamListModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { ListTitleComponent, ListElementComponent, ListContainerComponent } from '@ta/library-name';
 */
export class CamListModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamListModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: CamListModule, imports: [ListTitleComponent, ListElementComponent, ListContainerComponent, ListSubTitleComponent, ListTagComponent, ListExtraInformationComponent], exports: [ListTitleComponent,
            ListElementComponent,
            ListContainerComponent,
            ListSubTitleComponent,
            ListTagComponent,
            ListExtraInformationComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamListModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamListModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [ListTitleComponent, ListElementComponent, ListContainerComponent, ListSubTitleComponent, ListTagComponent, ListExtraInformationComponent],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvbGlzdC9saXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQUVsRTs7Ozs7Ozs7OztHQVVHO0FBZ0JILE1BQU0sT0FBTyxhQUFhOytHQUFiLGFBQWE7Z0hBQWIsYUFBYSxZQVpkLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLHNCQUFzQixFQUFFLHFCQUFxQixFQUFFLGdCQUFnQixFQUFFLDZCQUE2QixhQUVoSixrQkFBa0I7WUFDbEIsb0JBQW9CO1lBQ3BCLHNCQUFzQjtZQUN0QixxQkFBcUI7WUFDckIsZ0JBQWdCO1lBQ2hCLDZCQUE2QjtnSEFLcEIsYUFBYTs7NEZBQWIsYUFBYTtrQkFmekIsUUFBUTttQkFBQztvQkFFUixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsb0JBQW9CLEVBQUUsc0JBQXNCLEVBQUUscUJBQXFCLEVBQUUsZ0JBQWdCLEVBQUUsNkJBQTZCLENBQUM7b0JBQ25KLE9BQU8sRUFBRTt3QkFDUCxrQkFBa0I7d0JBQ2xCLG9CQUFvQjt3QkFDcEIsc0JBQXNCO3dCQUN0QixxQkFBcUI7d0JBQ3JCLGdCQUFnQjt3QkFDaEIsNkJBQTZCO3FCQUM5QjtvQkFDRCxTQUFTLEVBQUUsRUFBRTtpQkFFZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExpc3RFbGVtZW50Q29tcG9uZW50IH0gZnJvbSAnLi9lbGVtZW50L2xpc3QtZWxlbWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdEV4dHJhSW5mb3JtYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2V4dHJhLWluZm9ybWF0aW9uL2xpc3QtZXh0cmEtaW5mb3JtYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2xpc3QtY29udGFpbmVyL2xpc3QtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0U3ViVGl0bGVDb21wb25lbnQgfSBmcm9tICcuL3N1Yi10aXRsZS9saXN0LXN1Yi10aXRsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFRhZ0NvbXBvbmVudCB9IGZyb20gJy4vdGFnL2xpc3QtdGFnLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0VGl0bGVDb21wb25lbnQgfSBmcm9tICcuL3RpdGxlL2xpc3QtdGl0bGUuY29tcG9uZW50JztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Ugc3RhbmRhbG9uZSBjb21wb25lbnRzIGluc3RlYWQuXG4gKiBUaGlzIG1vZHVsZSB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgdmVyc2lvbi5cbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIEluc3RlYWQgb2YgaW1wb3J0aW5nIHRoZSBtb2R1bGU6XG4gKiAvLyBpbXBvcnQgeyBDYW1MaXN0TW9kdWxlIH0gZnJvbSAnQHRhL2xpYnJhcnktbmFtZSc7XG4gKiBcbiAqIC8vIEltcG9ydCB0aGUgc3RhbmRhbG9uZSBjb21wb25lbnRzIGRpcmVjdGx5OlxuICogaW1wb3J0IHsgTGlzdFRpdGxlQ29tcG9uZW50LCBMaXN0RWxlbWVudENvbXBvbmVudCwgTGlzdENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJ0B0YS9saWJyYXJ5LW5hbWUnO1xuICovXG5ATmdNb2R1bGUoe1xuXG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGltcG9ydHM6IFtMaXN0VGl0bGVDb21wb25lbnQsIExpc3RFbGVtZW50Q29tcG9uZW50LCBMaXN0Q29udGFpbmVyQ29tcG9uZW50LCBMaXN0U3ViVGl0bGVDb21wb25lbnQsIExpc3RUYWdDb21wb25lbnQsIExpc3RFeHRyYUluZm9ybWF0aW9uQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1xuICAgIExpc3RUaXRsZUNvbXBvbmVudCxcbiAgICBMaXN0RWxlbWVudENvbXBvbmVudCxcbiAgICBMaXN0Q29udGFpbmVyQ29tcG9uZW50LFxuICAgIExpc3RTdWJUaXRsZUNvbXBvbmVudCxcbiAgICBMaXN0VGFnQ29tcG9uZW50LFxuICAgIExpc3RFeHRyYUluZm9ybWF0aW9uQ29tcG9uZW50LFxuICBdLFxuICBwcm92aWRlcnM6IFtdLFxuXG59KVxuZXhwb3J0IGNsYXNzIENhbUxpc3RNb2R1bGUge31cbiJdfQ==