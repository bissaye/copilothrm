import { JoinOrganisation } from "../../DTO/request";
import { StaffOrganisationResponse } from "../../DTO/response/staff";

export interface IStaffService {
    getOrganisations(): Promise<StaffOrganisationResponse>
    joinOrganisation(data: JoinOrganisation): Promise<any>
}