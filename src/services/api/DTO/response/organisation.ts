import { BaseApiResponse } from "./baseResponses"

export interface Invitation {
    inviteId: string,
    departementId?: string,
    nomDepartement?: string,
    organisationId?: string,
    nomOrganisation?: string,
    senderId?: string,
    senderName: string,
    objetInvite?: string,
    message?: string,
    civilite?: string,
    nomComplet?: string,
    emailDestinataire: string,
    activationLink?: string,
    dateEnvoi: string,
    dateReponse?: string,
    dateExpiration?: string,
    dateAnnulation?: string,
    nbRelances?: number,
    status?: string,
    nomStatus: string
}

export interface OrganisationInvitation {
    data: Invitation[],
    totalPage: number,
    numberOfElements: number,
    totalElements: number,
    pageNumber: number
}

export interface OrganisationInvitationResponse extends BaseApiResponse {
    content: OrganisationInvitation
}