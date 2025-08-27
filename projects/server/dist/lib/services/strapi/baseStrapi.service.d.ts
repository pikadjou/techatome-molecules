import { CamBaseService } from '../server/baseService';
import { CamStrapiService } from './strapi.service';
export declare abstract class CamBaseStrapiService extends CamBaseService {
    protected _strapiService: CamStrapiService;
}
