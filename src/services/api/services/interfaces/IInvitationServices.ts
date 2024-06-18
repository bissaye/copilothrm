import { StaffInvitation } from "../../DTO/request"
import { BaseApiResponse } from "../../DTO/response"

export interface IInvitationServices {
    getAllInvitations(orgId: string): Promise<any>
    sendInvitation(data: StaffInvitation): Promise<BaseApiResponse>
}