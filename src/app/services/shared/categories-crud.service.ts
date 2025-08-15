import { Injectable } from '@angular/core';
import { BaseCrudService } from './base-crud.service';
import { Category } from '../categories/dto/category';
import { GraphMutationPayload } from '@ta/server';
import { ADD_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY } from '../categories/mutations';
import { gql } from 'apollo-angular';
import { categoryProps } from '../categories/dto/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesCrudService extends BaseCrudService<Category> {
  protected entityName = 'Category';
  protected entityNamePlural = 'Categories';

  getCreateMutation(data: Partial<Category>): GraphMutationPayload {
    return ADD_CATEGORY(data);
  }

  getUpdateMutation(id: string, data: Partial<Category>): GraphMutationPayload {
    return UPDATE_CATEGORY(id, data);
  }

  getDeleteMutation(id: string): GraphMutationPayload {
    return DELETE_CATEGORY(id);
  }

  getFetchQuery(id: string): GraphMutationPayload {
    return {
      mutation: gql`
        query GetCategory($documentId: ID!) {
          category(documentId: $documentId) {
            ${categoryProps.get('documentId')}
          }
        }
      `,
      variables: { documentId: id }
    };
  }

  getFetchAllQuery(): GraphMutationPayload {
    return {
      mutation: gql`
        query GetAllCategories {
          categories {
            ${categoryProps.get('documentId')}
          }
        }
      `,
      variables: {}
    };
  }

  // Méthodes spécifiques aux catégories
  fetchSubCategories$(parentId: string) {
    return this._strapiService.query$<Category[]>({
      mutation: gql`
        query GetSubCategories($parentId: ID!) {
          categories(filters: { parent: { documentId: { eq: $parentId } } }) {
            ${categoryProps.get('documentId')}
          }
        }
      `,
      variables: { parentId }
    }, 'categories');
  }
}