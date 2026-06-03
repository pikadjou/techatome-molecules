# DTOs partagés — `@ta/services`

**Import** : `import { ... } from '@ta/services'`

## `TranslatedEnumeration`
```typescript
interface TranslatedEnumeration {
  id: number;
  translatedValue: string;  // valeur traduite selon la langue active
}
```

## `User`
```typescript
interface User extends PersonBase<UserNaming> {
  departments: Department[] | null;
  profilePictureUrl?: string;
}
interface PersonBase<T> {
  id: number;
  naming: T | null;
  phoneNumber: string | null;
  email: string | null;
}
interface UserNaming { firstName: string; lastName: string; }
```

## `Picture`
```typescript
interface Picture {
  id: number;
  url: string;
  thumbnailUrl?: string;
  isOwner: boolean;
  createdDate: string | null;
}
```

## `DocumentDto`
```typescript
interface DocumentDto {
  id: string;
  url: string;
  description: string;
  size: number;
  createdDate?: string;
}
```

## `FileType`
```typescript
enum FileType {
  Unknown = 0, PriceOfferVersion = 1, SingleLineDiagram = 2,
  GRDFolder = 3, ExternalEmail = 4, Invoice = 5, PurchaseOrder = 6,
  Checklist = 7, SignedPriceOffer = 8, ExitVoucher = 9, Picture = 10
}
```

## `Project`
```typescript
interface Project {
  id: string;
  name: string;
  status: ProjectStatus;
  projectAddress: Address;
  tenantInformation: Tenant;
  projectPictureUrl: string;
}
enum ProjectStatus { Unknown=0, InProgress=1, Pending=2, Done=3, Cancelled=4 }
```

## `Status` / `ProjectStatus`
Voir enum `ProjectStatus` ci-dessus. Importable directement depuis `@ta/services`.
