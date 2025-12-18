# @ta/translation

**Purpose:** i18n translation services using ngx-translate

## Exports

### Services
| Name | Purpose | Key Methods |
|------|---------|-------------|
| TranslationService | Translation management | translate(), setLanguage(), getLanguage() |
| TranslationRegistryService | Translation registry | registerTranslations(), getTranslations() |
| LazyTranslationService | Lazy-loaded translations | loadTranslations(), unloadTranslations() |
| TranslationSourceConfig | Translation source configuration | configure(), getSources() |

### Pipes
| Name | Usage | Purpose |
|------|-------|---------|
| TranslatePipe | `{{ 'KEY' \| translate }}` | Translation pipe (ngx-translate) |

### Directives
| Name | Selector | Purpose |
|------|----------|---------|
| TranslateDirective | `[translate]` | Translation directive (ngx-translate) |

### Abstract Classes
| Name | Purpose |
|------|---------|
| AbstractTranslationModule | Base translation module for library setup |

### Providers
| Name | Purpose |
|------|---------|
| TranslationProviders | Translation module configuration providers |

## Usage Example
```typescript
import { TranslationService } from '@ta/translation';

@Component({
  template: `
    <p>{{ 'HELLO' | translate }}</p>
    <p translate>WELCOME</p>
  `
})
export class MyComponent {
  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.translationService.setLanguage('fr');
    const translated = this.translationService.translate('HELLO');
  }
}
```

## Dependencies
- @ngx-translate/core
- @ngx-translate/http-loader
- @angular/common
