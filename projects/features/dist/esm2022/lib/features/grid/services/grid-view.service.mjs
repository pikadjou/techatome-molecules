import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { TaBaseService } from '@ta/server';
import * as i0 from "@angular/core";
export const gridSearchFieldsName = 'search';
export class TaGridViewService extends TaBaseService {
    constructor() {
        super();
    }
    getData$(model, ajaxParam) {
        // const filterParams = () => {
        //   const searchField = ajaxParam.filter.filter(f => f.field === gridSearchFieldsName);
        //   const otherFields = ajaxParam.filter.filter(f => f.field !== gridSearchFieldsName);
        //   return [
        //     ...searchField.flatMap(f =>
        //       this._buildOrDomain(
        //         ajaxParam.colsMetaData.filter(c => c.isSearchField).map(f => f.name),
        //         f.value
        //       )
        //     ),
        //     ...otherFields.map(f => [f.field, f.type, f.value]),
        //   ];
        // };
        // const orderParams = ajaxParam.sort.map(s => `${s.field} ${s.dir}`).join(',') ?? '';
        // const groupBy = ajaxParam.groupBy;
        return of({
            data: [],
            last_page: 0,
            total: 0,
        });
        // return this._odooService.searchCount$(model, filterParams()).pipe(
        //   mergeMap(count =>
        //     this._odooService
        //       .searchRead$<T>(
        //         model,
        //         filterParams(),
        //         ajaxParam.colsMetaData.filter(col => !col.notDisplayable).map(col => col.name),
        //         {
        //           order: groupBy ? `${groupBy} asc ${orderParams ? ',' + orderParams : ''}` : orderParams,
        //           offset: (ajaxParam.page - 1) * ajaxParam.size,
        //           limit: ajaxParam.size,
        //         }
        //       )
        //       .pipe(
        //         filter(isNonNullable),
        //         map(data => {
        //           const mapping = ajaxParam.colsMetaData
        //             .filter(col => col.type === ParameterType.Relation)
        //             .map(col => ({ from: col.name, to: (<String>col.name).split('_')[0] }));
        //           if (!mapping || mapping.length === 0) {
        //             return data;
        //           }
        //           return data.map(entity =>
        //             this._handleJoinData(entity, mapping as unknown as Array<{ from?: keyof T; to: keyof T }>)
        //           );
        //         }),
        //         map(data => ({
        //           data: data,
        //           total: count,
        //           last_page: Math.ceil(count / ajaxParam.size),
        //         }))
        //       )
        //   )
        // );
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridViewService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridViewService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridViewService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC12aWV3LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2ZlYXR1cmVzL2dyaWQvc2VydmljZXMvZ3JpZC12aWV3LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXRDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxZQUFZLENBQUM7O0FBSTNDLE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHLFFBQVEsQ0FBQztBQUk3QyxNQUFNLE9BQU8saUJBQWtCLFNBQVEsYUFBYTtJQUNsRDtRQUNFLEtBQUssRUFBRSxDQUFDO0lBQ1YsQ0FBQztJQUVNLFFBQVEsQ0FBSSxLQUFhLEVBQUUsU0FBZ0M7UUFDaEUsK0JBQStCO1FBQy9CLHdGQUF3RjtRQUN4Rix3RkFBd0Y7UUFFeEYsYUFBYTtRQUNiLGtDQUFrQztRQUNsQyw2QkFBNkI7UUFDN0IsZ0ZBQWdGO1FBQ2hGLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsU0FBUztRQUNULDJEQUEyRDtRQUMzRCxPQUFPO1FBQ1AsS0FBSztRQUVMLHNGQUFzRjtRQUN0RixxQ0FBcUM7UUFFckMsT0FBTyxFQUFFLENBQUM7WUFDUixJQUFJLEVBQUUsRUFBRTtZQUNSLFNBQVMsRUFBRSxDQUFDO1lBQ1osS0FBSyxFQUFFLENBQUM7U0FDVCxDQUFDLENBQUM7UUFDSCxxRUFBcUU7UUFDckUsc0JBQXNCO1FBQ3RCLHdCQUF3QjtRQUN4Qix5QkFBeUI7UUFDekIsaUJBQWlCO1FBQ2pCLDBCQUEwQjtRQUMxQiwwRkFBMEY7UUFDMUYsWUFBWTtRQUNaLHFHQUFxRztRQUNyRywyREFBMkQ7UUFDM0QsbUNBQW1DO1FBQ25DLFlBQVk7UUFDWixVQUFVO1FBQ1YsZUFBZTtRQUNmLGlDQUFpQztRQUNqQyx3QkFBd0I7UUFDeEIsbURBQW1EO1FBQ25ELGtFQUFrRTtRQUNsRSx1RkFBdUY7UUFFdkYsb0RBQW9EO1FBQ3BELDJCQUEyQjtRQUMzQixjQUFjO1FBQ2Qsc0NBQXNDO1FBQ3RDLHlHQUF5RztRQUN6RyxlQUFlO1FBQ2YsY0FBYztRQUNkLHlCQUF5QjtRQUN6Qix3QkFBd0I7UUFDeEIsMEJBQTBCO1FBQzFCLDBEQUEwRDtRQUMxRCxjQUFjO1FBQ2QsVUFBVTtRQUNWLE1BQU07UUFDTixLQUFLO0lBQ1AsQ0FBQzsrR0FoRVUsaUJBQWlCO21IQUFqQixpQkFBaUIsY0FGaEIsTUFBTTs7NEZBRVAsaUJBQWlCO2tCQUg3QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBUYUJhc2VTZXJ2aWNlIH0gZnJvbSAnQHRhL3NlcnZlcic7XHJcblxyXG5pbXBvcnQgeyBhamF4UmVxdWVzdEZ1bmNQYXJhbXMsIGFqYXhSZXNwb25zZSB9IGZyb20gJy4uL21vZGVscy90eXBlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgZ3JpZFNlYXJjaEZpZWxkc05hbWUgPSAnc2VhcmNoJztcclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhR3JpZFZpZXdTZXJ2aWNlIGV4dGVuZHMgVGFCYXNlU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldERhdGEkPFQ+KG1vZGVsOiBzdHJpbmcsIGFqYXhQYXJhbTogYWpheFJlcXVlc3RGdW5jUGFyYW1zKTogT2JzZXJ2YWJsZTxhamF4UmVzcG9uc2U8VD4+IHtcclxuICAgIC8vIGNvbnN0IGZpbHRlclBhcmFtcyA9ICgpID0+IHtcclxuICAgIC8vICAgY29uc3Qgc2VhcmNoRmllbGQgPSBhamF4UGFyYW0uZmlsdGVyLmZpbHRlcihmID0+IGYuZmllbGQgPT09IGdyaWRTZWFyY2hGaWVsZHNOYW1lKTtcclxuICAgIC8vICAgY29uc3Qgb3RoZXJGaWVsZHMgPSBhamF4UGFyYW0uZmlsdGVyLmZpbHRlcihmID0+IGYuZmllbGQgIT09IGdyaWRTZWFyY2hGaWVsZHNOYW1lKTtcclxuXHJcbiAgICAvLyAgIHJldHVybiBbXHJcbiAgICAvLyAgICAgLi4uc2VhcmNoRmllbGQuZmxhdE1hcChmID0+XHJcbiAgICAvLyAgICAgICB0aGlzLl9idWlsZE9yRG9tYWluKFxyXG4gICAgLy8gICAgICAgICBhamF4UGFyYW0uY29sc01ldGFEYXRhLmZpbHRlcihjID0+IGMuaXNTZWFyY2hGaWVsZCkubWFwKGYgPT4gZi5uYW1lKSxcclxuICAgIC8vICAgICAgICAgZi52YWx1ZVxyXG4gICAgLy8gICAgICAgKVxyXG4gICAgLy8gICAgICksXHJcbiAgICAvLyAgICAgLi4ub3RoZXJGaWVsZHMubWFwKGYgPT4gW2YuZmllbGQsIGYudHlwZSwgZi52YWx1ZV0pLFxyXG4gICAgLy8gICBdO1xyXG4gICAgLy8gfTtcclxuXHJcbiAgICAvLyBjb25zdCBvcmRlclBhcmFtcyA9IGFqYXhQYXJhbS5zb3J0Lm1hcChzID0+IGAke3MuZmllbGR9ICR7cy5kaXJ9YCkuam9pbignLCcpID8/ICcnO1xyXG4gICAgLy8gY29uc3QgZ3JvdXBCeSA9IGFqYXhQYXJhbS5ncm91cEJ5O1xyXG5cclxuICAgIHJldHVybiBvZih7XHJcbiAgICAgIGRhdGE6IFtdLFxyXG4gICAgICBsYXN0X3BhZ2U6IDAsXHJcbiAgICAgIHRvdGFsOiAwLFxyXG4gICAgfSk7XHJcbiAgICAvLyByZXR1cm4gdGhpcy5fb2Rvb1NlcnZpY2Uuc2VhcmNoQ291bnQkKG1vZGVsLCBmaWx0ZXJQYXJhbXMoKSkucGlwZShcclxuICAgIC8vICAgbWVyZ2VNYXAoY291bnQgPT5cclxuICAgIC8vICAgICB0aGlzLl9vZG9vU2VydmljZVxyXG4gICAgLy8gICAgICAgLnNlYXJjaFJlYWQkPFQ+KFxyXG4gICAgLy8gICAgICAgICBtb2RlbCxcclxuICAgIC8vICAgICAgICAgZmlsdGVyUGFyYW1zKCksXHJcbiAgICAvLyAgICAgICAgIGFqYXhQYXJhbS5jb2xzTWV0YURhdGEuZmlsdGVyKGNvbCA9PiAhY29sLm5vdERpc3BsYXlhYmxlKS5tYXAoY29sID0+IGNvbC5uYW1lKSxcclxuICAgIC8vICAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgIG9yZGVyOiBncm91cEJ5ID8gYCR7Z3JvdXBCeX0gYXNjICR7b3JkZXJQYXJhbXMgPyAnLCcgKyBvcmRlclBhcmFtcyA6ICcnfWAgOiBvcmRlclBhcmFtcyxcclxuICAgIC8vICAgICAgICAgICBvZmZzZXQ6IChhamF4UGFyYW0ucGFnZSAtIDEpICogYWpheFBhcmFtLnNpemUsXHJcbiAgICAvLyAgICAgICAgICAgbGltaXQ6IGFqYXhQYXJhbS5zaXplLFxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICApXHJcbiAgICAvLyAgICAgICAucGlwZShcclxuICAgIC8vICAgICAgICAgZmlsdGVyKGlzTm9uTnVsbGFibGUpLFxyXG4gICAgLy8gICAgICAgICBtYXAoZGF0YSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgY29uc3QgbWFwcGluZyA9IGFqYXhQYXJhbS5jb2xzTWV0YURhdGFcclxuICAgIC8vICAgICAgICAgICAgIC5maWx0ZXIoY29sID0+IGNvbC50eXBlID09PSBQYXJhbWV0ZXJUeXBlLlJlbGF0aW9uKVxyXG4gICAgLy8gICAgICAgICAgICAgLm1hcChjb2wgPT4gKHsgZnJvbTogY29sLm5hbWUsIHRvOiAoPFN0cmluZz5jb2wubmFtZSkuc3BsaXQoJ18nKVswXSB9KSk7XHJcblxyXG4gICAgLy8gICAgICAgICAgIGlmICghbWFwcGluZyB8fCBtYXBwaW5nLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAvLyAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgIHJldHVybiBkYXRhLm1hcChlbnRpdHkgPT5cclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuX2hhbmRsZUpvaW5EYXRhKGVudGl0eSwgbWFwcGluZyBhcyB1bmtub3duIGFzIEFycmF5PHsgZnJvbT86IGtleW9mIFQ7IHRvOiBrZXlvZiBUIH0+KVxyXG4gICAgLy8gICAgICAgICAgICk7XHJcbiAgICAvLyAgICAgICAgIH0pLFxyXG4gICAgLy8gICAgICAgICBtYXAoZGF0YSA9PiAoe1xyXG4gICAgLy8gICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAvLyAgICAgICAgICAgdG90YWw6IGNvdW50LFxyXG4gICAgLy8gICAgICAgICAgIGxhc3RfcGFnZTogTWF0aC5jZWlsKGNvdW50IC8gYWpheFBhcmFtLnNpemUpLFxyXG4gICAgLy8gICAgICAgICB9KSlcclxuICAgIC8vICAgICAgIClcclxuICAgIC8vICAgKVxyXG4gICAgLy8gKTtcclxuICB9XHJcblxyXG4gIC8vIHByaXZhdGUgX2J1aWxkT3JEb21haW4oZmllbGRzOiBzdHJpbmdbXSwgdmFsdWU6IHN0cmluZykge1xyXG4gIC8vICAgaWYgKGZpZWxkcy5sZW5ndGggPT09IDApIHJldHVybiBbXTtcclxuXHJcbiAgLy8gICByZXR1cm4gWy4uLmZpZWxkcy5zbGljZSgwLCAtMSkubWFwKF8gPT4gJ3wnKSwgLi4uZmllbGRzLm1hcChmaWVsZCA9PiBbZmllbGQsICdpbGlrZScsIHZhbHVlXSldO1xyXG4gIC8vIH1cclxufVxyXG4iXX0=