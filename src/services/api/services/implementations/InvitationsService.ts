import { StaffInvitation } from "../../DTO/request";
import { BaseApiResponse } from "../../DTO/response";
import { IApiRequestService } from "../interfaces";
import { IInvitationServices } from "../interfaces/IInvitationServices";

export class InvitationService implements IInvitationServices {
    
    private apiService: IApiRequestService;

    constructor(apiService: IApiRequestService) {
        this.apiService = apiService;
    }
    
    async getAllInvitations(orgId: string): Promise<any> {
        const response: any = await this.apiService.get<any>(`/invitation/organisation/${orgId}`, true)
        return response;
    }
    async sendInvitation(data: StaffInvitation): Promise<BaseApiResponse> {
        const response: BaseApiResponse = await this.apiService.post<BaseApiResponse>('/invitation/', data, true)
        return response
    }
    
}