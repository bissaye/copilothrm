import { InvitedUserSignupDatas } from "../../DTO/request";
import { BaseApiResponse } from "../../DTO/response";
import { StaffOrganisationResponse } from "../../DTO/response/staff";
import { IApiRequestService, IStaffService } from "../interfaces";

export class StaffServices implements IStaffService {

    private apiService: IApiRequestService;

    constructor(apiService: IApiRequestService) {
        this.apiService = apiService;
    }
    public async getOrganisations(): Promise<StaffOrganisationResponse> {
        const response: StaffOrganisationResponse = await this.apiService.get<StaffOrganisationResponse>('/staff/organisations', true)
        return response;
    }
    
    public async joinOrganisation(token: string): Promise<any> {
        const response: BaseApiResponse = await this.apiService.post<BaseApiResponse>(`/staff/join/${token}`, {}, true)
        return response;
    }

    public async addNewUserToOrganisation(data: InvitedUserSignupDatas): Promise<any> {
        const response: BaseApiResponse = await this.apiService.post<BaseApiResponse>(`/staff/`, data)
        return response;
    }
    
}