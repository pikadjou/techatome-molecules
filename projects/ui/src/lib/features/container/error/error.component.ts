import { Component, Input } from '@angular/core';
import { TranslatePipe } from "@ta/utils";
import { NgIf } from '@angular/common';
import { PictureInfoMessageComponent } from "../../../components/picture-info-message/picture-info-message.component";

@Component({
  selector: 'ta-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  standalone: true,
  imports: [TranslatePipe, NgIf, PictureInfoMessageComponent]
})
export class ErrorComponent {
  @Input()
  message = '';

  @Input()
  code = 200;

  constructor() {}
}
