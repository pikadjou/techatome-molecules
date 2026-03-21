import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import { TENANT_CONFIG_TOKEN } from '@ta/server';

import { TaCmsService } from '../../services/cms.service';
import { CmsComponent } from './cms.component';

describe('CmsComponent', () => {
  let component: CmsComponent;
  let fixture: ComponentFixture<CmsComponent>;
  let mockCmsService: jasmine.SpyObj<TaCmsService>;

  beforeEach(async () => {
    mockCmsService = jasmine.createSpyObj('TaCmsService', ['fetchCmsContents$'], {
      cmsContents: { get$: jasmine.createSpy('get$').and.returnValue(of(null)) },
    });
    mockCmsService.fetchCmsContents$.and.returnValue(of(null as any));

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        CmsComponent,
      ],
      providers: [
        { provide: TaCmsService, useValue: mockCmsService },
        { provide: TENANT_CONFIG_TOKEN, useValue: { tenantId: 123 } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CmsComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('contentType', 'faq');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch CMS content on init', () => {
    expect(mockCmsService.fetchCmsContents$).toHaveBeenCalledWith('faq', '123');
  });

  it('should have content$ getter', () => {
    expect(component.content$).toBeDefined();
  });
});
