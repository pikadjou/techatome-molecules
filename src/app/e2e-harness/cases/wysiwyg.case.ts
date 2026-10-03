import { ChangeDetectionStrategy, Component } from "@angular/core";

import { BlockTextComponent, EditorInputComponent, WysiswgBlockData } from "@ta/wysiswyg";
import { TaTestIdDirective } from "@ta/utils";

/**
 * Galerie « wysiwyg » @ta/wysiswyg — éditeur editorjs monté sans backend.
 * Route: /e2e-harness/wysiwyg
 */
@Component({
  standalone: true,
  selector: "app-case-wysiwyg",
  imports: [BlockTextComponent, EditorInputComponent, TaTestIdDirective],
  template: `
    <ta-cms-editor-blocks taTestId="ta-cms-editor-blocks" [blocks]="blocks"></ta-cms-editor-blocks>
    <ta-cms-editor-input taTestId="ta-cms-editor-input"></ta-cms-editor-input>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WysiwygCase {
  readonly blocks: WysiswgBlockData[] = [{ type: "paragraph", data: { text: "Texte riche mocké." } }];
}
