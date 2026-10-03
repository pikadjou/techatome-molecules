import { Observable } from 'rxjs';
import { AddressLocality } from '@ta/utils';
import { IInputBase, InputBase } from './base';
export interface IInputLocality<T> extends IInputBase<T> {
    /**
     * Code pays ISO alpha-2 dont on propose les localités. Chaque émission recharge
     * la liste ; un changement de pays vide le choix courant. `BE` à défaut.
     */
    country$?: Observable<string>;
    /** Plusieurs localités à la fois : la valeur est alors un tableau. */
    multiple?: boolean;
}
/**
 * Code postal + commune choisis dans la liste officielle du pays — jamais saisis
 * librement. C'est la brique « localité » de l'adresse, utilisable seule : une
 * zone de recherche, un périmètre d'intervention.
 *
 * Valeur : `AddressLocality` (ou `AddressLocality[]` si `multiple`), `null` tant
 * que rien n'est choisi.
 */
export declare class InputLocality<T = AddressLocality | AddressLocality[]> extends InputBase<T> {
    controlType: string;
    country$: Observable<string> | null;
    multiple: boolean;
    constructor(options?: IInputLocality<T>);
    /** Identifiant d'une localité dans une liste de choix : le couple code postal + commune. */
    static localityId(locality: Pick<AddressLocality, 'city' | 'zipCode'>): string;
}
