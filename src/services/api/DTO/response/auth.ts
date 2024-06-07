
import { BaseApiResponse} from "./baseResponses";

export interface UserData {
    userId: string;
    username: string;
    derniereconnexion: string; 
    active: boolean;
    superAdmin: boolean;
    organisations: UserOrganisation[]
    staff: Staff
}

export interface UserOrganisation {
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
    templateFichePaie: string
}

export interface Staff {
    staffId: string,
    user: {
        userId: string,
        username: string,
        derniereconnexion: string,
        active: boolean,
        superAdmin: boolean
    },
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
