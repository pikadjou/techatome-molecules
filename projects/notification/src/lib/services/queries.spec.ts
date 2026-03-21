import {
  GET_NOTIFICATIONS,
  GET_NOTIFICATIONS_COUNT,
  NotificationFilter,
  READ_NOTIFICATION,
} from './queries';

describe('Notification Queries', () => {
  describe('GET_NOTIFICATIONS', () => {
    it('should return a GraphQueryPayload with query and variables', () => {
      const result = GET_NOTIFICATIONS(null);
      expect(result).toBeTruthy();
      expect(result.query).toBeDefined();
      expect(result.variables).toBeDefined();
    });

    it('should return a valid payload when filters are null', () => {
      const result = GET_NOTIFICATIONS(null);
      expect(result.query).toBeTruthy();
      expect(result.variables).toEqual({});
    });

    it('should return a valid payload with projectId filter', () => {
      const filters: NotificationFilter = { projectId: 'proj-123' };
      const result = GET_NOTIFICATIONS(filters);
      expect(result).toBeTruthy();
      expect(result.query).toBeDefined();
    });

    it('should return a valid payload with isNew filter', () => {
      const filters: NotificationFilter = { isNew: true };
      const result = GET_NOTIFICATIONS(filters);
      expect(result).toBeTruthy();
      expect(result.query).toBeDefined();
    });

    it('should return a valid payload with take filter', () => {
      const filters: NotificationFilter = { take: 10 };
      const result = GET_NOTIFICATIONS(filters);
      expect(result).toBeTruthy();
      expect(result.query).toBeDefined();
    });

    it('should return a valid payload with combined filters', () => {
      const filters: NotificationFilter = {
        projectId: 'proj-123',
        isNew: false,
        take: 5,
      };
      const result = GET_NOTIFICATIONS(filters);
      expect(result).toBeTruthy();
      expect(result.query).toBeDefined();
    });
  });

  describe('GET_NOTIFICATIONS_COUNT', () => {
    it('should return a GraphQueryPayload with query and variables', () => {
      const result = GET_NOTIFICATIONS_COUNT(null);
      expect(result).toBeTruthy();
      expect(result.query).toBeDefined();
      expect(result.variables).toBeDefined();
    });

    it('should return a valid payload when filters are null', () => {
      const result = GET_NOTIFICATIONS_COUNT(null);
      expect(result.query).toBeTruthy();
      expect(result.variables).toEqual({});
    });

    it('should return a valid payload with filters', () => {
      const filters: NotificationFilter = { projectId: 'proj-456', isNew: true };
      const result = GET_NOTIFICATIONS_COUNT(filters);
      expect(result).toBeTruthy();
      expect(result.query).toBeDefined();
    });
  });

  describe('READ_NOTIFICATION', () => {
    it('should return a GraphMutationPayload with mutation and variables', () => {
      const result = READ_NOTIFICATION('notification-123');
      expect(result).toBeTruthy();
      expect(result.mutation).toBeDefined();
      expect(result.variables).toBeDefined();
    });

    it('should include the id in the variables', () => {
      const id = 'notification-abc';
      const result = READ_NOTIFICATION(id);
      expect(result.variables.id).toBe(id);
    });

    it('should create mutation with different ids', () => {
      const result1 = READ_NOTIFICATION('id-1');
      const result2 = READ_NOTIFICATION('id-2');
      expect(result1.variables.id).toBe('id-1');
      expect(result2.variables.id).toBe('id-2');
    });
  });
});
