import { tenantProps } from './tenant';

describe('Tenant GraphSchema', () => {
  it('should have tenantProps with all expected fields', () => {
    expect(tenantProps.get('id')).toBe('id');
    expect(tenantProps.get('tenantId')).toBe('tenantId');
    expect(tenantProps.get('tenantName')).toBe('tenantName');
    expect(tenantProps.get('customerId')).toBe('customerId');
    expect(tenantProps.get('projectId')).toBe('projectId');
  });
});
