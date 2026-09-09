import { ChangeDetectionStrategy, Component } from "@angular/core";

import { Observable, of } from "rxjs";

import { FilesDisplayComponent, UploadComponent } from "@ta/files-extended";
import { Menu } from "@ta/menu";
import { FileData, TaTestIdDirective } from "@ta/utils";

/**
 * Galerie « files-extended » @ta/files-extended — montés à partir de données.
 * Route: /e2e-harness/files-extended
 */
@Component({
  standalone: true,
  selector: "app-case-files-extended",
  imports: [FilesDisplayComponent, UploadComponent, TaTestIdDirective],
  template: `
    <ta-files-display
      taTestId="ta-files-display"
      [files$]="files$"
      [menu]="menu"
      [tempFiles]="[]"
      [fileType]="'Document'"
    ></ta-files-display>
    <ta-files-upload taTestId="ta-files-upload"></ta-files-upload>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilesExtendedCase {
  readonly files$: Observable<FileData[]> = of([]);
  readonly menu = new Menu({});
}
