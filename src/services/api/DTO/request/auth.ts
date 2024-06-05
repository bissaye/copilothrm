export interface UserAuthData {
    username : string,
    password : string
}

export interface UserSignupData {
    nom: string,
    prenom: string,
    lieuNais: string,
    dateNais: string,
    telephone: string,
    pays: string,
    ville: string,
    userPostcode: string,
    rue: string,
    sexe: string,
    email: string,
    password: string,
    confirmPassword: string,
    raisonSociale: string,
    siret: string,
    industrie: string,
    organisationEmail: string,
    organisationPhone: string,
    organisationRue: string,
    organisationPays: string,
    organisationVille: string,
    orgPostcode: string,
    orgLogo?: File | null
}

export interface refreshData {
    refreshToken : string
}

export interface InvitedUserSignupDatas {
    nom: string,
    prenom: string,
    lieuNais: string,
    dateNais: string,
    telephone: string,
    pays: string,
    ville: string,
    userPostcode: string,
    rue: string,
    sexe: string,
    email: string,
    password: string,
    confirmPassword: string,
}