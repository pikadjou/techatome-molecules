import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

import { CamBaseComponent } from '@camelot/utils';

import { CamDefaultPanelComponent } from '../default-panel/default-panel.component';
import { OverlayMenuConfig, OverlayService } from '../overlay.service';

@Component({
  selector: 'cam-overlay-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overlay-panel.component.html',
  styleUrls: ['./overlay-panel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CamOverlayPanelComponent extends CamBaseComponent implements AfterViewInit {
  @ContentChild('panelTrigger') triggerTpl!: TemplateRef<any>;
  @ContentChild('panelContent') contentTpl!: TemplateRef<any>;

  @ViewChild('triggerHost', { static: true }) triggerHostRef!: ElementRef<HTMLElement>;

  @Input() panelConfig!: OverlayMenuConfig;

  @Output() closed = new EventEmitter<void>();

  constructor(private overlayService: OverlayService) {
    super();
  }

  ngAfterViewInit(): void {
    if (!this.panelConfig) {
      console.log('Missing panelConfig');
      return;
    }
    if (!this.contentTpl) {
      console.log('Missing panelContent');
      return;
    }
    if (!this.triggerTpl) {
      console.log('Missing panelTrigger');
      return;
    }

    const configWithDefaults = {
      ...this.panelConfig,
      menuComponent: this.panelConfig.menuComponent ?? CamDefaultPanelComponent,
      triggerElement: this.triggerHostRef?.nativeElement,
      template: this.contentTpl,
    };

    if (!configWithDefaults.triggerElement) {
      console.log('OverlayPanel: no trigger element resolved');
      return;
    }

    this.triggerHostRef.nativeElement.addEventListener('click', () => {
      this.overlayService.openMenu(configWithDefaults);
    });

    this._registerSubscription(
      this.overlayService.onClose$.subscribe(() => {
        this.closed.emit();
      })
    );
  }

  public close(): void {
    this.overlayService.closeMenu();
  }
}
