import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { BlockTextComponent } from './block-text.component';

describe('BlockTextComponent', () => {
  let component: BlockTextComponent;
  let fixture: ComponentFixture<BlockTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        BlockTextComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BlockTextComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('blocks', []);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept blocks input', () => {
    const mockBlocks = [
      { type: 'paragraph', data: { text: 'Hello' } },
    ] as any[];
    fixture.componentRef.setInput('blocks', mockBlocks);
    fixture.detectChanges();
    expect(component.blocks()).toEqual(mockBlocks);
  });

  it('should expose ENotificationCode', () => {
    expect(component.ENotificationCode).toBeTruthy();
  });
});
