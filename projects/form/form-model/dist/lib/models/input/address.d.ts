import { IInputBase, InputBase } from './base';
export declare enum EAddressValues {
    city = "city",
    country = "country",
    floor = "floor",
    latitude = "latitude",
    longitude = "longitude",
    number = "number",
    placeId = "placeId",
    street = "street",
    zipCode = "zipCode"
}
export interface IAddressValue {
    city: string | null;
    country: string | null;
    floor: string | null;
    latitude: number | null;
    longitude: number | null;
    number: string | null;
    placeId: string | null;
    street: string | null;
    zipCode: string | null;
}
/**
 * Adresse dont toutes les parties postales sont renseignées.
 *
 * `floor` reste facultatif — un immeuble n'en a pas toujours — et les repères
 * géographiques ne participent pas à l'acheminement.
 */
export type IPostalAddress = Partial<IAddressValue> & {
    city: string;
    country: string;
    number: string;
    street: string;
    zipCode: string;
};
export interface IInputAddress extends IInputBase<Partial<IAddressValue>> {
    /** Codes pays ISO alpha-2 à mettre en évidence en tête de liste (ex. ['BE', 'FR']). */
    priorityCountries?: string[];
}
export declare class InputAddress extends InputBase<Partial<IAddressValue>> {
    controlType: string;
    priorityCountries: string[];
    constructor(options?: IInputAddress);
    /**
     * Valeur brute du formulaire → adresse normalisée.
     *
     * Les chaînes sont détourées : une recherche Google ou une saisie manuelle
     * laisse volontiers une espace en tête ou en fin, et chaque consommateur
     * refaisait le travail de son côté. Le reste passe tel quel — coordonnées et
     * `placeId` compris, à charge de l'appelant de ne transmettre que ce que son
     * API accepte.
     */
    static formatAddressForm(data: any): {
        city: any;
        country: any;
        floor: any;
        number: any;
        placeId: any;
        street: any;
        zipCode: any;
    } | null;
    /**
     * L'adresse porte-t-elle de quoi écrire une enveloppe ?
     *
     * `Validators.required` posé sur le champ ne garantit que la présence d'une
     * valeur, pas celle de ses parties : une recherche abandonnée en cours de
     * route rend une adresse partielle, qu'une API postale rejettera. `floor`
     * reste facultatif — un immeuble n'en a pas toujours.
     */
    static isComplete(address: Partial<IAddressValue> | null | undefined): address is IPostalAddress;
    private static _trim;
}
