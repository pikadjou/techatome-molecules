import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { Culture } from '@ta/utils';

import { CultureComponent } from './culture.component';

describe('CultureComponent', () => {
  let component: CultureComponent;
  let fixture: ComponentFixture<CultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        CultureComponent,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(CultureComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('cultures', [Culture.French, Culture.English]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have cultures input set', () => {
    expect(component.cultures().length).toBe(2);
  });
});
