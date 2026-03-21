import { ProjectStatus } from './status';

describe('ProjectStatus enum', () => {
  it('should have Unknown as 0', () => {
    expect(ProjectStatus.Unknown).toBe(0);
  });

  it('should have InProgress as 1', () => {
    expect(ProjectStatus.InProgress).toBe(1);
  });

  it('should have Pending as 2', () => {
    expect(ProjectStatus.Pending).toBe(2);
  });

  it('should have Done as 3', () => {
    expect(ProjectStatus.Done).toBe(3);
  });

  it('should have Cancelled as 4', () => {
    expect(ProjectStatus.Cancelled).toBe(4);
  });
});
