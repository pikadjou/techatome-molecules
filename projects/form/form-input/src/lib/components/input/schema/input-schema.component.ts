import { Component } from '@angular/core';

import { FileListComponent } from '@ta/files-basic';
import { InputSchema } from '@ta/form-model';
import { LocalIconComponent } from '@ta/icons';
import { ButtonComponent } from '@ta/ui';
import { FileData, FileStructure, ModalState, getBase64FromFile } from '@ta/utils';

import { TaAbstractInputComponent } from '../../abstract.component';
import { InputLayoutComponent } from '../../input-layout/input-layout.component';
import { InputSchemaModal } from './modal/input-schema-modal.component';

@Component({
  selector: 'ta-input-schema',
  templateUrl: './input-schema.component.html',
  styleUrls: ['./input-schema.component.scss'],
  standalone: true,
  imports: [LocalIconComponent, ButtonComponent, FileListComponent, InputLayoutComponent, InputSchemaModal],
})
export class InputSchemaComponent extends TaAbstractInputComponent<InputSchema> {
  public schemaModal = new ModalState<null, { file: FileStructure }>();

  get pics(): FileData[] | null {
    if (!this.input.value) return null;
    return [{ id: 0, type: 'Image', url: this.input.value }];
  }

  get isCircularButton(): boolean {
    return !!this.pics && this.pics.length > 0;
  }

  set selection(value: string) {
    this.input.formControl?.setValue(value);
  }

  constructor() {
    super();
  }

  public openDialog(): void {
    this.schemaModal.asked(null);
  }

  public async onSavedFile(data: { file: FileStructure }): Promise<void> {
    if (!data?.file) return;
    if (this.input.update) {
      const pics = await this.input.update([data.file]);
      if (pics && pics.length > 0 && data.file.file) {
        this.selection = await getBase64FromFile(data.file.file);
      }
    }
  }
}
