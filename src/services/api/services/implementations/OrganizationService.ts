import { OrganizationData } from "../../DTO/request";
import { OrganisationInvitationResponse } from "../../DTO/response";
import { IApiRequestService, IOrganizationServices } from "../interfaces";

export class OrganizationService implements IOrganizationServices {
    
    private apiService: IApiRequestService;

    constructor(apiService: IApiRequestService) {
        this.apiService = apiService;
    }
    
    public async addOrganisation(data: OrganizationData): Promise<OrganisationInvitationResponse> {
        const response: OrganisationInvitationResponse = await this.apiService.post<OrganisationInvitationResponse>('/organisation/byManager', data, true)
        return response
    }
    
}