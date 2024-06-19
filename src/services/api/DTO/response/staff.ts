import { DeviseMonetaire } from "./auth"
import { BaseApiResponse } from "./baseResponses"

export interface Staff {
    staffId: string,
    user: StaffUser,
    country: StaffCountry,
    matricule: string,
    nom: string,
    prenom: string,
    sexe: string,
    dateNaissance: string,
    lieuNaissance: string,
    email: string,
    mobilePhone: string,
    adresseRue: string,
    adresseZipCode: string,
    adresseVille: string,
    familyContactPhone: string,
    familyContactQuality: string
}

export interface StaffOrganisation {
    organisationId: string,
    raisonSociale: string,
    email: string,
    adresseRue: string,
    adresseZipCode: string,
    adresseVille: string,
    country: string,
    phone: string,
    nomDomaine: string,
    noSiret: string,
    trigam: string,
    basePath: string,
    industrie: string,
    templateFichePaie: string,
    nbreCollaborateurs: number
}

export interface StaffOrganisationContent {
    organisation: StaffOrganisation,
    dateAdhesion: string,
    dateFin: string,
    superAdmin: boolean,
    admin: boolean
}

export interface StaffUser {
    userId: string,
    username: string,
    derniereconnexion: string,
    staff: boolean,
    active: boolean,
    superAdmin: boolean
}

export interface StaffCountry {
    countryId: string,
    code: string,
    libelle: string,
    deviseMonetaire: DeviseMonetaire,
    prefixPhone: string,
    nbreJoursTravailles: number
}

export interface StaffResponse extends BaseApiResponse {
    content: Staff
}

export interface StaffOrganisationResponse extends BaseApiResponse {
    content: StaffOrganisationContent[]
}