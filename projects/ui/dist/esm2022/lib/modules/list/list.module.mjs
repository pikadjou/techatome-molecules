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
 * // import { TaListModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { ListTitleComponent, ListElementComponent, ListContainerComponent } from '@ta/library-name';
 */
export class TaListModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaListModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: TaListModule, imports: [ListTitleComponent,
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
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaListModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaListModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvbGlzdC9saXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQUVsRTs7Ozs7Ozs7OztHQVVHO0FBcUJILE1BQU0sT0FBTyxZQUFZOytHQUFaLFlBQVk7Z0hBQVosWUFBWSxZQWpCckIsa0JBQWtCO1lBQ2xCLG9CQUFvQjtZQUNwQixzQkFBc0I7WUFDdEIscUJBQXFCO1lBQ3JCLGdCQUFnQjtZQUNoQiw2QkFBNkIsYUFHN0Isa0JBQWtCO1lBQ2xCLG9CQUFvQjtZQUNwQixzQkFBc0I7WUFDdEIscUJBQXFCO1lBQ3JCLGdCQUFnQjtZQUNoQiw2QkFBNkI7Z0hBSXBCLFlBQVk7OzRGQUFaLFlBQVk7a0JBcEJ4QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUU7d0JBQ1Asa0JBQWtCO3dCQUNsQixvQkFBb0I7d0JBQ3BCLHNCQUFzQjt3QkFDdEIscUJBQXFCO3dCQUNyQixnQkFBZ0I7d0JBQ2hCLDZCQUE2QjtxQkFDOUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGtCQUFrQjt3QkFDbEIsb0JBQW9CO3dCQUNwQixzQkFBc0I7d0JBQ3RCLHFCQUFxQjt3QkFDckIsZ0JBQWdCO3dCQUNoQiw2QkFBNkI7cUJBQzlCO29CQUNELFNBQVMsRUFBRSxFQUFFO2lCQUNkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTGlzdEVsZW1lbnRDb21wb25lbnQgfSBmcm9tICcuL2VsZW1lbnQvbGlzdC1lbGVtZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0RXh0cmFJbmZvcm1hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vZXh0cmEtaW5mb3JtYXRpb24vbGlzdC1leHRyYS1pbmZvcm1hdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vbGlzdC1jb250YWluZXIvbGlzdC1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RTdWJUaXRsZUNvbXBvbmVudCB9IGZyb20gJy4vc3ViLXRpdGxlL2xpc3Qtc3ViLXRpdGxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0VGFnQ29tcG9uZW50IH0gZnJvbSAnLi90YWcvbGlzdC10YWcuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RUaXRsZUNvbXBvbmVudCB9IGZyb20gJy4vdGl0bGUvbGlzdC10aXRsZS5jb21wb25lbnQnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSBzdGFuZGFsb25lIGNvbXBvbmVudHMgaW5zdGVhZC5cbiAqIFRoaXMgbW9kdWxlIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSB2ZXJzaW9uLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJbnN0ZWFkIG9mIGltcG9ydGluZyB0aGUgbW9kdWxlOlxuICogLy8gaW1wb3J0IHsgVGFMaXN0TW9kdWxlIH0gZnJvbSAnQHRhL2xpYnJhcnktbmFtZSc7XG4gKlxuICogLy8gSW1wb3J0IHRoZSBzdGFuZGFsb25lIGNvbXBvbmVudHMgZGlyZWN0bHk6XG4gKiBpbXBvcnQgeyBMaXN0VGl0bGVDb21wb25lbnQsIExpc3RFbGVtZW50Q29tcG9uZW50LCBMaXN0Q29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnQHRhL2xpYnJhcnktbmFtZSc7XG4gKi9cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGltcG9ydHM6IFtcbiAgICBMaXN0VGl0bGVDb21wb25lbnQsXG4gICAgTGlzdEVsZW1lbnRDb21wb25lbnQsXG4gICAgTGlzdENvbnRhaW5lckNvbXBvbmVudCxcbiAgICBMaXN0U3ViVGl0bGVDb21wb25lbnQsXG4gICAgTGlzdFRhZ0NvbXBvbmVudCxcbiAgICBMaXN0RXh0cmFJbmZvcm1hdGlvbkNvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIExpc3RUaXRsZUNvbXBvbmVudCxcbiAgICBMaXN0RWxlbWVudENvbXBvbmVudCxcbiAgICBMaXN0Q29udGFpbmVyQ29tcG9uZW50LFxuICAgIExpc3RTdWJUaXRsZUNvbXBvbmVudCxcbiAgICBMaXN0VGFnQ29tcG9uZW50LFxuICAgIExpc3RFeHRyYUluZm9ybWF0aW9uQ29tcG9uZW50LFxuICBdLFxuICBwcm92aWRlcnM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBUYUxpc3RNb2R1bGUge31cbiJdfQ==