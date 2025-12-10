import { TaBaseService } from "../server/baseService";
import { TaStrapiService } from "./strapi.service";
export declare abstract class TaBaseStrapiService extends TaBaseService {
    protected _strapiService: TaStrapiService;
}
