import { ModuleWithProviders } from '@angular/core';
import { IGraphConfig } from './services/graphql/models/graphConfig';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/common/http";
import * as i3 from "apollo-angular";
export { gql as Apollo_gql } from 'apollo-angular';
/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { TaServerModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { ApolloModule } from '@ta/library-name';
 */
export declare class TaServerModule {
    static forRoot(graphQlConfig: IGraphConfig): ModuleWithProviders<TaServerModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaServerModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<TaServerModule, never, [typeof i1.CommonModule, typeof i2.HttpClientModule, typeof i3.ApolloModule], [typeof i3.ApolloModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<TaServerModule>;
}
