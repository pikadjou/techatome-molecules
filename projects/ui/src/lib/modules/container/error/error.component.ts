import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PictureInfoMessageComponent } from '../../../components/ui/picture-info-message/picture-info-message.component';

@Component({
selector: 'ta-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  standalone: true,
  imports: [NgIf, TranslateModule, PictureInfoMessageComponent],
})
export class ErrorComponent {
  @Input()
  message = '';

  @Input()
  code = 200;

  constructor() {}
}
