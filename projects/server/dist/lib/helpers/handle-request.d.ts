import { BehaviorSubject, Observable } from 'rxjs';
export declare class HandleComplexRequest<T> {
    data$: BehaviorSubject<{
        [index: string]: T;
    }>;
    constructor();
    fetch(id: string, subscriber: Observable<T>): Observable<T>;
    add(id: string, item: T): void;
    update(id: string, item: T, merge?: boolean): void;
    get(key: string): NonNullable<T> | null;
    get$(key: string): Observable<T>;
}
export declare class HandleSimpleRequest<T> {
    data$: BehaviorSubject<T | null>;
    constructor();
    fetch(subscriber: Observable<T | undefined | null>): Observable<T & {}>;
    get(): NonNullable<T> | null;
    get$(): Observable<T | null>;
}
