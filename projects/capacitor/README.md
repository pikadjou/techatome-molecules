# @ta/capacitor

**Purpose:** Device integration and PWA services for Capacitor-enabled applications

## Exports

### Services
| Name | Purpose | Key Methods |
|------|---------|-------------|
| TaDeviceInfoService | Device information and capabilities detection | isMobileOs$(), isWeb$(), isMobileOs() |
| TaDeviceNetworkService | Network status and connectivity monitoring | getStatus(), onNetworkChange() |
| TaDevicePositionService | Geolocation and position tracking | getCurrentPosition(), watchPosition() |
| TaPwaService | Progressive Web App functionality and installation | installPwa(), checkForUpdates() |

## Usage Example
```typescript
import { TaDeviceInfoService } from '@ta/capacitor';

constructor(private deviceInfo: TaDeviceInfoService) {}

ngOnInit() {
  this.deviceInfo.isMobileOs$().subscribe(isMobile => {
    console.log('Is mobile:', isMobile);
  });
}
```

## Dependencies
- @capacitor/core
- @capacitor/device
- @capacitor/network
- @capacitor/geolocation
