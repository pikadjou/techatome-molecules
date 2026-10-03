import { Component, EventEmitter, Output, computed, input, signal } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { TaBaseComponent } from '@ta/utils';

import { ButtonComponent } from '../../../../components/ui/button/button.component';
import { TextComponent } from '../../../../components/ui/text/text.component';
import { TaTranslationUI } from '../../../../translation.service';
import { TaModalComponent } from '../../../layout/modal/modal.component';

/** Demande confirmation avant l'action : `modal` interrompt, `inline` remplace le déclencheur par un encart. */
@Component({
  selector: 'ta-container-validation',
  templateUrl: './container-validation.component.html',
  styleUrls: ['./container-validation.component.scss'],
  standalone: true,
  imports: [ButtonComponent, TextComponent, TaModalComponent, TranslateModule],
})
export class ContainerValidationComponent extends TaBaseComponent {
  disabled = input<boolean>(false);
  title = input<string>('validation.modal.title');
  subtitle = input<string>('validation.modal.content');

  variant = input<'modal' | 'inline'>('modal');

  @Output()
  validated = new EventEmitter();

  public isModalOpen = signal(false);

  readonly isInlineOpen = computed(() => this.variant() === 'inline' && this.isModalOpen());

  constructor() {
    super();
    TaTranslationUI.getInstance();
  }

  public openModal(): void {
    if (this.disabled()) return;
    this.isModalOpen.set(true);
  }

  public onNoClick(): void {
    this.isModalOpen.set(false);
  }

  public onYesClick(): void {
    this.isModalOpen.set(false);
    this.validated.emit();
  }
}
