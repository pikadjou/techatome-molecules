import { Injectable } from '@angular/core';

import { filter, map, tap } from 'rxjs/operators';

import { BehaviorSubject, Observable } from 'rxjs';

import { CamBaseService, MappingApiType, Request } from '@camelot/server';

import { TranslatedEnumeration } from '../common/dto/translated-enumeration';
import { sortByTranslatedValue } from './translated-enumeration-helpers';

const apiRoutes: MappingApiType = {
  GetWontDoReasons: {
    type: 'GET',
    url: '{ApiUrl}/wontdoreason',
  },
  GetWorkerJustifications: {
    type: 'GET',
    url: '{ApiUrl}/workerjustifications',
  },
  GetIncidentTypes: {
    type: 'GET',
    url: '{ApiUrl}/incidenttypes',
  },
  GetAbandonReasons: {
    type: 'GET',
    url: '{ApiUrl}/abandonreasons',
  },
  GetFileTypes: {
    type: 'GET',
    url: '{ApiUrl}/FileTypes',
  },
};

@Injectable({
  providedIn: 'root',
})
export class CamEnumerationService extends CamBaseService {
  public getAbandonReasons$ = new BehaviorSubject<TranslatedEnumeration[]>([]);
  public wontDoReasons$ = new BehaviorSubject<TranslatedEnumeration[]>([]);
  public incidentTypes$ = new BehaviorSubject<TranslatedEnumeration[]>([]);
  public workerJustifications$ = new BehaviorSubject<TranslatedEnumeration[]>(
    []
  );

  private _getFileTypes$ = new BehaviorSubject<{
    [index: string]: TranslatedEnumeration[];
  }>({});

  constructor() {
    super(apiRoutes);
  }

  public fetchWontDoReasons$(): Observable<TranslatedEnumeration[]> {
    return this._serverService
      .request<TranslatedEnumeration[]>(
        new Request({ type: 'GetWontDoReasons', content: {}, cacheTime: 60 })
      )
      .pipe(
        filter((data) => !!data),
        tap((data) => {
          this.wontDoReasons$.next(data);
        })
      );
  }

  public fetchWorkerJustifications$(): Observable<TranslatedEnumeration[]> {
    return this._serverService
      .request<TranslatedEnumeration[]>(
        new Request({
          type: 'GetWorkerJustifications',
          content: {},
          cacheTime: 60,
        })
      )
      .pipe(
        filter((data) => !!data),
        tap((data) => {
          this.workerJustifications$.next(data);
        })
      );
  }

  public fetchIncidentTypes$(): Observable<TranslatedEnumeration[]> {
    return this._serverService
      .request<TranslatedEnumeration[]>(
        new Request({ type: 'GetIncidentTypes', content: {}, cacheTime: 60 })
      )
      .pipe(
        filter((data) => !!data),
        tap((data) => {
          this.incidentTypes$.next(data);
        })
      );
  }
  public fetchAbandonReasons(): Observable<TranslatedEnumeration[]> {
    return this._serverService
      .request<TranslatedEnumeration[]>(
        new Request({ type: 'GetAbandonReasons', cacheTime: -1 })
      )
      .pipe(
        filter((myData) => !!myData),
        map((reasons) => sortByTranslatedValue(reasons)),
        tap((reasons) => this.getAbandonReasons$.next(reasons))
      );
  }

  public getFileTypes = (id: number) => (fileTypeId: number) => {
    return this._getFileTypes$
      .getValue()
      [id].find((document) => document.id === fileTypeId);
  };

  public getFileTypes$ = (id: number): Observable<TranslatedEnumeration[]> =>
    this._getFileTypes$.pipe(
      map((data) => data[id]),
      filter((myData) => !!myData),
      map((fileTypes) => sortByTranslatedValue(fileTypes))
    );

  public fetchFileTypes(): Observable<TranslatedEnumeration[]> {
    return this._serverService
      .request<TranslatedEnumeration[]>(
        new Request({ type: 'GetFileTypes', cacheTime: -1 })
      )
      .pipe(
        filter((myData) => !!myData),
        map((fileTypes) => sortByTranslatedValue(fileTypes))
      );
  }
}
