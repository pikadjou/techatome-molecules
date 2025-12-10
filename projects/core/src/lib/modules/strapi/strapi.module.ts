import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { StrapiComponent } from "./components/strapi/strapi.component";

/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 */
@NgModule({
  declarations: [],
  imports: [CommonModule, StrapiComponent],
})
export class TaStrapiModule {}
