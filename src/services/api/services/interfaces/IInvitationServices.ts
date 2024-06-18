import { StaffInvitation } from "../../DTO/request"
import { BaseApiResponse } from "../../DTO/response"

export interface IInvitationServices {
    getAllInvitations(orgId: string, pageNumber: number, size: number): Promise<any>
    sendInvitation(data: StaffInvitation): Promise<BaseApiResponse>
}