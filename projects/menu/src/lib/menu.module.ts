import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

import { TaIconsModule } from '@ta/icons';
import { TranslatePipe } from '@ta/translation';
import { TaContainerModule, TaLayoutModule, TaListModule, TaUiModule } from '@ta/ui';
import { TaDirectivePipeModule } from '@ta/utils';

import { BottomSheetTemplateBasicComponent } from './components/bottom-sheet/templates/basic/bottom-sheet-template-basic.component';
import { BottomSheetTemplateGenericComponent } from './components/bottom-sheet/templates/generic/bottom-sheet-template-generic.component';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { ListComponent } from './components/list/list.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MenuItemComponent } from './components/menu/item/menu-item.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavigationComponent } from './components/navigation/navigation.component';

/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { TaMenuModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { MenuComponent, MenuItemComponent, BottomSheetTemplateBasicComponent } from '@ta/library-name';
 */
@NgModule({
  declarations: [],
  imports: [
    TaUiModule,
    TaContainerModule,
    TaDirectivePipeModule,
    TaLayoutModule,
    TaListModule,
    CommonModule,
    RouterModule,
    TaIconsModule,
    MatMenuModule,
    TranslatePipe,
    MenuComponent,
    MenuItemComponent,
    BottomSheetTemplateBasicComponent,
    ContextMenuComponent,
    BottomSheetTemplateGenericComponent,
    MainMenuComponent,
    ListComponent,
    NavigationComponent,
  ],
  exports: [
    MenuComponent,
    MenuItemComponent,
    BottomSheetTemplateBasicComponent,
    ContextMenuComponent,
    BottomSheetTemplateGenericComponent,
    MainMenuComponent,
    NavigationComponent,
  ],
})
export class TaMenuModule {}
