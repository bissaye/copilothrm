import { StaffInvitation } from "../../DTO/request";
import { BaseApiResponse, CheckInvitationValidityResponse, OrganisationInvitationResponse } from "../../DTO/response";
import { IApiRequestService } from "../interfaces";
import { IInvitationServices } from "../interfaces/IInvitationServices";

export class InvitationService implements IInvitationServices {
    
    private apiService: IApiRequestService;

    constructor(apiService: IApiRequestService) {
        this.apiService = apiService;
    }
    
    async getAllInvitations(orgId: string, pageNumber: number, size: number): Promise<OrganisationInvitationResponse> {
        const response: OrganisationInvitationResponse = await this.apiService.get<OrganisationInvitationResponse>(`/invitation/organisation/${orgId}?pageNumber=${pageNumber}&size=${size}`, true)
        return response;
    }
    async sendInvitation(data: StaffInvitation, ): Promise<BaseApiResponse> {
        const response: BaseApiResponse = await this.apiService.post<BaseApiResponse>('/invitation/', data, true)
        return response
    }
    
    async checkInvitationValidity(token: string): Promise<CheckInvitationValidityResponse> {
        const response: CheckInvitationValidityResponse = await this.apiService.get<CheckInvitationValidityResponse>(`/invitation/tokenValidity/${token}`)
        return response
    }
    
}