import { OrganizationData } from "../../DTO/request";
import { BaseApiResponse } from "../../DTO/response";
import { IApiRequestService, IOrganizationServices } from "../interfaces";

export class OrganizationService implements IOrganizationServices {
    
    private apiService: IApiRequestService;

    constructor(apiService: IApiRequestService) {
        this.apiService = apiService;
    }
    
    public async addOrganisation(data: OrganizationData): Promise<any> {
        const response: BaseApiResponse = await this.apiService.post<BaseApiResponse>('/organisation/byManager', data, true)
        return response
    }
    
}