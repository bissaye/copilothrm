export interface UserAuthData {
    email : string,
    passaword : string
}

export interface UserSignupData {
    surname: string,
    firstname: string,
    birthplace: string,
    birthdate: Date,
    userPhone: string,
    userCountry: string,
    userCity: string,
    userPostcode: string,
    userAddress: string,
    gender: string,
    email: string,
    password: string,
    confirmPassword: string,
    socialReason: string,
    siret: string,
    industry: string,
    orgAddress: string,
    orgCountry: string,
    orgCity: string,
    orgPostcode: string,
    orgLogo?: File | null
}