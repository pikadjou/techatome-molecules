import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { TaPicturesService } from '@lib/files-basic/services/files/pictures.service';

describe('TaPicturesService', () => {
  let service: TaPicturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        TaPicturesService,
      ],
    });
    service = TestBed.inject(TaPicturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have dashboardByProject HandleComplexRequest', () => {
    expect(service.dashboardByProject).toBeDefined();
  });

  it('should have fetchDashboardProjects$ method', () => {
    expect(service.fetchDashboardProjects$).toBeDefined();
    expect(typeof service.fetchDashboardProjects$).toBe('function');
  });

  it('should return observable from fetchDashboardProjects$', () => {
    const result = service.fetchDashboardProjects$('project-1');
    expect(result).toBeDefined();
  });
});
