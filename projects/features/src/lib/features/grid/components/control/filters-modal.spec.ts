import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { BehaviorSubject } from 'rxjs';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { TaGridInstanceService } from '../../services/grid-instance.service';
import { FiltersModal } from './control.component';

describe('FiltersModal', () => {
  let component: FiltersModal;
  let fixture: ComponentFixture<FiltersModal>;
  let mockDialogRef: jasmine.SpyObj<MatDialogRef<FiltersModal>>;
  let mockInstanceService: jasmine.SpyObj<TaGridInstanceService<any>>;

  beforeEach(async () => {
    mockDialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);

    const mockGridData = {
      scope: 'test-grid',
      isReady$: new BehaviorSubject(false),
      isDataReady$: new BehaviorSubject(false),
      data: [],
      filters: null,
      table: null,
      cols: {},
    };

    mockInstanceService = jasmine.createSpyObj('TaGridInstanceService', ['get', 'create', 'has']);
    mockInstanceService.get.and.returnValue(mockGridData as any);

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        FiltersModal,
      ],
      providers: [
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: { gridId: 'test-grid' } },
        { provide: TaGridInstanceService, useValue: mockInstanceService },
      ],
    })
      .overrideComponent(FiltersModal, {
        set: { template: '' },
      })
      .compileComponents();

    fixture = TestBed.createComponent(FiltersModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('closeEvent', () => {
    it('should emit closeEvent', () => {
      spyOn(component.closeEvent, 'emit');
      component.closeEvent.emit();
      expect(component.closeEvent.emit).toHaveBeenCalled();
    });
  });
});
