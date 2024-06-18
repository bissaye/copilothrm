import { OrganizationData } from "../../DTO/request";

export interface IOrganizationServices {
    addOrganisation(data: OrganizationData): Promise<any>
}