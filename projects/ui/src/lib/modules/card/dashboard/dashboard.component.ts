import { FontIconComponent } from '@ta/icons';
import { Component, Input } from '@angular/core';
import { TextComponent } from '../../../components/ui/text/text.component';
import { TitleComponent } from '../../../components/ui/title/title.component';
import { CardComponent } from '../card.component';
import { CardContentComponent } from '../content/card-content.component';

@Component({
selector: 'ta-dashboard-card',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [FontIconComponent, TextComponent, TitleComponent, CardComponent, CardContentComponent],
})
export class DashboardCardComponent {
  @Input()
  icon!: string;
}
