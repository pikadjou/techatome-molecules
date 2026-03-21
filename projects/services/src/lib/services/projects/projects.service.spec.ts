import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { TaGraphService, TaServerSevice, HandleSimpleRequest, HandleComplexRequest } from '@ta/server';

import { TaProjectsService } from './projects.service';
import { Project } from './dto/project';
import { ProjectStatus } from './dto/status';

describe('TaProjectsService', () => {
  let service: TaProjectsService;
  let mockGraphService: jasmine.SpyObj<TaGraphService>;
  let mockServerService: jasmine.SpyObj<TaServerSevice>;

  const mockProjects: Project[] = [
    {
      id: '1',
      name: 'Project A',
      status: ProjectStatus.InProgress,
      projectAddress: { id: 'a1', country: 'FR', city: 'Paris', postCode: 75000, street: 'Rue Test' },
      tenantInformation: { id: 't1', tenantName: 'Tenant 1', projectId: 1 },
      projectPictureUrl: 'http://pic1.jpg',
    },
    {
      id: '2',
      name: 'Project B',
      status: ProjectStatus.Done,
      projectAddress: { id: 'a2', country: 'FR', city: 'Lyon', postCode: 69000, street: 'Av Test' },
      tenantInformation: { id: 't2', tenantName: 'Tenant 2', projectId: 2 },
      projectPictureUrl: 'http://pic2.jpg',
    },
  ];

  beforeEach(() => {
    mockGraphService = jasmine.createSpyObj('TaGraphService', [
      'registerGraphEndpoint',
      'fetchQuery',
      'fetchQueryList',
      'fetchPagedQueryList',
      'mutate',
    ]);
    mockServerService = jasmine.createSpyObj('TaServerSevice', ['registerRoutes']);

    TestBed.configureTestingModule({
      providers: [
        TaProjectsService,
        { provide: TaGraphService, useValue: mockGraphService },
        { provide: TaServerSevice, useValue: mockServerService },
      ],
    });
    service = TestBed.inject(TaProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize projects as HandleSimpleRequest', () => {
    expect(service.projects).toBeTruthy();
    expect(service.projects instanceof HandleSimpleRequest).toBeTrue();
  });

  it('should initialize project as HandleComplexRequest', () => {
    expect(service.project).toBeTruthy();
    expect(service.project instanceof HandleComplexRequest).toBeTrue();
  });

  it('should initialize projectByContact as HandleComplexRequest', () => {
    expect(service.projectByContact).toBeTruthy();
    expect(service.projectByContact instanceof HandleComplexRequest).toBeTrue();
  });

  it('should register graph endpoint on creation', () => {
    expect(mockGraphService.registerGraphEndpoint).toHaveBeenCalled();
    const call = mockGraphService.registerGraphEndpoint.calls.mostRecent();
    expect(call.args[0].clientName).toBe('projectService');
    expect(call.args[0].endpoint).toBe('project');
  });

  describe('getProjectsLightInfo$', () => {
    it('should fetch paged query list and return items', (done) => {
      const pagedResponse = {
        items: [
          { id: '1', name: 'Project A' },
          { id: '2', name: 'Project B' },
        ],
        totalCount: 2,
      };
      mockGraphService.fetchPagedQueryList.and.returnValue(of(pagedResponse));

      service.getProjectsLightInfo$(['1', '2']).subscribe((result) => {
        expect(result.length).toBe(2);
        expect(mockGraphService.fetchPagedQueryList).toHaveBeenCalled();
        done();
      });
    });

    it('should return empty array when items are null', (done) => {
      mockGraphService.fetchPagedQueryList.and.returnValue(of({ totalCount: 0 } as any));

      service.getProjectsLightInfo$(['1']).subscribe((result) => {
        expect(result).toEqual([]);
        done();
      });
    });
  });

  describe('fetchProjects$', () => {
    it('should call graph service fetchPagedQueryList', () => {
      const pagedResponse = { items: mockProjects, totalCount: 2 };
      mockGraphService.fetchPagedQueryList.and.returnValue(of(pagedResponse));

      service.fetchProjects$().subscribe();

      expect(mockGraphService.fetchPagedQueryList).toHaveBeenCalled();
      const call = mockGraphService.fetchPagedQueryList.calls.mostRecent();
      expect(call.args[1]).toBe('projects');
      expect(call.args[2]).toBe('projectService');
    });
  });

  describe('fetchProject$', () => {
    it('should call graph service fetchQuery with project ID', () => {
      const mockProject = mockProjects[0];
      mockGraphService.fetchQuery.and.returnValue(of(mockProject));

      service.fetchProject$('1').subscribe();

      expect(mockGraphService.fetchQuery).toHaveBeenCalled();
      const call = mockGraphService.fetchQuery.calls.mostRecent();
      expect(call.args[1]).toBe('projectById');
      expect(call.args[2]).toBe('projectService');
    });
  });

  describe('fetchProjectsByContact$', () => {
    it('should call graph service fetchPagedQueryList with contact filter', () => {
      const pagedResponse = { items: [mockProjects[0]], totalCount: 1 };
      mockGraphService.fetchPagedQueryList.and.returnValue(of(pagedResponse));

      service.fetchProjectsByContact$('contact-123').subscribe();

      expect(mockGraphService.fetchPagedQueryList).toHaveBeenCalled();
      const call = mockGraphService.fetchPagedQueryList.calls.mostRecent();
      expect(call.args[1]).toBe('projects');
      expect(call.args[2]).toBe('projectService');
    });
  });
});
