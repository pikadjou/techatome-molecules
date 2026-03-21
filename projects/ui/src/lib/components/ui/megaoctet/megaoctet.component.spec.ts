import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { MegaoctetComponent } from './megaoctet.component';

describe('MegaoctetComponent', () => {
  let component: MegaoctetComponent;
  let fixture: ComponentFixture<MegaoctetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        MegaoctetComponent,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(MegaoctetComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('octet', 1048576);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should compute megaoctet from octets', () => {
    expect(component.megaoctet).toBeGreaterThan(0);
  });

  it('should default icon to false', () => {
    expect(component.icon()).toBeFalse();
  });
});
