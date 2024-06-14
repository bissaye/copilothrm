export interface ChangeUserPasswordData {
    lastPassword: string,
    newPassword: string
}

export interface UpdateUserData {
    country: string,
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

export interface ActivateUserData {
    userId: string,
    validationCode: string
}