import { Component } from '@angular/core';
import { FiltersComponent, TextToClipboardComponent } from '@ta/core';
import { TitleComponent, TextComponent } from '@ta/ui';

@Component({
  selector: 'app-core-showcase',
  standalone: true,
  imports: [FiltersComponent, TextComponent, TextToClipboardComponent, TitleComponent],
  templateUrl: './core-showcase.component.html',
  styleUrl: './core-showcase.component.scss'
})
export class CoreShowcaseComponent {
  sampleText = 'Ce texte peut être copié dans le presse-papier !';
  
  filterOptions = [
    { id: 'all', label: 'Tout', value: 'all' },
    { id: 'active', label: 'Actif', value: 'active' },
    { id: 'inactive', label: 'Inactif', value: 'inactive' }
  ];

  onFilterChange(filter: any) {
    console.log('Filter changed:', filter);
  }

  onTextCopied() {
    console.log('Text copied to clipboard!');
  }
}