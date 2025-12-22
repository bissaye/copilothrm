import { StaffInvitation } from "../../DTO/request"
import { BaseApiResponse, CheckInvitationValidityResponse, OrganisationInvitationResponse } from "../../DTO/response"

export interface IInvitationServices {
    getAllInvitations(orgId: string, pageNumber: number, size: number): Promise<OrganisationInvitationResponse>
    sendInvitation(data: StaffInvitation): Promise<BaseApiResponse>
    checkInvitationValidity(token: string): Promise<CheckInvitationValidityResponse>
    resendInvitation(invitationId: string): Promise<BaseApiResponse>
    editInvitation(invitationId: string, data: StaffInvitation): Promise<BaseApiResponse>
    cancelInvitation(invitationId: string): Promise<BaseApiResponse>
}