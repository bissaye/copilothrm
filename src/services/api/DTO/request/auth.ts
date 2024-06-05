export interface UserAuthData {
    username : string,
    password : string
}

export interface UserSignupData {
    surname: string,
    firstname: string,
    birthplace: string,
    birthdate: string,
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

export interface refreshData {
    refreshToken : string
}

export interface InvitedUserSignupDatas {
    surname: string,
    firstname: string,
    birthplace: string,
    birthdate: string,
    userPhone: string,
    userCountry: string,
    userCity: string,
    userPostcode: string,
    userAddress: string,
    gender: string,
    email: string,
    password: string,
    confirmPassword: string,
}