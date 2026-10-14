import { Injectable } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

import { BehaviorSubject } from "rxjs";

const isMinimizedKey = "isMinimizedMenu";

@Injectable({
  providedIn: "root",
})
export class TaSharedMenuService {
  public isMinimized$ = new BehaviorSubject<boolean>(localStorage.getItem(isMinimizedKey) === "1");

  constructor() {
    this.isMinimized$
      .pipe(takeUntilDestroyed())
      .subscribe((isMinimized) => localStorage.setItem(isMinimizedKey, isMinimized ? "1" : "0"));
  }
}
