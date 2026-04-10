import { JsonPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

import { OutputBlockData } from "@editorjs/editorjs";

import { InputBase, InputPanel, InputWysiswyg } from "@ta/form-model";
import { FormComponent } from "@ta/form-basic";
import {
  BlockTextComponent,
  EditorInputComponent,
  EditorInputSavedData,
  WysiswgBlockData,
} from "@ta/wysiswyg";
import { TextComponent, TitleComponent } from "@ta/ui";

import { PageLayoutComponent } from "../../layout/page-layout.component";

@Component({
  standalone: true,
  selector: "",
  imports: [
    BlockTextComponent,
    EditorInputComponent,
    FormComponent,
    JsonPipe,
    PageLayoutComponent,
    TextComponent,
    TitleComponent,
  ],
  templateUrl: "./wysiswyg.component.html",
  styleUrl: "./wysiswyg.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WysiswygPage {
  // --- Standalone editor ---
  public editorBlocks = signal<WysiswgBlockData[]>([]);

  public sampleBlocks: WysiswgBlockData[] = [
    {
      id: "h1",
      type: "header",
      data: { text: "Example article", level: 2 },
    },
    {
      id: "p1",
      type: "paragraph",
      data: {
        text: "This is a <b>rich text</b> editor powered by <i>EditorJS</i>. It supports multiple block types.",
      },
    },
    {
      id: "l1",
      type: "list",
      data: {
        style: "unordered",
        items: [
          "Headers",
          "Text formatting (bold, italic)",
          "Ordered & unordered lists",
          "Quotes & delimiters",
          "Warnings",
          "Image upload",
          "User mentions (@)",
          "Text & background colors",
        ],
      },
    },
    {
      id: "q1",
      type: "quote",
      data: {
        text: "A good editor should be invisible.",
        caption: "Design principle",
      },
    },
    {
      id: "d1",
      type: "delimiter",
      data: {},
    },
    {
      id: "w1",
      type: "warning",
      data: {
        title: "Note",
        message: "Select text to see the inline toolbar, or press + to add blocks.",
      },
    },
  ];

  public sampleUsers = [
    { id: "u1", name: "Alice Martin" },
    { id: "u2", name: "Bob Dupont" },
    { id: "u3", name: "Claire Fontaine" },
    { id: "u4", name: "David Moreau" },
    { id: "u5", name: "Emma Bernard" },
  ];

  public onSaved(data: EditorInputSavedData) {
    this.editorBlocks.set(data.blocks as WysiswgBlockData[]);
  }

  public onChanged(data: { blocks: WysiswgBlockData[] }) {
    this.editorBlocks.set(data.blocks);
  }

  // --- Form integration ---
  public formResult = signal<unknown>(null);

  public formInputs: InputBase<unknown>[] = [
    new InputPanel({
      key: "content",
      label: "Content",
      containerClass: ["highlight-title"],
      contentClass: "flex-column g-space-md",
      children: [
        new InputWysiswyg({
          key: "body",
          label: "Body",
        }),
        new InputWysiswyg({
          key: "notes",
          label: "Notes",
          stringValue: JSON.stringify([
            {
              id: "n1",
              type: "paragraph",
              data: { text: "Pre-filled from a <b>JSON string</b>." },
            },
          ]),
        }),
      ],
    }),
  ];

  public onFormSubmit(data: unknown) {
    this.formResult.set(data);
  }
}
