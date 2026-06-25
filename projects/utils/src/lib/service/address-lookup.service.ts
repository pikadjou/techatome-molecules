import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable, catchError, map, of, shareReplay } from 'rxjs';

/** Localité (code postal + commune) résolue par le service de recherche d'adresse. */
export interface AddressLocality {
  /** Nom de la commune / localité (ex. "Bruxelles"). */
  city: string;
  /** Code pays ISO alpha-2 (ex. "BE"). */
  country: string;
  /** Latitude du centre de la localité, si disponible. */
  latitude: number | null;
  /** Longitude du centre de la localité, si disponible. */
  longitude: number | null;
  /** Code postal (ex. "1000"). */
  zipCode: string;
}

interface OdsPostalRecord {
  latitude?: number;
  longitude?: number;
  place_name?: string;
  postal_code?: string;
}

/**
 * Récupère l'intégralité des codes postaux / communes d'un pays.
 *
 * Source : dataset GeoNames `geonames-postal-code` servi par l'API publique
 * OpenDataSoft (aucune clé requise). L'endpoint `/exports/json` renvoie tous
 * les enregistrements filtrés en une seule requête ; la recherche se fait
 * ensuite côté client. Les résultats sont mis en cache par pays.
 */
@Injectable({ providedIn: 'root' })
export class TaAddressLookupService {
  private readonly _http = inject(HttpClient);
  private readonly _baseUrl =
    'https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-postal-code/exports/json';
  private readonly _cache = new Map<string, Observable<AddressLocality[]>>();

  /**
   * Renvoie tous les codes postaux / communes du pays donné, triés par code
   * postal puis par nom. Renvoie une liste vide si le pays est inconnu ou en
   * cas d'erreur réseau (le consommateur peut alors basculer en saisie libre).
   *
   * @param country Code pays ISO alpha-2 (ex. "BE").
   */
  public getCountryPostalCodes(country: string | null | undefined): Observable<AddressLocality[]> {
    const code = country?.trim().toUpperCase();
    if (!code) {
      return of([]);
    }
    const cached = this._cache.get(code);
    if (cached) {
      return cached;
    }
    const request = this._http
      .get<OdsPostalRecord[]>(this._baseUrl, {
        params: {
          select: 'postal_code,place_name',
          where: `country_code="${code}"`,
        },
      })
      .pipe(
        map(records => this._mapRecords(records, code)),
        catchError(() => of([])),
        shareReplay(1)
      );
    this._cache.set(code, request);
    return request;
  }

  private _mapRecords(records: OdsPostalRecord[], country: string): AddressLocality[] {
    const localities = (records ?? [])
      .filter(record => !!record.postal_code && !!record.place_name)
      .map<AddressLocality>(record => ({
        city: record.place_name ?? '',
        country,
        latitude: record.latitude ?? null,
        longitude: record.longitude ?? null,
        zipCode: record.postal_code ?? '',
      }));

    // Déduplication sur le couple code postal + commune.
    const seen = new Set<string>();
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
}
