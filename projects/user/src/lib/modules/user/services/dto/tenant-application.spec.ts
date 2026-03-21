import {
  TenantApplication,
  tenantApplicationBrutProps,
  tenantApplicationProps,
} from './tenant-application';

describe('TenantApplication DTO', () => {
  it('should have tenantApplicationProps GraphSchema defined', () => {
    expect(tenantApplicationProps).toBeTruthy();
  });

  it('should have all expected brut properties', () => {
    const expectedProps: (keyof TenantApplication)[] = [
      'id', 'estateId', 'tenantId', 'applicationDate', 'status',
      'applicantName', 'applicantEmail', 'applicantPhone', 'documents',
    ];
    expect(tenantApplicationBrutProps).toEqual(expectedProps);
  });

  it('should include id property in schema', () => {
    expect(tenantApplicationProps.get('id')).toBeDefined();
  });

  it('should include estateId property in schema', () => {
    expect(tenantApplicationProps.get('estateId')).toBeDefined();
  });

  it('should include status property in schema', () => {
    expect(tenantApplicationProps.get('status')).toBeDefined();
  });
});
