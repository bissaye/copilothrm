
import { BaseApiResponse} from "./baseResponses";
import { Staff, StaffOrganisation } from "./staff";

export interface UserData {
    accessToken: string,
    refreshToken: string,
    organisations: StaffOrganisation[]
    staff: Staff
}

export interface DeviseMonetaire {
    deviseId: string,
    libelle: string,
    code: string,
    symbole: string
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