import { Component, Input } from "@angular/core";

import { OutputBlockData } from "@editorjs/editorjs";

import {
  ENotificationCode,
  NotificationInlineComponent,
} from "@ta/notification";
import { TextComponent, TitleComponent, ToastComponent } from "@ta/ui";
import { SafePipe, TaBaseComponent } from "@ta/utils";

@Component({
  selector: "ta-cms-editor-blocks",
  templateUrl: "./block-text.component.html",
  styleUrls: ["./block-text.component.scss"],
  standalone: true,
  imports: [
    NotificationInlineComponent,
    SafePipe,
    TitleComponent,
    TextComponent,
    ToastComponent,
  ],
})
export class BlockTextComponent extends TaBaseComponent {
  @Input()
  blocks!: OutputBlockData[];

  readonly ENotificationCode = ENotificationCode;
}
