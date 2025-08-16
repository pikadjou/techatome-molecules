import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

const isMinimizedKey = 'isMinimizedMenu';
@Injectable({
  providedIn: 'root',
})
export class CamSharedMenuService {
  public isMinimized$ = new BehaviorSubject<boolean>(
    localStorage.getItem(isMinimizedKey) === '1' ? true : false
  );

  constructor() {
    this.isMinimized$.subscribe((isMinimized) =>
      localStorage.setItem(isMinimizedKey, isMinimized ? '1' : '0')
    );
  }
}
