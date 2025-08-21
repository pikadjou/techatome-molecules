import { Component } from '@angular/core';
import { TitleComponent, TextComponent } from '@ta/ui';

@Component({
  selector: 'app-files-showcase',
  standalone: true,
  imports: [TitleComponent, TextComponent],
  templateUrl: './files-showcase.component.html',
  styleUrl: './files-showcase.component.scss'
})
export class FilesShowcaseComponent { }