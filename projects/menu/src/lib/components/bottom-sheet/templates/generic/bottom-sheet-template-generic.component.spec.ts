import { TemplateRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

import {
  BottomSheetTemplateGenericComponent,
  BottomSheetTemplateGenericParams,
} from './bottom-sheet-template-generic.component';

describe('BottomSheetTemplateGenericComponent', () => {
  let component: BottomSheetTemplateGenericComponent;
  let fixture: ComponentFixture<BottomSheetTemplateGenericComponent>;

  const mockData: BottomSheetTemplateGenericParams = {
    template: {} as TemplateRef<any>,
    maxHeight: 500,
    context: { someData: 'value' },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomSheetTemplateGenericComponent],
      providers: [
        {
          provide: MAT_BOTTOM_SHEET_DATA,
          useValue: mockData,
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(BottomSheetTemplateGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive data from MAT_BOTTOM_SHEET_DATA', () => {
    expect(component.data).toBe(mockData);
  });

  it('should have maxHeight from data', () => {
    expect(component.data.maxHeight).toBe(500);
  });

  it('should have context from data', () => {
    expect(component.data.context).toEqual({ someData: 'value' });
  });

  it('should handle data without optional properties', async () => {
    const minimalData: BottomSheetTemplateGenericParams = {
      template: {} as TemplateRef<any>,
    };

    await TestBed.resetTestingModule();
    await TestBed.configureTestingModule({
      imports: [BottomSheetTemplateGenericComponent],
      providers: [
        {
          provide: MAT_BOTTOM_SHEET_DATA,
          useValue: minimalData,
        },
      ],
    }).compileComponents();

    const newFixture = TestBed.createComponent(BottomSheetTemplateGenericComponent);
    const newComponent = newFixture.componentInstance;
    newFixture.detectChanges();
    expect(newComponent.data.maxHeight).toBeUndefined();
    expect(newComponent.data.context).toBeUndefined();
  });
});
