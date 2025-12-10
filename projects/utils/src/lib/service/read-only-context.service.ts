import { Injectable } from "@angular/core";

import { BehaviorSubject } from "rxjs";

@Injectable()
export class ReadOnlyContextService {
  private readonly _readonly$ = new BehaviorSubject<boolean>(false);
  readonly isReadOnly$ = this._readonly$.asObservable();

  setReadonly(value: boolean) {
    this._readonly$.next(value);
  }
}
