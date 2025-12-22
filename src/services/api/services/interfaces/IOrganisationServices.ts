import { OrganizationData } from "../../DTO/request";
import { OrganisationInvitationResponse } from "../../DTO/response";

export interface IOrganizationServices {
    addOrganisation(data: OrganizationData): Promise<OrganisationInvitationResponse>
}