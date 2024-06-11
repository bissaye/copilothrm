export interface UserAuthData {
    username : string,
    password : string
}

export interface UserSignupData {
  pays: string,
  nom: string,
  prenom: string,
  sexe: string,
  dateNais: string,
  lieuNais: string,
  email: string,
  password: string,
  telephone: string,
  rue: string,
  zipCode: string,
  ville: string,
  familyContactPhone?: string,
  familyContactQualite?: string,
  raisonSociale: string,
  siret: string,
  industrie: string,
  organisationEmail: string,
  organisationPhone: string,
  nomDomaine: string,
  tailleEntreprise: string,
  organisationPays: string,
  organisationRue: string,
  organisationVille: string,
  trigram?: string,
  organisationZipCode: string,
  cpassword: string,
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