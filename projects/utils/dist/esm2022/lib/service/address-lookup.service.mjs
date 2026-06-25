import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, map, of, shareReplay } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Récupère l'intégralité des codes postaux / communes d'un pays.
 *
 * Source : dataset GeoNames `geonames-postal-code` servi par l'API publique
 * OpenDataSoft (aucune clé requise). L'endpoint `/exports/json` renvoie tous
 * les enregistrements filtrés en une seule requête ; la recherche se fait
 * ensuite côté client. Les résultats sont mis en cache par pays.
 */
export class TaAddressLookupService {
    constructor() {
        this._http = inject(HttpClient);
        this._baseUrl = 'https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-postal-code/exports/json';
        this._cache = new Map();
    }
    /**
     * Renvoie tous les codes postaux / communes du pays donné, triés par code
     * postal puis par nom. Renvoie une liste vide si le pays est inconnu ou en
     * cas d'erreur réseau (le consommateur peut alors basculer en saisie libre).
     *
     * @param country Code pays ISO alpha-2 (ex. "BE").
     */
    getCountryPostalCodes(country) {
        const code = country?.trim().toUpperCase();
        if (!code) {
            return of([]);
        }
        const cached = this._cache.get(code);
        if (cached) {
            return cached;
        }
        const request = this._http
            .get(this._baseUrl, {
            params: {
                select: 'postal_code,place_name',
                where: `country_code="${code}"`,
            },
        })
            .pipe(map(records => this._mapRecords(records, code)), catchError(() => of([])), shareReplay(1));
        this._cache.set(code, request);
        return request;
    }
    _mapRecords(records, country) {
        const localities = (records ?? [])
            .filter(record => !!record.postal_code && !!record.place_name)
            .map(record => ({
            city: record.place_name ?? '',
            country,
            latitude: record.latitude ?? null,
            longitude: record.longitude ?? null,
            zipCode: record.postal_code ?? '',
        }));
        // Déduplication sur le couple code postal + commune.
        const seen = new Set();
        const unique = localities.filter(locality => {
            const key = `${locality.zipCode}__${locality.city}`;
            if (seen.has(key)) {
                return false;
            }
            seen.add(key);
            return true;
        });
        unique.sort((a, b) => a.zipCode.localeCompare(b.zipCode) || a.city.localeCompare(b.city));
        return unique;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaAddressLookupService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaAddressLookupService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaAddressLookupService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1sb29rdXAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvc2VydmljZS9hZGRyZXNzLWxvb2t1cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQWMsVUFBVSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQXVCcEU7Ozs7Ozs7R0FPRztBQUVILE1BQU0sT0FBTyxzQkFBc0I7SUFEbkM7UUFFbUIsVUFBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzQixhQUFRLEdBQ3ZCLHFHQUFxRyxDQUFDO1FBQ3ZGLFdBQU0sR0FBRyxJQUFJLEdBQUcsRUFBeUMsQ0FBQztLQTJENUU7SUF6REM7Ozs7OztPQU1HO0lBQ0kscUJBQXFCLENBQUMsT0FBa0M7UUFDN0QsTUFBTSxJQUFJLEdBQUcsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNWLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hCLENBQUM7UUFDRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLE1BQU0sRUFBRSxDQUFDO1lBQ1gsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQztRQUNELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLO2FBQ3ZCLEdBQUcsQ0FBb0IsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNyQyxNQUFNLEVBQUU7Z0JBQ04sTUFBTSxFQUFFLHdCQUF3QjtnQkFDaEMsS0FBSyxFQUFFLGlCQUFpQixJQUFJLEdBQUc7YUFDaEM7U0FDRixDQUFDO2FBQ0QsSUFBSSxDQUNILEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQy9DLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDeEIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUNmLENBQUM7UUFDSixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDL0IsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVPLFdBQVcsQ0FBQyxPQUEwQixFQUFFLE9BQWU7UUFDN0QsTUFBTSxVQUFVLEdBQUcsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO2FBQy9CLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO2FBQzdELEdBQUcsQ0FBa0IsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQy9CLElBQUksRUFBRSxNQUFNLENBQUMsVUFBVSxJQUFJLEVBQUU7WUFDN0IsT0FBTztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUk7WUFDakMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTLElBQUksSUFBSTtZQUNuQyxPQUFPLEVBQUUsTUFBTSxDQUFDLFdBQVcsSUFBSSxFQUFFO1NBQ2xDLENBQUMsQ0FBQyxDQUFDO1FBRU4scURBQXFEO1FBQ3JELE1BQU0sSUFBSSxHQUFHLElBQUksR0FBRyxFQUFVLENBQUM7UUFDL0IsTUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUMxQyxNQUFNLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQyxPQUFPLEtBQUssUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3BELElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUNsQixPQUFPLEtBQUssQ0FBQztZQUNmLENBQUM7WUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDMUYsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzsrR0E5RFUsc0JBQXNCO21IQUF0QixzQkFBc0IsY0FEVCxNQUFNOzs0RkFDbkIsc0JBQXNCO2tCQURsQyxVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgY2F0Y2hFcnJvciwgbWFwLCBvZiwgc2hhcmVSZXBsYXkgfSBmcm9tICdyeGpzJztcblxuLyoqIExvY2FsaXTDqSAoY29kZSBwb3N0YWwgKyBjb21tdW5lKSByw6lzb2x1ZSBwYXIgbGUgc2VydmljZSBkZSByZWNoZXJjaGUgZCdhZHJlc3NlLiAqL1xuZXhwb3J0IGludGVyZmFjZSBBZGRyZXNzTG9jYWxpdHkge1xuICAvKiogTm9tIGRlIGxhIGNvbW11bmUgLyBsb2NhbGl0w6kgKGV4LiBcIkJydXhlbGxlc1wiKS4gKi9cbiAgY2l0eTogc3RyaW5nO1xuICAvKiogQ29kZSBwYXlzIElTTyBhbHBoYS0yIChleC4gXCJCRVwiKS4gKi9cbiAgY291bnRyeTogc3RyaW5nO1xuICAvKiogTGF0aXR1ZGUgZHUgY2VudHJlIGRlIGxhIGxvY2FsaXTDqSwgc2kgZGlzcG9uaWJsZS4gKi9cbiAgbGF0aXR1ZGU6IG51bWJlciB8IG51bGw7XG4gIC8qKiBMb25naXR1ZGUgZHUgY2VudHJlIGRlIGxhIGxvY2FsaXTDqSwgc2kgZGlzcG9uaWJsZS4gKi9cbiAgbG9uZ2l0dWRlOiBudW1iZXIgfCBudWxsO1xuICAvKiogQ29kZSBwb3N0YWwgKGV4LiBcIjEwMDBcIikuICovXG4gIHppcENvZGU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIE9kc1Bvc3RhbFJlY29yZCB7XG4gIGxhdGl0dWRlPzogbnVtYmVyO1xuICBsb25naXR1ZGU/OiBudW1iZXI7XG4gIHBsYWNlX25hbWU/OiBzdHJpbmc7XG4gIHBvc3RhbF9jb2RlPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIFLDqWN1cMOocmUgbCdpbnTDqWdyYWxpdMOpIGRlcyBjb2RlcyBwb3N0YXV4IC8gY29tbXVuZXMgZCd1biBwYXlzLlxuICpcbiAqIFNvdXJjZSA6IGRhdGFzZXQgR2VvTmFtZXMgYGdlb25hbWVzLXBvc3RhbC1jb2RlYCBzZXJ2aSBwYXIgbCdBUEkgcHVibGlxdWVcbiAqIE9wZW5EYXRhU29mdCAoYXVjdW5lIGNsw6kgcmVxdWlzZSkuIEwnZW5kcG9pbnQgYC9leHBvcnRzL2pzb25gIHJlbnZvaWUgdG91c1xuICogbGVzIGVucmVnaXN0cmVtZW50cyBmaWx0csOpcyBlbiB1bmUgc2V1bGUgcmVxdcOqdGUgOyBsYSByZWNoZXJjaGUgc2UgZmFpdFxuICogZW5zdWl0ZSBjw7R0w6kgY2xpZW50LiBMZXMgcsOpc3VsdGF0cyBzb250IG1pcyBlbiBjYWNoZSBwYXIgcGF5cy5cbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBUYUFkZHJlc3NMb29rdXBTZXJ2aWNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBfaHR0cCA9IGluamVjdChIdHRwQ2xpZW50KTtcbiAgcHJpdmF0ZSByZWFkb25seSBfYmFzZVVybCA9XG4gICAgJ2h0dHBzOi8vcHVibGljLm9wZW5kYXRhc29mdC5jb20vYXBpL2V4cGxvcmUvdjIuMS9jYXRhbG9nL2RhdGFzZXRzL2dlb25hbWVzLXBvc3RhbC1jb2RlL2V4cG9ydHMvanNvbic7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2NhY2hlID0gbmV3IE1hcDxzdHJpbmcsIE9ic2VydmFibGU8QWRkcmVzc0xvY2FsaXR5W10+PigpO1xuXG4gIC8qKlxuICAgKiBSZW52b2llIHRvdXMgbGVzIGNvZGVzIHBvc3RhdXggLyBjb21tdW5lcyBkdSBwYXlzIGRvbm7DqSwgdHJpw6lzIHBhciBjb2RlXG4gICAqIHBvc3RhbCBwdWlzIHBhciBub20uIFJlbnZvaWUgdW5lIGxpc3RlIHZpZGUgc2kgbGUgcGF5cyBlc3QgaW5jb25udSBvdSBlblxuICAgKiBjYXMgZCdlcnJldXIgcsOpc2VhdSAobGUgY29uc29tbWF0ZXVyIHBldXQgYWxvcnMgYmFzY3VsZXIgZW4gc2Fpc2llIGxpYnJlKS5cbiAgICpcbiAgICogQHBhcmFtIGNvdW50cnkgQ29kZSBwYXlzIElTTyBhbHBoYS0yIChleC4gXCJCRVwiKS5cbiAgICovXG4gIHB1YmxpYyBnZXRDb3VudHJ5UG9zdGFsQ29kZXMoY291bnRyeTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCk6IE9ic2VydmFibGU8QWRkcmVzc0xvY2FsaXR5W10+IHtcbiAgICBjb25zdCBjb2RlID0gY291bnRyeT8udHJpbSgpLnRvVXBwZXJDYXNlKCk7XG4gICAgaWYgKCFjb2RlKSB7XG4gICAgICByZXR1cm4gb2YoW10pO1xuICAgIH1cbiAgICBjb25zdCBjYWNoZWQgPSB0aGlzLl9jYWNoZS5nZXQoY29kZSk7XG4gICAgaWYgKGNhY2hlZCkge1xuICAgICAgcmV0dXJuIGNhY2hlZDtcbiAgICB9XG4gICAgY29uc3QgcmVxdWVzdCA9IHRoaXMuX2h0dHBcbiAgICAgIC5nZXQ8T2RzUG9zdGFsUmVjb3JkW10+KHRoaXMuX2Jhc2VVcmwsIHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgc2VsZWN0OiAncG9zdGFsX2NvZGUscGxhY2VfbmFtZScsXG4gICAgICAgICAgd2hlcmU6IGBjb3VudHJ5X2NvZGU9XCIke2NvZGV9XCJgLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAocmVjb3JkcyA9PiB0aGlzLl9tYXBSZWNvcmRzKHJlY29yZHMsIGNvZGUpKSxcbiAgICAgICAgY2F0Y2hFcnJvcigoKSA9PiBvZihbXSkpLFxuICAgICAgICBzaGFyZVJlcGxheSgxKVxuICAgICAgKTtcbiAgICB0aGlzLl9jYWNoZS5zZXQoY29kZSwgcmVxdWVzdCk7XG4gICAgcmV0dXJuIHJlcXVlc3Q7XG4gIH1cblxuICBwcml2YXRlIF9tYXBSZWNvcmRzKHJlY29yZHM6IE9kc1Bvc3RhbFJlY29yZFtdLCBjb3VudHJ5OiBzdHJpbmcpOiBBZGRyZXNzTG9jYWxpdHlbXSB7XG4gICAgY29uc3QgbG9jYWxpdGllcyA9IChyZWNvcmRzID8/IFtdKVxuICAgICAgLmZpbHRlcihyZWNvcmQgPT4gISFyZWNvcmQucG9zdGFsX2NvZGUgJiYgISFyZWNvcmQucGxhY2VfbmFtZSlcbiAgICAgIC5tYXA8QWRkcmVzc0xvY2FsaXR5PihyZWNvcmQgPT4gKHtcbiAgICAgICAgY2l0eTogcmVjb3JkLnBsYWNlX25hbWUgPz8gJycsXG4gICAgICAgIGNvdW50cnksXG4gICAgICAgIGxhdGl0dWRlOiByZWNvcmQubGF0aXR1ZGUgPz8gbnVsbCxcbiAgICAgICAgbG9uZ2l0dWRlOiByZWNvcmQubG9uZ2l0dWRlID8/IG51bGwsXG4gICAgICAgIHppcENvZGU6IHJlY29yZC5wb3N0YWxfY29kZSA/PyAnJyxcbiAgICAgIH0pKTtcblxuICAgIC8vIETDqWR1cGxpY2F0aW9uIHN1ciBsZSBjb3VwbGUgY29kZSBwb3N0YWwgKyBjb21tdW5lLlxuICAgIGNvbnN0IHNlZW4gPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBjb25zdCB1bmlxdWUgPSBsb2NhbGl0aWVzLmZpbHRlcihsb2NhbGl0eSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBgJHtsb2NhbGl0eS56aXBDb2RlfV9fJHtsb2NhbGl0eS5jaXR5fWA7XG4gICAgICBpZiAoc2Vlbi5oYXMoa2V5KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBzZWVuLmFkZChrZXkpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG5cbiAgICB1bmlxdWUuc29ydCgoYSwgYikgPT4gYS56aXBDb2RlLmxvY2FsZUNvbXBhcmUoYi56aXBDb2RlKSB8fCBhLmNpdHkubG9jYWxlQ29tcGFyZShiLmNpdHkpKTtcbiAgICByZXR1cm4gdW5pcXVlO1xuICB9XG59XG4iXX0=