import { NgModule } from '@angular/core';

import { ListElementComponent } from './element/list-element.component';
import { ListExtraInformationComponent } from './extra-information/list-extra-information.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { ListSubTitleComponent } from './sub-title/list-sub-title.component';
import { ListTagComponent } from './tag/list-tag.component';
import { ListTitleComponent } from './title/list-title.component';

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
@NgModule({
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
})
export class TaListModule {}
