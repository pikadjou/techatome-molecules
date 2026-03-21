import { ProjectStatus } from './dto/status';
import {
  GET_MY_PROJECTS,
  GET_PROJECT_BY_ID,
  GET_LIGHT_PROJECTS,
  GET_PROJECTS,
} from './queries';

describe('Project queries', () => {
  describe('GET_MY_PROJECTS', () => {
    it('should return a GraphQueryPayload', () => {
      const result = GET_MY_PROJECTS();
      expect(result.query).toBeDefined();
      expect(result.variables).toEqual({});
    });

    it('should accept optional status list filter', () => {
      const result = GET_MY_PROJECTS({
        statusList: [ProjectStatus.InProgress, ProjectStatus.Pending],
      });
      expect(result.query).toBeDefined();
      expect(result.variables).toEqual({});
    });

    it('should accept optional take parameter', () => {
      const result = GET_MY_PROJECTS({ take: 25 });
      expect(result.query).toBeDefined();
    });

    it('should work with empty filters', () => {
      const result = GET_MY_PROJECTS({});
      expect(result.query).toBeDefined();
    });
  });

  describe('GET_PROJECT_BY_ID', () => {
    it('should return a GraphQueryPayload with id variable', () => {
      const result = GET_PROJECT_BY_ID('test-uuid-123');
      expect(result.query).toBeDefined();
      expect(result.variables).toEqual({ id: 'test-uuid-123' });
    });
  });

  describe('GET_LIGHT_PROJECTS', () => {
    it('should return a GraphQueryPayload with ids variable', () => {
      const ids = ['id1', 'id2', 'id3'];
      const result = GET_LIGHT_PROJECTS(ids);
      expect(result.query).toBeDefined();
      expect(result.variables).toEqual({ ids });
    });

    it('should handle empty ids array', () => {
      const result = GET_LIGHT_PROJECTS([]);
      expect(result.query).toBeDefined();
      expect(result.variables).toEqual({ ids: [] });
    });
  });

  describe('GET_PROJECTS', () => {
    it('should return a GraphQueryPayload with custom where and props', () => {
      const result = GET_PROJECTS(
        'where: { status: { eq: InProgress } }',
        'id name status'
      );
      expect(result.query).toBeDefined();
      expect(result.variables).toEqual({});
    });
  });
});
