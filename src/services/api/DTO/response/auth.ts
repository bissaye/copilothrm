
import { BaseApiResponse} from "./baseResponses";

export interface UserData {
    userId: string;
    username: string;
    derniereconnexion: string; 
    active: boolean;
    superAdmin: boolean;
    organisations: StaffOrganisation[]
    staff: Staff
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
    familyContactQuality: string,
    userId: string
}

export interface DeviseMonetaire {
    deviseId: string,
    libelle: string,
    code: string,
    symbole: string
}

export interface StaffUser {
    userId: string,
    username: string,
    derniereconnexion: string,
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

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    user: UserData;
}

export interface UserAuthResponse extends BaseApiResponse {
    content : AuthResponse
}

export interface UserSignupResponse extends BaseApiResponse {
    content : UserData
}

export interface InvitedUserSignupResponse extends BaseApiResponse {
    content: Staff
}

export interface StaffResponse extends BaseApiResponse {
    content: Staff
}
