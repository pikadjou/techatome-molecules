import { TestBed } from '@angular/core/testing';

import { TaConfigurationService } from '@lib/services/services/common/configuration.service';

describe('TaConfigurationService', () => {
  let service: TaConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaConfigurationService],
    });
    service = TestBed.inject(TaConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize organizationName$ with empty string', () => {
    expect(service.organizationName$.getValue()).toBe('');
  });

  describe('set', () => {
    it('should set the organization name from user object', () => {
      const mockUser = {
        'g-lambert/orgname': 'TestOrg',
      };
      service.set(mockUser);
      expect(service.organizationName$.getValue()).toBe('TestOrg');
    });

    it('should update organizationName$ when called multiple times', () => {
      service.set({ 'g-lambert/orgname': 'Org1' } as any);
      expect(service.organizationName$.getValue()).toBe('Org1');

      service.set({ 'g-lambert/orgname': 'Org2' } as any);
      expect(service.organizationName$.getValue()).toBe('Org2');
    });

    it('should emit the value to subscribers', (done) => {
      const values: string[] = [];
      service.organizationName$.subscribe((value) => {
        values.push(value);
        if (values.length === 2) {
          expect(values[0]).toBe('');
          expect(values[1]).toBe('NewOrg');
          done();
        }
      });

      service.set({ 'g-lambert/orgname': 'NewOrg' } as any);
    });
  });
});
