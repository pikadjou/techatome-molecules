/* eslint-disable */
// -----------------------------------------------------------------------------
// Fichier généré par scripts/generate-showcase-metadata.mjs — NE PAS ÉDITER.
// Régénérer : yarn showcase:metadata
// -----------------------------------------------------------------------------

export interface TaApiMember {
  name: string;
  propertyName: string;
  kind: "input" | "output" | "method" | "property";
  type: string;
  default?: string;
  required: boolean;
  doc?: string;
  inheritedFrom?: string;
}

export interface TaApiEntry {
  id: string;
  pkg: string;
  className: string;
  kind: "component" | "directive" | "pipe" | "service" | "model";
  file: string;
  doc?: string;
  members: TaApiMember[];
}

export const TA_API: Record<string, TaApiEntry> = {
  "AuthGuard": {
    "className": "AuthGuard",
    "file": "projects/user/src/lib/modules/user/guards/auth.guard.ts",
    "id": "AuthGuard",
    "kind": "service",
    "members": [
      {
        "kind": "method",
        "name": "canActivate",
        "propertyName": "canActivate",
        "required": false,
        "type": "(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => Observable<boolean> | boolean"
      },
      {
        "kind": "method",
        "name": "setRedirect",
        "propertyName": "setRedirect",
        "required": false,
        "type": "() => void"
      }
    ],
    "pkg": "@ta/user"
  },
  "CacheInterceptor": {
    "className": "CacheInterceptor",
    "file": "projects/server/src/lib/services/server/cacheInterceptor.ts",
    "id": "CacheInterceptor",
    "kind": "service",
    "members": [
      {
        "kind": "method",
        "name": "intercept",
        "propertyName": "intercept",
        "required": false,
        "type": "(req: HttpRequest<any>, next: HttpHandler) => Observable<HttpEvent<any>>"
      }
    ],
    "pkg": "@ta/server"
  },
  "FeatureGuard": {
    "className": "FeatureGuard",
    "file": "projects/user/src/lib/modules/user/guards/feature.guard.ts",
    "id": "FeatureGuard",
    "kind": "service",
    "members": [
      {
        "kind": "method",
        "name": "canActivate",
        "propertyName": "canActivate",
        "required": false,
        "type": "(route: ActivatedRouteSnapshot) => Observable<boolean> | boolean"
      },
      {
        "kind": "method",
        "name": "setRedirect",
        "propertyName": "setRedirect",
        "required": false,
        "type": "() => void"
      }
    ],
    "pkg": "@ta/user"
  },
  "FileSizePipe": {
    "className": "FileSizePipe",
    "file": "projects/utils/src/lib/pipe/file-size.pipe.ts",
    "id": "FileSizePipe",
    "kind": "pipe",
    "members": [
      {
        "kind": "method",
        "name": "transform",
        "propertyName": "transform",
        "required": false,
        "type": "(sizeInBytes: number | null, longForm: boolean = false) => string"
      }
    ],
    "pkg": "@ta/utils"
  },
  "JoinPipe": {
    "className": "JoinPipe",
    "file": "projects/utils/src/lib/pipe/join.pipe.ts",
    "id": "JoinPipe",
    "kind": "pipe",
    "members": [
      {
        "kind": "method",
        "name": "transform",
        "propertyName": "transform",
        "required": false,
        "type": "(input: Array<any>, sep = \", \") => string"
      }
    ],
    "pkg": "@ta/utils"
  },
  "OverlayService": {
    "className": "OverlayService",
    "file": "projects/ui/src/lib/modules/overlay-panel/overlay.service.ts",
    "id": "OverlayService",
    "kind": "service",
    "members": [
      {
        "kind": "method",
        "name": "openMenu",
        "propertyName": "openMenu",
        "required": false,
        "type": "(config: OverlayMenuConfig<T>) => void"
      },
      {
        "kind": "method",
        "name": "closeMenu",
        "propertyName": "closeMenu",
        "required": false,
        "type": "() => void"
      },
      {
        "inheritedFrom": "TaBaseService",
        "kind": "method",
        "name": "registerRoutes",
        "propertyName": "registerRoutes",
        "required": false,
        "type": "(routes: { apiRoutes?: MappingApiType; graphEndpoint?: GraphEndpoint }, options?: GraphOptions) => void"
      }
    ],
    "pkg": "@ta/ui"
  },
  "PluralTranslatePipe": {
    "className": "PluralTranslatePipe",
    "file": "projects/utils/src/lib/pipe/plural.pipe.ts",
    "id": "PluralTranslatePipe",
    "kind": "pipe",
    "members": [
      {
        "kind": "method",
        "name": "transform",
        "propertyName": "transform",
        "required": false,
        "type": "(key: string, number: number) => string"
      }
    ],
    "pkg": "@ta/utils"
  },
  "ReadOnlyContextService": {
    "className": "ReadOnlyContextService",
    "file": "projects/utils/src/lib/service/read-only-context.service.ts",
    "id": "ReadOnlyContextService",
    "kind": "service",
    "members": [
      {
        "kind": "method",
        "name": "setReadonly",
        "propertyName": "setReadonly",
        "required": false,
        "type": "(value: boolean) => void"
      }
    ],
    "pkg": "@ta/utils"
  },
  "RoleGuard": {
    "className": "RoleGuard",
    "file": "projects/user/src/lib/modules/user/guards/role.guard.ts",
    "id": "RoleGuard",
    "kind": "service",
    "members": [
      {
        "kind": "method",
        "name": "canActivate",
        "propertyName": "canActivate",
        "required": false,
        "type": "(route: ActivatedRouteSnapshot) => Observable<boolean> | boolean"
      },
      {
        "kind": "method",
        "name": "setRedirect",
        "propertyName": "setRedirect",
        "required": false,
        "type": "() => void"
      }
    ],
    "pkg": "@ta/user"
  },
  "SafePipe": {
    "className": "SafePipe",
    "file": "projects/utils/src/lib/pipe/safe.pipe.ts",
    "id": "SafePipe",
    "kind": "pipe",
    "members": [
      {
        "kind": "method",
        "name": "transform",
        "propertyName": "transform",
        "required": false,
        "type": "(value: any, type: string) => SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl"
      }
    ],
    "pkg": "@ta/utils"
  },
  "TaAddressLookupService": {
    "className": "TaAddressLookupService",
    "doc": "Récupère l'intégralité des codes postaux / communes d'un pays. Source : dataset GeoNames `geonames-postal-code` servi par l'API publique OpenDataSoft (aucune clé requise). L'endpoint `/exports/json` renvoie tous les enregistrements filtrés en une seule requête ; la recherche se fait ensuite côté client. Les résultats sont mis en cache par pays.",
    "file": "projects/utils/src/lib/service/address-lookup.service.ts",
    "id": "TaAddressLookupService",
    "kind": "service",
    "members": [
      {
        "doc": "Renvoie tous les codes postaux / communes du pays donné, triés par code postal puis par nom. Renvoie une liste vide si le pays est inconnu ou en cas d'erreur réseau (le consommateur peut alors basculer en saisie libre).",
        "kind": "method",
        "name": "getCountryPostalCodes",
        "propertyName": "getCountryPostalCodes",
        "required": false,
        "type": "(country: string | null | undefined) => Observable<AddressLocality[]>"
      }
    ],
    "pkg": "@ta/utils"
  },
  "TaAuthService": {
    "className": "TaAuthService",
    "file": "projects/user/src/lib/modules/user/services/auth.service.ts",
    "id": "TaAuthService",
    "kind": "service",
    "members": [
      {
        "kind": "property",
        "name": "userProfile$",
        "propertyName": "userProfile$",
        "required": false,
        "type": "Observable<UserProfile | null>"
      },
      {
        "kind": "method",
        "name": "changePassword$",
        "propertyName": "changePassword$",
        "required": false,
        "type": "() => Observable<string>"
      },
      {
        "kind": "method",
        "name": "fetchUserProfile$",
        "propertyName": "fetchUserProfile$",
        "required": false,
        "type": "() => Observable<UserProfile>"
      },
      {
        "kind": "method",
        "name": "load",
        "propertyName": "load",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "login",
        "propertyName": "login",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "signin",
        "propertyName": "signin",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "logout",
        "propertyName": "logout",
        "required": false,
        "type": "() => Promise<null>"
      },
      {
        "inheritedFrom": "TaBaseService",
        "kind": "method",
        "name": "registerRoutes",
        "propertyName": "registerRoutes",
        "required": false,
        "type": "(routes: { apiRoutes?: MappingApiType; graphEndpoint?: GraphEndpoint }, options?: GraphOptions) => void"
      }
    ],
    "pkg": "@ta/user"
  },
  "TaBaseService": {
    "className": "TaBaseService",
    "file": "projects/server/src/lib/services/server/baseService.ts",
    "id": "TaBaseService",
    "kind": "service",
    "members": [
      {
        "kind": "method",
        "name": "registerRoutes",
        "propertyName": "registerRoutes",
        "required": false,
        "type": "(routes: { apiRoutes?: MappingApiType; graphEndpoint?: GraphEndpoint }, options?: GraphOptions) => void"
      }
    ],
    "pkg": "@ta/server"
  },
  "TaCmsService": {
    "className": "TaCmsService",
    "file": "projects/cms/src/lib/modules/strapi/services/cms.service.ts",
    "id": "TaCmsService",
    "kind": "service",
    "members": [
      {
        "kind": "method",
        "name": "fetchCmsContents$",
        "propertyName": "fetchCmsContents$",
        "required": false,
        "type": "(type: string, tenantId: string) => void"
      }
    ],
    "pkg": "@ta/cms"
  },
  "TaDeviceInfoService": {
    "className": "TaDeviceInfoService",
    "file": "projects/capacitor/src/lib/services/device-info.service.ts",
    "id": "TaDeviceInfoService",
    "kind": "service",
    "members": [
      {
        "kind": "method",
        "name": "isMobileOs$",
        "propertyName": "isMobileOs$",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "isWeb$",
        "propertyName": "isWeb$",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "isMobileOs",
        "propertyName": "isMobileOs",
        "required": false,
        "type": "(os: OperatingSystem) => void"
      }
    ],
    "pkg": "@ta/capacitor"
  },
  "TaDeviceNetworkService": {
    "className": "TaDeviceNetworkService",
    "file": "projects/capacitor/src/lib/services/device-network.service.ts",
    "id": "TaDeviceNetworkService",
    "kind": "service",
    "members": [
      {
        "kind": "method",
        "name": "observeNetworkStateChanges",
        "propertyName": "observeNetworkStateChanges",
        "required": false,
        "type": "() => void"
      }
    ],
    "pkg": "@ta/capacitor"
  },
  "TaDevicePositionService": {
    "className": "TaDevicePositionService",
    "file": "projects/capacitor/src/lib/services/device-position.service.ts",
    "id": "TaDevicePositionService",
    "kind": "service",
    "members": [
      {
        "kind": "property",
        "name": "currentPosition",
        "propertyName": "currentPosition",
        "required": false,
        "type": "unknown"
      },
      {
        "kind": "property",
        "name": "canAccessPosition",
        "propertyName": "canAccessPosition",
        "required": false,
        "type": "unknown"
      },
      {
        "kind": "method",
        "name": "fetchCanAccessPosition",
        "propertyName": "fetchCanAccessPosition",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "fetchCurrentPosition",
        "propertyName": "fetchCurrentPosition",
        "required": false,
        "type": "() => void"
      }
    ],
    "pkg": "@ta/capacitor"
  },
  "TaDocumentsService": {
    "className": "TaDocumentsService",
    "file": "projects/services/src/lib/services/files/documents.service.ts",
    "id": "TaDocumentsService",
    "kind": "service",
    "members": [
      {
        "kind": "method",
        "name": "getDocuments",
        "propertyName": "getDocuments",
        "required": false,
        "type": "(ids: string[]) => void"
      },
      {
        "kind": "method",
        "name": "getDocuments$",
        "propertyName": "getDocuments$",
        "required": false,
        "type": "(ids: string[]) => void"
      },
      {
        "kind": "method",
        "name": "fetchDocuments$",
        "propertyName": "fetchDocuments$",
        "required": false,
        "type": "(ids: string[]) => void"
      },
      {
        "kind": "method",
        "name": "addDocument$",
        "propertyName": "addDocument$",
        "required": false,
        "type": "(doc: UploadFilePayloadInput) => void"
      },
      {
        "inheritedFrom": "TaBaseService",
        "kind": "method",
        "name": "registerRoutes",
        "propertyName": "registerRoutes",
        "required": false,
        "type": "(routes: { apiRoutes?: MappingApiType; graphEndpoint?: GraphEndpoint }, options?: GraphOptions) => void"
      }
    ],
    "pkg": "@ta/services"
  },
  "TaGraphService": {
    "className": "TaGraphService",
    "file": "projects/server/src/lib/services/graphql/graph.service.ts",
    "id": "TaGraphService",
    "kind": "service",
    "members": [
      {
        "kind": "method",
        "name": "clearCache",
        "propertyName": "clearCache",
        "required": false,
        "type": "(key: string) => void"
      },
      {
        "kind": "method",
        "name": "fetchQueryList",
        "propertyName": "fetchQueryList",
        "required": false,
        "type": "(payload: GraphQueryPayload, node: string, context: string) => void"
      },
      {
        "kind": "method",
        "name": "fetchPagedQueryList",
        "propertyName": "fetchPagedQueryList",
        "required": false,
        "type": "(payload: GraphQueryPayload, node: string, context: string) => void"
      },
      {
        "kind": "method",
        "name": "fetchQueryBuilder",
        "propertyName": "fetchQueryBuilder",
        "required": false,
        "type": "(payload: GraphPayload, context: string) => void"
      },
      {
        "kind": "method",
        "name": "fetchQuery",
        "propertyName": "fetchQuery",
        "required": false,
        "type": "(payload: GraphQueryPayload, node: string, context: string) => void"
      },
      {
        "kind": "method",
        "name": "mutate",
        "propertyName": "mutate",
        "required": false,
        "type": "(payload: GraphMutationPayload, mutationName: string, context: string, clearCache?: string[]) => void"
      },
      {
        "kind": "method",
        "name": "registerGraphEndpoint",
        "propertyName": "registerGraphEndpoint",
        "required": false,
        "type": "(graphEndpoint: GraphEndpoint, options?: GraphOptions) => void"
      }
    ],
    "pkg": "@ta/server"
  },
  "TaIconsService": {
    "className": "TaIconsService",
    "file": "projects/icons/src/lib/services/icons.service.ts",
    "id": "TaIconsService",
    "kind": "service",
    "members": [
      {
        "kind": "method",
        "name": "getIcon",
        "propertyName": "getIcon",
        "required": false,
        "type": "(icon: TaIconType) => string"
      }
    ],
    "pkg": "@ta/icons"
  },
  "TaNotificationService": {
    "className": "TaNotificationService",
    "file": "projects/notification/src/lib/services/notification.service.ts",
    "id": "TaNotificationService",
    "kind": "service",
    "members": [
      {
        "kind": "method",
        "name": "addNotification",
        "propertyName": "addNotification",
        "required": false,
        "type": "(message: string, code: ENotificationCode, persistent?: boolean) => void"
      },
      {
        "kind": "method",
        "name": "removeNotification",
        "propertyName": "removeNotification",
        "required": false,
        "type": "(id: string) => void"
      }
    ],
    "pkg": "@ta/notification"
  },
  "TaPermissionsService": {
    "className": "TaPermissionsService",
    "file": "projects/user/src/lib/modules/user/services/permissions.service.ts",
    "id": "TaPermissionsService",
    "kind": "service",
    "members": [
      {
        "kind": "property",
        "name": "received",
        "propertyName": "received",
        "required": false,
        "type": "unknown"
      },
      {
        "kind": "method",
        "name": "set",
        "propertyName": "set",
        "required": false,
        "type": "(info: GuardInfo | null, isAuthenticated: boolean) => void"
      },
      {
        "kind": "method",
        "name": "setGuard",
        "propertyName": "setGuard",
        "required": false,
        "type": "(info: GuardInfo | null) => void"
      },
      {
        "kind": "method",
        "name": "setSilentAuthenticated",
        "propertyName": "setSilentAuthenticated",
        "required": false,
        "type": "(isAuthenticated: boolean) => void"
      },
      {
        "kind": "method",
        "name": "setAuthenticated",
        "propertyName": "setAuthenticated",
        "required": false,
        "type": "(isAuthenticated: boolean) => void"
      },
      {
        "kind": "method",
        "name": "hasRole$",
        "propertyName": "hasRole$",
        "required": false,
        "type": "(role: string) => void"
      },
      {
        "kind": "method",
        "name": "hasRole",
        "propertyName": "hasRole",
        "required": false,
        "type": "(role: string) => void"
      },
      {
        "kind": "method",
        "name": "canDirectAccess",
        "propertyName": "canDirectAccess",
        "required": false,
        "type": "(feature: string, level: Level) => void"
      },
      {
        "kind": "method",
        "name": "canAccess$",
        "propertyName": "canAccess$",
        "required": false,
        "type": "(feature: string, level: Level) => Observable<boolean>"
      }
    ],
    "pkg": "@ta/user"
  },
  "TaProjectsService": {
    "className": "TaProjectsService",
    "file": "projects/services/src/lib/services/projects/projects.service.ts",
    "id": "TaProjectsService",
    "kind": "service",
    "members": [
      {
        "kind": "method",
        "name": "getProjectsLightInfo$",
        "propertyName": "getProjectsLightInfo$",
        "required": false,
        "type": "(ids: string[]) => void"
      },
      {
        "kind": "method",
        "name": "fetchProjectsByContact$",
        "propertyName": "fetchProjectsByContact$",
        "required": false,
        "type": "(contactId: string) => void"
      },
      {
        "kind": "method",
        "name": "fetchProjects$",
        "propertyName": "fetchProjects$",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "fetchProject$",
        "propertyName": "fetchProject$",
        "required": false,
        "type": "(id: string) => void"
      },
      {
        "inheritedFrom": "TaBaseService",
        "kind": "method",
        "name": "registerRoutes",
        "propertyName": "registerRoutes",
        "required": false,
        "type": "(routes: { apiRoutes?: MappingApiType; graphEndpoint?: GraphEndpoint }, options?: GraphOptions) => void"
      }
    ],
    "pkg": "@ta/services"
  },
  "TaPwaService": {
    "className": "TaPwaService",
    "file": "projects/capacitor/src/lib/services/pwa.service.ts",
    "id": "TaPwaService",
    "kind": "service",
    "members": [
      {
        "kind": "method",
        "name": "isPWaCapability",
        "propertyName": "isPWaCapability",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "launchInstall",
        "propertyName": "launchInstall",
        "required": false,
        "type": "() => void"
      }
    ],
    "pkg": "@ta/capacitor"
  },
  "TaServerErrorService": {
    "className": "TaServerErrorService",
    "file": "projects/server/src/lib/services/error.service.ts",
    "id": "TaServerErrorService",
    "kind": "service",
    "members": [
      {
        "kind": "method",
        "name": "addError",
        "propertyName": "addError",
        "required": false,
        "type": "(query: GraphQueryPayload | GraphMutationPayload, error: ApolloError) => void"
      }
    ],
    "pkg": "@ta/server"
  },
  "TaServerSevice": {
    "className": "TaServerSevice",
    "file": "projects/server/src/lib/services/server/api/server.service.ts",
    "id": "TaServerSevice",
    "kind": "service",
    "members": [
      {
        "kind": "property",
        "name": "requestInProgressNumber",
        "propertyName": "requestInProgressNumber",
        "required": false,
        "type": "number"
      },
      {
        "kind": "property",
        "name": "isAuthenticated",
        "propertyName": "isAuthenticated",
        "required": false,
        "type": "unknown"
      },
      {
        "kind": "method",
        "name": "registerRoutes",
        "propertyName": "registerRoutes",
        "required": false,
        "type": "(routes: MappingApiType) => void"
      },
      {
        "kind": "method",
        "name": "request",
        "propertyName": "request",
        "required": false,
        "type": "(request: Request) => Subject<T>"
      },
      {
        "kind": "method",
        "name": "retryRequest",
        "propertyName": "retryRequest",
        "required": false,
        "type": "(list: TempRequest[] = []) => void"
      }
    ],
    "pkg": "@ta/server"
  },
  "TaSharedMenuService": {
    "className": "TaSharedMenuService",
    "file": "projects/services/src/lib/services/menu/menu.service.ts",
    "id": "TaSharedMenuService",
    "kind": "service",
    "members": [],
    "pkg": "@ta/services"
  },
  "TaStrapiService": {
    "className": "TaStrapiService",
    "file": "projects/server/src/lib/services/strapi/strapi.service.ts",
    "id": "TaStrapiService",
    "kind": "service",
    "members": [
      {
        "kind": "method",
        "name": "fetchQuery$",
        "propertyName": "fetchQuery$",
        "required": false,
        "type": "(payload: GraphQueryPayload, node: string) => void"
      },
      {
        "kind": "method",
        "name": "fetchQueryList$",
        "propertyName": "fetchQueryList$",
        "required": false,
        "type": "(payload: GraphQueryPayload, node: string) => void"
      },
      {
        "inheritedFrom": "TaBaseService",
        "kind": "method",
        "name": "registerRoutes",
        "propertyName": "registerRoutes",
        "required": false,
        "type": "(routes: { apiRoutes?: MappingApiType; graphEndpoint?: GraphEndpoint }, options?: GraphOptions) => void"
      }
    ],
    "pkg": "@ta/server"
  },
  "TaTranslationFiles": {
    "className": "TaTranslationFiles",
    "file": "projects/files/files-basic/src/lib/translation.service.ts",
    "id": "TaTranslationFiles",
    "kind": "service",
    "members": [],
    "pkg": "@ta/files-basic"
  },
  "TaTranslationRegistryService": {
    "className": "TaTranslationRegistryService",
    "file": "projects/translation/src/lib/services/translation-registry.service.ts",
    "id": "TaTranslationRegistryService",
    "kind": "service",
    "members": [
      {
        "kind": "method",
        "name": "register",
        "propertyName": "register",
        "required": false,
        "type": "(register: ITranslation) => void"
      },
      {
        "kind": "method",
        "name": "getTranslations",
        "propertyName": "getTranslations",
        "required": false,
        "type": "(lang: string) => void"
      }
    ],
    "pkg": "@ta/translation"
  },
  "TaTranslationService": {
    "className": "TaTranslationService",
    "file": "projects/translation/src/lib/services/translation.service.ts",
    "id": "TaTranslationService",
    "kind": "service",
    "members": [
      {
        "kind": "method",
        "name": "init",
        "propertyName": "init",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "getLanguage",
        "propertyName": "getLanguage",
        "required": false,
        "type": "() => string"
      },
      {
        "kind": "method",
        "name": "get",
        "propertyName": "get",
        "required": false,
        "type": "(key: string | string[], interpolateParams?: Object) => void"
      },
      {
        "kind": "method",
        "name": "use",
        "propertyName": "use",
        "required": false,
        "type": "(lang: string) => void"
      }
    ],
    "pkg": "@ta/translation"
  },
  "TaUserService": {
    "className": "TaUserService",
    "file": "projects/user/src/lib/modules/user/services/user.service.ts",
    "id": "TaUserService",
    "kind": "service",
    "members": [
      {
        "kind": "method",
        "name": "fetchUserProfile$",
        "propertyName": "fetchUserProfile$",
        "required": false,
        "type": "(props: string = \"\") => void"
      },
      {
        "inheritedFrom": "TaBaseService",
        "kind": "method",
        "name": "registerRoutes",
        "propertyName": "registerRoutes",
        "required": false,
        "type": "(routes: { apiRoutes?: MappingApiType; graphEndpoint?: GraphEndpoint }, options?: GraphOptions) => void"
      }
    ],
    "pkg": "@ta/user"
  },
  "UploadDocumentFormService": {
    "className": "UploadDocumentFormService",
    "file": "projects/files/files-extended/src/lib/services/document/upload-document-form.service.ts",
    "id": "UploadDocumentFormService",
    "kind": "service",
    "members": [
      {
        "kind": "method",
        "name": "getGroupForm",
        "propertyName": "getGroupForm",
        "required": false,
        "type": "(data: UploadDocumentData) => InputBase<any>[]"
      }
    ],
    "pkg": "@ta/files-extended"
  },
  "[TaOnRender]": {
    "className": "OnRenderDirective",
    "file": "projects/utils/src/lib/directive/on-render.directive.ts",
    "id": "[TaOnRender]",
    "kind": "directive",
    "members": [
      {
        "kind": "input",
        "name": "onRender",
        "propertyName": "onRender",
        "required": true,
        "type": "boolean"
      },
      {
        "kind": "output",
        "name": "rendered",
        "propertyName": "rendered",
        "required": false,
        "type": "void"
      }
    ],
    "pkg": "@ta/utils"
  },
  "[appStopPropagation]": {
    "className": "StopPropagationDirective",
    "file": "projects/utils/src/lib/directive/stop-propagation.directive.ts",
    "id": "[appStopPropagation]",
    "kind": "directive",
    "members": [
      {
        "default": "true",
        "kind": "input",
        "name": "stopPropagationActivation",
        "propertyName": "stopPropagationActivation",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "method",
        "name": "onClick",
        "propertyName": "onClick",
        "required": false,
        "type": "(event: any) => boolean"
      }
    ],
    "pkg": "@ta/utils"
  },
  "[ngLet]": {
    "className": "LetDirective",
    "file": "projects/utils/src/lib/directive/let.directive.ts",
    "id": "[ngLet]",
    "kind": "directive",
    "members": [
      {
        "kind": "input",
        "name": "ngLet",
        "propertyName": "ngLet",
        "required": false,
        "type": "T"
      },
      {
        "doc": "Asserts the correct type of the context for the template that `NgLet` will render. The presence of this method is a signal to the Ivy template type-check compiler that the `NgLet` structural directive renders its template with a specific context type.",
        "kind": "method",
        "name": "ngTemplateContextGuard",
        "propertyName": "ngTemplateContextGuard",
        "required": false,
        "type": "(dir: LetDirective<T>, ctx: any) => ctx is LetContext<Exclude<T, false | 0 | \"\" | null | undefined>>"
      }
    ],
    "pkg": "@ta/utils"
  },
  "[taTestId]": {
    "className": "TaTestIdDirective",
    "file": "projects/utils/src/lib/directive/test-id.directive.ts",
    "id": "[taTestId]",
    "kind": "directive",
    "members": [
      {
        "kind": "input",
        "name": "taTestId",
        "propertyName": "taTestId",
        "required": true,
        "type": "string"
      },
      {
        "kind": "property",
        "name": "attr",
        "propertyName": "attr",
        "required": false,
        "type": "string"
      }
    ],
    "pkg": "@ta/utils"
  },
  "ng-template[typedTemplate]": {
    "className": "TypedTemplateDirective",
    "file": "projects/utils/src/lib/directive/type-template-directive.ts",
    "id": "ng-template[typedTemplate]",
    "kind": "directive",
    "members": [
      {
        "kind": "input",
        "name": "typedTemplate",
        "propertyName": "typedTemplate",
        "required": true,
        "type": "TypeToken"
      },
      {
        "kind": "method",
        "name": "ngTemplateContextGuard",
        "propertyName": "ngTemplateContextGuard",
        "required": false,
        "type": "(dir: TypedTemplateDirective<TypeToken>, ctx: unknown) => ctx is TypeToken"
      }
    ],
    "pkg": "@ta/utils"
  },
  "ta-action-button": {
    "className": "ActionButtonComponent",
    "file": "projects/ui/src/lib/components/ui/button/action/action-button.component.ts",
    "id": "ta-action-button",
    "kind": "component",
    "members": [
      {
        "doc": "List of action available",
        "kind": "input",
        "name": "actions",
        "propertyName": "actions",
        "required": true,
        "type": "ActionButtonData[]"
      },
      {
        "kind": "method",
        "name": "isFontIcon",
        "propertyName": "isFontIcon",
        "required": false,
        "type": "(action: ActionButtonData) => boolean"
      },
      {
        "kind": "method",
        "name": "getFontIcon",
        "propertyName": "getFontIcon",
        "required": false,
        "type": "(action: ActionButtonData) => string"
      },
      {
        "kind": "method",
        "name": "isLocalIcon",
        "propertyName": "isLocalIcon",
        "required": false,
        "type": "(action: ActionButtonData) => boolean"
      },
      {
        "kind": "method",
        "name": "openBullet",
        "propertyName": "openBullet",
        "required": false,
        "type": "() => void"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-address": {
    "className": "AddressComponent",
    "file": "projects/ui/src/lib/components/ui/address/address.component.ts",
    "id": "ta-address",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "address",
        "propertyName": "address",
        "required": true,
        "type": "Address"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-badge": {
    "className": "BadgeComponent",
    "file": "projects/ui/src/lib/components/ui/badge/badge.component.ts",
    "id": "ta-badge",
    "kind": "component",
    "members": [
      {
        "doc": "Text to display in badge",
        "kind": "input",
        "name": "value",
        "propertyName": "value",
        "required": true,
        "type": "string"
      },
      {
        "default": "\"primary\"",
        "doc": "Style of badge",
        "kind": "input",
        "name": "type",
        "propertyName": "type",
        "required": false,
        "type": "BadgeType"
      },
      {
        "default": "false",
        "kind": "input",
        "name": "showClickOption",
        "propertyName": "showClickOption",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "undefined",
        "kind": "input",
        "name": "icon",
        "propertyName": "icon",
        "required": false,
        "type": "string | undefined"
      },
      {
        "kind": "output",
        "name": "clickAction",
        "propertyName": "clickAction",
        "required": false,
        "type": "void"
      },
      {
        "kind": "method",
        "name": "getClass",
        "propertyName": "getClass",
        "required": false,
        "type": "() => string"
      },
      {
        "kind": "method",
        "name": "click",
        "propertyName": "click",
        "required": false,
        "type": "() => void"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-banner": {
    "className": "BannerComponent",
    "file": "projects/ui/src/lib/components/ui/banner/banner.component.ts",
    "id": "ta-banner",
    "kind": "component",
    "members": [
      {
        "default": "false",
        "kind": "input",
        "name": "inline",
        "propertyName": "inline",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "input",
        "name": "message",
        "propertyName": "message",
        "required": true,
        "type": "string"
      },
      {
        "default": "\"warning\"",
        "kind": "input",
        "name": "type",
        "propertyName": "type",
        "required": false,
        "type": "ColorType"
      },
      {
        "kind": "method",
        "name": "getClasses",
        "propertyName": "getClasses",
        "required": false,
        "type": "() => Record<string, boolean>"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-bar-chart": {
    "className": "TaChartBarComponent",
    "file": "projects/charts/src/lib/components/bar-chart.component.ts",
    "id": "ta-bar-chart",
    "kind": "component",
    "members": [
      {
        "inheritedFrom": "BaseChartComponent",
        "kind": "input",
        "name": "labels",
        "propertyName": "labels",
        "required": true,
        "type": "TLabel[]"
      },
      {
        "inheritedFrom": "BaseChartComponent",
        "kind": "input",
        "name": "datasets",
        "propertyName": "datasets",
        "required": true,
        "type": "ChartDataset<ChartType, TData>[]"
      },
      {
        "default": "{}",
        "inheritedFrom": "BaseChartComponent",
        "kind": "input",
        "name": "chartOptions",
        "propertyName": "chartOptions",
        "required": false,
        "type": "ChartConfiguration[\"options\"]"
      },
      {
        "inheritedFrom": "BaseChartComponent",
        "kind": "input",
        "name": "chartHeight",
        "propertyName": "chartHeight",
        "required": false,
        "type": "number"
      },
      {
        "inheritedFrom": "BaseChartComponent",
        "kind": "method",
        "name": "createChart",
        "propertyName": "createChart",
        "required": false,
        "type": "() => void"
      },
      {
        "inheritedFrom": "BaseChartComponent",
        "kind": "method",
        "name": "refreshChart",
        "propertyName": "refreshChart",
        "required": false,
        "type": "() => void"
      }
    ],
    "pkg": "@ta/charts"
  },
  "ta-benefit-item": {
    "className": "BenefitItemComponent",
    "file": "projects/ui/src/lib/components/ui/benefit-item/benefit-item.component.ts",
    "id": "ta-benefit-item",
    "kind": "component",
    "members": [
      {
        "default": "\"success\"",
        "kind": "input",
        "name": "type",
        "propertyName": "type",
        "required": false,
        "type": "ColorType"
      },
      {
        "default": "\"\"",
        "kind": "input",
        "name": "text",
        "propertyName": "text",
        "required": false,
        "type": "string"
      },
      {
        "kind": "method",
        "name": "cssClasses",
        "propertyName": "cssClasses",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "icon",
        "propertyName": "icon",
        "required": false,
        "type": "() => void"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-boolean-icon": {
    "className": "BooleanIconComponent",
    "file": "projects/ui/src/lib/components/ui/boolean-icon/boolean-icon.component.ts",
    "id": "ta-boolean-icon",
    "kind": "component",
    "members": [
      {
        "default": "undefined",
        "doc": "Boolean value to display (can be null or undefined for unknown state)",
        "kind": "input",
        "name": "value",
        "propertyName": "value",
        "required": false,
        "type": "boolean | null | undefined"
      },
      {
        "default": "\"md\"",
        "doc": "Size of the icon",
        "kind": "input",
        "name": "size",
        "propertyName": "size",
        "required": false,
        "type": "TaSizes"
      },
      {
        "kind": "method",
        "name": "getIconName",
        "propertyName": "getIconName",
        "required": false,
        "type": "() => string"
      },
      {
        "kind": "method",
        "name": "getClass",
        "propertyName": "getClass",
        "required": false,
        "type": "() => string"
      },
      {
        "kind": "method",
        "name": "isNullValue",
        "propertyName": "isNullValue",
        "required": false,
        "type": "() => boolean"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-bottom-sheet-template-basic": {
    "className": "BottomSheetTemplateBasicComponent",
    "file": "projects/menu/src/lib/components/bottom-sheet/templates/basic/bottom-sheet-template-basic.component.ts",
    "id": "ta-bottom-sheet-template-basic",
    "kind": "component",
    "members": [],
    "pkg": "@ta/menu"
  },
  "ta-bottom-sheet-template-generic": {
    "className": "BottomSheetTemplateGenericComponent",
    "file": "projects/menu/src/lib/components/bottom-sheet/templates/generic/bottom-sheet-template-generic.component.ts",
    "id": "ta-bottom-sheet-template-generic",
    "kind": "component",
    "members": [],
    "pkg": "@ta/menu"
  },
  "ta-bullet": {
    "className": "BulletComponent",
    "file": "projects/ui/src/lib/components/ui/bullet/bullet.component.ts",
    "id": "ta-bullet",
    "kind": "component",
    "members": [
      {
        "default": "\"sm\"",
        "kind": "input",
        "name": "size",
        "propertyName": "size",
        "required": false,
        "type": "TaSizes"
      },
      {
        "default": "\"default\"",
        "kind": "input",
        "name": "type",
        "propertyName": "type",
        "required": false,
        "type": "ColorType | \"notif\""
      },
      {
        "kind": "method",
        "name": "getClass",
        "propertyName": "getClass",
        "required": false,
        "type": "() => string"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-button": {
    "className": "ButtonComponent",
    "file": "projects/ui/src/lib/components/ui/button/button.component.ts",
    "id": "ta-button",
    "kind": "component",
    "members": [
      {
        "default": "\"classic\"",
        "doc": "Is button type",
        "kind": "input",
        "name": "state",
        "propertyName": "state",
        "required": false,
        "type": "TaState"
      },
      {
        "default": "\"primary\"",
        "doc": "Indicate the button type",
        "kind": "input",
        "name": "type",
        "propertyName": "type",
        "required": false,
        "type": "\"primary\" | \"secondary\" | \"tertiary\" | \"danger\""
      },
      {
        "default": "\"medium\"",
        "kind": "input",
        "name": "size",
        "propertyName": "size",
        "required": false,
        "type": "\"small\" | \"medium\" | \"large\""
      },
      {
        "default": "null",
        "kind": "input",
        "name": "icon",
        "propertyName": "icon",
        "required": false,
        "type": "string | null"
      },
      {
        "default": "null",
        "doc": "Class - Add custom classes separates by space Outline - Draw a border around the button when true Rounded - Make button rounded when true Circular - Make button circular when true Square - Make button a rounded square (icon only) when true",
        "kind": "input",
        "name": "options",
        "propertyName": "options",
        "required": false,
        "type": "{\n    class?: string;\n    circular?: boolean | \"big\" | \"small\";\n    square?: boolean | \"big\" | \"small\";\n    border?: boolean;\n  } | null"
      },
      {
        "default": "true",
        "kind": "input",
        "name": "stopPropagationActivation",
        "propertyName": "stopPropagationActivation",
        "required": false,
        "type": "boolean"
      },
      {
        "doc": "Event emitted when button is clicked",
        "kind": "output",
        "name": "action",
        "propertyName": "action",
        "required": false,
        "type": "void"
      },
      {
        "kind": "method",
        "name": "handleClick",
        "propertyName": "handleClick",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "getClass",
        "propertyName": "getClass",
        "required": false,
        "type": "() => void"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-button-tool": {
    "className": "ButtonToolComponent",
    "file": "projects/ui/src/lib/components/ui/button/tool/tool.component.ts",
    "id": "ta-button-tool",
    "kind": "component",
    "members": [
      {
        "default": "\"classic\"",
        "kind": "input",
        "name": "state",
        "propertyName": "state",
        "required": false,
        "type": "TaState"
      },
      {
        "default": "\"primary\"",
        "kind": "input",
        "name": "type",
        "propertyName": "type",
        "required": false,
        "type": "\"primary\""
      },
      {
        "default": "\"md\"",
        "kind": "input",
        "name": "size",
        "propertyName": "size",
        "required": false,
        "type": "TaSizes"
      },
      {
        "default": "null",
        "kind": "input",
        "name": "icon",
        "propertyName": "icon",
        "required": false,
        "type": "string | null"
      },
      {
        "default": "true",
        "kind": "input",
        "name": "stopPropagationActivation",
        "propertyName": "stopPropagationActivation",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "false",
        "kind": "input",
        "name": "readonly",
        "propertyName": "readonly",
        "required": false,
        "type": "boolean"
      },
      {
        "doc": "Event emitted when button is clicked",
        "kind": "output",
        "name": "action",
        "propertyName": "action",
        "required": false,
        "type": "void"
      },
      {
        "kind": "method",
        "name": "handleClick",
        "propertyName": "handleClick",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "getClass",
        "propertyName": "getClass",
        "required": false,
        "type": "() => void"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-card": {
    "className": "CardComponent",
    "file": "projects/ui/src/lib/modules/card/card.component.ts",
    "id": "ta-card",
    "kind": "component",
    "members": [
      {
        "default": "false",
        "kind": "input",
        "name": "highlight",
        "propertyName": "highlight",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "false",
        "doc": "Carte navy : surface inversée, chiffres et actions en jaune.",
        "kind": "input",
        "name": "invert",
        "propertyName": "invert",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "true",
        "kind": "input",
        "name": "shadow",
        "propertyName": "shadow",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "false",
        "kind": "input",
        "name": "fullHeight",
        "propertyName": "fullHeight",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "false",
        "kind": "input",
        "name": "noContent",
        "propertyName": "noContent",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "null",
        "kind": "input",
        "name": "directionCard",
        "propertyName": "directionCard",
        "required": false,
        "type": "'vertical' | 'horizontal' | null"
      },
      {
        "default": "false",
        "kind": "input",
        "name": "isNew",
        "propertyName": "isNew",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "output",
        "name": "click",
        "propertyName": "click",
        "required": false,
        "type": "any"
      },
      {
        "kind": "method",
        "name": "clickTrigger",
        "propertyName": "clickTrigger",
        "required": false,
        "type": "() => void"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-card-content": {
    "className": "CardContentComponent",
    "file": "projects/ui/src/lib/modules/card/content/card-content.component.ts",
    "id": "ta-card-content",
    "kind": "component",
    "members": [],
    "pkg": "@ta/ui"
  },
  "ta-card-cta": {
    "className": "CardCtaComponent",
    "file": "projects/ui/src/lib/modules/card/cta/card-cta.component.ts",
    "id": "ta-card-cta",
    "kind": "component",
    "members": [],
    "pkg": "@ta/ui"
  },
  "ta-card-header": {
    "className": "CardHeaderComponent",
    "file": "projects/ui/src/lib/modules/card/header/card-header.component.ts",
    "id": "ta-card-header",
    "kind": "component",
    "members": [],
    "pkg": "@ta/ui"
  },
  "ta-card-image": {
    "className": "CardImageComponent",
    "file": "projects/ui/src/lib/modules/card/card-image/card-image.component.ts",
    "id": "ta-card-image",
    "kind": "component",
    "members": [
      {
        "default": "\"\"",
        "kind": "input",
        "name": "src",
        "propertyName": "src",
        "required": false,
        "type": "string"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-card-subtitle": {
    "className": "CardSubtitleComponent",
    "file": "projects/ui/src/lib/modules/card/subtitle/card-subtitle.component.ts",
    "id": "ta-card-subtitle",
    "kind": "component",
    "members": [],
    "pkg": "@ta/ui"
  },
  "ta-card-tag": {
    "className": "CardTagComponent",
    "file": "projects/ui/src/lib/modules/card/tag/card-tag.component.ts",
    "id": "ta-card-tag",
    "kind": "component",
    "members": [],
    "pkg": "@ta/ui"
  },
  "ta-card-title": {
    "className": "CardTitleComponent",
    "file": "projects/ui/src/lib/modules/card/title/card-title.component.ts",
    "id": "ta-card-title",
    "kind": "component",
    "members": [],
    "pkg": "@ta/ui"
  },
  "ta-civility": {
    "className": "CivilityComponent",
    "file": "projects/ui/src/lib/components/ui/civility/civility.component.ts",
    "id": "ta-civility",
    "kind": "component",
    "members": [
      {
        "doc": "Define the civility to display",
        "kind": "input",
        "name": "civility",
        "propertyName": "civility",
        "required": true,
        "type": "Civility | null"
      },
      {
        "kind": "method",
        "name": "getIcon",
        "propertyName": "getIcon",
        "required": false,
        "type": "() => string"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-cms": {
    "className": "CmsComponent",
    "file": "projects/cms/src/lib/modules/strapi/components/cms/cms.component.ts",
    "id": "ta-cms",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "contentType",
        "propertyName": "contentType",
        "required": true,
        "type": "string"
      },
      {
        "kind": "property",
        "name": "content$",
        "propertyName": "content$",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/cms"
  },
  "ta-cms-editor-blocks": {
    "className": "BlockTextComponent",
    "file": "projects/wysiswyg/src/lib/modules/wysiswyg/components/block-text/block-text.component.ts",
    "id": "ta-cms-editor-blocks",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "blocks",
        "propertyName": "blocks",
        "required": true,
        "type": "OutputBlockData[]"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/wysiswyg"
  },
  "ta-cms-editor-input": {
    "className": "EditorInputComponent",
    "file": "projects/wysiswyg/src/lib/modules/wysiswyg/components/input/input.component.ts",
    "id": "ta-cms-editor-input",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "initValue",
        "propertyName": "initValue",
        "required": false,
        "type": "WysiswgBlockData[] | null"
      },
      {
        "kind": "input",
        "name": "setNewValue$",
        "propertyName": "setNewValue$",
        "required": false,
        "type": "Observable<{\r\n    blocks: WysiswgBlockData[] | string | null;\r\n    saveAfter?: boolean;\r\n  }>"
      },
      {
        "kind": "input",
        "name": "requestSave$",
        "propertyName": "requestSave$",
        "required": false,
        "type": "Observable<void>"
      },
      {
        "kind": "input",
        "name": "clear$",
        "propertyName": "clear$",
        "required": false,
        "type": "Observable<void>"
      },
      {
        "default": "[]",
        "kind": "input",
        "name": "users",
        "propertyName": "users",
        "required": false,
        "type": "{ id: string; name: string }[]"
      },
      {
        "default": "false",
        "kind": "input",
        "name": "saveOnChange",
        "propertyName": "saveOnChange",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "false",
        "kind": "input",
        "name": "maxHeight",
        "propertyName": "maxHeight",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "EDITOR_ALL_TOOLS",
        "kind": "input",
        "name": "enabledTools",
        "propertyName": "enabledTools",
        "required": false,
        "type": "EditorToolType[]"
      },
      {
        "kind": "input",
        "name": "placeholder",
        "propertyName": "placeholder",
        "required": false,
        "type": "string"
      },
      {
        "kind": "output",
        "name": "changed",
        "propertyName": "changed",
        "required": false,
        "type": "{ blocks: WysiswgBlockData[] }"
      },
      {
        "kind": "output",
        "name": "saved",
        "propertyName": "saved",
        "required": false,
        "type": "EditorInputSavedData"
      },
      {
        "kind": "method",
        "name": "save",
        "propertyName": "save",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "init",
        "propertyName": "init",
        "required": false,
        "type": "() => EditorJS"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/wysiswyg"
  },
  "ta-component-selector-modal": {
    "className": "ComponentSelectorModal",
    "file": "projects/form/form-input/src/lib/components/input/component/component.component.ts",
    "id": "ta-component-selector-modal",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "open",
        "propertyName": "open",
        "required": true,
        "type": "boolean"
      },
      {
        "kind": "input",
        "name": "inputData",
        "propertyName": "inputData",
        "required": true,
        "type": "InputComponent"
      },
      {
        "kind": "output",
        "name": "closeEvent",
        "propertyName": "closeEvent",
        "required": false,
        "type": "void"
      },
      {
        "kind": "method",
        "name": "select",
        "propertyName": "select",
        "required": false,
        "type": "(value: string) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/form-input"
  },
  "ta-contact-information": {
    "className": "ContactInformationComponent",
    "file": "projects/ui/src/lib/components/ui/contact-information/contact-information.component.ts",
    "id": "ta-contact-information",
    "kind": "component",
    "members": [
      {
        "doc": "Text to display",
        "kind": "input",
        "name": "value",
        "propertyName": "value",
        "required": true,
        "type": "string | null"
      },
      {
        "doc": "Material icon to display",
        "kind": "input",
        "name": "icon",
        "propertyName": "icon",
        "required": false,
        "type": "string"
      },
      {
        "doc": "Local icon to display",
        "kind": "input",
        "name": "localIcon",
        "propertyName": "localIcon",
        "required": false,
        "type": "TaIconType"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-container-validation": {
    "className": "ContainerValidationComponent",
    "file": "projects/ui/src/lib/modules/container/validation/cta/container-validation.component.ts",
    "id": "ta-container-validation",
    "kind": "component",
    "members": [
      {
        "default": "false",
        "kind": "input",
        "name": "disabled",
        "propertyName": "disabled",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "\"validation.modal.title\"",
        "kind": "input",
        "name": "title",
        "propertyName": "title",
        "required": false,
        "type": "string"
      },
      {
        "default": "\"validation.modal.content\"",
        "kind": "input",
        "name": "subtitle",
        "propertyName": "subtitle",
        "required": false,
        "type": "string"
      },
      {
        "kind": "output",
        "name": "validated",
        "propertyName": "validated",
        "required": false,
        "type": "void"
      },
      {
        "kind": "method",
        "name": "openModal",
        "propertyName": "openModal",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "onNoClick",
        "propertyName": "onNoClick",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "onYesClick",
        "propertyName": "onYesClick",
        "required": false,
        "type": "() => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-context-menu": {
    "className": "ContextMenuComponent",
    "file": "projects/menu/src/lib/components/context-menu/context-menu.component.ts",
    "id": "ta-context-menu",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "menu",
        "propertyName": "menu",
        "required": true,
        "type": "Menu"
      },
      {
        "kind": "method",
        "name": "hasFontIcon",
        "propertyName": "hasFontIcon",
        "required": false,
        "type": "(item: MenuIcon | MenuAction | MenuBase) => boolean"
      },
      {
        "kind": "method",
        "name": "hasIconImage",
        "propertyName": "hasIconImage",
        "required": false,
        "type": "(item: MenuIcon | MenuAction | MenuBase) => boolean"
      },
      {
        "kind": "method",
        "name": "getIcon",
        "propertyName": "getIcon",
        "required": false,
        "type": "(item: MenuIcon | MenuAction | MenuBase) => void"
      },
      {
        "kind": "method",
        "name": "getFontIcon",
        "propertyName": "getFontIcon",
        "required": false,
        "type": "(item: Menu | MenuIcon | MenuBase) => void"
      },
      {
        "kind": "method",
        "name": "getLink",
        "propertyName": "getLink",
        "required": false,
        "type": "(item: MenuIcon | MenuAction | MenuBase) => void"
      },
      {
        "kind": "method",
        "name": "getRoute",
        "propertyName": "getRoute",
        "required": false,
        "type": "(item: MenuIcon | MenuAction | MenuBase) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/menu"
  },
  "ta-copy-link-button": {
    "className": "CopyLinkButtonComponent",
    "file": "projects/ui/src/lib/components/ui/button/copy-link/copy-link-button.component.ts",
    "id": "ta-copy-link-button",
    "kind": "component",
    "members": [
      {
        "default": "\"classic\"",
        "doc": "Button state",
        "kind": "input",
        "name": "state",
        "propertyName": "state",
        "required": false,
        "type": "TaState"
      },
      {
        "default": "\"medium\"",
        "doc": "Button size",
        "kind": "input",
        "name": "size",
        "propertyName": "size",
        "required": false,
        "type": "\"small\" | \"medium\" | \"large\""
      },
      {
        "default": "null",
        "doc": "Text to copy to clipboard",
        "kind": "input",
        "name": "value",
        "propertyName": "value",
        "required": false,
        "type": "string | null"
      },
      {
        "default": "true",
        "kind": "input",
        "name": "stopPropagationActivation",
        "propertyName": "stopPropagationActivation",
        "required": false,
        "type": "boolean"
      },
      {
        "doc": "Event emitted when button is clicked (after copy)",
        "kind": "output",
        "name": "action",
        "propertyName": "action",
        "required": false,
        "type": "void"
      },
      {
        "kind": "method",
        "name": "handleClick",
        "propertyName": "handleClick",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "getIconSize",
        "propertyName": "getIconSize",
        "required": false,
        "type": "() => TaSizes"
      },
      {
        "kind": "method",
        "name": "getClass",
        "propertyName": "getClass",
        "required": false,
        "type": "() => void"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-criticity": {
    "className": "CriticityComponent",
    "file": "projects/ui/src/lib/components/ui/criticity/criticity.component.ts",
    "id": "ta-criticity",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "criticity",
        "propertyName": "criticity",
        "required": true,
        "type": "number | CriticityStatus"
      },
      {
        "kind": "method",
        "name": "label",
        "propertyName": "label",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "type",
        "propertyName": "type",
        "required": false,
        "type": "() => void"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-culture": {
    "className": "CultureComponent",
    "file": "projects/ui/src/lib/components/ui/culture/culture.component.ts",
    "id": "ta-culture",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "cultures",
        "propertyName": "cultures",
        "required": true,
        "type": "Culture[]"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-dashboard-card": {
    "className": "DashboardCardComponent",
    "file": "projects/ui/src/lib/modules/card/dashboard/dashboard.component.ts",
    "id": "ta-dashboard-card",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "icon",
        "propertyName": "icon",
        "required": true,
        "type": "string"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-default-panel": {
    "className": "TaDefaultPanelComponent",
    "file": "projects/ui/src/lib/modules/overlay-panel/default-panel/default-panel.component.ts",
    "id": "ta-default-panel",
    "kind": "component",
    "members": [
      {
        "default": "undefined",
        "kind": "input",
        "name": "template",
        "propertyName": "template",
        "required": false,
        "type": "TemplateRef<any> | undefined"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-department-icon-list": {
    "className": "DepartmentIconListComponent",
    "file": "projects/ui/src/lib/components/ui/departments/department-icon-list/department-icon-list.component.ts",
    "id": "ta-department-icon-list",
    "kind": "component",
    "members": [
      {
        "doc": "List of departments object to display",
        "kind": "input",
        "name": "departments",
        "propertyName": "departments",
        "required": true,
        "type": "Department[]"
      },
      {
        "default": "false",
        "kind": "input",
        "name": "withName",
        "propertyName": "withName",
        "required": false,
        "type": "boolean"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-department-professions": {
    "className": "DepartmentProfessionsComponent",
    "file": "projects/ui/src/lib/components/ui/departments/professions/professions.component.ts",
    "id": "ta-department-professions",
    "kind": "component",
    "members": [
      {
        "doc": "List of professions to display",
        "kind": "input",
        "name": "professions",
        "propertyName": "professions",
        "required": true,
        "type": "string[]"
      },
      {
        "default": "\"xs\"",
        "doc": "font-size",
        "kind": "input",
        "name": "fontSize",
        "propertyName": "fontSize",
        "required": false,
        "type": "TaSizes"
      },
      {
        "default": "undefined",
        "kind": "input",
        "name": "maxVisible",
        "propertyName": "maxVisible",
        "required": false,
        "type": "number | undefined"
      },
      {
        "kind": "property",
        "name": "visibleProfessions",
        "propertyName": "visibleProfessions",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-departments": {
    "className": "DepartmentsComponent",
    "file": "projects/ui/src/lib/components/ui/departments/departments.component.ts",
    "id": "ta-departments",
    "kind": "component",
    "members": [
      {
        "doc": "List of departments object to display",
        "kind": "input",
        "name": "departments",
        "propertyName": "departments",
        "required": true,
        "type": "Department[]"
      },
      {
        "doc": "List of professions to display",
        "kind": "input",
        "name": "professions",
        "propertyName": "professions",
        "required": true,
        "type": "string[]"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-documents-list": {
    "className": "DocumentsListComponent",
    "file": "projects/files/files-basic/src/lib/components/documents/list/list.component.ts",
    "id": "ta-documents-list",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "documentsIds",
        "propertyName": "documentsIds",
        "required": true,
        "type": "string[]"
      },
      {
        "default": "\"\"",
        "kind": "input",
        "name": "emptyMessage",
        "propertyName": "emptyMessage",
        "required": false,
        "type": "string"
      },
      {
        "default": "\"\"",
        "kind": "input",
        "name": "actions",
        "propertyName": "actions",
        "required": false,
        "type": "\"delete\" | \"select\" | \"\""
      },
      {
        "default": "[]",
        "kind": "input",
        "name": "defaultSelected",
        "propertyName": "defaultSelected",
        "required": false,
        "type": "string[]"
      },
      {
        "default": "false",
        "kind": "input",
        "name": "readonly",
        "propertyName": "readonly",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "output",
        "name": "remove",
        "propertyName": "remove",
        "required": false,
        "type": "string"
      },
      {
        "kind": "output",
        "name": "checkedFilesChanged",
        "propertyName": "checkedFilesChanged",
        "required": false,
        "type": "InputUploadValue[]"
      },
      {
        "kind": "property",
        "name": "documents$",
        "propertyName": "documents$",
        "required": false,
        "type": "unknown"
      },
      {
        "kind": "method",
        "name": "openDocument",
        "propertyName": "openDocument",
        "required": false,
        "type": "(doc: DocumentDto) => void"
      },
      {
        "kind": "method",
        "name": "removeDocument",
        "propertyName": "removeDocument",
        "required": false,
        "type": "(doc: DocumentDto) => void"
      },
      {
        "kind": "method",
        "name": "isChecked",
        "propertyName": "isChecked",
        "required": false,
        "type": "(doc: DocumentDto) => void"
      },
      {
        "kind": "method",
        "name": "check",
        "propertyName": "check",
        "required": false,
        "type": "(doc: DocumentDto) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/files-basic"
  },
  "ta-doughnut-chart": {
    "className": "TaChartDoughnutComponent",
    "file": "projects/charts/src/lib/components/doughnut-chart.component.ts",
    "id": "ta-doughnut-chart",
    "kind": "component",
    "members": [
      {
        "inheritedFrom": "BaseChartComponent",
        "kind": "input",
        "name": "labels",
        "propertyName": "labels",
        "required": true,
        "type": "TLabel[]"
      },
      {
        "inheritedFrom": "BaseChartComponent",
        "kind": "input",
        "name": "datasets",
        "propertyName": "datasets",
        "required": true,
        "type": "ChartDataset<ChartType, TData>[]"
      },
      {
        "default": "{}",
        "inheritedFrom": "BaseChartComponent",
        "kind": "input",
        "name": "chartOptions",
        "propertyName": "chartOptions",
        "required": false,
        "type": "ChartConfiguration[\"options\"]"
      },
      {
        "inheritedFrom": "BaseChartComponent",
        "kind": "input",
        "name": "chartHeight",
        "propertyName": "chartHeight",
        "required": false,
        "type": "number"
      },
      {
        "inheritedFrom": "BaseChartComponent",
        "kind": "method",
        "name": "createChart",
        "propertyName": "createChart",
        "required": false,
        "type": "() => void"
      },
      {
        "inheritedFrom": "BaseChartComponent",
        "kind": "method",
        "name": "refreshChart",
        "propertyName": "refreshChart",
        "required": false,
        "type": "() => void"
      }
    ],
    "pkg": "@ta/charts"
  },
  "ta-dual-button": {
    "className": "DualButtonComponent",
    "file": "projects/ui/src/lib/components/ui/button/dual/dual-button.component.ts",
    "id": "ta-dual-button",
    "kind": "component",
    "members": [
      {
        "default": "false",
        "kind": "input",
        "name": "isFull",
        "propertyName": "isFull",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "input",
        "name": "first",
        "propertyName": "first",
        "required": true,
        "type": "DualButtonInput"
      },
      {
        "kind": "input",
        "name": "second",
        "propertyName": "second",
        "required": true,
        "type": "DualButtonInput"
      },
      {
        "default": "\"primary\"",
        "kind": "input",
        "name": "type",
        "propertyName": "type",
        "required": false,
        "type": "\"primary\" | \"secondary\""
      },
      {
        "kind": "method",
        "name": "getClass",
        "propertyName": "getClass",
        "required": false,
        "type": "() => void"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-duration": {
    "className": "DurationComponent",
    "file": "projects/ui/src/lib/components/ui/duration/duration.component.ts",
    "id": "ta-duration",
    "kind": "component",
    "members": [
      {
        "default": "Date.now()",
        "kind": "input",
        "name": "startDate",
        "propertyName": "startDate",
        "required": false,
        "type": "number | string"
      },
      {
        "default": "Date.now()",
        "kind": "input",
        "name": "endDate",
        "propertyName": "endDate",
        "required": false,
        "type": "number | string"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-edit-field": {
    "className": "EditFieldComponent",
    "file": "projects/form/form-basic/src/lib/components/edit-field/edit-field.component.ts",
    "id": "ta-edit-field",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "getInput",
        "propertyName": "getInput",
        "required": true,
        "type": "() => InputBase<any>"
      },
      {
        "default": "null",
        "kind": "input",
        "name": "changeEditMode$",
        "propertyName": "changeEditMode$",
        "required": false,
        "type": "Observable<boolean> | null"
      },
      {
        "default": "false",
        "kind": "input",
        "name": "isLoading",
        "propertyName": "isLoading",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "true",
        "kind": "input",
        "name": "withBorder",
        "propertyName": "withBorder",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "false",
        "kind": "input",
        "name": "disabled",
        "propertyName": "disabled",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "output",
        "name": "newValue",
        "propertyName": "newValue",
        "required": false,
        "type": "unknown"
      },
      {
        "kind": "method",
        "name": "onDocumentClick",
        "propertyName": "onDocumentClick",
        "required": false,
        "type": "(targetElement: HTMLElement) => void"
      },
      {
        "kind": "method",
        "name": "toggleEditMode",
        "propertyName": "toggleEditMode",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "validation",
        "propertyName": "validation",
        "required": false,
        "type": "() => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/form-basic"
  },
  "ta-empty": {
    "className": "EmptyComponent",
    "file": "projects/ui/src/lib/modules/container/empty/empty.component.ts",
    "id": "ta-empty",
    "kind": "component",
    "members": [
      {
        "default": "true",
        "kind": "input",
        "name": "isEmpty",
        "propertyName": "isEmpty",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "false",
        "kind": "input",
        "name": "isLight",
        "propertyName": "isLight",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "true",
        "kind": "input",
        "name": "showMessage",
        "propertyName": "showMessage",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "'ui.container.empty.title'",
        "kind": "input",
        "name": "text",
        "propertyName": "text",
        "required": false,
        "type": "string"
      },
      {
        "default": "''",
        "kind": "input",
        "name": "subtitle",
        "propertyName": "subtitle",
        "required": false,
        "type": "string"
      },
      {
        "default": "'sentiment_dissatisfied'",
        "kind": "input",
        "name": "emptyIcon",
        "propertyName": "emptyIcon",
        "required": false,
        "type": "string"
      },
      {
        "default": "'xl'",
        "kind": "input",
        "name": "iconSize",
        "propertyName": "iconSize",
        "required": false,
        "type": "TaSizes | 'xl'"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-error": {
    "className": "ErrorComponent",
    "file": "projects/ui/src/lib/modules/container/error/error.component.ts",
    "id": "ta-error",
    "kind": "component",
    "members": [
      {
        "default": "\"\"",
        "kind": "input",
        "name": "message",
        "propertyName": "message",
        "required": false,
        "type": "string"
      },
      {
        "default": "200",
        "kind": "input",
        "name": "code",
        "propertyName": "code",
        "required": false,
        "type": "number"
      },
      {
        "default": "true",
        "kind": "input",
        "name": "showRetry",
        "propertyName": "showRetry",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "\"ui.container.error.retry\"",
        "kind": "input",
        "name": "retryLabel",
        "propertyName": "retryLabel",
        "required": false,
        "type": "string"
      },
      {
        "kind": "output",
        "name": "retry",
        "propertyName": "retry",
        "required": false,
        "type": "void"
      },
      {
        "kind": "method",
        "name": "onRetry",
        "propertyName": "onRetry",
        "required": false,
        "type": "() => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-excel-viewer": {
    "className": "ExcelViewerComponent",
    "file": "projects/files/files-basic/src/lib/components/preview/viewers/excel-viewer/excel-viewer.component.ts",
    "id": "ta-excel-viewer",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "file",
        "propertyName": "file",
        "required": true,
        "type": "PreviewDocumentDto"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/files-basic"
  },
  "ta-expandable-text": {
    "className": "ExpandableTextComponent",
    "file": "projects/ui/src/lib/components/ui/expandable-text/expandable-text.component.ts",
    "id": "ta-expandable-text",
    "kind": "component",
    "members": [
      {
        "default": "100",
        "kind": "input",
        "name": "height",
        "propertyName": "height",
        "required": false,
        "type": "number"
      },
      {
        "kind": "property",
        "name": "textHeight",
        "propertyName": "textHeight",
        "required": false,
        "type": "unknown"
      },
      {
        "kind": "property",
        "name": "hasFixedHeight",
        "propertyName": "hasFixedHeight",
        "required": false,
        "type": "unknown"
      },
      {
        "kind": "property",
        "name": "hasTooBigText",
        "propertyName": "hasTooBigText",
        "required": false,
        "type": "unknown"
      },
      {
        "kind": "method",
        "name": "toggleText",
        "propertyName": "toggleText",
        "required": false,
        "type": "() => void"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-expansion-panel": {
    "className": "TaExpansionPanelComponent",
    "file": "projects/ui/src/lib/components/ui/expansion-panel/expansion-panel.component.ts",
    "id": "ta-expansion-panel",
    "kind": "component",
    "members": [
      {
        "default": "[]",
        "kind": "input",
        "name": "templates",
        "propertyName": "templates",
        "required": false,
        "type": "ExpansionPanelInput[]"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-file-image": {
    "className": "FileImageComponent",
    "file": "projects/ui/src/lib/components/ui/file-image/file-image.component.ts",
    "id": "ta-file-image",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "fileName",
        "propertyName": "fileName",
        "required": true,
        "type": "string"
      },
      {
        "default": "\"sm\"",
        "kind": "input",
        "name": "size",
        "propertyName": "size",
        "required": false,
        "type": "TaSizes"
      },
      {
        "kind": "property",
        "name": "extIcon",
        "propertyName": "extIcon",
        "required": false,
        "type": "TaIconType"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-files-display": {
    "className": "FilesDisplayComponent",
    "file": "projects/files/files-extended/src/lib/components/display/files-display.component.ts",
    "id": "ta-files-display",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "files$",
        "propertyName": "files$",
        "required": true,
        "type": "Observable<FileData[]>"
      },
      {
        "kind": "input",
        "name": "menu",
        "propertyName": "menu",
        "required": true,
        "type": "Menu"
      },
      {
        "default": "true",
        "kind": "input",
        "name": "canAddFile",
        "propertyName": "canAddFile",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "input",
        "name": "tempFiles",
        "propertyName": "tempFiles",
        "required": true,
        "type": "FileData[]"
      },
      {
        "kind": "input",
        "name": "fileType",
        "propertyName": "fileType",
        "required": true,
        "type": "FileType"
      },
      {
        "kind": "output",
        "name": "fileSelected",
        "propertyName": "fileSelected",
        "required": false,
        "type": "FileData & { index: number }"
      },
      {
        "kind": "output",
        "name": "moreInformationSelected",
        "propertyName": "moreInformationSelected",
        "required": false,
        "type": "FileData"
      },
      {
        "kind": "output",
        "name": "fileUploading",
        "propertyName": "fileUploading",
        "required": false,
        "type": "FileStructure[]"
      },
      {
        "kind": "property",
        "name": "canSelectMultipleFiles",
        "propertyName": "canSelectMultipleFiles",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "property",
        "name": "canDisplayTempsFiles",
        "propertyName": "canDisplayTempsFiles",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "method",
        "name": "getFeature",
        "propertyName": "getFeature",
        "required": false,
        "type": "() => Feature[]"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/files-extended"
  },
  "ta-files-edit": {
    "className": "FileEditComponent",
    "file": "projects/files/files-basic/src/lib/components/edit/files-edit.component.ts",
    "id": "ta-files-edit",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "imagePath",
        "propertyName": "imagePath",
        "required": true,
        "type": "string"
      },
      {
        "kind": "input",
        "name": "saveImage$",
        "propertyName": "saveImage$",
        "required": true,
        "type": "Observable<null>"
      },
      {
        "kind": "output",
        "name": "savedImage",
        "propertyName": "savedImage",
        "required": false,
        "type": "Blob"
      },
      {
        "kind": "method",
        "name": "getHeight",
        "propertyName": "getHeight",
        "required": false,
        "type": "() => string"
      },
      {
        "kind": "method",
        "name": "getWidth",
        "propertyName": "getWidth",
        "required": false,
        "type": "() => string"
      },
      {
        "kind": "method",
        "name": "keyPress",
        "propertyName": "keyPress",
        "required": false,
        "type": "(event: KeyboardEvent) => void"
      },
      {
        "kind": "method",
        "name": "showPanel",
        "propertyName": "showPanel",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "changeSelection",
        "propertyName": "changeSelection",
        "required": false,
        "type": "(newSelection: Selection) => void"
      },
      {
        "kind": "method",
        "name": "changeShapeSelection",
        "propertyName": "changeShapeSelection",
        "required": false,
        "type": "(newSelection: ShapeSelection) => void"
      },
      {
        "kind": "method",
        "name": "undo",
        "propertyName": "undo",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "redo",
        "propertyName": "redo",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "shape",
        "propertyName": "shape",
        "required": false,
        "type": "(type: \"rect\" | \"circle\" | \"triangle\") => void"
      },
      {
        "kind": "method",
        "name": "drawing",
        "propertyName": "drawing",
        "required": false,
        "type": "(type: \"LINE_DRAWING\" | \"FREE_DRAWING\") => void"
      },
      {
        "kind": "method",
        "name": "text",
        "propertyName": "text",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "changeColor",
        "propertyName": "changeColor",
        "required": false,
        "type": "(color: string) => void"
      },
      {
        "kind": "method",
        "name": "changeBrushSize",
        "propertyName": "changeBrushSize",
        "required": false,
        "type": "(size: number) => void"
      },
      {
        "kind": "method",
        "name": "clear",
        "propertyName": "clear",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "validation",
        "propertyName": "validation",
        "required": false,
        "type": "() => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/files-basic"
  },
  "ta-files-list": {
    "className": "FileListComponent",
    "file": "projects/files/files-basic/src/lib/components/list/files-list.component.ts",
    "id": "ta-files-list",
    "kind": "component",
    "members": [
      {
        "default": "[]",
        "kind": "input",
        "name": "files",
        "propertyName": "files",
        "required": false,
        "type": "FileData[]"
      },
      {
        "default": "false",
        "kind": "input",
        "name": "canDeleteFile",
        "propertyName": "canDeleteFile",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "output",
        "name": "fileSelected",
        "propertyName": "fileSelected",
        "required": false,
        "type": "FileData & { index: number }"
      },
      {
        "kind": "output",
        "name": "moreInformationSelected",
        "propertyName": "moreInformationSelected",
        "required": false,
        "type": "FileData"
      },
      {
        "kind": "output",
        "name": "fileDeleted",
        "propertyName": "fileDeleted",
        "required": false,
        "type": "FileData"
      },
      {
        "kind": "method",
        "name": "canDisplayFileType",
        "propertyName": "canDisplayFileType",
        "required": false,
        "type": "(fileType: FileType) => boolean"
      },
      {
        "kind": "method",
        "name": "onFileSelected",
        "propertyName": "onFileSelected",
        "required": false,
        "type": "(file: FileData, index: number) => void"
      },
      {
        "kind": "method",
        "name": "onMoreInformationSelected",
        "propertyName": "onMoreInformationSelected",
        "required": false,
        "type": "(file: FileData) => void"
      },
      {
        "kind": "method",
        "name": "deleteFile",
        "propertyName": "deleteFile",
        "required": false,
        "type": "(fileData: FileData) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/files-basic"
  },
  "ta-files-preview": {
    "className": "FilesPreviewComponent",
    "file": "projects/files/files-basic/src/lib/components/preview/preview.component.ts",
    "id": "ta-files-preview",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "initial",
        "propertyName": "initial",
        "required": true,
        "type": "PreviewDocumentDto"
      },
      {
        "kind": "method",
        "name": "download",
        "propertyName": "download",
        "required": false,
        "type": "() => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/files-basic"
  },
  "ta-files-preview-modal": {
    "className": "PreviewModal",
    "file": "projects/files/files-basic/src/lib/components/preview/preview.component.ts",
    "id": "ta-files-preview-modal",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "open",
        "propertyName": "open",
        "required": true,
        "type": "boolean"
      },
      {
        "default": "null",
        "kind": "input",
        "name": "initial",
        "propertyName": "initial",
        "required": false,
        "type": "PreviewDocumentDto | null"
      },
      {
        "kind": "output",
        "name": "closeEvent",
        "propertyName": "closeEvent",
        "required": false,
        "type": "void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/files-basic"
  },
  "ta-files-upload": {
    "className": "UploadComponent",
    "file": "projects/files/files-extended/src/lib/components/upload/files-upload.component.ts",
    "id": "ta-files-upload",
    "kind": "component",
    "members": [
      {
        "default": "[]",
        "kind": "input",
        "name": "features",
        "propertyName": "features",
        "required": false,
        "type": "Feature[]"
      },
      {
        "default": "false",
        "kind": "input",
        "name": "canSelectMultipleFiles",
        "propertyName": "canSelectMultipleFiles",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "true",
        "kind": "input",
        "name": "showInActionButton",
        "propertyName": "showInActionButton",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "output",
        "name": "filesPicked",
        "propertyName": "filesPicked",
        "required": false,
        "type": "FileStructure[]"
      },
      {
        "kind": "property",
        "name": "addActions",
        "propertyName": "addActions",
        "required": false,
        "type": "ActionButtonData[]"
      }
    ],
    "pkg": "@ta/files-extended"
  },
  "ta-filter-container": {
    "className": "FilterContainerComponent",
    "file": "projects/core/src/lib/components/filters/filter-container/filter-container.component.ts",
    "id": "ta-filter-container",
    "kind": "component",
    "members": [
      {
        "default": "[]",
        "kind": "input",
        "name": "form",
        "propertyName": "form",
        "required": false,
        "type": "InputBase<any>[]"
      },
      {
        "kind": "output",
        "name": "filtersSelected",
        "propertyName": "filtersSelected",
        "required": false,
        "type": "any"
      },
      {
        "kind": "method",
        "name": "apply",
        "propertyName": "apply",
        "required": false,
        "type": "(data: any) => void"
      },
      {
        "kind": "method",
        "name": "clear",
        "propertyName": "clear",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "validate",
        "propertyName": "validate",
        "required": false,
        "type": "() => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/core"
  },
  "ta-filter-displayer": {
    "className": "FilterDisplayerComponent",
    "file": "projects/core/src/lib/components/filters/filter-displayer/filter-displayer.component.ts",
    "id": "ta-filter-displayer",
    "kind": "component",
    "members": [
      {
        "default": "[]",
        "kind": "input",
        "name": "form",
        "propertyName": "form",
        "required": false,
        "type": "InputBase<any>[]"
      },
      {
        "default": "\"filter\"",
        "kind": "input",
        "name": "iconType",
        "propertyName": "iconType",
        "required": false,
        "type": "string"
      },
      {
        "default": "\"button\"",
        "kind": "input",
        "name": "container",
        "propertyName": "container",
        "required": false,
        "type": "\"button\" | \"link\""
      },
      {
        "kind": "output",
        "name": "filtersSelected",
        "propertyName": "filtersSelected",
        "required": false,
        "type": "any"
      },
      {
        "kind": "property",
        "name": "isFilterOpen",
        "propertyName": "isFilterOpen",
        "required": false,
        "type": "unknown"
      },
      {
        "kind": "property",
        "name": "mobileDetection",
        "propertyName": "mobileDetection",
        "required": false,
        "type": "unknown"
      },
      {
        "kind": "method",
        "name": "selected",
        "propertyName": "selected",
        "required": false,
        "type": "(filters: any) => void"
      },
      {
        "kind": "method",
        "name": "open",
        "propertyName": "open",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "close",
        "propertyName": "close",
        "required": false,
        "type": "() => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/core"
  },
  "ta-filters-container": {
    "className": "FiltersContainerComponent",
    "file": "projects/core/src/lib/components/filters/container/filters-container.component.ts",
    "id": "ta-filters-container",
    "kind": "component",
    "members": [
      {
        "default": "[]",
        "kind": "input",
        "name": "form",
        "propertyName": "form",
        "required": false,
        "type": "InputBase<any>[]"
      },
      {
        "default": "[]",
        "kind": "input",
        "name": "activeFilter",
        "propertyName": "activeFilter",
        "required": false,
        "type": "ActiveFilterTag[]"
      },
      {
        "kind": "output",
        "name": "filtersSelected",
        "propertyName": "filtersSelected",
        "required": false,
        "type": "any"
      },
      {
        "kind": "output",
        "name": "removedFilter",
        "propertyName": "removedFilter",
        "required": false,
        "type": "ActiveFilterTag"
      },
      {
        "kind": "method",
        "name": "toggleFilter",
        "propertyName": "toggleFilter",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "apply",
        "propertyName": "apply",
        "required": false,
        "type": "(data: any) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/core"
  },
  "ta-filters-tag": {
    "className": "FiltersTagComponent",
    "file": "projects/core/src/lib/components/filters/tag/filters-tag.component.ts",
    "id": "ta-filters-tag",
    "kind": "component",
    "members": [
      {
        "default": "[]",
        "kind": "input",
        "name": "activeFilter",
        "propertyName": "activeFilter",
        "required": false,
        "type": "ActiveFilterTag[]"
      },
      {
        "kind": "output",
        "name": "removedFilter",
        "propertyName": "removedFilter",
        "required": false,
        "type": "ActiveFilterTag"
      },
      {
        "kind": "method",
        "name": "remove",
        "propertyName": "remove",
        "required": false,
        "type": "(filter: ActiveFilterTag) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/core"
  },
  "ta-flag-icon": {
    "className": "FlagIconComponent",
    "file": "projects/icons/src/lib/components/flag-icon/flag-icon.component.ts",
    "id": "ta-flag-icon",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "code",
        "propertyName": "code",
        "required": true,
        "type": "string"
      },
      {
        "default": "\"sm\"",
        "kind": "input",
        "name": "size",
        "propertyName": "size",
        "required": false,
        "type": "TaSizes"
      },
      {
        "kind": "method",
        "name": "getWidth",
        "propertyName": "getWidth",
        "required": false,
        "type": "() => string"
      }
    ],
    "pkg": "@ta/icons"
  },
  "ta-font-icon": {
    "className": "FontIconComponent",
    "file": "projects/icons/src/lib/components/font-icon/font-icon.component.ts",
    "id": "ta-font-icon",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "name",
        "propertyName": "name",
        "required": true,
        "type": "string"
      },
      {
        "default": "'md'",
        "kind": "input",
        "name": "type",
        "propertyName": "type",
        "required": false,
        "type": "TaSizes"
      }
    ],
    "pkg": "@ta/icons"
  },
  "ta-form": {
    "className": "FormComponent",
    "file": "projects/form/form-basic/src/lib/components/form.component.ts",
    "id": "ta-form",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "inputs",
        "propertyName": "inputs",
        "required": true,
        "type": "InputBase<any>[]"
      },
      {
        "kind": "input",
        "name": "askValidation$",
        "propertyName": "askValidation$",
        "required": false,
        "type": "Observable<null>"
      },
      {
        "kind": "input",
        "name": "askOnDestroy",
        "propertyName": "askOnDestroy",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "false",
        "kind": "input",
        "name": "loader",
        "propertyName": "loader",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "{ status: ENotificationCode.none, message: '' }",
        "kind": "input",
        "name": "error",
        "propertyName": "error",
        "required": false,
        "type": "IInputsError"
      },
      {
        "default": "true",
        "kind": "input",
        "name": "border",
        "propertyName": "border",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "true",
        "kind": "input",
        "name": "canDisplayButton",
        "propertyName": "canDisplayButton",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "'form.save'",
        "kind": "input",
        "name": "buttonTitle",
        "propertyName": "buttonTitle",
        "required": false,
        "type": "string"
      },
      {
        "default": "false",
        "kind": "input",
        "name": "onLive",
        "propertyName": "onLive",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "output",
        "name": "valid",
        "propertyName": "valid",
        "required": false,
        "type": "{}"
      },
      {
        "kind": "output",
        "name": "isFormValid",
        "propertyName": "isFormValid",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "method",
        "name": "onSubmit",
        "propertyName": "onSubmit",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "handleInvalidSubmit",
        "propertyName": "handleInvalidSubmit",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "isValid",
        "propertyName": "isValid",
        "required": false,
        "type": "() => boolean"
      },
      {
        "kind": "method",
        "name": "toFormGroup",
        "propertyName": "toFormGroup",
        "required": false,
        "type": "(inputs: InputBase<any>[]) => FormGroup"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/form-basic"
  },
  "ta-form-label": {
    "className": "FormLabelComponent",
    "file": "projects/form/form-input/src/lib/components/label/label.component.ts",
    "id": "ta-form-label",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "input",
        "propertyName": "inputModel",
        "required": true,
        "type": "{ label: string; validators: ValidatorFn[] }"
      },
      {
        "default": "true",
        "kind": "input",
        "name": "withMarginBottom",
        "propertyName": "withMarginBottom",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "\"field\"",
        "doc": "`field` intitule un champ de saisie ; `choice` enonce l'option d'une case, d'un radio ou d'un interrupteur — c'est alors du texte courant, pas un intitule, et il se lit a la taille du corps de texte.",
        "kind": "input",
        "name": "variant",
        "propertyName": "variant",
        "required": false,
        "type": "\"field\" | \"choice\""
      }
    ],
    "pkg": "@ta/form-input"
  },
  "ta-google-maps": {
    "className": "MapComponent",
    "file": "projects/core/src/lib/modules/maps/components/map/map.component.ts",
    "id": "ta-google-maps",
    "kind": "component",
    "members": [
      {
        "kind": "method",
        "name": "openInfoWindow",
        "propertyName": "openInfoWindow",
        "required": false,
        "type": "(mapMarker: MapMarker) => void"
      },
      {
        "kind": "method",
        "name": "renderRoute",
        "propertyName": "renderRoute",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "renderRouteWithRoutesApi",
        "propertyName": "renderRouteWithRoutesApi",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "parseDuration",
        "propertyName": "parseDuration",
        "required": false,
        "type": "(isoDuration: string) => string"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/core"
  },
  "ta-grid": {
    "className": "TaGridComponent",
    "file": "projects/features/src/lib/features/grid/components/grid/grid.component.ts",
    "id": "ta-grid",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "cardTemplate",
        "propertyName": "cardTemplate",
        "required": true,
        "type": "TemplateRef<{ items: T[]; selectedIds: Set<number> }>"
      },
      {
        "default": "false",
        "kind": "input",
        "name": "showSelection",
        "propertyName": "showSelection",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "'comfortable'",
        "doc": "Hauteur de ligne : confortable par défaut, compacte pour les longues listes.",
        "kind": "input",
        "name": "density",
        "propertyName": "density",
        "required": false,
        "type": "'comfortable' | 'compact'"
      },
      {
        "kind": "output",
        "name": "rowClicked",
        "propertyName": "rowClicked",
        "required": false,
        "type": "T"
      },
      {
        "kind": "output",
        "name": "selectionChanged",
        "propertyName": "selectionChanged",
        "required": false,
        "type": "T[]"
      },
      {
        "kind": "property",
        "name": "rows",
        "propertyName": "rows",
        "required": false,
        "type": "T[]"
      },
      {
        "kind": "property",
        "name": "sortField",
        "propertyName": "sortField",
        "required": false,
        "type": "string | null"
      },
      {
        "kind": "property",
        "name": "sortDir",
        "propertyName": "sortDir",
        "required": false,
        "type": "'asc' | 'desc'"
      },
      {
        "kind": "property",
        "name": "isLoading",
        "propertyName": "isLoading",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "property",
        "name": "errorMessage",
        "propertyName": "errorMessage",
        "required": false,
        "type": "string"
      },
      {
        "doc": "Largeur d'une ligne d'en-tête de groupe, colonne de sélection comprise.",
        "kind": "property",
        "name": "colspan",
        "propertyName": "colspan",
        "required": false,
        "type": "number"
      },
      {
        "kind": "property",
        "name": "selectedIds",
        "propertyName": "selectedIds",
        "required": false,
        "type": "Set<number>"
      },
      {
        "kind": "method",
        "name": "isSelected",
        "propertyName": "isSelected",
        "required": false,
        "type": "(id: number) => boolean"
      },
      {
        "kind": "method",
        "name": "isAllPageSelected",
        "propertyName": "isAllPageSelected",
        "required": false,
        "type": "() => boolean"
      },
      {
        "kind": "method",
        "name": "toggleRow",
        "propertyName": "toggleRow",
        "required": false,
        "type": "(row: T) => void"
      },
      {
        "kind": "method",
        "name": "toggleAll",
        "propertyName": "toggleAll",
        "required": false,
        "type": "() => void"
      },
      {
        "doc": "Libellé d'un groupe : `groupBy` produit des chaînes, on repasse par le formatteur de la colonne pour retrouver dates et booléens lisibles.",
        "kind": "method",
        "name": "groupLabel",
        "propertyName": "groupLabel",
        "required": false,
        "type": "(value: string) => string"
      },
      {
        "kind": "method",
        "name": "getCellValue",
        "propertyName": "getCellValue",
        "required": false,
        "type": "(row: T, key: string) => any"
      },
      {
        "kind": "method",
        "name": "onRowClick",
        "propertyName": "onRowClick",
        "required": false,
        "type": "(row: T) => void"
      },
      {
        "kind": "method",
        "name": "onSort",
        "propertyName": "onSort",
        "required": false,
        "type": "(col: ColConfig) => void"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "input",
        "name": "gridId",
        "propertyName": "gridId",
        "required": true,
        "type": "string"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "property",
        "name": "grid",
        "propertyName": "grid",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "property",
        "name": "isGroup",
        "propertyName": "isGroup",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "property",
        "name": "data",
        "propertyName": "data",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "property",
        "name": "dataByGroup",
        "propertyName": "dataByGroup",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "property",
        "name": "displayType",
        "propertyName": "displayType",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/features"
  },
  "ta-grid-container": {
    "className": "TaGridContainerComponent",
    "file": "projects/features/src/lib/features/grid/components/container/container.component.ts",
    "id": "ta-grid-container",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "initialData",
        "propertyName": "initialData",
        "required": false,
        "type": "T[]"
      },
      {
        "default": "''",
        "kind": "input",
        "name": "model",
        "propertyName": "model",
        "required": false,
        "type": "string"
      },
      {
        "default": "[]",
        "kind": "input",
        "name": "colsMetaData",
        "propertyName": "colsMetaData",
        "required": false,
        "type": "ColMetaData<T>[]"
      },
      {
        "kind": "input",
        "name": "preset",
        "propertyName": "preset",
        "required": false,
        "type": "Preset[]"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "input",
        "name": "gridId",
        "propertyName": "gridId",
        "required": true,
        "type": "string"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "property",
        "name": "grid",
        "propertyName": "grid",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "property",
        "name": "isGroup",
        "propertyName": "isGroup",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "property",
        "name": "data",
        "propertyName": "data",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "property",
        "name": "dataByGroup",
        "propertyName": "dataByGroup",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "property",
        "name": "displayType",
        "propertyName": "displayType",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/features"
  },
  "ta-grid-control": {
    "className": "TaGridControlComponent",
    "file": "projects/features/src/lib/features/grid/components/control/control.component.ts",
    "id": "ta-grid-control",
    "kind": "component",
    "members": [
      {
        "default": "{\n    switchView: true,\n    filters: true,\n    preset: true,\n    group: true,\n  }",
        "kind": "input",
        "name": "show",
        "propertyName": "show",
        "required": false,
        "type": "{ switchView?: boolean; filters?: boolean; preset?: boolean; group?: boolean }"
      },
      {
        "default": "false",
        "doc": "Masque les libellés textuels : ne restent que les icônes.",
        "kind": "input",
        "name": "compact",
        "propertyName": "compact",
        "required": false,
        "type": "boolean"
      },
      {
        "doc": "Nombre de critères actifs, hors recherche globale — affiché sur le bouton Filtres.",
        "kind": "property",
        "name": "activeFiltersCount",
        "propertyName": "activeFiltersCount",
        "required": false,
        "type": "number"
      },
      {
        "doc": "Colonnes sur lesquelles un regroupement a du sens.",
        "kind": "property",
        "name": "groupableCols",
        "propertyName": "groupableCols",
        "required": false,
        "type": "{ key: string; label: string }[]"
      },
      {
        "kind": "property",
        "name": "hasGroupableCols",
        "propertyName": "hasGroupableCols",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "property",
        "name": "activeGroup",
        "propertyName": "activeGroup",
        "required": false,
        "type": "string | null"
      },
      {
        "kind": "property",
        "name": "activeGroupLabel",
        "propertyName": "activeGroupLabel",
        "required": false,
        "type": "string | null"
      },
      {
        "kind": "property",
        "name": "hasPresets",
        "propertyName": "hasPresets",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "property",
        "name": "activePresetName",
        "propertyName": "activePresetName",
        "required": false,
        "type": "string | null"
      },
      {
        "kind": "method",
        "name": "switchView",
        "propertyName": "switchView",
        "required": false,
        "type": "(type: ViewType) => void"
      },
      {
        "kind": "method",
        "name": "openFilters",
        "propertyName": "openFilters",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "setPreset",
        "propertyName": "setPreset",
        "required": false,
        "type": "(preset: Preset) => void"
      },
      {
        "kind": "method",
        "name": "setGroup",
        "propertyName": "setGroup",
        "required": false,
        "type": "(key: string | null) => void"
      },
      {
        "kind": "method",
        "name": "isPresetActive",
        "propertyName": "isPresetActive",
        "required": false,
        "type": "(preset: Preset) => boolean"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "input",
        "name": "gridId",
        "propertyName": "gridId",
        "required": true,
        "type": "string"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "property",
        "name": "grid",
        "propertyName": "grid",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "property",
        "name": "isGroup",
        "propertyName": "isGroup",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "property",
        "name": "data",
        "propertyName": "data",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "property",
        "name": "dataByGroup",
        "propertyName": "dataByGroup",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "property",
        "name": "displayType",
        "propertyName": "displayType",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/features"
  },
  "ta-grid-filters-panel": {
    "className": "TaGridFiltersPanel",
    "doc": "Panneau latéral des filtres. Un panneau plutôt qu'une modale : les critères restent à côté de la liste, qui se met à jour pendant qu'on les règle.",
    "file": "projects/features/src/lib/features/grid/components/control/control.component.ts",
    "id": "ta-grid-filters-panel",
    "kind": "component",
    "members": [
      {
        "kind": "output",
        "name": "closeEvent",
        "propertyName": "closeEvent",
        "required": false,
        "type": "void"
      },
      {
        "kind": "property",
        "name": "resultCount",
        "propertyName": "resultCount",
        "required": false,
        "type": "number"
      },
      {
        "doc": "Ne touche qu'aux filtres : le regroupement se pilote depuis ta-grid-control.",
        "kind": "method",
        "name": "reset",
        "propertyName": "reset",
        "required": false,
        "type": "() => void"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "input",
        "name": "gridId",
        "propertyName": "gridId",
        "required": true,
        "type": "string"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "property",
        "name": "grid",
        "propertyName": "grid",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "property",
        "name": "isGroup",
        "propertyName": "isGroup",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "property",
        "name": "data",
        "propertyName": "data",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "property",
        "name": "dataByGroup",
        "propertyName": "dataByGroup",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "property",
        "name": "displayType",
        "propertyName": "displayType",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/features"
  },
  "ta-grid-form": {
    "className": "TaGridFormComponent",
    "file": "projects/features/src/lib/features/grid/components/form/form.component.ts",
    "id": "ta-grid-form",
    "kind": "component",
    "members": [
      {
        "default": "true",
        "kind": "input",
        "name": "showTitle",
        "propertyName": "showTitle",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "true",
        "kind": "input",
        "name": "showReset",
        "propertyName": "showReset",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "'grid.form.title'",
        "doc": "Clé de traduction du titre du panneau.",
        "kind": "input",
        "name": "title",
        "propertyName": "title",
        "required": false,
        "type": "string"
      },
      {
        "default": "true",
        "doc": "Affiche le nombre de résultats à côté du titre.",
        "kind": "input",
        "name": "showResultCount",
        "propertyName": "showResultCount",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "false",
        "doc": "Affiche le regroupement dans le panneau. Désactivé par défaut : le regroupement organise l'affichage, il est porté par `ta-grid-control`.",
        "kind": "input",
        "name": "showGroup",
        "propertyName": "showGroup",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "method",
        "name": "applyFilters",
        "propertyName": "applyFilters",
        "required": false,
        "type": "(data: any) => void"
      },
      {
        "kind": "method",
        "name": "applyGroup",
        "propertyName": "applyGroup",
        "required": false,
        "type": "(data: any) => void"
      },
      {
        "kind": "method",
        "name": "reset",
        "propertyName": "reset",
        "required": false,
        "type": "() => void"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "input",
        "name": "gridId",
        "propertyName": "gridId",
        "required": true,
        "type": "string"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "property",
        "name": "grid",
        "propertyName": "grid",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "property",
        "name": "isGroup",
        "propertyName": "isGroup",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "property",
        "name": "data",
        "propertyName": "data",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "property",
        "name": "dataByGroup",
        "propertyName": "dataByGroup",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "property",
        "name": "displayType",
        "propertyName": "displayType",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/features"
  },
  "ta-grid-highlight-filters": {
    "className": "TaGridHighlightFiltersComponent",
    "file": "projects/features/src/lib/features/grid/components/highlight-filters/highlight-filters.component.ts",
    "id": "ta-grid-highlight-filters",
    "kind": "component",
    "members": [
      {
        "default": "true",
        "kind": "input",
        "name": "showResultCount",
        "propertyName": "showResultCount",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "true",
        "kind": "input",
        "name": "showReset",
        "propertyName": "showReset",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "method",
        "name": "applyFilters",
        "propertyName": "applyFilters",
        "required": false,
        "type": "(data: any) => void"
      },
      {
        "kind": "method",
        "name": "reset",
        "propertyName": "reset",
        "required": false,
        "type": "() => void"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "input",
        "name": "gridId",
        "propertyName": "gridId",
        "required": true,
        "type": "string"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "property",
        "name": "grid",
        "propertyName": "grid",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "property",
        "name": "isGroup",
        "propertyName": "isGroup",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "property",
        "name": "data",
        "propertyName": "data",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "property",
        "name": "dataByGroup",
        "propertyName": "dataByGroup",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "property",
        "name": "displayType",
        "propertyName": "displayType",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/features"
  },
  "ta-grid-search": {
    "className": "TaGridSearchComponent",
    "file": "projects/features/src/lib/features/grid/components/search/search.component.ts",
    "id": "ta-grid-search",
    "kind": "component",
    "members": [
      {
        "default": "'grid.search.placeholder'",
        "kind": "input",
        "name": "placeholder",
        "propertyName": "placeholder",
        "required": false,
        "type": "string"
      },
      {
        "kind": "method",
        "name": "valueChanged",
        "propertyName": "valueChanged",
        "required": false,
        "type": "(value: string) => void"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "input",
        "name": "gridId",
        "propertyName": "gridId",
        "required": true,
        "type": "string"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "property",
        "name": "grid",
        "propertyName": "grid",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "property",
        "name": "isGroup",
        "propertyName": "isGroup",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "property",
        "name": "data",
        "propertyName": "data",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "property",
        "name": "dataByGroup",
        "propertyName": "dataByGroup",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "property",
        "name": "displayType",
        "propertyName": "displayType",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/features"
  },
  "ta-grid-tags": {
    "className": "TaGridTagsComponent",
    "file": "projects/features/src/lib/features/grid/components/tags/tags.component.ts",
    "id": "ta-grid-tags",
    "kind": "component",
    "members": [
      {
        "kind": "property",
        "name": "group",
        "propertyName": "group",
        "required": false,
        "type": "unknown"
      },
      {
        "kind": "property",
        "name": "activeFilters",
        "propertyName": "activeFilters",
        "required": false,
        "type": "unknown"
      },
      {
        "kind": "property",
        "name": "hasActiveFilters",
        "propertyName": "hasActiveFilters",
        "required": false,
        "type": "boolean"
      },
      {
        "doc": "Clé de traduction du libellé d'un critère — le champ de recherche n'est pas une colonne.",
        "kind": "method",
        "name": "labelKey",
        "propertyName": "labelKey",
        "required": false,
        "type": "(key: string) => string"
      },
      {
        "doc": "Suffixe lisible du chip : « : Electronics », « ≥ 100 », « : « book » ». L'opérateur n'apparaît que lorsqu'il porte du sens.",
        "kind": "method",
        "name": "formatValue",
        "propertyName": "formatValue",
        "required": false,
        "type": "(filter: Filter) => string"
      },
      {
        "kind": "method",
        "name": "remove",
        "propertyName": "remove",
        "required": false,
        "type": "(filter: Filter) => void"
      },
      {
        "kind": "method",
        "name": "removeGroup",
        "propertyName": "removeGroup",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "clear",
        "propertyName": "clear",
        "required": false,
        "type": "() => void"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "input",
        "name": "gridId",
        "propertyName": "gridId",
        "required": true,
        "type": "string"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "property",
        "name": "grid",
        "propertyName": "grid",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "property",
        "name": "isGroup",
        "propertyName": "isGroup",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "property",
        "name": "data",
        "propertyName": "data",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "property",
        "name": "dataByGroup",
        "propertyName": "dataByGroup",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractGridComponent",
        "kind": "property",
        "name": "displayType",
        "propertyName": "displayType",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/features"
  },
  "ta-guard": {
    "className": "GuardComponent",
    "file": "projects/user/src/lib/modules/user/components/guard/guard.component.ts",
    "id": "ta-guard",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "level",
        "propertyName": "level",
        "required": false,
        "type": "Level"
      },
      {
        "kind": "input",
        "name": "feature",
        "propertyName": "feature",
        "required": false,
        "type": "string"
      },
      {
        "kind": "input",
        "name": "role",
        "propertyName": "role",
        "required": false,
        "type": "string"
      },
      {
        "default": "true",
        "kind": "input",
        "name": "canDisplayErrorMessage",
        "propertyName": "canDisplayErrorMessage",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "false",
        "doc": "Affiche le contenu avec un overlay de connexion au lieu de le masquer",
        "kind": "input",
        "name": "preview",
        "propertyName": "preview",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "property",
        "name": "noAccessIcon",
        "propertyName": "noAccessIcon",
        "required": false,
        "type": "unknown"
      },
      {
        "kind": "method",
        "name": "isGuardValid$",
        "propertyName": "isGuardValid$",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "goToLogin",
        "propertyName": "goToLogin",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "goToRegister",
        "propertyName": "goToRegister",
        "required": false,
        "type": "() => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/user"
  },
  "ta-hour-date-line": {
    "className": "HourDateLineComponent",
    "file": "projects/ui/src/lib/components/ui/hour-date-line/hour-date-line.component.ts",
    "id": "ta-hour-date-line",
    "kind": "component",
    "members": [
      {
        "doc": "Start date",
        "kind": "input",
        "name": "startDate",
        "propertyName": "startDate",
        "required": true,
        "type": "Date | null"
      },
      {
        "doc": "End date",
        "kind": "input",
        "name": "endDate",
        "propertyName": "endDate",
        "required": true,
        "type": "Date | null"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-image-viewer": {
    "className": "ImageViewerComponent",
    "file": "projects/files/files-basic/src/lib/components/preview/viewers/image-viewer/image-viewer.component.ts",
    "id": "ta-image-viewer",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "file",
        "propertyName": "file",
        "required": true,
        "type": "PreviewDocumentDto"
      }
    ],
    "pkg": "@ta/files-basic"
  },
  "ta-inline-profile-data": {
    "className": "InlineProfileDataComponent",
    "file": "projects/ui/src/lib/components/ui/profil-data/inline-profile-data/inline-profile-data.component.ts",
    "id": "ta-inline-profile-data",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "profile",
        "propertyName": "profile",
        "required": true,
        "type": "IProfileData"
      },
      {
        "default": "undefined",
        "kind": "input",
        "name": "userLogo",
        "propertyName": "userLogo",
        "required": false,
        "type": "{\n    user: UserLogoData;\n    size?: TaSizes;\n  } | null | undefined"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-input-checkbox": {
    "className": "CheckboxComponent",
    "file": "projects/form/form-input/src/lib/components/input/checkbox/checkbox.component.ts",
    "id": "ta-input-checkbox",
    "kind": "component",
    "members": [
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "input",
        "propertyName": "inputModel",
        "required": true,
        "type": "C"
      },
      {
        "default": "new ErrorStateMatcher()",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "matcher",
        "propertyName": "matcher",
        "required": false,
        "type": "ErrorStateMatcher"
      },
      {
        "default": "false",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "standalone",
        "propertyName": "standaloneMode",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "undefined",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "onFocus",
        "propertyName": "onFocusObs",
        "required": false,
        "type": "Observable<void> | undefined"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "output",
        "name": "valueChanged",
        "propertyName": "valueChanged",
        "required": false,
        "type": "V"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "method",
        "name": "onChange",
        "propertyName": "onChange",
        "required": false,
        "type": "(value: V) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/form-input"
  },
  "ta-input-choices": {
    "className": "InputChoicesComponent",
    "file": "projects/form/form-input/src/lib/components/input/choices/choices.component.ts",
    "id": "ta-input-choices",
    "kind": "component",
    "members": [
      {
        "kind": "method",
        "name": "getName$",
        "propertyName": "getName$",
        "required": false,
        "type": "(id: string) => void"
      },
      {
        "kind": "method",
        "name": "selectNullable",
        "propertyName": "selectNullable",
        "required": false,
        "type": "(select: boolean) => void"
      },
      {
        "kind": "method",
        "name": "clear",
        "propertyName": "clear",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "close",
        "propertyName": "close",
        "required": false,
        "type": "() => void"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "input",
        "propertyName": "inputModel",
        "required": true,
        "type": "C"
      },
      {
        "default": "new ErrorStateMatcher()",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "matcher",
        "propertyName": "matcher",
        "required": false,
        "type": "ErrorStateMatcher"
      },
      {
        "default": "false",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "standalone",
        "propertyName": "standaloneMode",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "undefined",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "onFocus",
        "propertyName": "onFocusObs",
        "required": false,
        "type": "Observable<void> | undefined"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "output",
        "name": "valueChanged",
        "propertyName": "valueChanged",
        "required": false,
        "type": "V"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "method",
        "name": "onChange",
        "propertyName": "onChange",
        "required": false,
        "type": "(value: V) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/form-input"
  },
  "ta-input-color-picker": {
    "className": "ColorPickerComponent",
    "file": "projects/form/form-input/src/lib/components/input/color-picker/color-picker.component.ts",
    "id": "ta-input-color-picker",
    "kind": "component",
    "members": [
      {
        "kind": "method",
        "name": "onChangeValue",
        "propertyName": "onChangeValue",
        "required": false,
        "type": "(value: string) => void"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "input",
        "propertyName": "inputModel",
        "required": true,
        "type": "C"
      },
      {
        "default": "new ErrorStateMatcher()",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "matcher",
        "propertyName": "matcher",
        "required": false,
        "type": "ErrorStateMatcher"
      },
      {
        "default": "false",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "standalone",
        "propertyName": "standaloneMode",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "undefined",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "onFocus",
        "propertyName": "onFocusObs",
        "required": false,
        "type": "Observable<void> | undefined"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "output",
        "name": "valueChanged",
        "propertyName": "valueChanged",
        "required": false,
        "type": "V"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "method",
        "name": "onChange",
        "propertyName": "onChange",
        "required": false,
        "type": "(value: V) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/form-input"
  },
  "ta-input-component": {
    "className": "ComponentInputComponent",
    "file": "projects/form/form-input/src/lib/components/input/component/component.component.ts",
    "id": "ta-input-component",
    "kind": "component",
    "members": [
      {
        "kind": "method",
        "name": "open",
        "propertyName": "open",
        "required": false,
        "type": "() => void"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "input",
        "propertyName": "inputModel",
        "required": true,
        "type": "C"
      },
      {
        "default": "new ErrorStateMatcher()",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "matcher",
        "propertyName": "matcher",
        "required": false,
        "type": "ErrorStateMatcher"
      },
      {
        "default": "false",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "standalone",
        "propertyName": "standaloneMode",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "undefined",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "onFocus",
        "propertyName": "onFocusObs",
        "required": false,
        "type": "Observable<void> | undefined"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "output",
        "name": "valueChanged",
        "propertyName": "valueChanged",
        "required": false,
        "type": "V"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "method",
        "name": "onChange",
        "propertyName": "onChange",
        "required": false,
        "type": "(value: V) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/form-input"
  },
  "ta-input-culture": {
    "className": "CultureComponent",
    "file": "projects/form/form-input/src/lib/components/input/culture/culture.component.ts",
    "id": "ta-input-culture",
    "kind": "component",
    "members": [
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "input",
        "propertyName": "inputModel",
        "required": true,
        "type": "C"
      },
      {
        "default": "new ErrorStateMatcher()",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "matcher",
        "propertyName": "matcher",
        "required": false,
        "type": "ErrorStateMatcher"
      },
      {
        "default": "false",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "standalone",
        "propertyName": "standaloneMode",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "undefined",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "onFocus",
        "propertyName": "onFocusObs",
        "required": false,
        "type": "Observable<void> | undefined"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "output",
        "name": "valueChanged",
        "propertyName": "valueChanged",
        "required": false,
        "type": "V"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "method",
        "name": "onChange",
        "propertyName": "onChange",
        "required": false,
        "type": "(value: V) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/form-input"
  },
  "ta-input-date-picker": {
    "className": "DatePickerComponent",
    "file": "projects/form/form-input/src/lib/components/input/date-picker/date-picker.component.ts",
    "id": "ta-input-date-picker",
    "kind": "component",
    "members": [
      {
        "kind": "method",
        "name": "onDateSelect",
        "propertyName": "onDateSelect",
        "required": false,
        "type": "(event: MatDatepickerInputEvent<Date>) => void"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "input",
        "propertyName": "inputModel",
        "required": true,
        "type": "C"
      },
      {
        "default": "new ErrorStateMatcher()",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "matcher",
        "propertyName": "matcher",
        "required": false,
        "type": "ErrorStateMatcher"
      },
      {
        "default": "false",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "standalone",
        "propertyName": "standaloneMode",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "undefined",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "onFocus",
        "propertyName": "onFocusObs",
        "required": false,
        "type": "Observable<void> | undefined"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "output",
        "name": "valueChanged",
        "propertyName": "valueChanged",
        "required": false,
        "type": "V"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "method",
        "name": "onChange",
        "propertyName": "onChange",
        "required": false,
        "type": "(value: V) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/form-input"
  },
  "ta-input-dropdown": {
    "className": "DropdownComponent",
    "file": "projects/form/form-input/src/lib/components/input/dropdown/dropdown.component.ts",
    "id": "ta-input-dropdown",
    "kind": "component",
    "members": [
      {
        "default": "true",
        "kind": "input",
        "name": "space",
        "propertyName": "space",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "method",
        "name": "getOptionName",
        "propertyName": "getOptionName",
        "required": false,
        "type": "(id: any) => string"
      },
      {
        "kind": "method",
        "name": "onMenuSelect",
        "propertyName": "onMenuSelect",
        "required": false,
        "type": "(selectedId: any) => void"
      },
      {
        "kind": "method",
        "name": "onOverlayClosed",
        "propertyName": "onOverlayClosed",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "isSelected",
        "propertyName": "isSelected",
        "required": false,
        "type": "(id: any) => boolean"
      },
      {
        "kind": "method",
        "name": "selectOption",
        "propertyName": "selectOption",
        "required": false,
        "type": "(id: any, event: MouseEvent) => void"
      },
      {
        "kind": "method",
        "name": "onSearchChange",
        "propertyName": "onSearchChange",
        "required": false,
        "type": "(event: Event) => void"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "input",
        "propertyName": "inputModel",
        "required": true,
        "type": "C"
      },
      {
        "default": "new ErrorStateMatcher()",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "matcher",
        "propertyName": "matcher",
        "required": false,
        "type": "ErrorStateMatcher"
      },
      {
        "default": "false",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "standalone",
        "propertyName": "standaloneMode",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "undefined",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "onFocus",
        "propertyName": "onFocusObs",
        "required": false,
        "type": "Observable<void> | undefined"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "output",
        "name": "valueChanged",
        "propertyName": "valueChanged",
        "required": false,
        "type": "V"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "method",
        "name": "onChange",
        "propertyName": "onChange",
        "required": false,
        "type": "(value: V) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/form-input"
  },
  "ta-input-image": {
    "className": "InputImageComponent",
    "file": "projects/form/form-input/src/lib/components/input/image/input-image.component.ts",
    "id": "ta-input-image",
    "kind": "component",
    "members": [
      {
        "kind": "property",
        "name": "selection",
        "propertyName": "selection",
        "required": false,
        "type": "unknown"
      },
      {
        "kind": "property",
        "name": "userInfo",
        "propertyName": "userInfo",
        "required": false,
        "type": "unknown"
      },
      {
        "kind": "property",
        "name": "isLimitReached",
        "propertyName": "isLimitReached",
        "required": false,
        "type": "boolean"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "input",
        "propertyName": "inputModel",
        "required": true,
        "type": "C"
      },
      {
        "default": "new ErrorStateMatcher()",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "matcher",
        "propertyName": "matcher",
        "required": false,
        "type": "ErrorStateMatcher"
      },
      {
        "default": "false",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "standalone",
        "propertyName": "standaloneMode",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "undefined",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "onFocus",
        "propertyName": "onFocusObs",
        "required": false,
        "type": "Observable<void> | undefined"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "output",
        "name": "valueChanged",
        "propertyName": "valueChanged",
        "required": false,
        "type": "V"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "method",
        "name": "onChange",
        "propertyName": "onChange",
        "required": false,
        "type": "(value: V) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/form-input"
  },
  "ta-input-images": {
    "className": "InputImagesComponent",
    "file": "projects/form/form-input/src/lib/components/input/images/input-images.component.ts",
    "id": "ta-input-images",
    "kind": "component",
    "members": [
      {
        "kind": "method",
        "name": "openGallery",
        "propertyName": "openGallery",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "takePhoto",
        "propertyName": "takePhoto",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "onFileDeleted",
        "propertyName": "onFileDeleted",
        "required": false,
        "type": "(fileData: DocumentDto) => void"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "input",
        "propertyName": "inputModel",
        "required": true,
        "type": "C"
      },
      {
        "default": "new ErrorStateMatcher()",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "matcher",
        "propertyName": "matcher",
        "required": false,
        "type": "ErrorStateMatcher"
      },
      {
        "default": "false",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "standalone",
        "propertyName": "standaloneMode",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "undefined",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "onFocus",
        "propertyName": "onFocusObs",
        "required": false,
        "type": "Observable<void> | undefined"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "output",
        "name": "valueChanged",
        "propertyName": "valueChanged",
        "required": false,
        "type": "V"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "method",
        "name": "onChange",
        "propertyName": "onChange",
        "required": false,
        "type": "(value: V) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/form-input"
  },
  "ta-input-label": {
    "className": "LabelComponent",
    "file": "projects/form/form-input/src/lib/components/input/label/label.component.ts",
    "id": "ta-input-label",
    "kind": "component",
    "members": [
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "input",
        "propertyName": "inputModel",
        "required": true,
        "type": "C"
      },
      {
        "default": "new ErrorStateMatcher()",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "matcher",
        "propertyName": "matcher",
        "required": false,
        "type": "ErrorStateMatcher"
      },
      {
        "default": "false",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "standalone",
        "propertyName": "standaloneMode",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "undefined",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "onFocus",
        "propertyName": "onFocusObs",
        "required": false,
        "type": "Observable<void> | undefined"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "output",
        "name": "valueChanged",
        "propertyName": "valueChanged",
        "required": false,
        "type": "V"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "method",
        "name": "onChange",
        "propertyName": "onChange",
        "required": false,
        "type": "(value: V) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/form-input"
  },
  "ta-input-logo": {
    "className": "InputLogoComponent",
    "file": "projects/form/form-input/src/lib/components/input/logo/input-logo.component.ts",
    "id": "ta-input-logo",
    "kind": "component",
    "members": [
      {
        "kind": "method",
        "name": "openCamera",
        "propertyName": "openCamera",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "openGallery",
        "propertyName": "openGallery",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "removeLogo",
        "propertyName": "removeLogo",
        "required": false,
        "type": "() => void"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "input",
        "propertyName": "inputModel",
        "required": true,
        "type": "C"
      },
      {
        "default": "new ErrorStateMatcher()",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "matcher",
        "propertyName": "matcher",
        "required": false,
        "type": "ErrorStateMatcher"
      },
      {
        "default": "false",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "standalone",
        "propertyName": "standaloneMode",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "undefined",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "onFocus",
        "propertyName": "onFocusObs",
        "required": false,
        "type": "Observable<void> | undefined"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "output",
        "name": "valueChanged",
        "propertyName": "valueChanged",
        "required": false,
        "type": "V"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "method",
        "name": "onChange",
        "propertyName": "onChange",
        "required": false,
        "type": "(value: V) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/form-input"
  },
  "ta-input-phone": {
    "className": "InputPhoneComponent",
    "file": "projects/form/form-input/src/lib/components/input/phone/input-phone.component.ts",
    "id": "ta-input-phone",
    "kind": "component",
    "members": [
      {
        "kind": "method",
        "name": "onBlur",
        "propertyName": "onBlur",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "onCountryChange",
        "propertyName": "onCountryChange",
        "required": false,
        "type": "() => void"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "input",
        "propertyName": "inputModel",
        "required": true,
        "type": "C"
      },
      {
        "default": "new ErrorStateMatcher()",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "matcher",
        "propertyName": "matcher",
        "required": false,
        "type": "ErrorStateMatcher"
      },
      {
        "default": "false",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "standalone",
        "propertyName": "standaloneMode",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "undefined",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "onFocus",
        "propertyName": "onFocusObs",
        "required": false,
        "type": "Observable<void> | undefined"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "output",
        "name": "valueChanged",
        "propertyName": "valueChanged",
        "required": false,
        "type": "V"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "method",
        "name": "onChange",
        "propertyName": "onChange",
        "required": false,
        "type": "(value: V) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/form-input"
  },
  "ta-input-radio": {
    "className": "RadioComponent",
    "file": "projects/form/form-input/src/lib/components/input/radio/radio.component.ts",
    "id": "ta-input-radio",
    "kind": "component",
    "members": [
      {
        "kind": "method",
        "name": "iconSize",
        "propertyName": "iconSize",
        "required": false,
        "type": "(option: { name?: string }) => TaSizes"
      },
      {
        "kind": "method",
        "name": "hasLabel",
        "propertyName": "hasLabel",
        "required": false,
        "type": "(option: { name?: string }) => boolean"
      },
      {
        "kind": "method",
        "name": "onOptionClicked",
        "propertyName": "onOptionClicked",
        "required": false,
        "type": "(optionId: any) => void"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "input",
        "propertyName": "inputModel",
        "required": true,
        "type": "C"
      },
      {
        "default": "new ErrorStateMatcher()",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "matcher",
        "propertyName": "matcher",
        "required": false,
        "type": "ErrorStateMatcher"
      },
      {
        "default": "false",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "standalone",
        "propertyName": "standaloneMode",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "undefined",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "onFocus",
        "propertyName": "onFocusObs",
        "required": false,
        "type": "Observable<void> | undefined"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "output",
        "name": "valueChanged",
        "propertyName": "valueChanged",
        "required": false,
        "type": "V"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "method",
        "name": "onChange",
        "propertyName": "onChange",
        "required": false,
        "type": "(value: V) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/form-input"
  },
  "ta-input-rating": {
    "className": "RatingComponent",
    "file": "projects/form/form-input/src/lib/components/input/rating/rating.component.ts",
    "id": "ta-input-rating",
    "kind": "component",
    "members": [
      {
        "kind": "method",
        "name": "onRatingChange",
        "propertyName": "onRatingChange",
        "required": false,
        "type": "(value: number) => void"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "input",
        "propertyName": "inputModel",
        "required": true,
        "type": "C"
      },
      {
        "default": "new ErrorStateMatcher()",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "matcher",
        "propertyName": "matcher",
        "required": false,
        "type": "ErrorStateMatcher"
      },
      {
        "default": "false",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "standalone",
        "propertyName": "standaloneMode",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "undefined",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "onFocus",
        "propertyName": "onFocusObs",
        "required": false,
        "type": "Observable<void> | undefined"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "output",
        "name": "valueChanged",
        "propertyName": "valueChanged",
        "required": false,
        "type": "V"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "method",
        "name": "onChange",
        "propertyName": "onChange",
        "required": false,
        "type": "(value: V) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/form-input"
  },
  "ta-input-schema": {
    "className": "InputSchemaComponent",
    "file": "projects/form/form-input/src/lib/components/input/schema/input-schema.component.ts",
    "id": "ta-input-schema",
    "kind": "component",
    "members": [
      {
        "kind": "property",
        "name": "pics",
        "propertyName": "pics",
        "required": false,
        "type": "FileData[] | null"
      },
      {
        "kind": "property",
        "name": "isCircularButton",
        "propertyName": "isCircularButton",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "property",
        "name": "selection",
        "propertyName": "selection",
        "required": false,
        "type": "string"
      },
      {
        "kind": "method",
        "name": "openDialog",
        "propertyName": "openDialog",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "onSavedFile",
        "propertyName": "onSavedFile",
        "required": false,
        "type": "(data: { file: FileStructure }) => Promise<void>"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "input",
        "propertyName": "inputModel",
        "required": true,
        "type": "C"
      },
      {
        "default": "new ErrorStateMatcher()",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "matcher",
        "propertyName": "matcher",
        "required": false,
        "type": "ErrorStateMatcher"
      },
      {
        "default": "false",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "standalone",
        "propertyName": "standaloneMode",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "undefined",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "onFocus",
        "propertyName": "onFocusObs",
        "required": false,
        "type": "Observable<void> | undefined"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "output",
        "name": "valueChanged",
        "propertyName": "valueChanged",
        "required": false,
        "type": "V"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "method",
        "name": "onChange",
        "propertyName": "onChange",
        "required": false,
        "type": "(value: V) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/form-input"
  },
  "ta-input-slider": {
    "className": "SliderComponent",
    "file": "projects/form/form-input/src/lib/components/input/slider/slider.component.ts",
    "id": "ta-input-slider",
    "kind": "component",
    "members": [
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "input",
        "propertyName": "inputModel",
        "required": true,
        "type": "C"
      },
      {
        "default": "new ErrorStateMatcher()",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "matcher",
        "propertyName": "matcher",
        "required": false,
        "type": "ErrorStateMatcher"
      },
      {
        "default": "false",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "standalone",
        "propertyName": "standaloneMode",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "undefined",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "onFocus",
        "propertyName": "onFocusObs",
        "required": false,
        "type": "Observable<void> | undefined"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "output",
        "name": "valueChanged",
        "propertyName": "valueChanged",
        "required": false,
        "type": "V"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "method",
        "name": "onChange",
        "propertyName": "onChange",
        "required": false,
        "type": "(value: V) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/form-input"
  },
  "ta-input-switch": {
    "className": "SwitchComponent",
    "file": "projects/form/form-input/src/lib/components/input/switch/switch.component.ts",
    "id": "ta-input-switch",
    "kind": "component",
    "members": [
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "input",
        "propertyName": "inputModel",
        "required": true,
        "type": "C"
      },
      {
        "default": "new ErrorStateMatcher()",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "matcher",
        "propertyName": "matcher",
        "required": false,
        "type": "ErrorStateMatcher"
      },
      {
        "default": "false",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "standalone",
        "propertyName": "standaloneMode",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "undefined",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "onFocus",
        "propertyName": "onFocusObs",
        "required": false,
        "type": "Observable<void> | undefined"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "output",
        "name": "valueChanged",
        "propertyName": "valueChanged",
        "required": false,
        "type": "V"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "method",
        "name": "onChange",
        "propertyName": "onChange",
        "required": false,
        "type": "(value: V) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/form-input"
  },
  "ta-input-textarea": {
    "className": "TextareaComponent",
    "file": "projects/form/form-input/src/lib/components/input/textarea/textarea.component.ts",
    "id": "ta-input-textarea",
    "kind": "component",
    "members": [
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "input",
        "propertyName": "inputModel",
        "required": true,
        "type": "C"
      },
      {
        "default": "new ErrorStateMatcher()",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "matcher",
        "propertyName": "matcher",
        "required": false,
        "type": "ErrorStateMatcher"
      },
      {
        "default": "false",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "standalone",
        "propertyName": "standaloneMode",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "undefined",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "onFocus",
        "propertyName": "onFocusObs",
        "required": false,
        "type": "Observable<void> | undefined"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "output",
        "name": "valueChanged",
        "propertyName": "valueChanged",
        "required": false,
        "type": "V"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "method",
        "name": "onChange",
        "propertyName": "onChange",
        "required": false,
        "type": "(value: V) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/form-input"
  },
  "ta-input-textbox": {
    "className": "TextBoxComponent",
    "file": "projects/form/form-input/src/lib/components/input/textbox/text-box.component.ts",
    "id": "ta-input-textbox",
    "kind": "component",
    "members": [
      {
        "default": "true",
        "kind": "input",
        "name": "space",
        "propertyName": "space",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "property",
        "name": "isPassword",
        "propertyName": "isPassword",
        "required": false,
        "type": "unknown"
      },
      {
        "kind": "method",
        "name": "iconClicked",
        "propertyName": "iconClicked",
        "required": false,
        "type": "() => void"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "input",
        "propertyName": "inputModel",
        "required": true,
        "type": "C"
      },
      {
        "default": "new ErrorStateMatcher()",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "matcher",
        "propertyName": "matcher",
        "required": false,
        "type": "ErrorStateMatcher"
      },
      {
        "default": "false",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "standalone",
        "propertyName": "standaloneMode",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "undefined",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "onFocus",
        "propertyName": "onFocusObs",
        "required": false,
        "type": "Observable<void> | undefined"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "output",
        "name": "valueChanged",
        "propertyName": "valueChanged",
        "required": false,
        "type": "V"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "method",
        "name": "onChange",
        "propertyName": "onChange",
        "required": false,
        "type": "(value: V) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/form-input"
  },
  "ta-input-time-picker": {
    "className": "TimePickerComponent",
    "file": "projects/form/form-input/src/lib/components/input/time-picker/time-picker.component.ts",
    "id": "ta-input-time-picker",
    "kind": "component",
    "members": [
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "input",
        "propertyName": "inputModel",
        "required": true,
        "type": "C"
      },
      {
        "default": "new ErrorStateMatcher()",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "matcher",
        "propertyName": "matcher",
        "required": false,
        "type": "ErrorStateMatcher"
      },
      {
        "default": "false",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "standalone",
        "propertyName": "standaloneMode",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "undefined",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "onFocus",
        "propertyName": "onFocusObs",
        "required": false,
        "type": "Observable<void> | undefined"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "output",
        "name": "valueChanged",
        "propertyName": "valueChanged",
        "required": false,
        "type": "V"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "method",
        "name": "onChange",
        "propertyName": "onChange",
        "required": false,
        "type": "(value: V) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/form-input"
  },
  "ta-input-toggle": {
    "className": "ToggleComponent",
    "file": "projects/form/form-input/src/lib/components/input/toggle/toggle.component.ts",
    "id": "ta-input-toggle",
    "kind": "component",
    "members": [
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "input",
        "propertyName": "inputModel",
        "required": true,
        "type": "C"
      },
      {
        "default": "new ErrorStateMatcher()",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "matcher",
        "propertyName": "matcher",
        "required": false,
        "type": "ErrorStateMatcher"
      },
      {
        "default": "false",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "standalone",
        "propertyName": "standaloneMode",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "undefined",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "onFocus",
        "propertyName": "onFocusObs",
        "required": false,
        "type": "Observable<void> | undefined"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "output",
        "name": "valueChanged",
        "propertyName": "valueChanged",
        "required": false,
        "type": "V"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "method",
        "name": "onChange",
        "propertyName": "onChange",
        "required": false,
        "type": "(value: V) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/form-input"
  },
  "ta-input-upload": {
    "className": "UploadComponent",
    "file": "projects/form/form-input/src/lib/components/input/upload/upload.component.ts",
    "id": "ta-input-upload",
    "kind": "component",
    "members": [
      {
        "kind": "output",
        "name": "uploadStatusChanged",
        "propertyName": "uploadStatusChanged",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "method",
        "name": "onFileDropped",
        "propertyName": "onFileDropped",
        "required": false,
        "type": "($event: any) => void"
      },
      {
        "kind": "method",
        "name": "fileBrowseHandler",
        "propertyName": "fileBrowseHandler",
        "required": false,
        "type": "(files: any) => void"
      },
      {
        "kind": "method",
        "name": "openDocument",
        "propertyName": "openDocument",
        "required": false,
        "type": "(doc: DocumentDto) => void"
      },
      {
        "kind": "method",
        "name": "isValidDocumentList",
        "propertyName": "isValidDocumentList",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "validation",
        "propertyName": "validation",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "deleteInProgressFile",
        "propertyName": "deleteInProgressFile",
        "required": false,
        "type": "(name: string) => void"
      },
      {
        "kind": "method",
        "name": "deleteFile",
        "propertyName": "deleteFile",
        "required": false,
        "type": "(id: string) => void"
      },
      {
        "kind": "method",
        "name": "prepareFilesList",
        "propertyName": "prepareFilesList",
        "required": false,
        "type": "(files: File[]) => void"
      },
      {
        "kind": "method",
        "name": "uploadFile",
        "propertyName": "uploadFile",
        "required": false,
        "type": "() => void"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "input",
        "propertyName": "inputModel",
        "required": true,
        "type": "C"
      },
      {
        "default": "new ErrorStateMatcher()",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "matcher",
        "propertyName": "matcher",
        "required": false,
        "type": "ErrorStateMatcher"
      },
      {
        "default": "false",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "standalone",
        "propertyName": "standaloneMode",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "undefined",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "onFocus",
        "propertyName": "onFocusObs",
        "required": false,
        "type": "Observable<void> | undefined"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "output",
        "name": "valueChanged",
        "propertyName": "valueChanged",
        "required": false,
        "type": "V"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "method",
        "name": "onChange",
        "propertyName": "onChange",
        "required": false,
        "type": "(value: V) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/form-input"
  },
  "ta-input-wysiswyg": {
    "className": "WysiswygComponent",
    "file": "projects/form/form-input/src/lib/components/input/wysiswyg/wysiswyg.component.ts",
    "id": "ta-input-wysiswyg",
    "kind": "component",
    "members": [
      {
        "kind": "method",
        "name": "set",
        "propertyName": "set",
        "required": false,
        "type": "(value: EditorInputSavedData) => void"
      },
      {
        "kind": "method",
        "name": "clear",
        "propertyName": "clear",
        "required": false,
        "type": "() => void"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "input",
        "propertyName": "inputModel",
        "required": true,
        "type": "C"
      },
      {
        "default": "new ErrorStateMatcher()",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "matcher",
        "propertyName": "matcher",
        "required": false,
        "type": "ErrorStateMatcher"
      },
      {
        "default": "false",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "standalone",
        "propertyName": "standaloneMode",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "undefined",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "onFocus",
        "propertyName": "onFocusObs",
        "required": false,
        "type": "Observable<void> | undefined"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "output",
        "name": "valueChanged",
        "propertyName": "valueChanged",
        "required": false,
        "type": "V"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "method",
        "name": "onChange",
        "propertyName": "onChange",
        "required": false,
        "type": "(value: V) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/form-input"
  },
  "ta-inputs": {
    "className": "InputsComponent",
    "file": "projects/form/form-basic/src/lib/components/inputs/inputs.component.ts",
    "id": "ta-inputs",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "input",
        "propertyName": "inputModel",
        "required": true,
        "type": "InputBase<any>"
      },
      {
        "default": "false",
        "kind": "input",
        "name": "standalone",
        "propertyName": "standaloneMode",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "undefined",
        "kind": "input",
        "name": "onFocus",
        "propertyName": "onFocusObs",
        "required": false,
        "type": "Observable<void> | undefined"
      },
      {
        "default": "true",
        "kind": "input",
        "name": "space",
        "propertyName": "space",
        "required": false,
        "type": "boolean"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/form-basic"
  },
  "ta-itsme-button": {
    "className": "ItsmeButtonComponent",
    "file": "projects/ui/src/lib/components/ui/button/itsme/itsme-button.component.ts",
    "id": "ta-itsme-button",
    "kind": "component",
    "members": [
      {
        "default": "\"classic\"",
        "doc": "Button state",
        "kind": "input",
        "name": "state",
        "propertyName": "state",
        "required": false,
        "type": "TaState"
      },
      {
        "default": "\"medium\"",
        "doc": "Button size",
        "kind": "input",
        "name": "size",
        "propertyName": "size",
        "required": false,
        "type": "\"small\" | \"medium\" | \"large\""
      },
      {
        "default": "\"full\"",
        "doc": "Display mode: 'full' shows logo + text, 'logo' shows only the logo",
        "kind": "input",
        "name": "mode",
        "propertyName": "mode",
        "required": false,
        "type": "\"full\" | \"logo\""
      },
      {
        "default": "true",
        "kind": "input",
        "name": "stopPropagationActivation",
        "propertyName": "stopPropagationActivation",
        "required": false,
        "type": "boolean"
      },
      {
        "doc": "Event emitted when button is clicked",
        "kind": "output",
        "name": "action",
        "propertyName": "action",
        "required": false,
        "type": "void"
      },
      {
        "kind": "method",
        "name": "handleClick",
        "propertyName": "handleClick",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "getClass",
        "propertyName": "getClass",
        "required": false,
        "type": "() => void"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-label": {
    "className": "LabelComponent",
    "file": "projects/ui/src/lib/components/ui/label/label.component.ts",
    "id": "ta-label",
    "kind": "component",
    "members": [
      {
        "default": "\"md\"",
        "kind": "input",
        "name": "size",
        "propertyName": "size",
        "required": false,
        "type": "TaSizes"
      },
      {
        "default": "\"default\"",
        "kind": "input",
        "name": "type",
        "propertyName": "type",
        "required": false,
        "type": "ColorType"
      },
      {
        "kind": "method",
        "name": "getClass",
        "propertyName": "getClass",
        "required": false,
        "type": "() => string"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-layout-content": {
    "className": "LayoutContentComponent",
    "file": "projects/ui/src/lib/modules/layout/layout-content/layout-content.component.ts",
    "id": "ta-layout-content",
    "kind": "component",
    "members": [
      {
        "default": "false",
        "kind": "input",
        "name": "autoHeight",
        "propertyName": "autoHeight",
        "required": false,
        "type": "boolean"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-layout-flex": {
    "className": "LayoutFlexComponent",
    "file": "projects/ui/src/lib/modules/layout/layout-flex/layout-flex.component.ts",
    "id": "ta-layout-flex",
    "kind": "component",
    "members": [
      {
        "default": "false",
        "kind": "input",
        "name": "allowClose",
        "propertyName": "allowClose",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "method",
        "name": "state",
        "propertyName": "state",
        "required": false,
        "type": "(panel: Panel) => TaState"
      },
      {
        "kind": "method",
        "name": "onlyOne",
        "propertyName": "onlyOne",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "has",
        "propertyName": "has",
        "required": false,
        "type": "(panel: Panel) => void"
      },
      {
        "kind": "method",
        "name": "toggle",
        "propertyName": "toggle",
        "required": false,
        "type": "(panel: Panel) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-layout-full-panel": {
    "className": "LayoutFullPanelComponent",
    "file": "projects/ui/src/lib/modules/layout/layout-full-panel/layout-full-panel.component.ts",
    "id": "ta-layout-full-panel",
    "kind": "component",
    "members": [
      {
        "default": "'400px'",
        "kind": "input",
        "name": "width",
        "propertyName": "width",
        "required": false,
        "type": "string"
      },
      {
        "default": "''",
        "kind": "input",
        "name": "title",
        "propertyName": "title",
        "required": false,
        "type": "string"
      },
      {
        "kind": "output",
        "name": "closeEvent",
        "propertyName": "closeEvent",
        "required": false,
        "type": "void"
      },
      {
        "kind": "method",
        "name": "askClose",
        "propertyName": "askClose",
        "required": false,
        "type": "() => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-layout-header": {
    "className": "LayoutHeaderComponent",
    "file": "projects/ui/src/lib/modules/layout/layout-header/layout-header.component.ts",
    "id": "ta-layout-header",
    "kind": "component",
    "members": [],
    "pkg": "@ta/ui"
  },
  "ta-layout-header-default": {
    "className": "LayoutHeaderDefaultComponent",
    "file": "projects/ui/src/lib/modules/layout/layout-header/layout-header-default/layout-header-default.component.ts",
    "id": "ta-layout-header-default",
    "kind": "component",
    "members": [
      {
        "default": "true",
        "kind": "input",
        "name": "showBack",
        "propertyName": "showBack",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "undefined",
        "kind": "input",
        "name": "menuTemplate",
        "propertyName": "menuTemplate",
        "required": false,
        "type": "TemplateRef<any> | undefined"
      },
      {
        "default": "undefined",
        "kind": "input",
        "name": "title",
        "propertyName": "title",
        "required": false,
        "type": "string | undefined"
      },
      {
        "kind": "output",
        "name": "backEvent",
        "propertyName": "backEvent",
        "required": false,
        "type": "void"
      },
      {
        "kind": "method",
        "name": "showBackAction",
        "propertyName": "showBackAction",
        "required": false,
        "type": "() => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-layout-header-logo": {
    "className": "LayoutHeaderLogoComponent",
    "file": "projects/ui/src/lib/modules/layout/layout-header/layout-header-logo/layout-header-logo.component.ts",
    "id": "ta-layout-header-logo",
    "kind": "component",
    "members": [
      {
        "default": "null",
        "kind": "input",
        "name": "profile",
        "propertyName": "profile",
        "required": false,
        "type": "{\n    template: TemplateRef<any>;\n    user: { profilePictureUrl?: string; naming: UserLogoNaming | null };\n  } | null"
      },
      {
        "default": "null",
        "kind": "input",
        "name": "notificationTemplate",
        "propertyName": "notificationTemplate",
        "required": false,
        "type": "TemplateRef<any> | null"
      },
      {
        "default": "undefined",
        "kind": "input",
        "name": "askClosing$",
        "propertyName": "askClosing$",
        "required": false,
        "type": "Observable<null> | undefined"
      },
      {
        "kind": "method",
        "name": "userInfo",
        "propertyName": "userInfo",
        "required": false,
        "type": "() => {\n    profilePictureUrl?: string;\n    naming: UserLogoNaming | null;\n  }"
      },
      {
        "kind": "method",
        "name": "goToHome",
        "propertyName": "goToHome",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "openProfile",
        "propertyName": "openProfile",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "openNotification",
        "propertyName": "openNotification",
        "required": false,
        "type": "() => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-layout-modal": {
    "className": "LayoutModalComponent",
    "file": "projects/ui/src/lib/modules/layout/layout-modal/layout-modal.component.ts",
    "id": "ta-layout-modal",
    "kind": "component",
    "members": [
      {
        "default": "'classic'",
        "kind": "input",
        "name": "style",
        "propertyName": "style",
        "required": false,
        "type": "ModalStyle"
      },
      {
        "default": "''",
        "kind": "input",
        "name": "title",
        "propertyName": "title",
        "required": false,
        "type": "string"
      },
      {
        "default": "true",
        "kind": "input",
        "name": "showClose",
        "propertyName": "showClose",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "output",
        "name": "closeEvent",
        "propertyName": "closeEvent",
        "required": false,
        "type": "void"
      },
      {
        "kind": "method",
        "name": "close",
        "propertyName": "close",
        "required": false,
        "type": "() => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-layout-nav": {
    "className": "LayoutNavComponent",
    "file": "projects/ui/src/lib/modules/layout/layout-nav/layout-nav.component.ts",
    "id": "ta-layout-nav",
    "kind": "component",
    "members": [],
    "pkg": "@ta/ui"
  },
  "ta-layout-not-found": {
    "className": "LayoutNotFoundComponent",
    "file": "projects/ui/src/lib/modules/layout/layout-error/not-found/not-found.component.ts",
    "id": "ta-layout-not-found",
    "kind": "component",
    "members": [
      {
        "kind": "method",
        "name": "goToHome",
        "propertyName": "goToHome",
        "required": false,
        "type": "() => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-layout-page": {
    "className": "LayoutPageComponent",
    "file": "projects/ui/src/lib/modules/layout/layout-page/layout-page.component.ts",
    "id": "ta-layout-page",
    "kind": "component",
    "members": [],
    "pkg": "@ta/ui"
  },
  "ta-layout-panel": {
    "className": "LayoutPanelComponent",
    "file": "projects/ui/src/lib/modules/layout/layout-panel/layout-panel.component.ts",
    "id": "ta-layout-panel",
    "kind": "component",
    "members": [],
    "pkg": "@ta/ui"
  },
  "ta-layout-side": {
    "className": "LayoutSideComponent",
    "file": "projects/ui/src/lib/modules/layout/layout-side/layout-side.component.ts",
    "id": "ta-layout-side",
    "kind": "component",
    "members": [],
    "pkg": "@ta/ui"
  },
  "ta-layout-side-content": {
    "className": "LayoutSideContentComponent",
    "file": "projects/ui/src/lib/modules/layout/layout-side/layout-side-content/layout-side-content.component.ts",
    "id": "ta-layout-side-content",
    "kind": "component",
    "members": [],
    "pkg": "@ta/ui"
  },
  "ta-layout-side-cta": {
    "className": "LayoutSideCtaComponent",
    "file": "projects/ui/src/lib/modules/layout/layout-side/layout-side-cta/layout-side-cta.component.ts",
    "id": "ta-layout-side-cta",
    "kind": "component",
    "members": [
      {
        "default": "true",
        "kind": "input",
        "name": "background",
        "propertyName": "background",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "false",
        "kind": "input",
        "name": "rounded",
        "propertyName": "rounded",
        "required": false,
        "type": "boolean"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-layout-title": {
    "className": "LayoutTitleComponent",
    "file": "projects/ui/src/lib/modules/layout/layout-title/layout-title.component.ts",
    "id": "ta-layout-title",
    "kind": "component",
    "members": [],
    "pkg": "@ta/ui"
  },
  "ta-layout-with-bottom-nav": {
    "className": "LayoutWithBottomNavComponent",
    "file": "projects/ui/src/lib/modules/layout/with-bottom-nav/layout-with-bottom-nav.component.ts",
    "id": "ta-layout-with-bottom-nav",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "type",
        "propertyName": "type",
        "required": true,
        "type": "string"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-layout-with-panel": {
    "className": "LayoutWithPanelComponent",
    "file": "projects/ui/src/lib/modules/layout/with-panel/layout-with-panel.component.ts",
    "id": "ta-layout-with-panel",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "open",
        "propertyName": "open",
        "required": true,
        "type": "boolean"
      },
      {
        "kind": "method",
        "name": "manageDrawer",
        "propertyName": "manageDrawer",
        "required": false,
        "type": "() => void"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-line-chart": {
    "className": "TaChartLineComponent",
    "file": "projects/charts/src/lib/components/line-chart.component.ts",
    "id": "ta-line-chart",
    "kind": "component",
    "members": [
      {
        "inheritedFrom": "BaseChartComponent",
        "kind": "input",
        "name": "labels",
        "propertyName": "labels",
        "required": true,
        "type": "TLabel[]"
      },
      {
        "inheritedFrom": "BaseChartComponent",
        "kind": "input",
        "name": "datasets",
        "propertyName": "datasets",
        "required": true,
        "type": "ChartDataset<ChartType, TData>[]"
      },
      {
        "default": "{}",
        "inheritedFrom": "BaseChartComponent",
        "kind": "input",
        "name": "chartOptions",
        "propertyName": "chartOptions",
        "required": false,
        "type": "ChartConfiguration[\"options\"]"
      },
      {
        "inheritedFrom": "BaseChartComponent",
        "kind": "input",
        "name": "chartHeight",
        "propertyName": "chartHeight",
        "required": false,
        "type": "number"
      },
      {
        "inheritedFrom": "BaseChartComponent",
        "kind": "method",
        "name": "createChart",
        "propertyName": "createChart",
        "required": false,
        "type": "() => void"
      },
      {
        "inheritedFrom": "BaseChartComponent",
        "kind": "method",
        "name": "refreshChart",
        "propertyName": "refreshChart",
        "required": false,
        "type": "() => void"
      }
    ],
    "pkg": "@ta/charts"
  },
  "ta-link": {
    "className": "LinkComponent",
    "file": "projects/ui/src/lib/components/ui/link/link.component.ts",
    "id": "ta-link",
    "kind": "component",
    "members": [
      {
        "default": "\"classic\"",
        "kind": "input",
        "name": "state",
        "propertyName": "state",
        "required": false,
        "type": "TaState"
      },
      {
        "default": "true",
        "kind": "input",
        "name": "underline",
        "propertyName": "underline",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "false",
        "kind": "input",
        "name": "bold",
        "propertyName": "bold",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "\"md\"",
        "kind": "input",
        "name": "size",
        "propertyName": "size",
        "required": false,
        "type": "TaSizes"
      },
      {
        "default": "null",
        "kind": "input",
        "name": "icon",
        "propertyName": "icon",
        "required": false,
        "type": "string | null"
      },
      {
        "kind": "output",
        "name": "action",
        "propertyName": "action",
        "required": false,
        "type": "void"
      },
      {
        "kind": "method",
        "name": "handleClick",
        "propertyName": "handleClick",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "getClass",
        "propertyName": "getClass",
        "required": false,
        "type": "() => void"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-list-container": {
    "className": "ListContainerComponent",
    "file": "projects/ui/src/lib/modules/list/list-container/list-container.component.ts",
    "id": "ta-list-container",
    "kind": "component",
    "members": [],
    "pkg": "@ta/ui"
  },
  "ta-list-element": {
    "className": "ListElementComponent",
    "file": "projects/ui/src/lib/modules/list/element/list-element.component.ts",
    "id": "ta-list-element",
    "kind": "component",
    "members": [
      {
        "default": "true",
        "kind": "input",
        "name": "withSeparator",
        "propertyName": "withSeparator",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "false",
        "doc": "Signale l'élément courant par un filet jaune sur le bord gauche.",
        "kind": "input",
        "name": "highlight",
        "propertyName": "highlight",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "false",
        "kind": "input",
        "name": "flexColumn",
        "propertyName": "flexColumn",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "output",
        "name": "action",
        "propertyName": "action",
        "required": false,
        "type": "void"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-list-extra-information": {
    "className": "ListExtraInformationComponent",
    "file": "projects/ui/src/lib/modules/list/extra-information/list-extra-information.component.ts",
    "id": "ta-list-extra-information",
    "kind": "component",
    "members": [],
    "pkg": "@ta/ui"
  },
  "ta-list-sub-title": {
    "className": "ListSubTitleComponent",
    "file": "projects/ui/src/lib/modules/list/sub-title/list-sub-title.component.ts",
    "id": "ta-list-sub-title",
    "kind": "component",
    "members": [],
    "pkg": "@ta/ui"
  },
  "ta-list-tag": {
    "className": "ListTagComponent",
    "file": "projects/ui/src/lib/modules/list/tag/list-tag.component.ts",
    "id": "ta-list-tag",
    "kind": "component",
    "members": [],
    "pkg": "@ta/ui"
  },
  "ta-list-title": {
    "className": "ListTitleComponent",
    "file": "projects/ui/src/lib/modules/list/title/list-title.component.ts",
    "id": "ta-list-title",
    "kind": "component",
    "members": [],
    "pkg": "@ta/ui"
  },
  "ta-loader": {
    "className": "LoaderComponent",
    "file": "projects/ui/src/lib/modules/container/loader/loader.component.ts",
    "id": "ta-loader",
    "kind": "component",
    "members": [
      {
        "default": "true",
        "kind": "input",
        "name": "isLoading",
        "propertyName": "isLoading",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "null",
        "kind": "input",
        "name": "skeleton",
        "propertyName": "skeleton",
        "required": false,
        "type": "PlaceholderConfig | null"
      },
      {
        "default": "'lg'",
        "kind": "input",
        "name": "size",
        "propertyName": "size",
        "required": false,
        "type": "TaSizes"
      },
      {
        "default": "'ui.container.loading.light-message'",
        "kind": "input",
        "name": "text",
        "propertyName": "text",
        "required": false,
        "type": "string"
      },
      {
        "kind": "method",
        "name": "getPlaceholder",
        "propertyName": "getPlaceholder",
        "required": false,
        "type": "() => Placeholder"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-local-icon": {
    "className": "LocalIconComponent",
    "file": "projects/icons/src/lib/components/local-icon/local-icon.component.ts",
    "id": "ta-local-icon",
    "kind": "component",
    "members": [
      {
        "doc": "Icon to display",
        "kind": "input",
        "name": "type",
        "propertyName": "type",
        "required": true,
        "type": "TaIconType | string | null"
      },
      {
        "default": "\"xs\"",
        "doc": "Size of the icon",
        "kind": "input",
        "name": "size",
        "propertyName": "size",
        "required": false,
        "type": "TaSizes | \"xl\""
      },
      {
        "default": "false",
        "doc": "If set to true, icon will have a rotation animation",
        "kind": "input",
        "name": "rotation",
        "propertyName": "rotation",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "method",
        "name": "getSvgIcon",
        "propertyName": "getSvgIcon",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "getSize",
        "propertyName": "getSize",
        "required": false,
        "type": "() => string"
      }
    ],
    "pkg": "@ta/icons"
  },
  "ta-login-card": {
    "className": "LoginCardComponent",
    "file": "projects/user/src/lib/modules/user/components/login/login-card.component.ts",
    "id": "ta-login-card",
    "kind": "component",
    "members": [
      {
        "kind": "method",
        "name": "login",
        "propertyName": "login",
        "required": false,
        "type": "() => void"
      }
    ],
    "pkg": "@ta/user"
  },
  "ta-logo": {
    "className": "LogoComponent",
    "file": "projects/ui/src/lib/components/ui/logo/logo.component.ts",
    "id": "ta-logo",
    "kind": "component",
    "members": [
      {
        "default": "undefined",
        "doc": "If set, logo white or black version will be taken",
        "kind": "input",
        "name": "color",
        "propertyName": "color",
        "required": false,
        "type": "\"white\" | \"black\" | undefined"
      },
      {
        "default": "undefined",
        "doc": "If set, logo oneline version will be taken",
        "kind": "input",
        "name": "type",
        "propertyName": "type",
        "required": false,
        "type": "\"oneline\" | undefined"
      },
      {
        "default": "100",
        "doc": "Set the logo width in %",
        "kind": "input",
        "name": "widthPercentage",
        "propertyName": "widthPercentage",
        "required": false,
        "type": "number"
      },
      {
        "kind": "property",
        "name": "imageWidth",
        "propertyName": "imageWidth",
        "required": false,
        "type": "string"
      },
      {
        "kind": "method",
        "name": "getImagePath",
        "propertyName": "getImagePath",
        "required": false,
        "type": "() => string"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-main-menu": {
    "className": "MainMenuComponent",
    "file": "projects/menu/src/lib/components/main-menu/main-menu.component.ts",
    "id": "ta-main-menu",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "menuMain",
        "propertyName": "menuMain",
        "required": true,
        "type": "Menu"
      },
      {
        "kind": "input",
        "name": "menuUser",
        "propertyName": "menuUser",
        "required": false,
        "type": "Menu"
      },
      {
        "kind": "input",
        "name": "userMenuTemplate",
        "propertyName": "userMenuTemplate",
        "required": false,
        "type": "TemplateRef<any>"
      },
      {
        "default": "'vertical'",
        "kind": "input",
        "name": "direction",
        "propertyName": "direction",
        "required": false,
        "type": "'horizontal' | 'vertical'"
      },
      {
        "kind": "method",
        "name": "navigateToHome",
        "propertyName": "navigateToHome",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "toggleView",
        "propertyName": "toggleView",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "toggleMobilePanel",
        "propertyName": "toggleMobilePanel",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "closeMobilePanel",
        "propertyName": "closeMobilePanel",
        "required": false,
        "type": "() => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/menu"
  },
  "ta-material-icon": {
    "className": "MaterialIconComponent",
    "file": "projects/icons/src/lib/components/material-icon/material-icon.component.ts",
    "id": "ta-material-icon",
    "kind": "component",
    "members": [
      {
        "default": "false",
        "doc": "If set to true, define an outline style to the icon",
        "kind": "input",
        "name": "outline",
        "propertyName": "outline",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "false",
        "doc": "If set to true, define a sharp style to the icon",
        "kind": "input",
        "name": "sharp",
        "propertyName": "sharp",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "false",
        "doc": "If set to true, define a rounded style to the icon",
        "kind": "input",
        "name": "round",
        "propertyName": "round",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "false",
        "doc": "If set to true, define a dual tone style to the icon",
        "kind": "input",
        "name": "dualTone",
        "propertyName": "dualTone",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "''",
        "doc": "If set to true, define a size for the icon",
        "kind": "input",
        "name": "type",
        "propertyName": "type",
        "required": false,
        "type": "TaSizes | ''"
      },
      {
        "kind": "method",
        "name": "getDisplayStyle",
        "propertyName": "getDisplayStyle",
        "required": false,
        "type": "() => string"
      },
      {
        "kind": "method",
        "name": "getTypeStyle",
        "propertyName": "getTypeStyle",
        "required": false,
        "type": "() => string"
      }
    ],
    "pkg": "@ta/icons"
  },
  "ta-megaoctet": {
    "className": "MegaoctetComponent",
    "file": "projects/ui/src/lib/components/ui/megaoctet/megaoctet.component.ts",
    "id": "ta-megaoctet",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "octet",
        "propertyName": "octet",
        "required": true,
        "type": "number"
      },
      {
        "default": "false",
        "kind": "input",
        "name": "icon",
        "propertyName": "icon",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "property",
        "name": "megaoctet",
        "propertyName": "megaoctet",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-menu": {
    "className": "MenuComponent",
    "file": "projects/menu/src/lib/components/menu/menu.component.ts",
    "id": "ta-menu",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "menu",
        "propertyName": "menu",
        "required": true,
        "type": "Menu"
      },
      {
        "kind": "input",
        "name": "container",
        "propertyName": "container",
        "required": true,
        "type": "\"second\" | \"overflow\" | \"main\" | \"panel\""
      },
      {
        "kind": "property",
        "name": "containerCss",
        "propertyName": "containerCss",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/menu"
  },
  "ta-menu-item": {
    "className": "MenuItemComponent",
    "file": "projects/menu/src/lib/components/menu/item/menu-item.component.ts",
    "id": "ta-menu-item",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "item",
        "propertyName": "item",
        "required": true,
        "type": "MenuIcon | MenuAction | MenuBase | MenuPanel"
      },
      {
        "default": "\"bloc\"",
        "kind": "input",
        "name": "styleType",
        "propertyName": "styleType",
        "required": false,
        "type": "String"
      },
      {
        "kind": "method",
        "name": "getStyleType",
        "propertyName": "getStyleType",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "hasFontIcon",
        "propertyName": "hasFontIcon",
        "required": false,
        "type": "() => boolean"
      },
      {
        "kind": "method",
        "name": "hasIconImage",
        "propertyName": "hasIconImage",
        "required": false,
        "type": "() => boolean"
      },
      {
        "kind": "method",
        "name": "getIcon",
        "propertyName": "getIcon",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "getFontIcon",
        "propertyName": "getFontIcon",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "hasChild",
        "propertyName": "hasChild",
        "required": false,
        "type": "() => boolean"
      },
      {
        "kind": "method",
        "name": "toggle",
        "propertyName": "toggle",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "getTemplate",
        "propertyName": "getTemplate",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "trackByFn",
        "propertyName": "trackByFn",
        "required": false,
        "type": "(index: any, item: MenuBase) => void"
      },
      {
        "kind": "method",
        "name": "executeCallback",
        "propertyName": "executeCallback",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "getLink",
        "propertyName": "getLink",
        "required": false,
        "type": "() => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/menu"
  },
  "ta-menu-navigation": {
    "className": "NavigationComponent",
    "file": "projects/menu/src/lib/components/navigation/navigation.component.ts",
    "id": "ta-menu-navigation",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "menu",
        "propertyName": "menu",
        "required": true,
        "type": "Menu"
      },
      {
        "kind": "input",
        "name": "container",
        "propertyName": "container",
        "required": true,
        "type": "'tags' | 'tab' | 'submenu'"
      },
      {
        "default": "false",
        "kind": "input",
        "name": "swiper",
        "propertyName": "swiper",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "{}",
        "kind": "input",
        "name": "options",
        "propertyName": "options",
        "required": false,
        "type": "{\n    spaceElement?: TaSizes | null;\n  }"
      },
      {
        "kind": "input",
        "name": "manuallyChanged$",
        "propertyName": "manuallyChanged$",
        "required": false,
        "type": "Observable<string>"
      },
      {
        "kind": "method",
        "name": "getSpaceClass",
        "propertyName": "getSpaceClass",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "getLink",
        "propertyName": "getLink",
        "required": false,
        "type": "(item: MenuIcon | MenuAction | MenuBase) => void"
      },
      {
        "kind": "method",
        "name": "callback",
        "propertyName": "callback",
        "required": false,
        "type": "(item: MenuBase) => void"
      },
      {
        "kind": "method",
        "name": "isActive",
        "propertyName": "isActive",
        "required": false,
        "type": "(item: MenuBase) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/menu"
  },
  "ta-messenger-button": {
    "className": "MessengerButtonComponent",
    "file": "projects/ui/src/lib/components/ui/button/messenger/messenger-button.component.ts",
    "id": "ta-messenger-button",
    "kind": "component",
    "members": [
      {
        "default": "\"classic\"",
        "doc": "Button state",
        "kind": "input",
        "name": "state",
        "propertyName": "state",
        "required": false,
        "type": "TaState"
      },
      {
        "default": "\"medium\"",
        "doc": "Button size",
        "kind": "input",
        "name": "size",
        "propertyName": "size",
        "required": false,
        "type": "\"small\" | \"medium\" | \"large\""
      },
      {
        "default": "\"full\"",
        "doc": "Display mode: 'full' shows logo + text, 'logo' shows only the logo",
        "kind": "input",
        "name": "mode",
        "propertyName": "mode",
        "required": false,
        "type": "\"full\" | \"logo\""
      },
      {
        "default": "null",
        "doc": "URL to share via Messenger. If provided, clicking opens Messenger with this link.",
        "kind": "input",
        "name": "url",
        "propertyName": "url",
        "required": false,
        "type": "string | null"
      },
      {
        "default": "true",
        "kind": "input",
        "name": "stopPropagationActivation",
        "propertyName": "stopPropagationActivation",
        "required": false,
        "type": "boolean"
      },
      {
        "doc": "Event emitted when button is clicked",
        "kind": "output",
        "name": "action",
        "propertyName": "action",
        "required": false,
        "type": "void"
      },
      {
        "kind": "method",
        "name": "handleClick",
        "propertyName": "handleClick",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "getClass",
        "propertyName": "getClass",
        "required": false,
        "type": "() => void"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-mixed-chart": {
    "className": "TaChartMixedComponent",
    "file": "projects/charts/src/lib/components/mixed-chart.component.ts",
    "id": "ta-mixed-chart",
    "kind": "component",
    "members": [
      {
        "inheritedFrom": "BaseChartComponent",
        "kind": "input",
        "name": "labels",
        "propertyName": "labels",
        "required": true,
        "type": "TLabel[]"
      },
      {
        "inheritedFrom": "BaseChartComponent",
        "kind": "input",
        "name": "datasets",
        "propertyName": "datasets",
        "required": true,
        "type": "ChartDataset<ChartType, TData>[]"
      },
      {
        "default": "{}",
        "inheritedFrom": "BaseChartComponent",
        "kind": "input",
        "name": "chartOptions",
        "propertyName": "chartOptions",
        "required": false,
        "type": "ChartConfiguration[\"options\"]"
      },
      {
        "inheritedFrom": "BaseChartComponent",
        "kind": "input",
        "name": "chartHeight",
        "propertyName": "chartHeight",
        "required": false,
        "type": "number"
      },
      {
        "inheritedFrom": "BaseChartComponent",
        "kind": "method",
        "name": "createChart",
        "propertyName": "createChart",
        "required": false,
        "type": "() => void"
      },
      {
        "inheritedFrom": "BaseChartComponent",
        "kind": "method",
        "name": "refreshChart",
        "propertyName": "refreshChart",
        "required": false,
        "type": "() => void"
      }
    ],
    "pkg": "@ta/charts"
  },
  "ta-modal": {
    "className": "TaModalComponent",
    "file": "projects/ui/src/lib/modules/layout/modal/modal.component.ts",
    "id": "ta-modal",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "open",
        "propertyName": "open",
        "required": true,
        "type": "boolean"
      },
      {
        "default": "undefined",
        "kind": "input",
        "name": "size",
        "propertyName": "size",
        "required": false,
        "type": "ModalSize | undefined"
      },
      {
        "default": "''",
        "kind": "input",
        "name": "title",
        "propertyName": "title",
        "required": false,
        "type": "string"
      },
      {
        "default": "true",
        "kind": "input",
        "name": "closeOnBackdrop",
        "propertyName": "closeOnBackdrop",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "false",
        "kind": "input",
        "name": "contentFit",
        "propertyName": "contentFit",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "output",
        "name": "closeEvent",
        "propertyName": "closeEvent",
        "required": false,
        "type": "void"
      },
      {
        "kind": "method",
        "name": "containerClass",
        "propertyName": "containerClass",
        "required": false,
        "type": "() => string"
      },
      {
        "kind": "method",
        "name": "close",
        "propertyName": "close",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "onBackdropClick",
        "propertyName": "onBackdropClick",
        "required": false,
        "type": "() => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-my-account": {
    "className": "MyAccountComponent",
    "file": "projects/user/src/lib/modules/user/components/my-account/my-account.component.ts",
    "id": "ta-my-account",
    "kind": "component",
    "members": [
      {
        "default": "null",
        "kind": "input",
        "name": "profileMenu",
        "propertyName": "profileMenu",
        "required": false,
        "type": "Menu | null"
      },
      {
        "default": "null",
        "kind": "input",
        "name": "appVersion",
        "propertyName": "appVersion",
        "required": false,
        "type": "string | null"
      },
      {
        "default": "false",
        "kind": "input",
        "name": "isEditable",
        "propertyName": "isEditable",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "output",
        "name": "navigateEvent",
        "propertyName": "navigateEvent",
        "required": false,
        "type": "void"
      },
      {
        "kind": "output",
        "name": "navigateEditEvent",
        "propertyName": "navigateEditEvent",
        "required": false,
        "type": "void"
      },
      {
        "kind": "property",
        "name": "profile$",
        "propertyName": "profile$",
        "required": false,
        "type": "unknown"
      },
      {
        "kind": "method",
        "name": "navigateToProfile",
        "propertyName": "navigateToProfile",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "disconnect",
        "propertyName": "disconnect",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "getDisconnectionMenu",
        "propertyName": "getDisconnectionMenu",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "navigateToEditProfile",
        "propertyName": "navigateToEditProfile",
        "required": false,
        "type": "() => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/user"
  },
  "ta-new": {
    "className": "NewComponent",
    "file": "projects/ui/src/lib/components/ui/new/new.component.ts",
    "id": "ta-new",
    "kind": "component",
    "members": [
      {
        "default": "false",
        "kind": "input",
        "name": "visible",
        "propertyName": "visible",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "false",
        "kind": "input",
        "name": "isRelative",
        "propertyName": "isRelative",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "\"md\"",
        "kind": "input",
        "name": "size",
        "propertyName": "size",
        "required": false,
        "type": "TaSizes"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-notification-badge": {
    "className": "NotificationBadgeComponent",
    "file": "projects/ui/src/lib/components/ui/notification-badge/notification-badge/notification-badge.component.ts",
    "id": "ta-notification-badge",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "number",
        "propertyName": "number",
        "required": true,
        "type": "number"
      },
      {
        "default": "\"xs\"",
        "kind": "input",
        "name": "fontSize",
        "propertyName": "fontSize",
        "required": false,
        "type": "TaSizes"
      },
      {
        "default": "undefined",
        "kind": "input",
        "name": "style",
        "propertyName": "style",
        "required": false,
        "type": "string | undefined"
      },
      {
        "default": "false",
        "kind": "input",
        "name": "relative",
        "propertyName": "relative",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "method",
        "name": "getClass",
        "propertyName": "getClass",
        "required": false,
        "type": "() => void"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-notification-badge-container": {
    "className": "NotificationBadgeContainerComponent",
    "file": "projects/ui/src/lib/components/ui/notification-badge/notification-badge-container.component.ts",
    "id": "ta-notification-badge-container",
    "kind": "component",
    "members": [],
    "pkg": "@ta/ui"
  },
  "ta-notification-box": {
    "className": "NotificationBoxComponent",
    "file": "projects/notification/src/lib/components/popup/box/notification-box.component.ts",
    "id": "ta-notification-box",
    "kind": "component",
    "members": [
      {
        "kind": "method",
        "name": "dismiss",
        "propertyName": "dismiss",
        "required": false,
        "type": "(id: string) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/notification"
  },
  "ta-notification-bullet": {
    "className": "BulletComponent",
    "file": "projects/notification/src/lib/components/bullet/bullet.component.ts",
    "id": "ta-notification-bullet",
    "kind": "component",
    "members": [
      {
        "default": "null",
        "kind": "input",
        "name": "filters",
        "propertyName": "filters",
        "required": false,
        "type": "NotificationFilter"
      },
      {
        "kind": "property",
        "name": "number$",
        "propertyName": "number$",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/notification"
  },
  "ta-notification-inline": {
    "className": "NotificationInlineComponent",
    "file": "projects/notification/src/lib/components/popup/inline/notification-inline.component.ts",
    "id": "ta-notification-inline",
    "kind": "component",
    "members": [
      {
        "default": "\"\"",
        "kind": "input",
        "name": "message",
        "propertyName": "messageInput",
        "required": false,
        "type": "string"
      },
      {
        "default": "ENotificationCode.information",
        "kind": "input",
        "name": "code",
        "propertyName": "code",
        "required": false,
        "type": "ENotificationCode"
      },
      {
        "default": "true",
        "kind": "input",
        "name": "showClose",
        "propertyName": "showClose",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "output",
        "name": "askClose",
        "propertyName": "askClose",
        "required": false,
        "type": "void"
      },
      {
        "kind": "property",
        "name": "isError",
        "propertyName": "isError",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "property",
        "name": "isWarning",
        "propertyName": "isWarning",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "property",
        "name": "isInformation",
        "propertyName": "isInformation",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "property",
        "name": "isSuccess",
        "propertyName": "isSuccess",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "method",
        "name": "getIcon",
        "propertyName": "getIcon",
        "required": false,
        "type": "() => string"
      },
      {
        "kind": "method",
        "name": "getTypeClass",
        "propertyName": "getTypeClass",
        "required": false,
        "type": "() => string"
      },
      {
        "kind": "method",
        "name": "getTypeKey",
        "propertyName": "getTypeKey",
        "required": false,
        "type": "() => string"
      },
      {
        "kind": "method",
        "name": "getTypeLabel",
        "propertyName": "getTypeLabel",
        "required": false,
        "type": "() => string"
      },
      {
        "kind": "method",
        "name": "getDefaultMessageKey",
        "propertyName": "getDefaultMessageKey",
        "required": false,
        "type": "() => string"
      },
      {
        "kind": "method",
        "name": "openErrorBox",
        "propertyName": "openErrorBox",
        "required": false,
        "type": "() => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/notification"
  },
  "ta-overlay-panel": {
    "className": "TaOverlayPanelComponent",
    "file": "projects/ui/src/lib/modules/overlay-panel/overlay-panel/overlay-panel.component.ts",
    "id": "ta-overlay-panel",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "panelConfig",
        "propertyName": "panelConfig",
        "required": true,
        "type": "OverlayMenuConfig"
      },
      {
        "default": "\"default\"",
        "kind": "input",
        "name": "position",
        "propertyName": "position",
        "required": false,
        "type": "\"default\" | \"right\""
      },
      {
        "kind": "output",
        "name": "closed",
        "propertyName": "closed",
        "required": false,
        "type": "void"
      },
      {
        "kind": "method",
        "name": "open",
        "propertyName": "open",
        "required": false,
        "type": "(manual = false) => void"
      },
      {
        "kind": "method",
        "name": "close",
        "propertyName": "close",
        "required": false,
        "type": "() => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-pdf-viewer": {
    "className": "PdfViewerComponent",
    "file": "projects/files/files-basic/src/lib/components/preview/viewers/pdf-viewer/pdf-viewer.component.ts",
    "id": "ta-pdf-viewer",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "file",
        "propertyName": "file",
        "required": true,
        "type": "PreviewDocumentDto"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/files-basic"
  },
  "ta-picture-info-message": {
    "className": "PictureInfoMessageComponent",
    "file": "projects/ui/src/lib/components/ui/picture-info-message/picture-info-message.component.ts",
    "id": "ta-picture-info-message",
    "kind": "component",
    "members": [
      {
        "default": "undefined",
        "kind": "input",
        "name": "icon",
        "propertyName": "icon",
        "required": false,
        "type": "TaIconType | string | undefined"
      },
      {
        "default": "undefined",
        "kind": "input",
        "name": "iconSize",
        "propertyName": "iconSize",
        "required": false,
        "type": "TaSizes | \"xl\" | undefined"
      },
      {
        "default": "undefined",
        "kind": "input",
        "name": "text",
        "propertyName": "text",
        "required": false,
        "type": "string | undefined"
      },
      {
        "default": "\"info\"",
        "kind": "input",
        "name": "type",
        "propertyName": "type",
        "required": false,
        "type": "MessageLevel | undefined"
      },
      {
        "kind": "property",
        "name": "displayedText",
        "propertyName": "displayedText",
        "required": false,
        "type": "unknown"
      },
      {
        "kind": "method",
        "name": "isFontIcon",
        "propertyName": "isFontIcon",
        "required": false,
        "type": "(icon: TaIconType | string) => boolean"
      },
      {
        "kind": "method",
        "name": "getFontIcon",
        "propertyName": "getFontIcon",
        "required": false,
        "type": "(icon: TaIconType | string) => string"
      },
      {
        "kind": "method",
        "name": "isLocalIcon",
        "propertyName": "isLocalIcon",
        "required": false,
        "type": "(icon: TaIconType | string) => boolean"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-pie-chart": {
    "className": "TaChartPieComponent",
    "file": "projects/charts/src/lib/components/pie-chart.component.ts",
    "id": "ta-pie-chart",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "radius",
        "propertyName": "radius",
        "required": false,
        "type": "number"
      },
      {
        "inheritedFrom": "BaseChartComponent",
        "kind": "input",
        "name": "labels",
        "propertyName": "labels",
        "required": true,
        "type": "TLabel[]"
      },
      {
        "inheritedFrom": "BaseChartComponent",
        "kind": "input",
        "name": "datasets",
        "propertyName": "datasets",
        "required": true,
        "type": "ChartDataset<ChartType, TData>[]"
      },
      {
        "default": "{}",
        "inheritedFrom": "BaseChartComponent",
        "kind": "input",
        "name": "chartOptions",
        "propertyName": "chartOptions",
        "required": false,
        "type": "ChartConfiguration[\"options\"]"
      },
      {
        "inheritedFrom": "BaseChartComponent",
        "kind": "input",
        "name": "chartHeight",
        "propertyName": "chartHeight",
        "required": false,
        "type": "number"
      },
      {
        "inheritedFrom": "BaseChartComponent",
        "kind": "method",
        "name": "createChart",
        "propertyName": "createChart",
        "required": false,
        "type": "() => void"
      },
      {
        "inheritedFrom": "BaseChartComponent",
        "kind": "method",
        "name": "refreshChart",
        "propertyName": "refreshChart",
        "required": false,
        "type": "() => void"
      }
    ],
    "pkg": "@ta/charts"
  },
  "ta-progress": {
    "className": "ProgressComponent",
    "file": "projects/ui/src/lib/components/ui/progress/progress.component.ts",
    "id": "ta-progress",
    "kind": "component",
    "members": [
      {
        "default": "'md'",
        "kind": "input",
        "name": "size",
        "propertyName": "size",
        "required": false,
        "type": "TaSizes"
      },
      {
        "default": "'default'",
        "kind": "input",
        "name": "type",
        "propertyName": "type",
        "required": false,
        "type": "ColorType"
      },
      {
        "default": "0",
        "kind": "input",
        "name": "value",
        "propertyName": "value",
        "required": false,
        "type": "number"
      },
      {
        "kind": "method",
        "name": "getClass",
        "propertyName": "getClass",
        "required": false,
        "type": "() => string"
      },
      {
        "kind": "method",
        "name": "getProgressStyle",
        "propertyName": "getProgressStyle",
        "required": false,
        "type": "() => void"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-progress-bar": {
    "className": "ProgressBarComponent",
    "file": "projects/ui/src/lib/components/ui/progress-bar/progress-bar.component.ts",
    "id": "ta-progress-bar",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "current",
        "propertyName": "current",
        "required": true,
        "type": "number"
      },
      {
        "kind": "input",
        "name": "max",
        "propertyName": "max",
        "required": true,
        "type": "number"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-progress-bar-data": {
    "className": "ProgressBarDataComponent",
    "file": "projects/ui/src/lib/components/ui/progress/progress-bar-data/progress-bar-data.component.ts",
    "id": "ta-progress-bar-data",
    "kind": "component",
    "members": [
      {
        "default": "undefined",
        "kind": "input",
        "name": "current",
        "propertyName": "current",
        "required": false,
        "type": "number | undefined"
      },
      {
        "default": "undefined",
        "kind": "input",
        "name": "max",
        "propertyName": "max",
        "required": false,
        "type": "number | undefined"
      },
      {
        "kind": "input",
        "name": "title",
        "propertyName": "title",
        "required": true,
        "type": "string"
      },
      {
        "default": "undefined",
        "kind": "input",
        "name": "titleIcon",
        "propertyName": "titleIcon",
        "required": false,
        "type": "string | undefined"
      },
      {
        "default": "undefined",
        "kind": "input",
        "name": "description",
        "propertyName": "description",
        "required": false,
        "type": "string | undefined"
      },
      {
        "default": "undefined",
        "kind": "input",
        "name": "rightText",
        "propertyName": "rightText",
        "required": false,
        "type": "{ text: string; colorClass?: string } | undefined"
      },
      {
        "kind": "property",
        "name": "progressValue",
        "propertyName": "progressValue",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-progress-circle": {
    "className": "ProgressCircleComponent",
    "file": "projects/ui/src/lib/components/ui/progress/circle/progress-circle/progress-circle.component.ts",
    "id": "ta-progress-circle",
    "kind": "component",
    "members": [
      {
        "default": "50",
        "doc": "Progress in percentage",
        "kind": "input",
        "name": "progress",
        "propertyName": "progress",
        "required": false,
        "type": "number"
      },
      {
        "default": "undefined",
        "doc": "Title located above",
        "kind": "input",
        "name": "upTitle",
        "propertyName": "upTitle",
        "required": false,
        "type": "string | undefined"
      },
      {
        "default": "undefined",
        "doc": "Title located below",
        "kind": "input",
        "name": "downTitle",
        "propertyName": "downTitle",
        "required": false,
        "type": "string | undefined"
      },
      {
        "kind": "property",
        "name": "circumference",
        "propertyName": "circumference",
        "required": false,
        "type": "unknown"
      },
      {
        "kind": "property",
        "name": "canDisplayText",
        "propertyName": "canDisplayText",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-pwa": {
    "className": "PwaComponent",
    "file": "projects/ui/src/lib/components/ui/pwa/pwa.component.ts",
    "id": "ta-pwa",
    "kind": "component",
    "members": [
      {
        "kind": "output",
        "name": "askClose",
        "propertyName": "askClose",
        "required": false,
        "type": "void"
      },
      {
        "kind": "method",
        "name": "onNoClick",
        "propertyName": "onNoClick",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "onYesClick",
        "propertyName": "onYesClick",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "dontAsk",
        "propertyName": "dontAsk",
        "required": false,
        "type": "() => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-rating": {
    "className": "RatingComponent",
    "file": "projects/ui/src/lib/components/ui/rating/rating.component.ts",
    "id": "ta-rating",
    "kind": "component",
    "members": [
      {
        "default": "0",
        "doc": "Current rating value (supports decimals for partial stars)",
        "kind": "input",
        "name": "value",
        "propertyName": "value",
        "required": false,
        "type": "number"
      },
      {
        "default": "5",
        "doc": "Maximum number of stars",
        "kind": "input",
        "name": "max",
        "propertyName": "max",
        "required": false,
        "type": "number"
      },
      {
        "default": "24",
        "doc": "Size of the stars in pixels",
        "kind": "input",
        "name": "size",
        "propertyName": "size",
        "required": false,
        "type": "number"
      },
      {
        "default": "null",
        "doc": "Color of filled stars. `null` (default) lets the design system's rating token apply through the stylesheet.",
        "kind": "input",
        "name": "color",
        "propertyName": "color",
        "required": false,
        "type": "string | null"
      },
      {
        "default": "null",
        "doc": "Color of empty stars. `null` (default) lets the design system's rating token apply through the stylesheet.",
        "kind": "input",
        "name": "emptyColor",
        "propertyName": "emptyColor",
        "required": false,
        "type": "string | null"
      },
      {
        "default": "false",
        "doc": "Read-only mode (no click interactions)",
        "kind": "input",
        "name": "readonly",
        "propertyName": "readonly",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "true",
        "doc": "Show hover effect",
        "kind": "input",
        "name": "showHover",
        "propertyName": "showHover",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "'flex-row'",
        "doc": "Show hover effect",
        "kind": "input",
        "name": "containerClass",
        "propertyName": "containerClass",
        "required": false,
        "type": "string"
      },
      {
        "doc": "Emits the new rating value when a star is clicked",
        "kind": "output",
        "name": "ratingChange",
        "propertyName": "ratingChange",
        "required": false,
        "type": "number"
      },
      {
        "doc": "Emits when hovering over a star",
        "kind": "output",
        "name": "hoverChange",
        "propertyName": "hoverChange",
        "required": false,
        "type": "number"
      },
      {
        "kind": "property",
        "name": "stars",
        "propertyName": "stars",
        "required": false,
        "type": "unknown"
      },
      {
        "doc": "Get fill percentage for a star (0-100)",
        "kind": "method",
        "name": "getStarFillPercentage",
        "propertyName": "getStarFillPercentage",
        "required": false,
        "type": "(star: number) => number"
      },
      {
        "doc": "Handle star click",
        "kind": "method",
        "name": "onStarClick",
        "propertyName": "onStarClick",
        "required": false,
        "type": "(star: number) => void"
      },
      {
        "doc": "Handle star hover",
        "kind": "method",
        "name": "onStarHover",
        "propertyName": "onStarHover",
        "required": false,
        "type": "(star: number) => void"
      },
      {
        "doc": "Handle mouse leave",
        "kind": "method",
        "name": "onMouseLeave",
        "propertyName": "onMouseLeave",
        "required": false,
        "type": "() => void"
      },
      {
        "doc": "Get cursor style",
        "kind": "method",
        "name": "getCursorStyle",
        "propertyName": "getCursorStyle",
        "required": false,
        "type": "() => string"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-sale": {
    "className": "SaleComponent",
    "file": "projects/cms/src/lib/modules/strapi/components/sale/sale.component.ts",
    "id": "ta-sale",
    "kind": "component",
    "members": [
      {
        "kind": "output",
        "name": "acceptation",
        "propertyName": "acceptation",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "property",
        "name": "content$",
        "propertyName": "content$",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/cms"
  },
  "ta-search-displayer": {
    "className": "SearchDisplayerComponent",
    "file": "projects/core/src/lib/components/historical-research/search-displayer.component.ts",
    "id": "ta-search-displayer",
    "kind": "component",
    "members": [
      {
        "default": "\"button\"",
        "kind": "input",
        "name": "container",
        "propertyName": "container",
        "required": false,
        "type": "\"button\" | \"link\""
      },
      {
        "default": "\"\"",
        "kind": "input",
        "name": "placeholder",
        "propertyName": "placeholder",
        "required": false,
        "type": "string"
      },
      {
        "kind": "input",
        "name": "searchHistory",
        "propertyName": "searchHistory",
        "required": false,
        "type": "{\n    type: string;\n  }"
      },
      {
        "kind": "output",
        "name": "valueCompleted",
        "propertyName": "valueCompleted",
        "required": false,
        "type": "any"
      },
      {
        "kind": "property",
        "name": "mobileDetection",
        "propertyName": "mobileDetection",
        "required": false,
        "type": "unknown"
      },
      {
        "kind": "method",
        "name": "openDialog",
        "propertyName": "openDialog",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "action",
        "propertyName": "action",
        "required": false,
        "type": "(result: any) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/core"
  },
  "ta-search-field": {
    "className": "SearchFieldComponent",
    "file": "projects/form/form-input/src/lib/components/input/search-field/search-field.component.ts",
    "id": "ta-search-field",
    "kind": "component",
    "members": [
      {
        "default": "false",
        "kind": "input",
        "name": "isOpen",
        "propertyName": "isOpen",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "\"\"",
        "kind": "input",
        "name": "placeholder",
        "propertyName": "placeholder",
        "required": false,
        "type": "string"
      },
      {
        "default": "true",
        "kind": "input",
        "name": "space",
        "propertyName": "space",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "\"sm\"",
        "kind": "input",
        "name": "type",
        "propertyName": "type",
        "required": false,
        "type": "TaSizes"
      },
      {
        "kind": "output",
        "name": "valueCompleted",
        "propertyName": "valueCompleted",
        "required": false,
        "type": "void"
      },
      {
        "kind": "method",
        "name": "iconClicked",
        "propertyName": "iconClicked",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "focus",
        "propertyName": "focus",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "focusOut",
        "propertyName": "focusOut",
        "required": false,
        "type": "() => void"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "input",
        "propertyName": "inputModel",
        "required": true,
        "type": "C"
      },
      {
        "default": "new ErrorStateMatcher()",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "matcher",
        "propertyName": "matcher",
        "required": false,
        "type": "ErrorStateMatcher"
      },
      {
        "default": "false",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "standalone",
        "propertyName": "standaloneMode",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "undefined",
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "input",
        "name": "onFocus",
        "propertyName": "onFocusObs",
        "required": false,
        "type": "Observable<void> | undefined"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "output",
        "name": "valueChanged",
        "propertyName": "valueChanged",
        "required": false,
        "type": "V"
      },
      {
        "inheritedFrom": "TaAbstractInputComponent",
        "kind": "method",
        "name": "onChange",
        "propertyName": "onChange",
        "required": false,
        "type": "(value: V) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/form-input"
  },
  "ta-search-history-displayer": {
    "className": "SearchHistoryDisplayerComponent",
    "file": "projects/core/src/lib/components/historical-research/search-history-displayer/search-history-displayer.component.ts",
    "id": "ta-search-history-displayer",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "searchHistory",
        "propertyName": "searchHistory",
        "required": false,
        "type": "{\n    type: string;\n  }"
      },
      {
        "default": "\"\"",
        "kind": "input",
        "name": "placeholder",
        "propertyName": "placeholder",
        "required": false,
        "type": "string"
      },
      {
        "default": "false",
        "kind": "input",
        "name": "isDropDown",
        "propertyName": "isDropDown",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "output",
        "name": "valueCompleted",
        "propertyName": "valueCompleted",
        "required": false,
        "type": "any"
      },
      {
        "kind": "property",
        "name": "searchFieldWidth",
        "propertyName": "searchFieldWidth",
        "required": false,
        "type": "unknown"
      },
      {
        "kind": "property",
        "name": "listRecentSearches",
        "propertyName": "listRecentSearches",
        "required": false,
        "type": "unknown"
      },
      {
        "kind": "method",
        "name": "searchCompleted",
        "propertyName": "searchCompleted",
        "required": false,
        "type": "(search: string) => void"
      }
    ],
    "pkg": "@ta/core"
  },
  "ta-share-button": {
    "className": "ShareButtonComponent",
    "file": "projects/ui/src/lib/components/ui/button/share/share-button.component.ts",
    "id": "ta-share-button",
    "kind": "component",
    "members": [
      {
        "default": "\"classic\"",
        "doc": "Button state",
        "kind": "input",
        "name": "state",
        "propertyName": "state",
        "required": false,
        "type": "TaState"
      },
      {
        "default": "\"medium\"",
        "doc": "Button size",
        "kind": "input",
        "name": "size",
        "propertyName": "size",
        "required": false,
        "type": "\"small\" | \"medium\" | \"large\""
      },
      {
        "default": "\"\"",
        "doc": "Title for the native share dialog",
        "kind": "input",
        "name": "shareTitle",
        "propertyName": "shareTitle",
        "required": false,
        "type": "string"
      },
      {
        "default": "null",
        "doc": "Text message to share",
        "kind": "input",
        "name": "message",
        "propertyName": "message",
        "required": false,
        "type": "string | null"
      },
      {
        "default": "null",
        "doc": "URL to share",
        "kind": "input",
        "name": "url",
        "propertyName": "url",
        "required": false,
        "type": "string | null"
      },
      {
        "default": "true",
        "kind": "input",
        "name": "stopPropagationActivation",
        "propertyName": "stopPropagationActivation",
        "required": false,
        "type": "boolean"
      },
      {
        "doc": "Event emitted when button is clicked",
        "kind": "output",
        "name": "action",
        "propertyName": "action",
        "required": false,
        "type": "void"
      },
      {
        "kind": "method",
        "name": "handleClick",
        "propertyName": "handleClick",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "getIconSize",
        "propertyName": "getIconSize",
        "required": false,
        "type": "() => TaSizes"
      },
      {
        "kind": "method",
        "name": "getClass",
        "propertyName": "getClass",
        "required": false,
        "type": "() => void"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-swiper": {
    "className": "SwiperComponent",
    "file": "projects/ui/src/lib/components/ui/swiper/swiper.component.ts",
    "id": "ta-swiper",
    "kind": "component",
    "members": [],
    "pkg": "@ta/ui"
  },
  "ta-swiper-light": {
    "className": "SwiperLightComponent",
    "file": "projects/ui/src/lib/modules/container/swiper-light/swiper-light.component.ts",
    "id": "ta-swiper-light",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "items",
        "propertyName": "items",
        "required": true,
        "type": "any[]"
      },
      {
        "kind": "input",
        "name": "template",
        "propertyName": "template",
        "required": true,
        "type": "TemplateRef<any>"
      },
      {
        "default": "\"g-space-sm\"",
        "kind": "input",
        "name": "swiperClasses",
        "propertyName": "swiperClasses",
        "required": false,
        "type": "string"
      },
      {
        "default": "undefined",
        "kind": "input",
        "name": "containerClasses",
        "propertyName": "containerClasses",
        "required": false,
        "type": "string | undefined"
      },
      {
        "default": "false",
        "kind": "input",
        "name": "forced",
        "propertyName": "forced",
        "required": false,
        "type": "boolean"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-switch-language": {
    "className": "SwitchLanguageComponent",
    "file": "projects/user/src/lib/modules/user/components/switch-language/switch-language.component.ts",
    "id": "ta-switch-language",
    "kind": "component",
    "members": [
      {
        "default": "\"inline\"",
        "kind": "input",
        "name": "mode",
        "propertyName": "mode",
        "required": false,
        "type": "\"inline\" | \"dropdown\" | \"modal\""
      },
      {
        "kind": "method",
        "name": "toggleDropdown",
        "propertyName": "toggleDropdown",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "changeLanguage",
        "propertyName": "changeLanguage",
        "required": false,
        "type": "(language: string) => void"
      }
    ],
    "pkg": "@ta/user"
  },
  "ta-switch-language-cta": {
    "className": "SwitchLanguageCtaComponent",
    "file": "projects/user/src/lib/modules/user/components/switch-language/switch-language-cta/switch-language-cta.component.ts",
    "id": "ta-switch-language-cta",
    "kind": "component",
    "members": [],
    "pkg": "@ta/user"
  },
  "ta-template-modal-container": {
    "className": "TemplateModalContainer",
    "file": "projects/ui/src/lib/modules/layout/layout-modal/layout-modal-container/layout-modal-container.component.ts",
    "id": "ta-template-modal-container",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "open",
        "propertyName": "open",
        "required": true,
        "type": "boolean"
      },
      {
        "default": "null",
        "kind": "input",
        "name": "template",
        "propertyName": "template",
        "required": false,
        "type": "TemplateRef<any> | null"
      },
      {
        "default": "\"full\"",
        "kind": "input",
        "name": "style",
        "propertyName": "style",
        "required": false,
        "type": "ModalStyle"
      },
      {
        "default": "undefined",
        "kind": "input",
        "name": "askClosing$",
        "propertyName": "askClosing$",
        "required": false,
        "type": "Observable<null> | undefined"
      },
      {
        "kind": "output",
        "name": "closeEvent",
        "propertyName": "closeEvent",
        "required": false,
        "type": "void"
      },
      {
        "kind": "method",
        "name": "modalSize",
        "propertyName": "modalSize",
        "required": false,
        "type": "() => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-text": {
    "className": "TextComponent",
    "file": "projects/ui/src/lib/components/ui/text/text.component.ts",
    "id": "ta-text",
    "kind": "component",
    "members": [
      {
        "default": "'md'",
        "doc": "Add small class to text",
        "kind": "input",
        "name": "size",
        "propertyName": "size",
        "required": false,
        "type": "TaSizes"
      },
      {
        "default": "false",
        "doc": "Add bold class to text",
        "kind": "input",
        "name": "isBold",
        "propertyName": "isBold",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "'default'",
        "doc": "Add bold class to text",
        "kind": "input",
        "name": "color",
        "propertyName": "color",
        "required": false,
        "type": "ColorType"
      },
      {
        "kind": "method",
        "name": "getColorClass",
        "propertyName": "getColorClass",
        "required": false,
        "type": "() => void"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-text-to-clipboard": {
    "className": "TextToClipboardComponent",
    "file": "projects/core/src/lib/components/text-to-clipboard/text-to-clipboard.component.ts",
    "id": "ta-text-to-clipboard",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "value",
        "propertyName": "value",
        "required": true,
        "type": "string"
      },
      {
        "default": "'sm'",
        "kind": "input",
        "name": "iconSize",
        "propertyName": "iconSize",
        "required": false,
        "type": "TaSizes"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/core"
  },
  "ta-time-ago": {
    "className": "TimeAgoComponent",
    "file": "projects/ui/src/lib/components/ui/time-ago/time-ago.component.ts",
    "id": "ta-time-ago",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "date",
        "propertyName": "date",
        "required": true,
        "type": "string"
      },
      {
        "default": "false",
        "kind": "input",
        "name": "withHours",
        "propertyName": "withHours",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "property",
        "name": "absDays",
        "propertyName": "absDays",
        "required": false,
        "type": "unknown"
      },
      {
        "kind": "property",
        "name": "days",
        "propertyName": "days",
        "required": false,
        "type": "unknown"
      },
      {
        "kind": "method",
        "name": "key",
        "propertyName": "key",
        "required": false,
        "type": "() => void"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-title": {
    "className": "TitleComponent",
    "file": "projects/ui/src/lib/components/ui/title/title.component.ts",
    "id": "ta-title",
    "kind": "component",
    "members": [
      {
        "default": "1",
        "doc": "Title level Higher value means lower title size",
        "kind": "input",
        "name": "level",
        "propertyName": "level",
        "required": false,
        "type": "1 | 2 | 3 | 4 | 5 | 6"
      },
      {
        "default": "false",
        "doc": "Title theme If set to true, title will be themed with CSS",
        "kind": "input",
        "name": "isTheme",
        "propertyName": "isTheme",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "false",
        "kind": "input",
        "name": "isBold",
        "propertyName": "isBold",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "input",
        "name": "icon",
        "propertyName": "icon",
        "required": false,
        "type": "string"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-toast": {
    "className": "ToastComponent",
    "file": "projects/ui/src/lib/components/ui/toast/toast.component.ts",
    "id": "ta-toast",
    "kind": "component",
    "members": [
      {
        "default": "ENotificationCode.information",
        "kind": "input",
        "name": "code",
        "propertyName": "code",
        "required": false,
        "type": "ENotificationCode"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-toggle-card": {
    "className": "ToggleCardComponent",
    "file": "projects/ui/src/lib/components/ui/toggle-card/toggle-card.component.ts",
    "id": "ta-toggle-card",
    "kind": "component",
    "members": [
      {
        "default": "\"\"",
        "kind": "input",
        "name": "title",
        "propertyName": "title",
        "required": false,
        "type": "string"
      },
      {
        "default": "undefined",
        "kind": "input",
        "name": "description",
        "propertyName": "description",
        "required": false,
        "type": "string | undefined"
      },
      {
        "default": "undefined",
        "kind": "input",
        "name": "icon",
        "propertyName": "icon",
        "required": false,
        "type": "string | undefined"
      },
      {
        "default": "false",
        "kind": "input",
        "name": "isActive",
        "propertyName": "isActive",
        "required": false,
        "type": "boolean"
      },
      {
        "default": "false",
        "kind": "input",
        "name": "disabled",
        "propertyName": "disabled",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "output",
        "name": "toggle",
        "propertyName": "toggle",
        "required": false,
        "type": "boolean"
      },
      {
        "kind": "method",
        "name": "onToggle",
        "propertyName": "onToggle",
        "required": false,
        "type": "() => void"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-tree-children": {
    "className": "TaTreeChildrenComponent",
    "file": "projects/ui/src/lib/components/ui/tree/tree-children/tree-children.component.ts",
    "id": "ta-tree-children",
    "kind": "component",
    "members": [],
    "pkg": "@ta/ui"
  },
  "ta-tree-container": {
    "className": "TaTreeContainerComponent",
    "file": "projects/ui/src/lib/components/ui/tree/tree-container/tree-container.component.ts",
    "id": "ta-tree-container",
    "kind": "component",
    "members": [],
    "pkg": "@ta/ui"
  },
  "ta-tree-item": {
    "className": "TaTreeItemComponent",
    "file": "projects/ui/src/lib/components/ui/tree/tree-item/tree-item.component.ts",
    "id": "ta-tree-item",
    "kind": "component",
    "members": [],
    "pkg": "@ta/ui"
  },
  "ta-trigram": {
    "className": "TrigramComponent",
    "file": "projects/ui/src/lib/components/ui/trigram/trigram.component.ts",
    "id": "ta-trigram",
    "kind": "component",
    "members": [
      {
        "doc": "Text to display in trigram",
        "kind": "input",
        "name": "value",
        "propertyName": "value",
        "required": true,
        "type": "string | null"
      },
      {
        "default": "35",
        "doc": "Size of trigram",
        "kind": "input",
        "name": "size",
        "propertyName": "size",
        "required": false,
        "type": "number"
      },
      {
        "kind": "method",
        "name": "getFontSize",
        "propertyName": "getFontSize",
        "required": false,
        "type": "() => void"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-typed-message": {
    "className": "TypedMessageComponent",
    "file": "projects/ui/src/lib/components/ui/typed-message/typed-message.component.ts",
    "id": "ta-typed-message",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "text",
        "propertyName": "text",
        "required": true,
        "type": "string"
      },
      {
        "kind": "input",
        "name": "type",
        "propertyName": "type",
        "required": true,
        "type": "MessageLevel"
      },
      {
        "kind": "property",
        "name": "icon",
        "propertyName": "icon",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-user-logo": {
    "className": "UserLogoComponent",
    "file": "projects/ui/src/lib/components/ui/user-logo/user-logo.component.ts",
    "id": "ta-user-logo",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "user",
        "propertyName": "user",
        "required": true,
        "type": "UserLogoData"
      },
      {
        "default": "'lg'",
        "doc": "Size of user logo desired",
        "kind": "input",
        "name": "size",
        "propertyName": "size",
        "required": false,
        "type": "TaSizes"
      },
      {
        "default": "undefined",
        "kind": "input",
        "name": "forcedSize",
        "propertyName": "forcedSize",
        "required": false,
        "type": "number | undefined"
      },
      {
        "default": "'font'",
        "kind": "input",
        "name": "defaultType",
        "propertyName": "defaultType",
        "required": false,
        "type": "'font' | 'trigram'"
      },
      {
        "kind": "property",
        "name": "sizeValue",
        "propertyName": "sizeValue",
        "required": false,
        "type": "unknown"
      },
      {
        "kind": "method",
        "name": "getTrigram",
        "propertyName": "getTrigram",
        "required": false,
        "type": "() => void"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-users-list": {
    "className": "UsersListComponent",
    "file": "projects/ui/src/lib/components/ui/users-list/users-list.component.ts",
    "id": "ta-users-list",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "users",
        "propertyName": "users",
        "required": true,
        "type": "Observable<UserLogoData[]>"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-validation-modal": {
    "className": "ValidationModal",
    "file": "projects/ui/src/lib/modules/container/validation/modal/modal-validation.component.ts",
    "id": "ta-validation-modal",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "open",
        "propertyName": "open",
        "required": true,
        "type": "boolean"
      },
      {
        "default": "undefined",
        "kind": "input",
        "name": "params",
        "propertyName": "params",
        "required": false,
        "type": "ModalParameter | undefined"
      },
      {
        "kind": "output",
        "name": "validated",
        "propertyName": "validated",
        "required": false,
        "type": "void"
      },
      {
        "kind": "output",
        "name": "closeEvent",
        "propertyName": "closeEvent",
        "required": false,
        "type": "void"
      },
      {
        "kind": "property",
        "name": "title",
        "propertyName": "title",
        "required": false,
        "type": "string"
      },
      {
        "kind": "property",
        "name": "subtitle",
        "propertyName": "subtitle",
        "required": false,
        "type": "string"
      },
      {
        "kind": "method",
        "name": "onNoClick",
        "propertyName": "onNoClick",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "onYesClick",
        "propertyName": "onYesClick",
        "required": false,
        "type": "() => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackById",
        "propertyName": "trackById",
        "required": false,
        "type": "(_: any, item: { id: number | string }) => void"
      },
      {
        "inheritedFrom": "TaBaseComponent",
        "kind": "method",
        "name": "trackByKey",
        "propertyName": "trackByKey",
        "required": false,
        "type": "(_: any, item: { key: string }) => void"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-veriff-button": {
    "className": "VeriffButtonComponent",
    "file": "projects/ui/src/lib/components/ui/button/veriff/veriff-button.component.ts",
    "id": "ta-veriff-button",
    "kind": "component",
    "members": [
      {
        "default": "\"classic\"",
        "doc": "Button state",
        "kind": "input",
        "name": "state",
        "propertyName": "state",
        "required": false,
        "type": "TaState"
      },
      {
        "default": "\"medium\"",
        "doc": "Button size",
        "kind": "input",
        "name": "size",
        "propertyName": "size",
        "required": false,
        "type": "\"small\" | \"medium\" | \"large\""
      },
      {
        "default": "\"full\"",
        "doc": "Display mode: 'full' shows logo + text, 'logo' shows only the logo",
        "kind": "input",
        "name": "mode",
        "propertyName": "mode",
        "required": false,
        "type": "\"full\" | \"logo\""
      },
      {
        "default": "true",
        "kind": "input",
        "name": "stopPropagationActivation",
        "propertyName": "stopPropagationActivation",
        "required": false,
        "type": "boolean"
      },
      {
        "doc": "Event emitted when button is clicked",
        "kind": "output",
        "name": "action",
        "propertyName": "action",
        "required": false,
        "type": "void"
      },
      {
        "kind": "method",
        "name": "handleClick",
        "propertyName": "handleClick",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "getClass",
        "propertyName": "getClass",
        "required": false,
        "type": "() => void"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-whatsapp-button": {
    "className": "WhatsappButtonComponent",
    "file": "projects/ui/src/lib/components/ui/button/whatsapp/whatsapp-button.component.ts",
    "id": "ta-whatsapp-button",
    "kind": "component",
    "members": [
      {
        "default": "\"classic\"",
        "doc": "Button state",
        "kind": "input",
        "name": "state",
        "propertyName": "state",
        "required": false,
        "type": "TaState"
      },
      {
        "default": "\"medium\"",
        "doc": "Button size",
        "kind": "input",
        "name": "size",
        "propertyName": "size",
        "required": false,
        "type": "\"small\" | \"medium\" | \"large\""
      },
      {
        "default": "\"full\"",
        "doc": "Display mode: 'full' shows logo + text, 'logo' shows only the logo",
        "kind": "input",
        "name": "mode",
        "propertyName": "mode",
        "required": false,
        "type": "\"full\" | \"logo\""
      },
      {
        "default": "null",
        "doc": "Message to share via WhatsApp. If provided, clicking opens WhatsApp with this message.",
        "kind": "input",
        "name": "message",
        "propertyName": "message",
        "required": false,
        "type": "string | null"
      },
      {
        "default": "true",
        "kind": "input",
        "name": "stopPropagationActivation",
        "propertyName": "stopPropagationActivation",
        "required": false,
        "type": "boolean"
      },
      {
        "doc": "Event emitted when button is clicked",
        "kind": "output",
        "name": "action",
        "propertyName": "action",
        "required": false,
        "type": "void"
      },
      {
        "kind": "method",
        "name": "handleClick",
        "propertyName": "handleClick",
        "required": false,
        "type": "() => void"
      },
      {
        "kind": "method",
        "name": "getClass",
        "propertyName": "getClass",
        "required": false,
        "type": "() => void"
      }
    ],
    "pkg": "@ta/ui"
  },
  "ta-word-viewer": {
    "className": "WordViewerComponent",
    "file": "projects/files/files-basic/src/lib/components/preview/viewers/word-viewer/word-viewer.component.ts",
    "id": "ta-word-viewer",
    "kind": "component",
    "members": [
      {
        "kind": "input",
        "name": "file",
        "propertyName": "file",
        "required": true,
        "type": "PreviewDocumentDto"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isMobile",
        "propertyName": "isMobile",
        "required": false,
        "type": "unknown"
      },
      {
        "inheritedFrom": "TaAbstractComponent",
        "kind": "property",
        "name": "isDesktop",
        "propertyName": "isDesktop",
        "required": false,
        "type": "unknown"
      }
    ],
    "pkg": "@ta/files-basic"
  },
  "ta-wrapped-icon": {
    "className": "WrappedIconComponent",
    "file": "projects/ui/src/lib/components/ui/wrapped-icon/wrapped-icon.component.ts",
    "id": "ta-wrapped-icon",
    "kind": "component",
    "members": [
      {
        "default": "\"md\"",
        "kind": "input",
        "name": "size",
        "propertyName": "size",
        "required": false,
        "type": "TaSizes"
      },
      {
        "default": "\"default\"",
        "kind": "input",
        "name": "type",
        "propertyName": "type",
        "required": false,
        "type": "ColorType"
      },
      {
        "kind": "input",
        "name": "icon",
        "propertyName": "icon",
        "required": true,
        "type": "string"
      },
      {
        "kind": "method",
        "name": "getClass",
        "propertyName": "getClass",
        "required": false,
        "type": "() => string"
      }
    ],
    "pkg": "@ta/ui"
  }
};
