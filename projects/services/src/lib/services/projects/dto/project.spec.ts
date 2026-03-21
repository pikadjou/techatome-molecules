import { projectProps } from './project';

describe('Project GraphSchema', () => {
  it('should have projectProps with all expected fields', () => {
    expect(projectProps.get('id')).toBe('id');
    expect(projectProps.get('name')).toBe('name');
    expect(projectProps.get('status')).toBe('status');
    expect(projectProps.get('projectAddress')).toBe('projectAddress');
    expect(projectProps.get('tenantInformation')).toBe('tenantInformation');
    expect(projectProps.get('projectPictureUrl')).toBe('projectPictureUrl');
  });
});
