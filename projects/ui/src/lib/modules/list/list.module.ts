import { NgModule } from '@angular/core';

import { ListElementComponent } from './element/list-element.component';
import { ListExtraInformationComponent } from './extra-information/list-extra-information.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { ListSubTitleComponent } from './sub-title/list-sub-title.component';
import { ListTagComponent } from './tag/list-tag.component';
import { ListTitleComponent } from './title/list-title.component';

@NgModule({
  declarations: [
    ListTitleComponent,
    ListElementComponent,
    ListContainerComponent,
    ListSubTitleComponent,
    ListTagComponent,
    ListExtraInformationComponent,
  ],
  imports: [],
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
export class CamListModule {}
