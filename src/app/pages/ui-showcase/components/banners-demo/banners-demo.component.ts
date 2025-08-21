import { Component } from '@angular/core';
import { BannerComponent, TitleComponent } from '@ta/ui';

@Component({
  selector: 'app-banners-demo',
  standalone: true,
  imports: [BannerComponent, TitleComponent],
  templateUrl: './banners-demo.component.html',
  styleUrl: './banners-demo.component.scss'
})
export class BannersDemoComponent {
  onBannerAction() {
    console.log('Banner action clicked!');
  }
}