import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import { BottomSheetData } from '../../../../models/bottom/bottom-sheet-data';
import {
  BottomSheetTemplateBasicComponent,
  BottomSheetTemplateBasicParams,
} from './bottom-sheet-template-basic.component';

describe('BottomSheetTemplateBasicComponent', () => {
  let component: BottomSheetTemplateBasicComponent;
  let fixture: ComponentFixture<BottomSheetTemplateBasicComponent>;

  const mockData: BottomSheetTemplateBasicParams = {
    orientation: 'vertical',
    menu$: of([
      { label: 'Action 1', action: () => {} },
      { label: 'Action 2', icon: 'edit', action: () => {} },
    ] as BottomSheetData[]),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        BottomSheetTemplateBasicComponent,
      ],
      providers: [
        {
          provide: MAT_BOTTOM_SHEET_DATA,
          useValue: mockData,
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(BottomSheetTemplateBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive data from MAT_BOTTOM_SHEET_DATA', () => {
    expect(component.data).toBe(mockData);
    expect(component.data.orientation).toBe('vertical');
  });

  it('should have horizontal orientation when configured', async () => {
    const horizontalData: BottomSheetTemplateBasicParams = {
      orientation: 'horizontal',
      menu$: of([]),
    };

    await TestBed.resetTestingModule();
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        BottomSheetTemplateBasicComponent,
      ],
      providers: [
        {
          provide: MAT_BOTTOM_SHEET_DATA,
          useValue: horizontalData,
        },
      ],
    }).compileComponents();

    const newFixture = TestBed.createComponent(BottomSheetTemplateBasicComponent);
    const newComponent = newFixture.componentInstance;
    newFixture.detectChanges();
    expect(newComponent.data.orientation).toBe('horizontal');
  });
});
