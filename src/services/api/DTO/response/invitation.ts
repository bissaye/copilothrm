import { BaseApiResponse } from "./baseResponses";

export interface CheckInvitationValidityResponseData {
    idOrganisation: string,
    nomOrganisation: string,
    idDepartement?: string,
    nomDepartement?: string,
    status: number,
    nomStatus: string,
    email: string,
    nomComplet: string
}

export interface CheckInvitationValidityResponse extends BaseApiResponse {
    content: CheckInvitationValidityResponseData
}