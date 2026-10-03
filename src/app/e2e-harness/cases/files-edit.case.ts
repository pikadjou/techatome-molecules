import { ChangeDetectionStrategy, Component } from "@angular/core";

import { Subject } from "rxjs";

import { FileEditComponent } from "@ta/files-basic";
import { TaTestIdDirective } from "@ta/utils";

/**
 * Galerie « files-edit » @ta/files-basic — `ta-files-edit` (tui-image-editor)
 * monté depuis une image data: URL, sans backend. Route isolée (lib lourde).
 * Route: /e2e-harness/files-edit
 */
@Component({
  standalone: true,
  selector: "app-case-files-edit",
  imports: [FileEditComponent, TaTestIdDirective],
  template: ` <ta-files-edit taTestId="ta-files-edit" [imagePath]="imagePath" [saveImage$]="save$"></ta-files-edit> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilesEditCase {
  readonly imagePath =
    "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
  readonly save$ = new Subject<null>();
}
