import { Injectable } from '@angular/core';
import { HandleComplexRequest } from '@ta/server';
import * as i0 from "@angular/core";
export class TaGridSessionService {
    constructor() {
        this._filterData = new HandleComplexRequest();
        this._openForms = new Set();
    }
    // `update` ignore une clé inconnue et fusionnerait deux tableaux en objet : on remplace.
    setFilter(key, filter) {
        if (this._filterData.get(key)) {
            this._filterData.update(key, filter, false);
        }
        else {
            this._filterData.add(key, filter);
        }
    }
    getFilter(key) {
        return this._filterData.get(key);
    }
    clearFilter(key) {
        this.setFilter(key, []);
    }
    isFormOpen(key) {
        return this._openForms.has(key);
    }
    setFormOpen(key, open) {
        if (open) {
            this._openForms.add(key);
        }
        else {
            this._openForms.delete(key);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridSessionService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridSessionService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGridSessionService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1zZXNzaW9uLnNlcnZpY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9mZWF0dXJlcy9ncmlkL3NlcnZpY2VzL2dyaWQtc2Vzc2lvbi5zZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLFlBQVksQ0FBQzs7QUFPbEQsTUFBTSxPQUFPLG9CQUFvQjtJQUhqQztRQUlVLGdCQUFXLEdBQUcsSUFBSSxvQkFBb0IsRUFBWSxDQUFDO1FBQ25ELGVBQVUsR0FBRyxJQUFJLEdBQUcsRUFBVSxDQUFDO0tBNkJ4QztJQTNCQyx5RkFBeUY7SUFDbEYsU0FBUyxDQUFDLEdBQVcsRUFBRSxNQUFnQjtRQUM1QyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM5QyxDQUFDO2FBQU0sQ0FBQztZQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNwQyxDQUFDO0lBQ0gsQ0FBQztJQUNNLFNBQVMsQ0FBQyxHQUFXO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVNLFdBQVcsQ0FBQyxHQUFXO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFTSxVQUFVLENBQUMsR0FBVztRQUMzQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSxXQUFXLENBQUMsR0FBVyxFQUFFLElBQWE7UUFDM0MsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUNULElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsQ0FBQztJQUNILENBQUM7K0dBOUJVLG9CQUFvQjttSEFBcEIsb0JBQW9CLGNBRm5CLE1BQU07OzRGQUVQLG9CQUFvQjtrQkFIaEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEhhbmRsZUNvbXBsZXhSZXF1ZXN0IH0gZnJvbSAnQHRhL3NlcnZlcic7XG5cbmltcG9ydCB7IEZpbHRlciB9IGZyb20gJy4uL21vZGVscy90eXBlcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBUYUdyaWRTZXNzaW9uU2VydmljZSB7XG4gIHByaXZhdGUgX2ZpbHRlckRhdGEgPSBuZXcgSGFuZGxlQ29tcGxleFJlcXVlc3Q8RmlsdGVyW10+KCk7XG4gIHByaXZhdGUgX29wZW5Gb3JtcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gIC8vIGB1cGRhdGVgIGlnbm9yZSB1bmUgY2zDqSBpbmNvbm51ZSBldCBmdXNpb25uZXJhaXQgZGV1eCB0YWJsZWF1eCBlbiBvYmpldCA6IG9uIHJlbXBsYWNlLlxuICBwdWJsaWMgc2V0RmlsdGVyKGtleTogc3RyaW5nLCBmaWx0ZXI6IEZpbHRlcltdKSB7XG4gICAgaWYgKHRoaXMuX2ZpbHRlckRhdGEuZ2V0KGtleSkpIHtcbiAgICAgIHRoaXMuX2ZpbHRlckRhdGEudXBkYXRlKGtleSwgZmlsdGVyLCBmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2ZpbHRlckRhdGEuYWRkKGtleSwgZmlsdGVyKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGdldEZpbHRlcihrZXk6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl9maWx0ZXJEYXRhLmdldChrZXkpO1xuICB9XG5cbiAgcHVibGljIGNsZWFyRmlsdGVyKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zZXRGaWx0ZXIoa2V5LCBbXSk7XG4gIH1cblxuICBwdWJsaWMgaXNGb3JtT3BlbihrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9vcGVuRm9ybXMuaGFzKGtleSk7XG4gIH1cblxuICBwdWJsaWMgc2V0Rm9ybU9wZW4oa2V5OiBzdHJpbmcsIG9wZW46IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAob3Blbikge1xuICAgICAgdGhpcy5fb3BlbkZvcm1zLmFkZChrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9vcGVuRm9ybXMuZGVsZXRlKGtleSk7XG4gICAgfVxuICB9XG59XG4iXX0=