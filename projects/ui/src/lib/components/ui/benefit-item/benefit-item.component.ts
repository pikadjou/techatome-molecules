import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

import { FontIconComponent } from '@ta/icons';
import { TaState } from '@ta/styles';

import { TextComponent } from '../text/text.component';

export type BenefitType = 'success' | 'warning' | 'error';

export interface BenefitConfig {
  icon: string;
  backgroundColor: string;
  borderColor: string;
  iconColor: string;
}

@Component({
  selector: 'ta-benefit-item',
  templateUrl: './benefit-item.component.html',
  styleUrls: ['./benefit-item.component.scss'],
  standalone: true,
  imports: [NgClass, FontIconComponent, TextComponent],
})
export class BenefitItemComponent implements OnInit {
  @Input() type: BenefitType = 'success';
  @Input() text: string = '';
  @Input() state: TaState = 'classic';

  protected config!: BenefitConfig;
  protected isInitialized = false;

  ngOnInit(): void {
    this.initializeConfig();
    this.isInitialized = true;
  }

  private initializeConfig(): void {
    this.config = {
      icon: this.getIcon(),
      backgroundColor: this.getBackgroundColor(),
      borderColor: this.getBorderColor(),
      iconColor: this.getIconColor()
    };
  }

  get cssClasses(): string[] {
    const classes = [`benefit-item--${this.type}`];
    if (this.state !== 'classic') {
      classes.push(`benefit-item--${this.state}`);
    }
    return classes;
  }

  private getIcon(): string {
    switch (this.type) {
      case 'success':
        return 'check';
      case 'warning':
        return 'warning';
      case 'error':
        return 'error';
      default:
        return 'check';
    }
  }

  private getBackgroundColor(): string {
    return `var(--surface-${this.type})`;
  }

  private getBorderColor(): string {
    return `var(--border-${this.type})`;
  }

  private getIconColor(): string {
    return `var(--text-${this.type})`;
  }

  get icon(): string {
    return this.isInitialized ? this.config.icon : this.getIcon();
  }
}
