import { JoinOrganisation } from "../../DTO/request";

export interface IStaffService {
    joinOrganisation(data: JoinOrganisation): Promise<any>
}