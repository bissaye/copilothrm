import { InvitedUserSignupDatas } from "../../DTO/request";
import { StaffOrganisationResponse } from "../../DTO/response/staff";

export interface IStaffService {
    getOrganisations(): Promise<StaffOrganisationResponse>
    joinOrganisation(token: string): Promise<any>
    addNewUserToOrganisation(data: InvitedUserSignupDatas): Promise<any>
}