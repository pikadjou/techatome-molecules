import { TestBed } from '@angular/core/testing';

import { TaServerErrorService } from './error.service';

describe('TaServerErrorService', () => {
  let service: TaServerErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaServerErrorService],
    });
    service = TestBed.inject(TaServerErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with an empty notifications signal', () => {
    expect(service.notifications()).toEqual([]);
  });

  describe('addError', () => {
    it('should add an error to notifications', () => {
      const mockQuery = {
        query: {
          kind: 'Document',
          definitions: [
            {
              kind: 'OperationDefinition',
              operation: 'query',
              name: { kind: 'Name', value: 'TestQuery' },
              selectionSet: {
                kind: 'SelectionSet',
                selections: [],
              },
            },
          ],
        },
        variables: { id: '1' },
      };

      const mockError = {
        message: 'Test error',
        graphQLErrors: [],
        networkError: {
          error: {
            errors: [{ message: 'Network error detail' }],
          },
        },
        extraInfo: undefined,
        name: 'ApolloError',
        clientErrors: [],
      } as any;

      service.addError(mockQuery as any, mockError);
      expect(service.notifications().length).toBe(1);
      expect(service.notifications()[0].variables).toEqual({ id: '1' });
      expect(service.notifications()[0].error).toBe(mockError);
    });
  });
});
