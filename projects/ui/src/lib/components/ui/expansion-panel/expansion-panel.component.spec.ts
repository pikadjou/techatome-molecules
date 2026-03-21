import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { TaExpansionPanelComponent } from './expansion-panel.component';

describe('TaExpansionPanelComponent', () => {
  let component: TaExpansionPanelComponent;
  let fixture: ComponentFixture<TaExpansionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        TaExpansionPanelComponent,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(TaExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default templates to empty array', () => {
    expect(component.templates()).toEqual([]);
  });
});
