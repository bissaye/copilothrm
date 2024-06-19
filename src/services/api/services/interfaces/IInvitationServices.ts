import { StaffInvitation } from "../../DTO/request"
import { BaseApiResponse, OrganisationInvitationResponse } from "../../DTO/response"

export interface IInvitationServices {
    getAllInvitations(orgId: string, pageNumber: number, size: number): Promise<OrganisationInvitationResponse>
    sendInvitation(data: StaffInvitation): Promise<BaseApiResponse>
}