# @ta/user

**Purpose:** User authentication, authorization, and profile management with Auth0 integration

## Exports

### Components
| Name | Selector | Purpose | Key Props |
|------|----------|---------|-----------|
| LoginCardComponent | `ta-login-card` | Login card UI | N/A |
| LoginComponent | `ta-login` | Login redirect handler | N/A |
| SigninComponent | `ta-signin` | Sign-in component | N/A |
| MyAccountComponent | `ta-my-account` | User account page | N/A |
| GuardComponent | `ta-guard` | Guard component for protected routes | N/A |
| SwitchLanguageCtaComponent | `ta-switch-language-cta` | Language switcher CTA | languages |

### Services
| Name | Purpose | Key Methods |
|------|---------|-------------|
| UserService | User data management | getUser(), updateUser(), deleteUser() |
| AuthService | Authentication service | login(), logout(), isAuthenticated() |
| PermissionsService | Permission checking | hasPermission(), hasRole(), hasFeature() |

### Guards
| Name | Purpose | Usage |
|------|---------|-------|
| AuthGuard | Authentication guard | Protect routes requiring login |
| FeatureGuard | Feature flag guard | Protect routes by feature flags |
| RoleGuard | Role-based access guard | Protect routes by user roles |

### Models/DTOs
| Name | Purpose |
|------|---------|
| UserProfile | User profile data transfer object |
| UserQueries | GraphQL queries for user data |

### Providers
| Name | Purpose |
|------|---------|
| UserModuleProviders | User module configuration providers |
| Auth0Providers | Auth0 integration providers |

## Usage Example
```typescript
import { AuthGuard, RoleGuard, AuthService } from '@ta/user';

// Route protection
const routes: Routes = [
  {
    path: 'admin',
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['admin'] }
  }
];

// Service usage
@Component({
  template: `
    <ta-my-account *ngIf="isAuthenticated"></ta-my-account>
    <ta-login-card *ngIf="!isAuthenticated"></ta-login-card>
  `
})
export class MyComponent {
  isAuthenticated = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
```

## Dependencies
- @auth0/auth0-angular
- @ta/server
- @angular/router
