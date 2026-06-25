import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
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
/**
 * Récupère l'intégralité des codes postaux / communes d'un pays.
 *
 * Source : dataset GeoNames `geonames-postal-code` servi par l'API publique
 * OpenDataSoft (aucune clé requise). L'endpoint `/exports/json` renvoie tous
 * les enregistrements filtrés en une seule requête ; la recherche se fait
 * ensuite côté client. Les résultats sont mis en cache par pays.
 */
export declare class TaAddressLookupService {
    private readonly _http;
    private readonly _baseUrl;
    private readonly _cache;
    /**
     * Renvoie tous les codes postaux / communes du pays donné, triés par code
     * postal puis par nom. Renvoie une liste vide si le pays est inconnu ou en
     * cas d'erreur réseau (le consommateur peut alors basculer en saisie libre).
     *
     * @param country Code pays ISO alpha-2 (ex. "BE").
     */
    getCountryPostalCodes(country: string | null | undefined): Observable<AddressLocality[]>;
    private _mapRecords;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaAddressLookupService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TaAddressLookupService>;
}
